/**
 * Shokim Database & Store Management API (Shokim DB Engine)
 * Database Project ID: b362b102-e747-475d-ab24-402aaa00a963
 */

const SHOKIM_DB_CONFIG = {
    projectId: "b362b102-e747-475d-ab24-402aaa00a963",
    couponsKey: "shokim_db_coupons_v2",
    ordersKey: "shokim_db_orders_v2",
    adminPassKey: "shokim_db_admin_pass"
};

// Default initial coupons if DB is empty
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

class ShokimDB {
    constructor() {
        this.init();
    }

    init() {
        // Initialize Coupons Table
        if (!localStorage.getItem(SHOKIM_DB_CONFIG.couponsKey)) {
            localStorage.setItem(SHOKIM_DB_CONFIG.couponsKey, JSON.stringify(DEFAULT_COUPONS));
        }
        // Initialize Orders Table
        if (!localStorage.getItem(SHOKIM_DB_CONFIG.ordersKey)) {
            localStorage.setItem(SHOKIM_DB_CONFIG.ordersKey, JSON.stringify([]));
        }
    }

    // --- COUPONS ENGINE ---
    getCoupons() {
        try {
            const data = localStorage.getItem(SHOKIM_DB_CONFIG.couponsKey);
            return data ? JSON.parse(data) : DEFAULT_COUPONS;
        } catch (e) {
            console.error("Error reading coupons DB:", e);
            return DEFAULT_COUPONS;
        }
    }

    getCoupon(codeStr) {
        if (!codeStr) return null;
        const cleanCode = codeStr.trim().toUpperCase();
        const coupons = this.getCoupons();
        return coupons[cleanCode] || null;
    }

    saveCoupon(couponObj) {
        if (!couponObj || !couponObj.code) return false;
        const cleanCode = couponObj.code.trim().toUpperCase();
        const coupons = this.getCoupons();
        
        coupons[cleanCode] = {
            code: cleanCode,
            category: couponObj.category || "custom",
            type: couponObj.type || "percent",
            value: parseFloat(couponObj.value) || 0,
            itemPrices: couponObj.itemPrices || null,
            minOrder: parseFloat(couponObj.minOrder) || 0,
            desc: couponObj.desc || "",
            singleUse: !!couponObj.singleUse,
            usedBy: couponObj.usedBy || (coupons[cleanCode] ? coupons[cleanCode].usedBy : []),
            active: couponObj.active !== undefined ? !!couponObj.active : true,
            created_at: coupons[cleanCode] ? coupons[cleanCode].created_at : new Date().toISOString()
        };

        localStorage.setItem(SHOKIM_DB_CONFIG.couponsKey, JSON.stringify(coupons));
        this.notifyChange('coupons');
        return true;
    }

    deleteCoupon(codeStr) {
        if (!codeStr) return false;
        const cleanCode = codeStr.trim().toUpperCase();
        const coupons = this.getCoupons();
        if (coupons[cleanCode]) {
            delete coupons[cleanCode];
            localStorage.setItem(SHOKIM_DB_CONFIG.couponsKey, JSON.stringify(coupons));
            this.notifyChange('coupons');
            return true;
        }
        return false;
    }

    toggleCouponStatus(codeStr) {
        if (!codeStr) return false;
        const cleanCode = codeStr.trim().toUpperCase();
        const coupons = this.getCoupons();
        if (coupons[cleanCode]) {
            coupons[cleanCode].active = !coupons[cleanCode].active;
            localStorage.setItem(SHOKIM_DB_CONFIG.couponsKey, JSON.stringify(coupons));
            this.notifyChange('coupons');
            return coupons[cleanCode].active;
        }
        return false;
    }

    recordCouponUsage(codeStr, phoneStr) {
        if (!codeStr || !phoneStr) return false;
        const cleanCode = codeStr.trim().toUpperCase();
        const cleanPhone = phoneStr.replace(/[^0-9]/g, '');
        const coupons = this.getCoupons();
        if (coupons[cleanCode]) {
            if (!coupons[cleanCode].usedBy) coupons[cleanCode].usedBy = [];
            if (!coupons[cleanCode].usedBy.includes(cleanPhone)) {
                coupons[cleanCode].usedBy.push(cleanPhone);
                localStorage.setItem(SHOKIM_DB_CONFIG.couponsKey, JSON.stringify(coupons));
                this.notifyChange('coupons');
            }
            return true;
        }
        return false;
    }

    // --- ORDERS ENGINE ---
    getOrders() {
        try {
            const data = localStorage.getItem(SHOKIM_DB_CONFIG.ordersKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Error reading orders DB:", e);
            return [];
        }
    }

    addOrder(orderData) {
        const orders = this.getOrders();
        const newId = "SHK-" + Math.floor(100000 + Math.random() * 900000);
        
        const order = {
            id: newId,
            created_at: new Date().toISOString(),
            dateFormatted: new Date().toLocaleString('he-IL', { dateStyle: 'short', timeStyle: 'short' }),
            clientName: orderData.clientName || "לקוח אורח",
            clientPhone: orderData.clientPhone || "",
            clientAddress: orderData.clientAddress || "",
            notes: orderData.notes || "",
            items: orderData.items || [], // Array of { id, name, pack, price, quantity }
            rawSubtotal: parseFloat(orderData.rawSubtotal) || 0,
            discount: parseFloat(orderData.discount) || 0,
            couponCode: orderData.couponCode || null,
            subtotalAfterDiscount: parseFloat(orderData.subtotalAfterDiscount) || 0,
            vat: parseFloat(orderData.vat) || 0,
            total: parseFloat(orderData.total) || 0,
            paymentMethod: orderData.paymentMethod || "whatsapp", // 'whatsapp', 'credit', 'invoice'
            status: "new" // 'new', 'processing', 'completed', 'cancelled'
        };

        orders.unshift(order); // Add newest first
        localStorage.setItem(SHOKIM_DB_CONFIG.ordersKey, JSON.stringify(orders));

        // If coupon was single use, record phone
        if (orderData.couponCode && orderData.clientPhone) {
            this.recordCouponUsage(orderData.couponCode, orderData.clientPhone);
        }

        this.notifyChange('orders');
        return order;
    }

    updateOrderStatus(orderId, newStatus) {
        const orders = this.getOrders();
        const idx = orders.findIndex(o => o.id === orderId);
        if (idx !== -1) {
            orders[idx].status = newStatus;
            localStorage.setItem(SHOKIM_DB_CONFIG.ordersKey, JSON.stringify(orders));
            this.notifyChange('orders');
            return true;
        }
        return false;
    }

    deleteOrder(orderId) {
        let orders = this.getOrders();
        const initialLength = orders.length;
        orders = orders.filter(o => o.id !== orderId);
        if (orders.length !== initialLength) {
            localStorage.setItem(SHOKIM_DB_CONFIG.ordersKey, JSON.stringify(orders));
            this.notifyChange('orders');
            return true;
        }
        return false;
    }

    notifyChange(type) {
        window.dispatchEvent(new CustomEvent('shokim_db_change', { detail: { type } }));
    }
}

// Global DB Singleton
window.db = new ShokimDB();
