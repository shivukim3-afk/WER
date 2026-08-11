# 🔒 SHOKIM WEBSITE - MASTER DESIGN SKELETON SPECIFICATION

> **IMPORTANT**: This design skeleton is LOCKED per user directive. No structural, visual, or layout changes should be made to the core HTML/CSS structure without explicit user instruction.

---

## 📐 1. CORE ARCHITECTURE & LAYOUT SKELETON

### A. Header Navigation
- **Logo**: Sleek "שיווקים" branding with custom rotated arrow mark and subtitle.
- **Top Utility Links**: "מי אנחנו", "צרו קשר", "הזמנה מהירה".
- **Cart Badge**: Floating cart count indicator.

### B. Hero Search Section
- **Background**: Canvas particle animation (`#hero-canvas`).
- **Hero Title**: "אספקה מקצועית למוסד, לבית ולמשרד".
- **Integrated Search Bar**: `catalog-search` input field with real-time filtering across products, categories, and SKU codes.

### C. Category Gateway Slider (`#portals-grid`)
- **Layout**: Horizontal flex scroll container (`display: flex !important; overflow-x: auto !important;`).
- **Cards**: 280px width, 220px height, high-definition background images with gradient overlays.
- **Navigation**: Always-visible floating circular arrow buttons (`.slider-arrow.prev`, `.slider-arrow.next`) on both desktop and mobile.
- **Interactivity**: Touch swipe (`touchstart`, `touchmove`, `touchend`), mouse drag (`mousedown`, `mousemove`), and self-correcting fail-safe `scrollPortals` stepper.

### D. Product Catalog & Color Switcher
- **Grid Layout**: Responsive grid layout for products grouped by category.
- **Color Selector**: Dynamic color swatches (e.g., White/Black dispensers) with live image fade transitions, active swatch highlight, and SKU text updates (`selectProductColor`).
- **Prices & VAT**: Clear B2B price display with "ללא מע"מ" (excl. VAT) tag and total calculator.

### E. Mobile Sticky Bar & Drawer Navigation
- **Bottom Navigation Bar**: Phone call, WhatsApp order, Quick order link, and Cart drawer trigger.

---

## 💾 2. BACKUP LOCATION
- **Master Backup File**: [`index_master_backup.html`](file:///c:/Users/maisi/Desktop/shokim_website/index_master_backup.html)
- **Live Active Site File**: [`index.html`](file:///c:/Users/maisi/Desktop/shokim_website/index.html)
