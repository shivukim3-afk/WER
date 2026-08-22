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
        // Initialize Auth only when needed (e.g. in Admin session) to avoid third-party storage warnings
        if (typeof window !== 'undefined' && window.location.pathname.includes('admin') && typeof firebase.auth === 'function') {
            fbAuth = firebase.auth();
        }
        // Firestore connected
    }
} catch (e) {
    // Graceful offline fallback
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

const DEFAULT_ICOUNT_CONFIG = {
    companyId: "sl8407440",
    apiKey: "API3E8-C0A83414-6A8613B1-0380E320669F4668",
    paymentLink: "https://app.icount.co.il/m/e88b5",
    enabled: true
};

class ShokimCloudDB {
    constructor() {
        this.cacheCoupons = {};
        this.cacheOrders = [];
        this.cacheIcountConfig = null;
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
            const localConf = localStorage.getItem('shokim_db_icount_config');
            let parsed = localConf ? JSON.parse(localConf) : DEFAULT_ICOUNT_CONFIG;
            if (parsed && (!parsed.paymentLink || parsed.paymentLink.includes('7125d') || parsed.paymentLink.includes('sumit'))) {
                parsed.paymentLink = DEFAULT_ICOUNT_CONFIG.paymentLink;
                localStorage.setItem('shokim_db_icount_config', JSON.stringify(parsed));
            }
            this.cacheIcountConfig = parsed;
        } catch (e) {
            this.cacheCoupons = DEFAULT_COUPONS;
            this.cacheOrders = [];
            this.cacheIcountConfig = DEFAULT_ICOUNT_CONFIG;
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
        }, () => {
            // Graceful fallback to local cache
        });

        // Real-time Cloud Orders Listener (Only active in admin or authenticated sessions)
        const isAdminSession = typeof window !== 'undefined' && (window.location.pathname.includes('admin') || (typeof firebaseAuth !== 'undefined' && firebaseAuth && firebaseAuth.currentUser));
        if (isAdminSession) {
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
            }, () => {
                // Graceful fallback to local cache
            });
        }

        // Real-time Cloud iCount Settings Listener
        firestoreDb.collection("settings").doc("icount_config").onSnapshot((doc) => {
            if (doc.exists) {
                let cloudData = doc.data();
                if (cloudData && (!cloudData.paymentLink || cloudData.paymentLink.includes('7125d') || cloudData.paymentLink.includes('sumit'))) {
                    cloudData.paymentLink = DEFAULT_ICOUNT_CONFIG.paymentLink;
                    firestoreDb.collection("settings").doc("icount_config").set(cloudData, { merge: true }).catch(() => {});
                }
                this.cacheIcountConfig = cloudData;
                localStorage.setItem('shokim_db_icount_config', JSON.stringify(this.cacheIcountConfig));
                this.notifyChange('settings');
            } else {
                firestoreDb.collection("settings").doc("icount_config").set(DEFAULT_ICOUNT_CONFIG, { merge: true }).catch(() => {});
            }
        }, () => {
            // Graceful fallback
        });
    }

    async seedDefaultCoupons() {
        if (!firestoreDb) return;
        try {
            for (const [code, cData] of Object.entries(DEFAULT_COUPONS)) {
                await firestoreDb.collection("coupons").doc(code).set(cData, { merge: true });
            }
        } catch (e) {
            // Graceful fallback
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

    // --- ICOUNT & SETTINGS ENGINE ---
    getIcountConfig() {
        if (this.cacheIcountConfig) {
            if (this.cacheIcountConfig.paymentLink && (this.cacheIcountConfig.paymentLink.includes('7125d') || this.cacheIcountConfig.paymentLink.includes('sumit'))) {
                this.cacheIcountConfig.paymentLink = DEFAULT_ICOUNT_CONFIG.paymentLink;
            }
            return this.cacheIcountConfig;
        }
        try {
            const local = localStorage.getItem('shokim_db_icount_config');
            let parsed = local ? JSON.parse(local) : DEFAULT_ICOUNT_CONFIG;
            if (parsed && (!parsed.paymentLink || parsed.paymentLink.includes('7125d') || parsed.paymentLink.includes('sumit'))) {
                parsed.paymentLink = DEFAULT_ICOUNT_CONFIG.paymentLink;
            }
            return parsed;
        } catch(e) {
            return DEFAULT_ICOUNT_CONFIG;
        }
    }

    // Backward compatibility alias
    getSumitConfig() {
        return this.getIcountConfig();
    }

    async saveIcountConfig(configObj) {
        this.cacheIcountConfig = {
            companyId: configObj.companyId || "",
            apiKey: configObj.apiKey || "",
            paymentLink: configObj.paymentLink || "",
            enabled: configObj.enabled !== undefined ? !!configObj.enabled : true,
            updated_at: new Date().toISOString()
        };

        localStorage.setItem('shokim_db_icount_config', JSON.stringify(this.cacheIcountConfig));
        this.notifyChange('settings');

        if (firestoreDb) {
            try {
                await firestoreDb.collection("settings").doc("icount_config").set(this.cacheIcountConfig, { merge: true });
            } catch(e) {
                console.error("Firestore saveIcountConfig error:", e);
            }
        }
        return true;
    }

    // Backward compatibility alias
    async saveSumitConfig(configObj) {
        return this.saveIcountConfig(configObj);
    }

    notifyChange(type) {
        window.dispatchEvent(new CustomEvent('shokim_db_change', { detail: { type } }));
    }
}

// Global DB Singleton
window.db = new ShokimCloudDB();
