/**
 * Shokim Cloud Database & Store Management Engine
 * Powered by Google Cloud Firestore & Firebase Auth
 * Project: oval-bazaar-505723-j9
 */

const firebaseConfig = {
    apiKey: "AIzaSyDHpEwCNhlb1Nxu_RsYsjqf24ubdMI1J_Y",
    authDomain: "oval-bazaar-505723-j9.firebaseapp.com",
    projectId: "oval-bazaar-505723-j9",
    storageBucket: "oval-bazaar-505723-j9.firebasestorage.app",
    messagingSenderId: "732672749324",
    appId: "1:732672749324:web:139dc7e85b129d9e436329",
    measurementId: "G-65XTZEYSVJ"
};

// Initialize Firebase SDK
let fbApp = null;
let firestoreDb = null;
let fbAuth = null;

try {
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            fbApp = firebase.initializeApp(firebaseConfig);
        } else {
            fbApp = firebase.app();
        }
        firestoreDb = firebase.firestore();
        fbAuth = firebase.auth();
        console.log("✅ Shokim Cloud Firestore Database connected successfully!");
    }
} catch (e) {
    console.warn("Firebase initialization notice:", e);
}

// Default initial coupons if Cloud DB is fresh
const DEFAULT_COUPONS = {
    "VIP8": { 
        code: "VIP8", 
        category: "permanent", 
        type: "percent", 
        value: 8, 
        minOrder: 0, 
        desc: "8% הנחה קבועה ללקוחות שיווקים",
        singleUse: false,
        usedBy: [],
        active: true,
        created_at: new Date().toISOString()
    },
    "SPECIALS": { 
        code: "SPECIALS", 
        category: "temporary", 
        type: "item_override", 
        itemPrices: { 
            "t1": 290, 
            "t5": 160, 
            "b5": 380  
        }, 
        minOrder: 0, 
        desc: "מחירי מועדון חברים על מתקנים ומפיצי ריח",
        singleUse: false,
        usedBy: [],
        active: true,
        created_at: new Date().toISOString()
    },
    "WELCOME50": {
        code: "WELCOME50",
        category: "temporary",
        type: "fixed",
        value: 50,
        minOrder: 300,
        desc: "₪50 מתנת הצטרפות בהזמנה מעל ₪300",
        singleUse: true,
        usedBy: [],
        active: true,
        created_at: new Date().toISOString()
    }
};

class ShokimCloudDB {
    constructor() {
        this.cacheCoupons = {};
        this.cacheOrders = [];
        this.isCloudConnected = !!firestoreDb;
        this.init();
    }

    init() {
        // Load initial local cache
        try {
            const localCp = localStorage.getItem('shokim_db_coupons_v2');
            this.cacheCoupons = localCp ? JSON.parse(localCp) : DEFAULT_COUPONS;
            const localOrd = localStorage.getItem('shokim_db_orders_v2');
            this.cacheOrders = localOrd ? JSON.parse(localOrd) : [];
        } catch (e) {
            this.cacheCoupons = DEFAULT_COUPONS;
            this.cacheOrders = [];
        }

        // Setup real-time Cloud Firestore listeners if available
        if (firestoreDb) {
            this.setupCloudListeners();
        }
    }

    setupCloudListeners() {
        // Real-time Cloud Coupons Listener
        firestoreDb.collection("coupons").onSnapshot((snapshot) => {
            if (!snapshot.empty) {
                const cloudCoupons = {};
                snapshot.forEach(doc => {
                    cloudCoupons[doc.id] = doc.data();
                });
                this.cacheCoupons = cloudCoupons;
                localStorage.setItem('shokim_db_coupons_v2', JSON.stringify(cloudCoupons));
                this.notifyChange('coupons');
            } else {
                // Seed default coupons if collection is empty
                this.seedDefaultCoupons();
            }
        }, (err) => {
            console.warn("Firestore coupons listener note (auth dependent):", err.message);
        });

        // Real-time Cloud Orders Listener
        firestoreDb.collection("orders").orderBy("created_at", "desc").onSnapshot((snapshot) => {
            const cloudOrders = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.docId = doc.id;
                cloudOrders.push(data);
            });
            this.cacheOrders = cloudOrders;
            localStorage.setItem('shokim_db_orders_v2', JSON.stringify(cloudOrders));
            this.notifyChange('orders');
        }, (err) => {
            console.warn("Firestore orders listener note (auth dependent):", err.message);
        });
    }

    async seedDefaultCoupons() {
        if (!firestoreDb) return;
        try {
            for (const [code, cData] of Object.entries(DEFAULT_COUPONS)) {
                await firestoreDb.collection("coupons").doc(code).set(cData, { merge: true });
            }
        } catch (e) {
            console.warn("Could not seed default coupons to Firestore:", e);
        }
    }

    // --- COUPONS ENGINE ---
    getCoupons() {
        return this.cacheCoupons && Object.keys(this.cacheCoupons).length > 0 ? this.cacheCoupons : DEFAULT_COUPONS;
    }

    getCoupon(codeStr) {
        if (!codeStr) return null;
        const cleanCode = codeStr.trim().toUpperCase();
        const coupons = this.getCoupons();
        return coupons[cleanCode] || null;
    }

    async saveCoupon(couponObj) {
        if (!couponObj || !couponObj.code) return false;
        const cleanCode = couponObj.code.trim().toUpperCase();
        const existing = this.getCoupon(cleanCode);

        const couponData = {
            code: cleanCode,
            category: couponObj.category || "custom",
            type: couponObj.type || "percent",
            value: parseFloat(couponObj.value) || 0,
            itemPrices: couponObj.itemPrices || null,
            minOrder: parseFloat(couponObj.minOrder) || 0,
            desc: couponObj.desc || "",
            singleUse: !!couponObj.singleUse,
            usedBy: couponObj.usedBy || (existing ? existing.usedBy : []),
            active: couponObj.active !== undefined ? !!couponObj.active : true,
            created_at: existing ? existing.created_at : new Date().toISOString()
        };

        // Update local cache
        this.cacheCoupons[cleanCode] = couponData;
        localStorage.setItem('shokim_db_coupons_v2', JSON.stringify(this.cacheCoupons));
        this.notifyChange('coupons');

        // Sync to Cloud Firestore
        if (firestoreDb) {
            try {
                await firestoreDb.collection("coupons").doc(cleanCode).set(couponData, { merge: true });
            } catch (e) {
                console.error("Firestore saveCoupon error:", e);
            }
        }
        return true;
    }

    async deleteCoupon(codeStr) {
        if (!codeStr) return false;
        const cleanCode = codeStr.trim().toUpperCase();
        
        // Update local cache
        if (this.cacheCoupons[cleanCode]) {
            delete this.cacheCoupons[cleanCode];
            localStorage.setItem('shokim_db_coupons_v2', JSON.stringify(this.cacheCoupons));
            this.notifyChange('coupons');
        }

        // Delete from Cloud Firestore
        if (firestoreDb) {
            try {
                await firestoreDb.collection("coupons").doc(cleanCode).delete();
            } catch (e) {
                console.error("Firestore deleteCoupon error:", e);
            }
        }
        return true;
    }

    async toggleCouponStatus(codeStr) {
        const coupon = this.getCoupon(codeStr);
        if (!coupon) return false;
        coupon.active = !coupon.active;
        return await this.saveCoupon(coupon);
    }

    async recordCouponUsage(codeStr, phoneStr) {
        if (!codeStr || !phoneStr) return false;
        const cleanCode = codeStr.trim().toUpperCase();
        const cleanPhone = phoneStr.replace(/[^0-9]/g, '');
        const coupon = this.getCoupon(cleanCode);

        if (coupon) {
            if (!coupon.usedBy) coupon.usedBy = [];
            if (!coupon.usedBy.includes(cleanPhone)) {
                coupon.usedBy.push(cleanPhone);
                return await this.saveCoupon(coupon);
            }
        }
        return true;
    }

    // --- ORDERS ENGINE ---
    getOrders() {
        return this.cacheOrders || [];
    }

    async addOrder(orderData) {
        const newId = "SHK-" + Math.floor(100000 + Math.random() * 900000);
        
        const order = {
            id: newId,
            created_at: new Date().toISOString(),
            dateFormatted: new Date().toLocaleString('he-IL', { dateStyle: 'short', timeStyle: 'short' }),
            clientName: orderData.clientName || "לקוח אורח",
            clientPhone: orderData.clientPhone || "",
            clientAddress: orderData.clientAddress || "",
            notes: orderData.notes || "",
            items: orderData.items || [],
            rawSubtotal: parseFloat(orderData.rawSubtotal) || 0,
            discount: parseFloat(orderData.discount) || 0,
            couponCode: orderData.couponCode || null,
            subtotalAfterDiscount: parseFloat(orderData.subtotalAfterDiscount) || 0,
            vat: parseFloat(orderData.vat) || 0,
            total: parseFloat(orderData.total) || 0,
            paymentMethod: orderData.paymentMethod || "whatsapp",
            status: "new"
        };

        // Add to local cache first
        this.cacheOrders.unshift(order);
        localStorage.setItem('shokim_db_orders_v2', JSON.stringify(this.cacheOrders));

        // If coupon was single use, record phone usage
        if (orderData.couponCode && orderData.clientPhone) {
            this.recordCouponUsage(orderData.couponCode, orderData.clientPhone);
        }

        this.notifyChange('orders');

        // Save to Cloud Firestore Central Database
        if (firestoreDb) {
            try {
                const docRef = await firestoreDb.collection("orders").add(order);
                order.docId = docRef.id;
            } catch (e) {
                console.error("Firestore addOrder error:", e);
            }
        }

        return order;
    }

    async updateOrderStatus(orderId, newStatus) {
        const order = this.cacheOrders.find(o => o.id === orderId || o.docId === orderId);
        if (order) {
            order.status = newStatus;
            localStorage.setItem('shokim_db_orders_v2', JSON.stringify(this.cacheOrders));
            this.notifyChange('orders');

            if (firestoreDb) {
                try {
                    if (order.docId) {
                        await firestoreDb.collection("orders").doc(order.docId).update({ status: newStatus });
                    } else {
                        const q = await firestoreDb.collection("orders").where("id", "==", orderId).get();
                        q.forEach(async doc => {
                            await doc.ref.update({ status: newStatus });
                        });
                    }
                } catch (e) {
                    console.error("Firestore updateOrderStatus error:", e);
                }
            }
            return true;
        }
        return false;
    }

    async deleteOrder(orderId) {
        const order = this.cacheOrders.find(o => o.id === orderId || o.docId === orderId);
        this.cacheOrders = this.cacheOrders.filter(o => o.id !== orderId && o.docId !== orderId);
        localStorage.setItem('shokim_db_orders_v2', JSON.stringify(this.cacheOrders));
        this.notifyChange('orders');

        if (firestoreDb && order) {
            try {
                if (order.docId) {
                    await firestoreDb.collection("orders").doc(order.docId).delete();
                } else {
                    const q = await firestoreDb.collection("orders").where("id", "==", orderId).get();
                    q.forEach(async doc => {
                        await doc.ref.delete();
                    });
                }
            } catch (e) {
                console.error("Firestore deleteOrder error:", e);
            }
        }
        return true;
    }

    // --- SUMIT & SETTINGS ENGINE ---
    getSumitConfig() {
        if (this.cacheSumitConfig) return this.cacheSumitConfig;
        try {
            const local = localStorage.getItem('shokim_db_sumit_config');
            return local ? JSON.parse(local) : {
                companyId: "",
                apiKey: "",
                paymentLink: "",
                enabled: true
            };
        } catch(e) {
            return { companyId: "", apiKey: "", paymentLink: "", enabled: true };
        }
    }

    async saveSumitConfig(configObj) {
        this.cacheSumitConfig = {
            companyId: configObj.companyId || "",
            apiKey: configObj.apiKey || "",
            paymentLink: configObj.paymentLink || "",
            enabled: configObj.enabled !== undefined ? !!configObj.enabled : true,
            updated_at: new Date().toISOString()
        };

        localStorage.setItem('shokim_db_sumit_config', JSON.stringify(this.cacheSumitConfig));
        this.notifyChange('settings');

        if (firestoreDb) {
            try {
                await firestoreDb.collection("settings").doc("sumit_config").set(this.cacheSumitConfig, { merge: true });
            } catch(e) {
                console.error("Firestore saveSumitConfig error:", e);
            }
        }
        return true;
    }

    notifyChange(type) {
        window.dispatchEvent(new CustomEvent('shokim_db_change', { detail: { type } }));
    }
}

// Global DB Singleton
window.db = new ShokimCloudDB();
