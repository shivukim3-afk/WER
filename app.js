// 1. PRODUCTS DATA DICTIONARY
        const PRODUCTS = [
            // Category: Tork
            { 
                id: "t1", 
                name: "מתקן מגבת בגליל Tork - Touch free", 
                pack: "Touch free להיגיינה מושלמת", 
                price: 320, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "סדרת מתקנים למגבות נייר בגלילים ובדפים, בעיצוב מושלם המותאם לחדרי שירותים ציבוריים גדולים וקטנים. מנגנונים ייחודיים מבטיחים מילוי מהיר וקל ושימוש רציף ונוח. תכולה גדולה במיוחד מבטיחה תדירות החלפה נמוכה לחיסכון משולש. מנגנון Touch free ללא מגע להיגיינה מושלמת עם חיתוך מהיר וקל.",
                specs: "גובה: 37.2 ס\"מ | רוחב: 33.7 ס\"מ | עומק: 20.3 ס\"מ",
                image: "assets/t1.webp",
                image_white: "assets/t1_white.webp",
                hasColors: true,
                keywords: ["מתקן", "טורק", "tork", "נייר", "מגבת", "גליל", "touch free", "touchfree", "טאצ פרי", "טאץ פרי", "טאצ' פרי", "טאץ' פרי", "קיר", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t2", 
                name: "מתקן MINI INTERFOLD צץ רץ Tork", 
                pack: "יחידה אחת (קומפקטי)", 
                price: 140, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "מתקן קומפקטי עם פתיחת צד, מתאים לחדרי שירותים קטנים. פתח תחתון עם מנגנון חיסכון ייחודי, מגבת אחת בכל שימוש.",
                specs: "גובה: 29.5 ס\"מ | רוחב: 30.2 ס\"מ | עומק: 10.1 ס\"מ",
                image: "assets/tork_interfold_dispenser.webp",
                image_white: "assets/t2_white.webp",
                hasColors: true,
                keywords: ["מתקן", "טורק", "tork", "צץ רץ", "צץרץ", "מיני", "קיר", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t3", 
                image: "assets/t3.webp", 
                image_white: "assets/t3_white.webp",
                hasColors: true,
                name: "מתקן לנייר ניגוב ידיים שולחני נייד Tork", 
                pack: "שליפת דף-אחר-דף", 
                price: 160, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "מתקן לנייר ניגוב ידיים שולחני, עיצוב מודרני פונקציונלי וקומפקטי, אידיאלי למקומות קטנים. נייר נשלף דף אחר דף להפחתת עלות השימוש והפסולת.",
                specs: "גובה: 21.8 ס\"מ | רוחב: 32.3 ס\"מ | עומק: 11.6 ס\"מ",
                keywords: ["מתקן", "טורק", "tork", "שולחני", "נייד", "נייר", "ניגוב", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t4", 
                image: "assets/tork_soap_dispenser.webp", 
                image_white: "assets/t4_white.webp",
                hasColors: true,
                name: "מתקן תחליב ידיים Tork", 
                pack: "יחידה אחת", 
                price: 95, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "מתקן תחליב ידיים מעוצב בטכנולוגיית Touch-Free, המיועד לשמירה מרבית על ההיגיינה ולשירות ארוך טווח.",
                specs: "גובה: 29.0 ס\"מ | רוחב: 11.0 ס\"מ | עומק: 11.0 ס\"מ",
                keywords: ["מתקן", "טורק", "tork", "סבון", "תחליב", "נוזל", "קיר", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t5", 
                name: "מתקן נייר טואלט SmartOne Tork - המתקן החסכן!", 
                pack: "שליפת דף-אחר-דף (חיסכון 25%)", 
                price: 190, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "מתקנים מעוצבים עם מנגנון שליפה ייחודי, המבטיח דף אחד בכל פעם וללא מגע בדף הבא. בעלי תכולה ענקית עם מנגנון לחיתוך קל ועיצוב חצי שקוף ליעילות מעקב החלפת הגליל. מנפק דף אחד בכל משיכה, מבטיח חיסכון של 25% לפחות בצריכת הנייר ומשלב נייר איכותי ומפנק.",
                specs: "גובה: 27.0 ס\"מ | רוחב: 27.0 ס\"מ | עומק: 17.3 ס\"מ",
                image: "assets/tork_smartone_dispenser.webp",
                image_white: "assets/t5_white.webp",
                hasColors: true,
                keywords: ["מתקן", "טורק", "tork", "טואלט", "סמארט וואן", "smartone", "חסכן", "חסכוני", "קיר", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t6", 
                name: "מתקן לנייר טואלט צץ-רץ (הדר) Tork - מתאים לשבת!", 
                pack: "מתאים לשבת! (תכולה ענקית)", 
                price: 135, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "dispenser",
                desc: "מתאים לשבת! מתקן צר בעל תכולה גדולה במיוחד, לנייר טואלט הנשלף דף אחרי דף.",
                specs: "גובה: 27.1 ס\"מ | רוחב: 15.9 ס\"מ | עומק: 12.8 ס\"מ",
                image: "assets/tork_hadar_dispenser.webp",
                image_white: "assets/t6_white.webp",
                hasColors: true,
                keywords: ["מתקן", "טורק", "tork", "טואלט", "שבת", "הדר", "צץ רץ", "קיר", "דיספנסר", "לבן", "שחור"] },
            { 
                id: "t7", image: "assets/t7.webp", name: "מגבות נייר TAD ספיגה משולשת Tork", 
                pack: "מארז 6 גלילים", 
                price: 350, 
                category: "tork", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "paper-roll",
                desc: "מגבות נייר איכותיות בטכנולוגיית TAD (100% תאית טהורה) המעניקה ספיגה כפולה ומשולשת לחיסכון של מגבת אחת לניגוב."
            , keywords: ["נייר", "טורק", "tork", "גליל", "tad", "ספיגה", "מגבת"] },

            // Category: Paper
            { id: "p1", name: "נייר צץ-רץ קרפ", pack: "מארז 4,000 יח'", price: 70, category: "paper", portals: ["institution", "office"], icon: "paper-stack", image: "assets/crepe_paper_towel.webp" , keywords: ["נייר", "צץ רץ", "צץרץ", "קרפ", "ניגוב", "דפים", "מגבת"] },
            { id: "p2", image: "assets/p2.webp", name: "נייר צץ-רץ דו-שכבתי", pack: "מארז 2,400 יח'", price: 130, category: "paper", portals: ["institution", "office", "home"], icon: "paper-stack" , keywords: ["נייר", "צץ רץ", "צץרץ", "דו שכבתי", "ניגוב", "דפים", "מגבת"] },
            { 
                id: "p3", 
                image: "assets/tork_interfold_paper.webp", 
                name: "מגבת נייר צץ-רץ Interfold Tork Soft", 
                pack: "דו-שכבתי רך וסופג", 
                price: 180, 
                category: "paper", 
                portals: ["institution", "office", "bb", "home"], 
                icon: "paper-stack",
                desc: "נייר איכותי נעים למגע, מגבות מקופלות דו-שכבתיות, גדולות וסופגות במיוחד. מותאם במדויק לכל מתקני ה-Interfold של Tork.",
                specs: "דו-שכבתי רך | מגבות אינטרפולד סופגות במיוחד",
                keywords: ["נייר", "צץ רץ", "צץרץ", "אינטרפולד", "interfold", "טורק", "tork", "soft", "ניגוב", "מגבת"] },
            { 
                id: "p4", 
                image: "assets/tork_universal_paper_roll.webp", 
                name: "מגבת נייר בגליל – חד-שכבתי Tork", 
                pack: "מארז 6 גלילים (הגליל שלא נגמר)", 
                price: 280, 
                category: "paper", 
                portals: ["institution", "office", "bb", "home"], 
                icon: "paper-roll",
                desc: "מגבת נייר בגליל חד-שכבתי Tork - נייר חד-שכבתי איכותי, הגליל שלא נגמר לחיסכון ניכר בכל שימוש.",
                specs: "חד-שכבתי עמיד | הגליל שלא נגמר | חיסכון ניכר",
                keywords: ["נייר", "גליל", "חד שכבתי", "ניגוב", "מגבת", "ידיים", "טורק", "tork"] },
            { 
                id: "p5", 
                image: "assets/tork_universal_paper_roll.webp", 
                name: "מגבת נייר פרימיום בגליל – דו-שכבתי Tork", 
                pack: "מארז 6 גלילים (סופג פי 3)", 
                price: 285, 
                category: "paper", 
                portals: ["institution", "office", "bb", "home"], 
                icon: "paper-roll",
                desc: "מגבת נייר פרימיום בגליל דו-שכבתי Tork - נייר דו-שכבתי רך ועבה, סופג פי 3 מכל מגבת אחרת.",
                specs: "דו-שכבתי פרימיום | סופג פי 3 מכל מגבת אחרת | רך ועבה",
                keywords: ["נייר", "גליל", "דו שכבתי", "פרימיום", "ניגוב", "מגבת", "ידיים", "טורק", "tork"] },
            { 
                id: "p6", 
                image: "assets/tork_hadar_toilet_paper.webp", 
                name: "נייר טואלט דו-שכבתי חתוך לשבת (הדר) Tork", 
                pack: "100% תאית (חתוך לשבת)", 
                price: 100, 
                category: "paper", 
                portals: ["institution", "home", "office", "bb"], 
                icon: "paper-stack",
                desc: "ניירות הטואלט של TORK באיכות מעולה, 100% תאית, רכים ונעימים למגע, ארוזים בעטיפה אישית לשמירה על היגיינה מרבית. נשלף דף אחרי דף לשימוש נוח ולחיסכון ניכר.",
                specs: "100% תאית | רך ונעים למגע | עטיפה אישית לשמירה על היגיינה מרבית",
                keywords: ["נייר", "טואלט", "דו שכבתי", "חתוך לשבת", "שבת", "הדר", "טורק", "tork", "תאית", "צץ רץ"] },
            { 
                id: "p_smartone", 
                image: "assets/tork_smartone_paper_roll.webp", 
                name: "גליל נייר טואלט SmartOne Tork", 
                pack: "מארז 6 גלילים (נשלף אחד אחד)", 
                price: 195, 
                category: "paper", 
                portals: ["institution", "office", "home", "bb"], 
                icon: "paper-roll",
                desc: "נייר טואלט SmartOne Tork - נייר איכותי נעים למגע, נשלף אחד אחד. מיועד למתקני SmartOne, מבטיח היגיינה מרבית וחיסכון ניכר בצריכת הנייר.",
                specs: "100% תאית איכותית | נשלף דף-אחר-דף | מגע רך ומפנק",
                keywords: ["נייר", "טואלט", "סמארט וואן", "smartone", "גליל", "טורק", "tork", "נשלף אחד אחד"] },
            { id: "p7", image: "assets/p7.webp", name: "נייר טואלט קומפקט דחוס", pack: "מארז 36 גלילים", price: 160, category: "paper", portals: ["institution", "office", "home"], icon: "paper-roll" , keywords: ["נייר", "טואלט", "קומפקט", "דחוס", "גלילים"] },
            { 
                id: "p8", image: "assets/p8.webp", 
                name: "נייר טואלט 'דואט' דו-שכבתי קומפקט", 
                pack: "80 מטר בגליל, 36 גלילים", 
                price: 110, 
                category: "paper", 
                portals: ["institution", "bb"], 
                icon: "paper-roll",
                desc: "נייר טואלט איכותי חסכוני במיוחד! דואט נייר טואלט דו שכבתי קומפקט 80 מטר בגליל, רך ועבה לשימוש ממושך."
            , keywords: ["נייר", "טואלט", "דואט", "דו שכבתי", "קומפקט", "גלילים"] },
            { id: "p9", image: "assets/p9.webp", name: "סדיני נייר למיטות טיפול / בדיקה", pack: "גליל יחיד", price: 25, category: "paper", portals: ["institution"], icon: "paper-roll" , keywords: ["סדין", "מיטה", "סדינים", "גליל", "נייר למיטה", "טיפולים", "פרימיום"] },
            { 
                id: "p10", image: "assets/p10.webp", 
                name: "סדיני נייר פרימיום למיטות", 
                pack: "127 מטר / 50 ס\"מ", 
                price: 40, 
                category: "paper", 
                portals: ["institution"], 
                icon: "paper-roll",
                desc: "סדין נייר פרימיום למיטה, איכותי, עמיד ונעים למגע המותאם לקליניקות ומטפלים."
            , keywords: ["סדין", "מיטה", "סדינים", "גליל", "נייר למיטה", "טיפולים"] },
            { id: "p11", image: "assets/p11.webp", name: "דלי מגבוני ניקוי לחיטוי", pack: "דלי 400 מגבונים", price: 45, category: "paper", portals: ["institution", "office", "home"], icon: "bucket" , keywords: ["דלי", "מגבונים", "ניקוי", "חיטוי", "כלור"] },

            // Category: Cleaning
            { id: "c1", name: "חומר לשטיפת רצפות ריחני", pack: "מכל 4 ליטר", price: 14.5, category: "cleaning", portals: ["institution", "home", "office", "bb"], icon: "jug", image: "assets/floor_cleaner_jug.webp" , keywords: ["חומר", "נוזל", "שטיפה", "רצפות", "ניקוי", "ריחני"] },
            { id: "c2", image: "assets/bleach_cleaner_jug.webp", name: "אקנומיקה מרוכזת לחיטוי", pack: "מכל 4 ליטר", price: 11, category: "cleaning", portals: ["institution", "home"], icon: "jug" , keywords: ["אקנומיקה", "חומר", "נוזל", "חיטוי", "מלבין", "מרוכז"] },
            { id: "c3", image: "assets/c3.webp", name: "נוזל כלים איכותי", pack: "מכל 4 ליטר", price: 11, category: "cleaning", portals: ["institution", "home", "office"], icon: "jug" , keywords: ["נוזל כלים", "חומר", "כלים", "סבון", "ניקוי"] },
            { id: "c4", name: "תרסיס לניקוי חלונות ומראות", pack: "750 מ\"ל עם מתז", price: 8, category: "cleaning", portals: ["institution", "home", "office", "bb"], icon: "spray", image: "assets/window_cleaner_spray.webp" , keywords: ["תרסיס", "חלונות", "מראות", "נוזל", "ניקוי", "זכוכית", "מתז"] },
            { id: "c5", image: "assets/c5.webp", name: "מנקה אסלות עוצמתי", pack: "בקבוק 750 מ\"ל", price: 10, category: "cleaning", portals: ["institution", "home", "bb"], icon: "spray" , keywords: ["מנקה אסלות", "חומר", "אסלה", "שירותים", "ניקוי", "חומצה"] },
            { 
                id: "c6", 
                name: "חומר ניקוי רב-תכליתי 7C", 
                pack: "מכל 4 ליטר", 
                price: 60, 
                category: "cleaning", 
                portals: ["institution", "office"], 
                icon: "jug",
                desc: "חומר איכותי רב תכליתי 7C. מנקה כל דבר בקלות ובמהירות, בעל ביצועים מעולים.",
                image: "assets/c7_cleaner_jug.webp",
             keywords: ["חומר", "נוזל", "ניקוי", "רב תכליתי", "c7", "7c", "מנקה", "מסיר שומנים", "מסיר שומן", "שומנים"] },
            { 
                id: "c7", image: "assets/c7.webp", 
                name: "מסיר אבנית וחלודה עוצמתי 100PLUS", 
                pack: "מכל 4 ליטר / 4.5 ק\"ג", 
                price: 45, 
                category: "cleaning", 
                portals: ["institution", "bb"], 
                icon: "jug",
                desc: "חומר חזק במיוחד להסרת אבנית וחלודה! נוזל להסרת אבנית וחלודה 100PLUS - מנקה משטחים וכלים ביעילות."
            , keywords: ["מסיר אבנית", "חלודה", "100plus", "חומר", "ניקוי", "חומצה"] },
            { id: "c8", image: "assets/c8.webp", name: "תחליב ידיים מבושם", pack: "מכל 4 ליטר", price: 30, category: "cleaning", portals: ["institution", "office", "bb"], icon: "jug" , keywords: ["תחליב", "סבון", "ידיים", "מבושם", "נוזל"] },
            { id: "c9", image: "assets/c9.webp", name: "תחליף קצף ידיים", pack: "מכל 4 ליטר", price: 390, category: "cleaning", portals: ["institution", "office", "bb"], icon: "jug" , keywords: ["קצף ידיים", "סבון", "ידיים", "נוזל", "תחליף"] },
            { id: "c10", image: "assets/c10.webp", name: "ג'ל חיטוי לידיים", pack: "לכ-6,000 לחיצות", price: 350, category: "cleaning", portals: ["institution", "office"], icon: "dispenser" , keywords: ["אלכוג'ל", "ג'ל", "חיטוי", "ידיים", "חריצים", "לחיצות"] },

            // Category: Tools
            { id: "e1", image: "assets/e1.webp", name: "מטאטא רגיל", pack: "יחידה אחת (ללא מקל)", price: 6, category: "tools", portals: ["institution", "home"], icon: "broom" , keywords: ["מטאטא", "מברשת", "טאטוא", "ניקיון"] },
            { id: "e1_stick", image: "assets/e1_stick.webp", name: "מקל עץ למטאטא/מגב", pack: "יחידה אחת", price: 6, category: "tools", portals: ["institution", "home", "office"], icon: "pen" , keywords: ["מקל", "ידית", "עץ", "מטאטא", "מגב"] },
            { id: "e2", image: "assets/e2.webp", name: "מטאטא אולם רחב", pack: "60 ס\"מ כולל מקל", price: 30, category: "tools", portals: ["institution", "office"], icon: "broom" , keywords: ["מטאטא", "מברשת", "אולם", "טאטוא", "רחב"] },
            { id: "e3", image: "assets/e3.webp", name: "מגב רצפה", pack: "40 ס\"מ", price: 12, category: "tools", portals: ["home", "bb"], icon: "broom" , keywords: ["מגב", "מים", "ניקוי", "ריצפה"] },
            { id: "e4", image: "assets/e4.webp", name: "מגב רצפה תעשייתי", pack: "60 ס\"מ", price: 14, category: "tools", portals: ["institution", "office"], icon: "broom" , keywords: ["מגב", "מים", "ניקוי", "ריצפה", "רחב"] },
            { id: "e5", image: "assets/e5.webp", name: "יעה פלסטיק איכותי", pack: "יחידה אחת", price: 6, category: "tools", portals: ["institution", "home", "office"], icon: "broom" , keywords: ["יעה", "איסוף", "אשפה", "לכלוך"] },
            { id: "e6", image: "assets/e6.webp", name: "דלי ניקוי פלסטיק", pack: "יחידה אחת", price: 6, category: "tools", portals: ["institution", "home", "office"], icon: "bucket" , keywords: ["שטיפה", "ניקוי", "פלסטיק", "סוחט"] },
            { id: "e7", image: "assets/e7.webp", name: "סחבות רצפה מיקרופייבר", pack: "חבילה של 3 יח'", price: 11, category: "tools", portals: ["institution", "home", "office", "bb"], icon: "towel" , keywords: ["סמרטוט", "סחבה", "רצפה", "שטיפה", "בד"] },
            { id: "e8", image: "assets/e8.webp", name: "ספוג הפלא לניקוי קירות", pack: "חבילה של 10 יח'", price: 2, category: "tools", portals: ["institution", "home", "office"], icon: "towel" , keywords: ["מטלית", "מיקרופייבר", "רצפה", "שיש", "ניקוי", "בד"] },
            { id: "e9", image: "assets/e9.webp", name: "מטליות מיקרופייבר רב-שימושיות", pack: "חבילה של 5 יח'", price: 16, category: "tools", portals: ["institution", "home", "office", "bb"], icon: "towel" , keywords: ["ספוג הפלא", "ספוג", "ניקוי", "הסרת כתמים"] },
            { id: "e10", image: "assets/e10.webp", name: "כריות יפניות איכותיות לניקוי", pack: "חבילה של 6 יח'", price: 2, category: "tools", portals: ["institution", "home"], icon: "towel" , keywords: ["כרית יפנית", "כרית", "קרצוף", "ספוג", "כלים"] },

            // Category: Bags
            { 
                id: "b1", 
                name: "שקיות אשפה מחוזקות LD 'חרצית'", 
                pack: "מידה 77/90, 50 יח'", 
                price: 20, 
                category: "bags", 
                portals: ["institution", "office"], 
                icon: "bag",
                desc: "שקיות האשפה הכי חזקות בשוק! חרצית שקיות אשפה LD כתומות 77/90 בגליל, עבות במיוחד.",
                image: "assets/orange_trash_bags.webp",
             keywords: ["שקיות", "שקית", "אשפה", "פח", "ניילון", "חרצית", "כתום", "חזק"] },
            { id: "b2", image: "assets/black_trash_bags.webp", name: "שקיות אשפה מחוזקות 'כלנית'", pack: "מידה 75/90, 50 יח'", price: 16, category: "bags", portals: ["institution", "office"], icon: "bag" , keywords: ["שקיות", "שקית", "אשפה", "פח", "ניילון", "כלנית", "שחור"] },
            { id: "b3", image: "assets/b3.webp", name: "שקיות אשפה קטנות לבנות", pack: "מידה 50/70, 100 יח'", price: 13, category: "bags", portals: ["institution", "home", "office", "bb"], icon: "bag" , keywords: ["שקיות", "שקית", "אשפה", "פח", "ניילון", "לבן", "קטן"] },
            { id: "b4", image: "assets/b4.webp", name: "מפות שולחן קריסטליות עבות", pack: "גליל 100 מטר", price: 150, category: "bags", portals: ["institution", "home", "bb"], icon: "paper-roll" , keywords: ["מפה", "מפות", "שולחן", "חד פעמי", "קריסטלי", "עבה"] },
            { 
                id: "b5", 
                name: "מפיץ ריח אוטומטי BATTERY S (סוללות)", 
                pack: "ללא צורך בחיבור לחשמל!", 
                price: 85, 
                category: "scents", 
                portals: ["institution", "office", "home", "bb"], 
                icon: "dispenser",
                desc: "מפיץ ריח אוטומטי BATTERY S - נטען על בטריות ללא צורך בחיבור לחשמל!! מפזר ניחוח יוקרתי, רענן ואחיד בחלל.",
                specs: "נטען על סוללות | ללא חיבור לחשמל | כולל בקבוק תמצית ריח",
                image: "assets/scent_diffuser_dispenser.webp",
                keywords: ["מפיץ ריח", "דיפיוזר", "אוטומטי", "סוללות", "battery s", "בישום", "ללא חשמל"] },
            { id: "b6", image: "assets/b6.webp", name: "פחית ג'ל ריח עדין", pack: "יחידה אחת", price: 30, category: "bags", portals: ["home", "office", "bb"], icon: "spray" , keywords: ["פחית", "ג'ל", "ריח", "ריחן", "מטהר"] },
            { id: "b7", image: "assets/b7.webp", name: "קליפס סיליקון ריחני לאסלה", pack: "יחידה אחת", price: 30, category: "bags", portals: ["office", "bb"], icon: "spray" , keywords: ["קליפס", "סיליקון", "ריחני", "אסלה", "ריחן"] },
            { id: "b8", image: "assets/b8.webp", name: "רשתות ריחניות למשתנות", pack: "מארז 10 יח'", price: 25, category: "bags", portals: ["institution", "office"], icon: "spray" , keywords: ["רשת", "משתנה", "ריחני", "ריחן", "שירותים"] },

            // Category: Disposables
            { id: "d1", image: "assets/d1.webp", name: "צלחות חד-פעמיות קטנות", pack: "חבילה של 100 יח'", price: 5.8, category: "disposables", portals: ["home", "office", "bb"], icon: "disposable" , keywords: ["צלחת", "צלחות", "חד פעמי", "קטן", "פלסטיק"] },
            { id: "d2", image: "assets/d2.webp", name: "צלחות חד-פעמיות גדולות", pack: "חבילה של 100 יח'", price: 6.9, category: "disposables", portals: ["home", "office", "bb"], icon: "disposable" , keywords: ["צלחת", "צלחות", "חד פעמי", "גדול", "פלסטיק"] },
            { id: "d3", image: "assets/d3.webp", name: "מרקיות חד-פעמיות עמוקות", pack: "חבילה של 100 יח'", price: 3.6, category: "disposables", portals: ["home", "office"], icon: "disposable" , keywords: ["מרקייה", "צלחת", "מרק", "חד פעמי", "פלסטיק"] },
            { id: "d4", image: "assets/d4.webp", name: "לפתניות חד-פעמיות קטנות", pack: "חבילה של 100 יח'", price: 2, category: "disposables", portals: ["home", "office"], icon: "disposable" , keywords: ["לפתנייה", "קערה", "חד פעמי", "פלסטיק"] },
            { id: "d5", image: "assets/d5.webp", name: "מזלגות חד-פעמיים חזקים", pack: "חבילה של 100 יח'", price: 3.6, category: "disposables", portals: ["home", "office", "bb"], icon: "disposable" , keywords: ["מזלג", "סכו\"ם", "חד פעמי", "פלסטיק"] },
            { id: "d6", image: "assets/d6.webp", name: "סכינים חד-פעמיים חזקים", pack: "חבילה של 100 יח'", price: 3.6, category: "disposables", portals: ["home", "office", "bb"], icon: "disposable" , keywords: ["סכין", "סכו\"ם", "חד פעמי", "פלסטיק"] },
            { id: "d7", image: "assets/d7.webp", name: "כפות חד-פעמיות", pack: "חבילה של 100 יח'", price: 3.6, category: "disposables", portals: ["home", "office"], icon: "disposable" , keywords: ["כף", "סכו\"ם", "חד פעמי", "פלסטיק"] },
            { id: "d8", image: "assets/d8.webp", name: "כפיות חד-פעמיות קטנות", pack: "חבילה של 100 יח'", price: 2.9, category: "disposables", portals: ["home", "office", "bb"], icon: "disposable" , keywords: ["כפית", "סכו\"ם", "חד פעמי", "פלסטיק"] },

            // Category: Hospitality (צימרים)
            { id: "h1", image: "assets/h1.webp", name: "מגבות גוף מפנקות לצימרים", pack: "מארז 5 מגבות כותנה עבות", price: 190, category: "hospitality", portals: ["bb"], icon: "towel" , keywords: ["מגבת", "גוף", "צימרים", "רחצה", "כותנה", "לבן"] },
            { id: "h2", image: "assets/h2.webp", name: "שמפו אישי קטן לבתי מלון", pack: 'מארז 300 יחידות (30 מ"ל)', price: 240, category: "hospitality", portals: ["bb"], icon: "hotel-soap" , keywords: ["שמפו", "בקבוקון", "סבון", "צימרים", "אישי"] },
            { id: "h3", image: "assets/h3.webp", name: "ג'ל רחצה אישי מבושם", pack: 'מארז 300 יחידות (30 מ"ל)', price: 240, category: "hospitality", portals: ["bb"], icon: "hotel-soap" , keywords: ["ג'ל רחצה", "בקבוקון", "סבון", "צימרים", "אישי"] },
            { 
                id: "h4", image: "assets/h4.webp", name: "כפכפים חד-פעמיים סגורים לצימר", 
                pack: "מארז 100 יחידות", 
                price: 340, 
                category: "hospitality", 
                portals: ["bb"], 
                icon: "slippers",
                desc: "כפכפים מרופדים ואיכותיים המקנים חוויית ספא רגועה ומפנקת לאורחים בצימרים ובמלונות."
            },

            // Category: Office (משרדי בסיסי)
            { id: "o1", image: "assets/o1.webp", name: "נייר צילום למדפסת A4", pack: "קרטון 5 חבילות (2500 דף)", price: 110, category: "office", portals: ["office", "institution"], icon: "paper-stack" , keywords: ["נייר", "צילום", "מדפסת", "a4", "משרד"] },
            { id: "o2", image: "assets/o2.webp", name: "טונר שחור למדפסת HP", pack: "יחידה אחת", price: 180, category: "office", portals: ["office"], icon: "toner" , keywords: ["טונר", "דיו", "מדפסת", "hp", "שחור"] },
            { id: "o3", image: "assets/o3.webp", name: "עטי פיילוט Pilot 0.7 כחול/שחור", pack: "מארז 12 עטים", price: 65, category: "office", portals: ["office", "institution"], icon: "pen" , keywords: ["עט", "עטים", "פיילוט", "pilot", "משרד"] },
            { id: "o4", image: "assets/o4.webp", name: "קלסר משרדי עבה גב 8 ס\"מ", pack: "מארז 10 קלסרים קשיחים", price: 80, category: "office", portals: ["office", "institution"], icon: "binders" , keywords: ["קלסר", "משרד", "תיוק", "עבה", "קרטון"] },
            { id: "s1", image: "assets/lilya_scent_tab.webp", name: "מפיץ ריח Lilya Tab (עד 25 מטר)", pack: "ערכה מלאה + 2 תמציות ריח 100 מ\"ל", price: 399, originalPrice: 519, category: "scents", portals: ["home", "office", "hospitality", "institution"], desc: "מפיץ ריח חשמלי קומפקטי ואיכותי מסדרת Lilya Tab, מתאים לשטחים של עד 25 מ\"ר (חדרי שירותים, משרדים קטנים ולובאים). מגיע כערכה מלאה בתוספת 2 תמציות ריח יוקרתיות 100 מ\"ל.", specs: "כיסוי: עד 25 מ\"ר | מתאים ל: חדרי שירותים, לובאים קטנים", keywords: ["מפיץ", "ריח", "לליה", "lilya", "tab", "בישום", "אוויר", "שירותים"] },
            { id: "s2", image: "assets/lilya_grand_salon.webp", name: "מפיץ ריח Lilya Grand Salon (עד 200 מטר)", pack: "ערכה מלאה + 2 תמציות ריח", price: 529, originalPrice: 779, category: "scents", portals: ["home", "office", "hospitality", "institution"], desc: "מפיץ ריח עוצמתי בעיצוב מקומר מודרני מסדרת Lilya Grand Salon, מתאים לדירות בכל הגדלים ולסלונים גדולים של עד 200 מ\"ר. מגיע כערכה מלאה בתוספת 2 תמציות ריח.", specs: "כיסוי: עד 200 מ\"ר | מתאים ל: דירות בכל הגדלים, סלונים", keywords: ["מפיץ", "ריח", "לליה", "lilya", "grand", "salon", "גרנד", "סלון", "דירות"] },
            { id: "s3", image: "assets/lilya_lounge_app.webp", name: "מפיץ ריח Lilya Lounge App (עד 250 מטר)", pack: "ערכה מלאה + 2 תמציות + אפליקציה", price: 629, originalPrice: 879, category: "scents", portals: ["home", "office", "hospitality", "institution"], desc: "מפיץ ריח חכם ויוקרתי עם שליטה מלאה באפליקציה מסדרת Lilya Lounge App, מתאים לשטחים של עד 250 מ\"ר (דירות, משרדים, חנויות בוטיק). ערכה מלאה כוללת 2 תמציות ריח.", specs: "כיסוי: עד 250 מ\"ר | מתאים ל: דירות, משרדים, חנויות קטנות", keywords: ["מפיץ", "ריח", "לליה", "lilya", "lounge", "app", "אפליקציה", "לאונג'"] },
            { id: "s4", image: "assets/lilya_pro_app.webp", name: "מפיץ ריח Lilya Pro App (עד 400 מטר)", pack: "ערכה מסחרית + 2 תמציות 250 מ\"ל", price: 1099, originalPrice: 1560, category: "scents", portals: ["home", "office", "hospitality", "institution"], desc: "מפיץ ריח מסחרי עוצמתי במיוחד מסדרת Lilya Pro App עם חיבור לאפליקציה, מתאים לבתים מרווחים, משרדים גדולים ואולמות תצוגה עד 400 מ\"ר. ערכה כוללת 2 בקבוקי תמצית מוגדלים 250 מ\"ל.", specs: "כיסוי: עד 400 מ\"ר | מתאים ל: בתים גדולים, משרדים גדולים, אולמות תצוגה", keywords: ["מפיץ", "ריח", "לליה", "lilya", "pro", "app", "פרו", "אולמות", "אפליקציה"] }
        ];

        const CATEGORIES = {
            "tork": { name: "מוצרי Tork ומתקנים", icon: "🧴", fa: "fa-soap" },
            "paper": { name: "מוצרי נייר וניגוב", icon: "🧻", fa: "fa-scroll" },
            "cleaning": { name: "חומרי ניקוי, חיטוי והיגיינה", icon: "🧼", fa: "fa-pump-soap" },
            "scents": { name: "מפיצי ריח ובישום אוויר", icon: "✨", fa: "fa-wind" },
            "tools": { name: "ציוד ועזרי ניקיון", icon: "🧹", fa: "fa-broom" },
            "bags": { name: "שקיות, אשפתונים ומוצרים משלימים", icon: "🗑️", fa: "fa-trash-can" },
            "disposables": { name: "מוצרים חד-פעמיים", icon: "🍽️", fa: "fa-utensils" },
            "hospitality": { name: "צימרים ומתחמי אירוח", icon: "🏨", fa: "fa-hotel" },
            "office": { name: "ציוד משרדי בסיסי", icon: "🖇️", fa: "fa-paperclip" }
        };

        // 2. VECTOR SVG ILLUSTRATION TEMPLATES (For absolute design uniqueness)
        const SVG_TEMPLATES = {
            "dispenser": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-disp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient><linearGradient id="g-paper" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e2e8f0"/></linearGradient></defs><rect x="25" y="15" width="50" height="60" rx="10" fill="url(#g-disp)" stroke="#334155" stroke-width="2"/><circle cx="50" cy="40" r="10" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="3 3"/><rect x="38" y="70" width="24" height="20" rx="3" fill="url(#g-paper)"/><line x1="38" y1="80" x2="62" y2="80" stroke="#cbd5e1" stroke-width="2"/></svg>`,
            "paper-roll": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-roll" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ffffff"/><stop offset="50%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient></defs><ellipse cx="50" cy="25" rx="25" ry="12" fill="none" stroke="#0085ff" stroke-width="2"/><path d="M25 25 v45 c0 12, 50 12, 50 0 v-45" fill="url(#g-roll)" stroke="#0085ff" stroke-width="2"/><ellipse cx="50" cy="25" rx="8" ry="4" fill="#07162c"/><path d="M25 70 c0 12, 50 12, 50 0" fill="none" stroke="#0085ff" stroke-width="2" stroke-dasharray="3 3"/></svg>`,
            "paper-stack": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-stack" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient></defs><path d="M15 35 L50 20 L85 35 L50 50 Z" fill="url(#g-stack)" stroke="#0085ff" stroke-width="2"/><path d="M15 35 V42 L50 57 L85 42 V35 L50 50 Z" fill="url(#g-stack)" stroke="#0085ff" stroke-width="2"/><path d="M15 42 V49 L50 64 L85 49 V42 L50 57 Z" fill="url(#g-stack)" stroke="#0085ff" stroke-width="2"/><path d="M15 49 V56 L50 71 L85 56 V49 L50 64 Z" fill="url(#g-stack)" stroke="#0085ff" stroke-width="2"/></svg>`,
            "jug": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-jug" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0085ff"/><stop offset="100%" stop-color="#00e5ff"/></linearGradient></defs><path d="M35 30 L40 15 H60 L65 30 V80 C65 85, 35 85, 35 80 Z" fill="url(#g-jug)" stroke="#0a1931" stroke-width="2"/><path d="M35 38 H22 V55 H35" fill="none" stroke="#0a1931" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="15" r="5" fill="#0a1931"/></svg>`,
            "spray": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-bottle" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="100%" stop-color="#bae6fd"/></linearGradient></defs><path d="M40 45 L45 25 V15 H55 V25 L60 45 V85 H40 Z" fill="url(#g-bottle)" stroke="#0a1931" stroke-width="2"/><path d="M45 15 L35 22 V28 H45" fill="none" stroke="#0a1931" stroke-width="2"/><circle cx="50" cy="60" r="10" fill="#0085ff" opacity="0.3"/><path d="M32 15 C28 10, 20 12, 16 18" fill="none" stroke="#00e5ff" stroke-width="2" stroke-linecap="round" opacity="0.8"/></svg>`,
            "bucket": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-buck" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#991b1b"/></linearGradient></defs><path d="M25 25 L30 80 H70 L75 25 Z" fill="url(#g-buck)" stroke="#0a1931" stroke-width="2"/><path d="M20 25 C20 5, 80 5, 80 25" fill="none" stroke="#64748b" stroke-width="2"/><ellipse cx="50" cy="25" rx="25" ry="5" fill="#7f1d1d" stroke="#0a1931" stroke-width="2"/></svg>`,
            "broom": `<svg class="product-svg" viewBox="0 0 100 100"><path d="M50 10 L50 65" stroke="#b45309" stroke-width="4" stroke-linecap="round"/><path d="M25 65 H75 L80 85 H20 Z" fill="#eab308" stroke="#0a1931" stroke-width="2"/><path d="M30 85 v5 M40 85 v5 M50 85 v5 M60 85 v5 M70 85 v5" stroke="#ca8a04" stroke-width="2"/></svg>`,
            "towel": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-towel" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="100%" stop-color="#0284c7"/></linearGradient></defs><rect x="20" y="25" width="60" height="35" rx="8" fill="url(#g-towel)" stroke="#0a1931" stroke-width="2"/><path d="M15 35 H85" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3"/><rect x="25" y="45" width="50" height="30" rx="8" fill="url(#g-towel)" stroke="#0a1931" stroke-width="2" opacity="0.9"/></svg>`,
            "bag": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-bag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><path d="M30 35 C30 25, 40 20, 50 20 C60 20, 70 25, 70 35 L75 80 H25 Z" fill="url(#g-bag)" stroke="#0a1931" stroke-width="2"/><circle cx="50" cy="20" r="4" fill="#ef4444"/><path d="M35 50 c10 5, 20-5, 30 0" fill="none" stroke="#475569" stroke-width="2"/></svg>`,
            "disposable": `<svg class="product-svg" viewBox="0 0 100 100"><circle cx="42" cy="50" r="28" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><ellipse cx="42" cy="50" rx="20" ry="20" fill="none" stroke="#cbd5e1" stroke-width="1"/><path d="M80 25 L80 75" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/><path d="M85 30 L85 70" stroke="#cbd5e1" stroke-width="2"/><path d="M75 35 H85" stroke="#cbd5e1" stroke-width="2"/></svg>`,
            "hotel-soap": `<svg class="product-svg" viewBox="0 0 100 100"><defs><linearGradient id="g-soap" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fae8ff"/><stop offset="100%" stop-color="#d946ef"/></linearGradient></defs><rect x="30" y="25" width="40" height="50" rx="12" fill="url(#g-soap)" stroke="#0a1931" stroke-width="2"/><ellipse cx="50" cy="50" rx="10" ry="15" fill="#f5d0fe" opacity="0.6"/><circle cx="50" cy="35" r="3" fill="#ffffff" opacity="0.9"/></svg>`,
            "slippers": `<svg class="product-svg" viewBox="0 0 100 100"><path d="M30 25 C30 15, 45 15, 45 35 V75 C45 80, 30 80, 30 75 Z" fill="#f1f5f9" stroke="#0a1931" stroke-width="2"/><path d="M55 25 C55 15, 70 15, 70 35 V75 C70 80, 55 80, 55 75 Z" fill="#f1f5f9" stroke="#0a1931" stroke-width="2"/><path d="M30 35 C30 20, 45 20, 45 35 Z" fill="#cbd5e1" stroke="#0a1931" stroke-width="2"/><path d="M55 35 C55 20, 70 20, 70 35 Z" fill="#cbd5e1" stroke="#0a1931" stroke-width="2"/></svg>`,
            "toner": `<svg class="product-svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="40" rx="6" fill="#1e293b" stroke="#0a1931" stroke-width="2"/><rect x="25" y="35" width="50" height="10" rx="2" fill="#000000"/><circle cx="35" cy="55" r="5" fill="#0085ff"/><circle cx="50" cy="55" r="5" fill="#d946ef"/><circle cx="65" cy="55" r="5" fill="#eab308"/></svg>`,
            "pen": `<svg class="product-svg" viewBox="0 0 100 100"><path d="M20 80 L70 30 L80 40 L30 90 Z" fill="#0085ff" stroke="#0a1931" stroke-width="2"/><path d="M70 30 L75 25 L80 30 L75 35 Z" fill="#e2e8f0" stroke="#0a1931" stroke-width="1"/><path d="M20 80 L15 85 L20 90 L25 85 Z" fill="#07162c"/></svg>`,
            "binders": `<svg class="product-svg" viewBox="0 0 100 100"><path d="M25 20 H40 V80 H25 Z" fill="#3b82f6" stroke="#0a1931" stroke-width="2"/><path d="M42 20 H57 V80 H42 Z" fill="#ef4444" stroke="#0a1931" stroke-width="2"/><path d="M59 20 H74 V80 H59 Z" fill="#10b981" stroke="#0a1931" stroke-width="2"/><circle cx="32.5" cy="65" r="4" fill="#ffffff"/><circle cx="49.5" cy="65" r="4" fill="#ffffff"/><circle cx="66.5" cy="65" r="4" fill="#ffffff"/></svg>`
        };

        // 2.5 COLOR SELECTION SYSTEM (For Dispensers)
        const SELECTED_COLORS = {};

        function setProductColor(event, prodId, colorId, newImgPath) {
            if (event) event.stopPropagation();
            SELECTED_COLORS[prodId] = colorId;
            
            // Update image element on product card
            const imgEl = document.getElementById(`prod-img-${prodId}`);
            if (imgEl && newImgPath) {
                imgEl.src = newImgPath;
            }
            
            // Update active class on swatch buttons
            const card = imgEl ? imgEl.closest('.product-card') : null;
            if (card) {
                const swatches = card.querySelectorAll('.color-swatch-btn');
                swatches.forEach(btn => {
                    if (btn.getAttribute('data-color') === colorId) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }

            // Also update modal image if modal is open for this product
            const modalImg = document.getElementById(`modal-img-${prodId}`);
            if (modalImg && newImgPath) {
                modalImg.src = newImgPath;
            }
        }

        // 2.8 COUPON SYSTEM LOGIC
        const COUPONS = {
            // 1. קופון קבוע ללקוחות: 8% הנחה על כל סל הקניות
            "VIP8": { 
                code: "VIP8", 
                category: "permanent", // קוד קבוע
                type: "percent", 
                value: 8, 
                minOrder: 0, 
                desc: "8% הנחה קבועה ללקוחות שיווקים" 
            },
            
            // 2. קופון זמני למוצרים בודדים (מחיר מיוחד למוצר)
            "SPECIALS": { 
                code: "SPECIALS", 
                category: "temporary", // קוד זמני
                type: "item_override", 
                itemPrices: { 
                    "t1": 290, // מתקן גליל t1: ₪290 במקום ₪320
                    "t5": 160, // מתקן סמארט t5: ₪160 במקום ₪190
                    "b5": 380  // מפיץ ריח סוללות b5: ₪380 במקום ₪450
                }, 
                minOrder: 0, 
                desc: "מבצע זמני - מחירי מועדון על מתקנים ומפיצי ריח" 
            }
        };

        let appliedCoupon = null;

        function handleApplyCouponClick() {
            const input = document.getElementById('coupon-code-input');
            const msgEl = document.getElementById('coupon-message');
            if (!input) return;
            
            const res = applyCouponCode(input.value);
            if (msgEl) {
                msgEl.style.display = 'block';
                msgEl.style.color = res.success ? '#059669' : '#ef4444';
                msgEl.textContent = res.message;
            }
            if (res.success) {
                input.value = '';
            }
        }

        function applyCouponCode(codeStr) {
            if (!codeStr) return { success: false, message: 'אנא הזן קוד קופון' };
            const cleanCode = codeStr.trim().toUpperCase();
            
            // Query dynamic database engine first, fallback to static object
            const coupon = (typeof db !== 'undefined' && db.getCoupon(cleanCode)) || COUPONS[cleanCode];
            if (!coupon) {
                return { success: false, message: 'קוד הקופון שהוזן אינו תקין' };
            }

            if (coupon.active === false) {
                return { success: false, message: 'קוד קופון זה אינו פעיל כעת' };
            }

            const rawSubtotal = calculateRawCartSubtotal();
            if (coupon.minOrder && rawSubtotal < coupon.minOrder) {
                return { success: false, message: `קופון זה תקף בהזמנה מעל ₪${coupon.minOrder} (סכום נוכחי לפני מע"מ: ₪${rawSubtotal})` };
            }

            appliedCoupon = coupon;
            renderCartList();
            if (typeof updateCheckoutSummary === 'function') updateCheckoutSummary();
            return { success: true, message: `קופון ${coupon.code} הוחל בהצלחה!` };
        }

        function removeCoupon() {
            appliedCoupon = null;
            const msgEl = document.getElementById('coupon-message');
            if (msgEl) {
                msgEl.style.display = 'none';
                msgEl.textContent = '';
            }
            renderCartList();
            if (typeof updateCheckoutSummary === 'function') updateCheckoutSummary();
        }

        function calculateRawCartSubtotal() {
            return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }

        function calculateCartTotals() {
            const rawSubtotal = calculateRawCartSubtotal();
            let discount = 0;

            if (appliedCoupon) {
                if (rawSubtotal >= (appliedCoupon.minOrder || 0)) {
                    if (appliedCoupon.type === 'percent') {
                        discount = rawSubtotal * (appliedCoupon.value / 100);
                    } else if (appliedCoupon.type === 'fixed') {
                        discount = Math.min(rawSubtotal, appliedCoupon.value);
                    } else if (appliedCoupon.type === 'item_override' && appliedCoupon.itemPrices) {
                        // Calculate total savings for matching items
                        cart.forEach(item => {
                            if (appliedCoupon.itemPrices[item.id] !== undefined) {
                                const specialPrice = appliedCoupon.itemPrices[item.id];
                                if (item.price > specialPrice) {
                                    discount += (item.price - specialPrice) * item.quantity;
                                }
                            }
                        });
                    }
                } else {
                    appliedCoupon = null;
                }
            }

            const subtotalAfterDiscount = Math.max(0, rawSubtotal - discount);
            const vat = subtotalAfterDiscount * 0.18;
            const total = subtotalAfterDiscount + vat;

            return {
                rawSubtotal,
                discount,
                subtotalAfterDiscount,
                vat,
                total
            };
        }

        // 3. CART PERSISTENCE & LONG-TERM MEMORY ENGINE
        const STORAGE_CART_KEY = 'shokim_customer_cart_v2';
        const STORAGE_COUPON_KEY = 'shokim_customer_coupon_v2';
        let cart = [];

        function saveCartToStorage() {
            try {
                localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
                if (appliedCoupon) {
                    localStorage.setItem(STORAGE_COUPON_KEY, JSON.stringify(appliedCoupon));
                } else {
                    localStorage.removeItem(STORAGE_COUPON_KEY);
                }
            } catch (e) {
                console.warn('Could not save cart state to localStorage:', e);
            }
        }

        function loadCartFromStorage() {
            try {
                const savedCart = localStorage.getItem(STORAGE_CART_KEY);
                if (savedCart) {
                    const parsed = JSON.parse(savedCart);
                    if (Array.isArray(parsed)) {
                        // Re-validate and sync with live catalog definitions
                        cart = parsed.filter(item => item && item.id && item.quantity > 0).map(item => {
                            const freshProd = PRODUCTS.find(p => p.id === item.id);
                            if (freshProd) {
                                return {
                                    ...freshProd,
                                    quantity: parseInt(item.quantity, 10) || 1,
                                    activeImage: item.activeImage || freshProd.image,
                                    colorLabel: item.colorLabel || (freshProd.hasColors ? 'שחור' : undefined)
                                };
                            }
                            return item;
                        });
                    }
                }

                const savedCoupon = localStorage.getItem(STORAGE_COUPON_KEY);
                if (savedCoupon) {
                    appliedCoupon = JSON.parse(savedCoupon);
                }
            } catch (e) {
                console.warn('Could not load cart state from localStorage:', e);
                cart = [];
            }
        }

        // Initialize persistent cart immediately
        loadCartFromStorage();

        // Listen for multi-tab cart updates
        window.addEventListener('storage', (e) => {
            if (e.key === STORAGE_CART_KEY || e.key === STORAGE_COUPON_KEY) {
                loadCartFromStorage();
                updateCartCounter();
                renderCartList();
                if (typeof renderCatalog === 'function') renderCatalog();
                if (typeof renderQuickOrderTable === 'function') renderQuickOrderTable();
            }
        });

        function clearCart() {
            cart = [];
            appliedCoupon = null;
            saveCartToStorage();
            updateCartCounter();
            renderCartList();
            if (typeof renderCatalog === 'function') renderCatalog();
            if (typeof renderQuickOrderTable === 'function') renderQuickOrderTable();
        }

        function updateCartCounter() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            const counterEl = document.getElementById('cart-counter');
            if (counterEl) counterEl.textContent = count;
            
            // Sync mobile sticky bar cart badge
            const mobileStickyCounter = document.getElementById('mobile-sticky-cart-count');
            if (mobileStickyCounter) {
                mobileStickyCounter.textContent = count;
            }
        }

        function calculateCartTotal() {
            return calculateCartTotals().total;
        }

        function addToCart(productId, count = 1) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity += count;
            } else {
                cart.push({ ...product, quantity: count });
            }
            saveCartToStorage();
            updateCartCounter();
            renderCartList();
            
            // Pop effect on cart button
            const btn = document.querySelector('.cart-btn');
            if (btn) {
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => btn.style.transform = 'scale(1)', 200);
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCartToStorage();
            updateCartCounter();
            renderCartList();
        }

        function updateCartQty(productId, newQty) {
            const item = cart.find(i => i.id === productId);
            if (!item) return;
            item.quantity = parseInt(newQty, 10);
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCartToStorage();
                updateCartCounter();
                renderCartList();
            }
        }

        function toggleCart(show, shouldUpdateHash = true) {
            const overlay = document.getElementById('cart-overlay');
            if (overlay) {
                if (show) {
                    renderCartList();
                    overlay.classList.add('active');
                } else {
                    overlay.classList.remove('active');
                }
            }
            if (shouldUpdateHash) {
                let currentHash = window.location.hash || '#home';
                if (show) {
                    if (!currentHash.includes('/cart')) {
                        updateHash(currentHash + '/cart');
                    }
                } else {
                    if (currentHash.includes('/cart')) {
                        updateHash(currentHash.replace('/cart', ''));
                    }
                }
            }
        }

        function renderCartList() {
            const container = document.getElementById('cart-items-list');
            const totalEl = document.getElementById('cart-total-amount');
            
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="cart-empty-state">
                        <i class="fa-solid fa-basket-shopping"></i>
                        <p>עגלת הקניות שלך ריקה</p>
                    </div>
                `;
                const subtotalValEl = document.getElementById('cart-subtotal-val');
                const vatValEl = document.getElementById('cart-vat-val');
                const discountRowEl = document.getElementById('cart-discount-row');
                if (subtotalValEl) subtotalValEl.textContent = '₪0';
                if (vatValEl) vatValEl.textContent = '₪0';
                if (discountRowEl) discountRowEl.style.display = 'none';
                if (totalEl) totalEl.textContent = '₪0';
                return;
            }

            let html = '';
            cart.forEach(item => {
                const iconSvg = SVG_TEMPLATES[item.icon] || '';
                const itemImg = item.activeImage || item.image;
                const visualHtml = itemImg 
                    ? `<img src="${itemImg}" alt="${item.name}" width="45" height="45" style="width: 45px; height: 45px; object-fit: contain; aspect-ratio: 1/1; border-radius: 6px;">`
                    : iconSvg;
                const colorBadge = item.hasColors ? `<span style="font-size: 0.72rem; color: #0085ff; font-weight: 700; display: block; margin-top: 2px;">צבע: ${item.colorLabel || 'שחור'}</span>` : '';

                html += `
                    <div class="cart-item">
                        <div class="cart-item-icon">${visualHtml}</div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-pack">${item.pack}</div>
                            ${colorBadge}
                        </div>
                        <div class="cart-item-actions">
                            <div class="cart-item-price">₪${item.price * item.quantity}</div>
                            <div class="quantity-control">
                                <button class="qty-btn" onclick="updateCartQty('${item.id}', ${item.quantity - 1})">-</button>
                                <span class="qty-num">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateCartQty('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')">הסר</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
            
            const totals = calculateCartTotals();
            
            const subtotalValEl = document.getElementById('cart-subtotal-val');
            const vatValEl = document.getElementById('cart-vat-val');
            const discountRowEl = document.getElementById('cart-discount-row');
            const discountValEl = document.getElementById('cart-discount-val');
            
            if (subtotalValEl) subtotalValEl.textContent = `₪${totals.rawSubtotal.toLocaleString('he-IL', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
            if (vatValEl) vatValEl.textContent = `₪${totals.vat.toLocaleString('he-IL', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
            if (totalEl) totalEl.textContent = `₪${totals.total.toLocaleString('he-IL', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
            
            if (totals.discount > 0 && appliedCoupon) {
                if (discountRowEl) discountRowEl.style.display = 'flex';
                if (discountValEl) discountValEl.textContent = `-₪${totals.discount.toLocaleString('he-IL', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
            } else {
                if (discountRowEl) discountRowEl.style.display = 'none';
            }

            // Update Coupon UI elements
            const inputWrap = document.getElementById('coupon-input-wrap');
            const badge = document.getElementById('applied-coupon-badge');
            const codeText = document.getElementById('applied-coupon-code-text');
            const descText = document.getElementById('applied-coupon-desc-text');
            
            if (appliedCoupon && totals.discount > 0) {
                if (inputWrap) inputWrap.style.display = 'none';
                if (badge) {
                    badge.style.display = 'flex';
                    if (codeText) codeText.textContent = appliedCoupon.code;
                    if (descText) descText.textContent = appliedCoupon.desc;
                }
            } else {
                if (inputWrap) inputWrap.style.display = 'flex';
                if (badge) badge.style.display = 'none';
            }
        }

        // WhatsApp Order Generator
        function sendOrderToWhatsApp() {
            if (cart.length === 0) {
                alert('עגלת הקניות ריקה!');
                return;
            }

            const totals = calculateCartTotals();

            let message = 'שלום שמואל, ברצוני לבצע הזמנה מחברת *שיווקים*:\n\n';
            cart.forEach((item, index) => {
                const colorInfo = item.hasColors ? ` (צבע: ${item.colorLabel || 'שחור'})` : '';
                message += `${index + 1}. *${item.name}*${colorInfo} (${item.pack}) — כמות: *${item.quantity}*\n`;
            });
            
            message += `\n*סה\"כ לפני מע\"מ:* ₪${totals.rawSubtotal.toFixed(2)}`;
            if (totals.discount > 0 && appliedCoupon) {
                message += `\n*קופון הנחה (${appliedCoupon.code}):* -₪${totals.discount.toFixed(2)}`;
            }
            message += `\n*מע\"מ (18%):* ₪${totals.vat.toFixed(2)}`;
            message += `\n*סה\"כ לתשלום כולל מע\"מ:* ₪${totals.total.toFixed(2)}\n\n`;
            message += 'אנא חזור אליי לאישור ההזמנה וסגירת פרטי משלוח ותשלום. תודה!';

            // Record order in database
            if (typeof db !== 'undefined') {
                db.addOrder({
                    clientName: "הזמנת סל (וואטסאפ)",
                    clientPhone: "",
                    clientAddress: "",
                    items: cart.map(i => ({ id: i.id, name: i.name, pack: i.pack, price: i.price, quantity: i.quantity })),
                    rawSubtotal: totals.rawSubtotal,
                    discount: totals.discount,
                    couponCode: appliedCoupon ? appliedCoupon.code : null,
                    subtotalAfterDiscount: totals.subtotalAfterDiscount,
                    vat: totals.vat,
                    total: totals.total,
                    paymentMethod: 'whatsapp'
                });
            }

            const url = `https://wa.me/972505178445?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // 4. PORTAL VIEW SWITCHING & SEARCH FILTERS
        let activePortal = '';
        let activeSubCategory = '';
        let searchQuery = '';

        // ============================================================
        // MOBILE-ONLY INFINITE CATEGORY SWIPER ENGINE
        // Desktop uses setupInfiniteScroll (called from renderPortals)
        // Mobile uses this standalone engine below
        // ============================================================
        function scrollMobileCategories(dir) {
            const pGrid = document.getElementById('portals-grid');
            if (!pGrid) return;
            const cardWidth = 180;
            const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
            const delta = (dir === 'right') ? (isRTL ? cardWidth : -cardWidth) : (isRTL ? -cardWidth : cardWidth);
            pGrid.scrollBy({ left: delta, behavior: 'smooth' });
        }

        function getActiveCategoryIndex() {
            const pGrid = document.getElementById('portals-grid');
            if (!pGrid) return 0;
            const maxScroll = pGrid.scrollWidth - pGrid.clientWidth;
            if (maxScroll <= 0) return 0;
            const scrollRatio = Math.min(Math.max(Math.abs(pGrid.scrollLeft) / maxScroll, 0), 1);
            return Math.min(Math.round(scrollRatio * 9), 9);
        }

        function scrollToCatDot(idx) {
            if (window.innerWidth > 600) return;
            const pGrid = document.getElementById('portals-grid');
            if (!pGrid) return;
            const maxScroll = pGrid.scrollWidth - pGrid.clientWidth;
            if (maxScroll <= 0) return;
            const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
            const progress = idx / 9;
            const targetLeft = isRTL ? -(progress * maxScroll) : (progress * maxScroll);
            pGrid.scrollTo({ left: targetLeft, behavior: 'smooth' });
            updateActiveCatDot(idx);
            const badge = document.getElementById('cat-counter-badge');
            if (badge) {
                badge.textContent = `${idx + 1} / 10`;
            }
        }

        function updateActiveCatDot(idx) {
            const dots = document.querySelectorAll('.mobile-categories-dots .cat-dot');
            dots.forEach((dot, i) => {
                if (i === idx) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        function updateActiveCatDotFromScroll() {
            const pGrid = document.getElementById('portals-grid');
            if (!pGrid) return;
            const activeIdx = getActiveCategoryIndex();
            
            const badge = document.getElementById('cat-counter-badge');
            if (badge) {
                badge.textContent = `${activeIdx + 1} / 10`;
            }
            
            updateActiveCatDot(activeIdx);
        }

        function initMobileCategoriesSlider() {
            if (window.innerWidth > 600) return;
            const pGrid = document.getElementById('portals-grid');
            if (!pGrid) return;

            if (pGrid._sliderInitialized) {
                updateActiveCatDotFromScroll();
                return;
            }
            pGrid._sliderInitialized = true;

            // Center initial position smoothly via requestAnimationFrame with zero forced reflow
            setTimeout(() => {
                const maxScroll = pGrid.scrollWidth - pGrid.clientWidth;
                if (maxScroll > 0) {
                    const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
                    const centerScroll = isRTL ? -(0.33 * maxScroll) : (0.33 * maxScroll);
                    pGrid.scrollTo({ left: centerScroll, behavior: 'auto' });
                }
                updateActiveCatDotFromScroll();
            });

            // Scroll listener to update pagination dots naturally in real time
            pGrid.addEventListener('scroll', () => {
                updateActiveCatDotFromScroll();
            }, { passive: true });
        }

        document.addEventListener('DOMContentLoaded', () => {
            if (window.innerWidth <= 600) {
                initMobileCategoriesSlider();
            } else {
                setupInfiniteScroll();
            }
        });

        function switchMode(mode, btn) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            
            document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
            document.getElementById(`view-${mode}`).classList.add('active');

            if (mode === 'quick') {
                renderQuickOrderTable();
            }
            
            if (typeof isHandlingHashChange !== 'undefined' && !isHandlingHashChange) {
                updateHash('#' + mode);
            }
        }

        function filterPortal(portal, btn) {
            // Check if active sub-category filter is set to 'all'
            activeSubCategory = 'all';
            
            if (activePortal === portal) {
                // Toggle off
                activePortal = '';
            } else {
                activePortal = portal;
            }
            
            // Render category gateways (sub-portals) if portal is selected (but not 'all')
            const subGrid = document.getElementById('sub-portals-grid');
            
            // Modern check for mobile layout based on mobile home extra banner or body classes
            const isMobile = document.body.classList.contains('mobile-catalog-active') || 
                             document.body.classList.contains('mobile-quick-active') || 
                             window.innerWidth <= 600;
            
            if (activePortal) {
                // On mobile: hide the entire slider wrapper (grid + dots + arrows)
                if (isMobile) {
                    document.body.classList.add('mobile-in-category');
                    const wrapper = document.querySelector('.portals-grid-wrapper');
                    if (wrapper) wrapper.style.display = 'none';
                    const dotsBar = document.getElementById('mobile-categories-dots');
                    if (dotsBar) dotsBar.style.display = 'none';
                    const backText = document.getElementById('back-btn-text');
                    if (backText) backText.textContent = 'חזרה לקטגוריות';
                } else {
                    if (activePortal !== 'all') {
                        document.getElementById('portals-grid').style.display = 'none';
                    } else {
                        document.getElementById('portals-grid').style.display = 'grid';
                    }
                }
                
                if (activePortal !== 'all') {
                    // Fetch categories belonging to active portal
                    const categoriesToShow = Object.keys(CATEGORIES).filter(catId => {
                        return PRODUCTS.some(p => p.category === catId && p.portals.includes(activePortal));
                    });
                    
                    let subHtml = '';
                    categoriesToShow.forEach(catId => {
                        const cat = CATEGORIES[catId];
                        subHtml += `
                            <div class="sub-portal-card ${activeSubCategory === catId ? 'active' : ''}" onclick="filterSubCategory('${catId}', this)">
                                <div class="sub-portal-card-icon"><i class="fa-solid ${cat.fa}"></i></div>
                                <div class="sub-portal-card-title">${cat.name}</div>
                                <div class="sub-portal-card-arrow"><i class="fa-solid fa-arrow-left"></i></div>
                            </div>
                        `;
                    });
                    
                    subGrid.innerHTML = subHtml;
                    subGrid.style.display = 'grid';
                    document.getElementById('active-portal-header').style.display = 'flex';
                    
                    // Safe dynamic title text generation to prevent ReferenceError (since PORTALS array is not defined)
                    let activeTitle = 'כל המוצרים';
                    if (activePortal === 'institution') activeTitle = 'ציוד למוסד';
                    if (activePortal === 'home') activeTitle = 'מוצרים לבית';
                    if (activePortal === 'bb') activeTitle = 'מוצרים לצימרים';
                    if (activePortal === 'office') activeTitle = 'ציוד למשרד';
                    
                    document.getElementById('active-portal-title-text').textContent = activeTitle;
                } else {
                    subGrid.style.display = 'none';
                    document.getElementById('active-portal-header').style.display = 'none';
                }
                
                // Sync URL hash
                if (typeof isHandlingHashChange !== 'undefined' && !isHandlingHashChange) {
                    updateHash('#catalog/' + activePortal);
                }
            } else {
                // activePortal is empty string (homepage catalog mode selected)
                document.getElementById('portals-grid').style.display = 'grid';
                subGrid.style.display = 'none';
                document.getElementById('active-portal-header').style.display = 'none';
                const backText = document.getElementById('back-btn-text');
                if (backText) backText.textContent = 'חזרה למסך הבית';
                
                // Sync URL hash
                if (typeof isHandlingHashChange !== 'undefined' && !isHandlingHashChange) {
                    updateHash('#catalog');
                }
            }
            
            // Mark active portal card
            document.querySelectorAll('.portal-card').forEach(c => c.classList.remove('active'));
            if (btn) btn.classList.add('active');
            
            renderCatalog();
            if (isMobile && activePortal) {
                // Scroll to catalog container so products are immediately visible
                setTimeout(() => {
                    const cat = document.getElementById('catalog-container');
                    if (cat) cat.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Back to main portal selector screen
        function goBackToPortals() {
            activePortal = '';
            activeSubCategory = '';
            
            // Show main portals and welcome banner
            const isMobile = window.innerWidth <= 600;
            if (isMobile) {
                document.body.classList.remove('mobile-in-category');
                // Restore the slider wrapper and dots
                const wrapper = document.querySelector('.portals-grid-wrapper');
                if (wrapper) wrapper.style.display = '';
                const dotsBar = document.getElementById('mobile-categories-dots');
                if (dotsBar) dotsBar.style.display = '';
                document.getElementById('portals-grid').style.display = 'flex';
            } else {
                document.getElementById('portals-grid').style.display = 'grid';
            }
            document.getElementById('active-portal-header').style.display = 'none';
            document.getElementById('sub-portals-grid').style.display = 'none';
            
            // Remove active classes from main portals
            document.querySelectorAll('.portal-card').forEach(c => c.classList.remove('active'));
            
            renderCatalog();
            
            if (typeof isHandlingHashChange !== 'undefined' && !isHandlingHashChange) {
                updateHash('#home');
            }
        }

        // Render Sub-Category Portals dynamically (Smaller matching main design)
        function renderSubPortals() {
            const subGrid = document.getElementById('sub-portals-grid');
            if (!activePortal || activePortal === 'all') {
                subGrid.style.display = 'none';
                return;
            }
            
            const availableCategories = [];
            PRODUCTS.forEach(p => {
                if ((activePortal === 'all' || p.portals.includes(activePortal)) && !availableCategories.includes(p.category)) {
                    availableCategories.push(p.category);
                }
            });

            if (availableCategories.length <= 1) {
                subGrid.style.display = 'none';
                return;
            }

            subGrid.style.display = 'grid';
            
            // Set 'active' class on the card only if activeSubCategory is matching
            let html = `
                <div class="sub-portal-card ${activeSubCategory === 'all' ? 'active' : ''}" onclick="filterSubCategory('all', this)">
                    <div class="sub-portal-card-icon"><i class="fa-solid fa-star"></i></div>
                    <div class="sub-portal-card-title">כל המוצרים</div>
                    <div class="sub-portal-card-arrow"><i class="fa-solid fa-arrow-left"></i></div>
                </div>
            `;

            availableCategories.forEach(catId => {
                const cat = CATEGORIES[catId];
                if (cat) {
                    html += `
                        <div class="sub-portal-card ${activeSubCategory === catId ? 'active' : ''}" onclick="filterSubCategory('${catId}', this)">
                            <div class="sub-portal-card-icon"><i class="fa-solid ${cat.fa}"></i></div>
                            <div class="sub-portal-card-title">${cat.name}</div>
                            <div class="sub-portal-card-arrow"><i class="fa-solid fa-arrow-left"></i></div>
                        </div>
                    `;
                }
            });
            subGrid.innerHTML = html;
            bindCursorHover();
        }

        // Filter by Sub-Category
        function filterSubCategory(catId, btn) {
            document.querySelectorAll('.sub-portal-card').forEach(c => c.classList.remove('active'));
            if (btn) btn.classList.add('active');
            
            activeSubCategory = catId;
            renderCatalog();

            // Smooth scroll to catalog
            setTimeout(() => {
                const el = document.getElementById('catalog-container');
                if (el) {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 50);
        }

        // Get clean mobile product names (User request for clean, short titles on mobile)
        function getProductDisplayName(prod) {
            const isMobile = window.innerWidth <= 600;
            if (!isMobile) return prod.name;
            
            const shortNames = {
                t1: "מתקן נייר מגבת גליל",
                t2: "מתקן צץ-רץ מיני",
                t3: "מתקן צץ-רץ שולחני",
                t4: "מתקן תחליב ידיים",
                t5: "מתקן SmartOne",
                t6: "מתקן נייר טואלט צץ-רץ",
                t7: "מגבות נייר TAD",
                p1: "נייר צץ-רץ קרפ",
                p2: "נייר צץ-רץ",
                p3: "נייר צץ-רץ פרימיום",
                p4: "מגבות נייר בגליל",
                p5: "מגבות נייר בגליל",
                p6: "נייר טואלט צץ-רץ",
                p_smartone: "נייר טואלט SmartOne",
                p7: "נייר טואלט קומפקט",
                p8: "נייר טואלט 'דואט'",
                p9: "סדיני נייר למיטות",
                p10: "סדיני נייר פרימיום",
                p11: "דלי מגבוני ניקוי",
                c1: "חומר לשטיפת רצפות",
                c2: "אקנומיקה מרוכזת",
                c3: "נוזל כלים איכותי",
                c4: "תרסיס לניקוי חלונות",
                c5: "מנקה אסלות עוצמתי",
                c6: "חומר ניקוי רב-תכליתי",
                c7: "מסיר אבנית וחלודה",
                c8: "תחליב ידיים מבושם",
                c9: "תחליף קצף ידיים",
                c10: "ג'ל חיטוי לידיים",
                e1: "מטאטא רגיל",
                e1_stick: "מקל עץ למטאטא/מגב",
                e2: "מטאטא אולם רחב",
                e3: "מגב רצפה",
                e4: "מגב רצפה תעשייתי",
                e5: "יעה פלסטיק",
                e6: "דלי ניקוי פלסטיק",
                e7: "סחבות רצפה מיקרופייבר",
                e8: "ספוג הפלא",
                e9: "מטליות מיקרופייבר",
                e10: "כריות יפניות לניקוי",
                b1: "שקיות אשפה 'חרצית'",
                b2: "שקיות אשפה 'כלנית'",
                b3: "שקיות אשפה קטנות",
                b4: "מפות שולחן קריסטליות",
                b5: "מפיץ ריח BATTERY S",
                b6: "פחית ג'ל ריח",
                b7: "קליפס סיליקון לאסלה",
                b8: "רשתות ריחניות למשתנות",
                d1: "צלחות חד-פעמיות קטנות",
                d2: "צלחות חד-פעמיות גדולות",
                d3: "מרקיות חד-פעמיות",
                d4: "לפתניות חד-פעמיות",
                d5: "מזלגות חד-פעמיים",
                d6: "סכינים חד-פעמיים",
                d7: "כפות חד-פעמיות",
                d8: "כפיות חד-פעמיות",
                h1: "מגבות גוף לצימרים",
                h2: "שמפו אישי קטן",
                h3: "ג'ל רחצה אישי מבושם",
                h4: "כפכפים חד-פעמיים",
                o1: "נייר צילום A4",
                o2: "טונר שחור למדפסת",
                o3: "עטי פיילוט Pilot",
                o4: "קלסר משרדי עבה",
                s1: "מפיץ ריח Lilya Tab",
                s2: "מפיץ ריח Grand Salon",
                s3: "מפיץ ריח Lounge App",
                s4: "מפיץ ריח Pro App"
            };
            
            return shortNames[prod.id] || prod.name;
        }

        // Smart Hebrew & English search text normalizer (handles final letters, apostrophes, hyphens, and common transliterations)
        function normalizeHebrewSearch(str) {
            if (!str) return '';
            return str
                .toLowerCase()
                .replace(/['"״׳`\-–—_.,\\/()]/g, ' ')
                .replace(/ם/g, 'מ')
                .replace(/ן/g, 'נ')
                .replace(/ץ/g, 'צ')
                .replace(/ף/g, 'פ')
                .replace(/ך/g, 'כ')
                .replace(/אקנומיקה/g, 'אקונומיקה')
                .replace(/\s+/g, ' ')
                .trim();
        }

        // Render the Grid-based Catalog
        function renderCatalog() {
            const container = document.getElementById('catalog-container');
            if (!container) return;
            container.innerHTML = '';

            const effPortal = activePortal || 'all';
            const effSubCat = (activeSubCategory && activeSubCategory !== '') ? activeSubCategory : 'all';

            // Show a friendly visual guide if no portal (category) is active and no sub-category or search is entered
            if (!activePortal && (!activeSubCategory || activeSubCategory === 'all' || activeSubCategory === '') && !searchQuery) {
                const isMobile = window.innerWidth <= 600;
                const desktopBannerHtml = `
                    <div class="empty-state-banner">
                        <!-- RIGHT SIDE: BRAND LOGO & CORE SLOGAN -->
                        <div class="banner-brand-right">
                            <div class="banner-logo-main">
                                <span class="banner-logo-text">שיווקים</span>
                                <span class="banner-logo-arrow"></span>
                            </div>
                            <div class="banner-logo-sub">למוסד • לבית • למשרד • לצימרים</div>
                            <div class="banner-punchline-pill">
                                <i class="fa-solid fa-circle-check"></i>
                                <span>פתרון אחד. ספק אחד. שקט תפעולי.</span>
                            </div>
                            <div class="banner-trust-tags">
                                <span>התאמה אישית</span>
                                <span class="trust-dot">•</span>
                                <span>שירות מהיר</span>
                                <span class="trust-dot">•</span>
                                <span>מחירים תחרותיים</span>
                                <span class="trust-dot">•</span>
                                <span>אספקה אמינה</span>
                            </div>
                        </div>

                        <!-- LEFT SIDE: STRONG B2B / INSTITUTIONAL BRANDING & SUPPLY SCOPE -->
                        <div class="banner-brand-left">
                            <div class="brand-badge-pill">
                                <i class="fa-solid fa-boxes-stacked"></i> מרכז אספקה מקצועי
                            </div>
                            <h3 class="brand-hero-title">פתרונות אספקה מתקדמים לעסקים ומוסדות</h3>
                            <div class="brand-hero-subtitle">כל מה שהעסק שלכם צריך לשוטף — במקום אחד.</div>
                            <p class="brand-hero-desc">
                                אנחנו מספקים מגוון רחב של מוצרים וציוד תפעולי, בהתאמה לצרכים שלכם — עם שירות מהיר, אספקה יעילה וחיסכון אמיתי בעלויות.
                            </p>

                            <div class="brand-supply-section">
                                <div class="supply-title">מה אנחנו מספקים?</div>
                                <div class="supply-grid">
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מוצרי נייר וניגוב</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>חומרי ניקוי מקצועיים</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מוצרים חד־פעמיים</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>ציוד משרדי</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מתקנים וציוד תפעולי</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                const mobileBannerHtml = `
                    <div class="mobile-branding-card">
                        <!-- Mobile Brand Header (Logo & Slogan) -->
                        <div class="mobile-brand-top">
                            <div class="banner-logo-main">
                                <span class="banner-logo-text">שיווקים</span>
                                <span class="banner-logo-arrow"></span>
                            </div>
                            <div class="banner-logo-sub">למוסד • לבית • למשרד • לצימרים</div>
                            <div class="banner-punchline-pill">
                                <i class="fa-solid fa-circle-check"></i>
                                <span>פתרון אחד. ספק אחד. שקט תפעולי.</span>
                            </div>
                            <div class="banner-trust-tags">
                                <span>התאמה אישית</span>
                                <span class="trust-dot">•</span>
                                <span>שירות מהיר</span>
                                <span class="trust-dot">•</span>
                                <span>מחירים תחרותיים</span>
                                <span class="trust-dot">•</span>
                                <span>אספקה אמינה</span>
                            </div>
                        </div>

                        <div class="mobile-brand-divider"></div>

                        <!-- Mobile Business Solutions & Supply Scope -->
                        <div class="mobile-brand-body">
                            <div class="brand-badge-pill">
                                <i class="fa-solid fa-boxes-stacked"></i> מרכז אספקה מקצועי
                            </div>
                            <h3 class="brand-hero-title">פתרונות אספקה מתקדמים לעסקים ומוסדות</h3>
                            <div class="brand-hero-subtitle">כל מה שהעסק שלכם צריך לשוטף — במקום אחד.</div>
                            <p class="brand-hero-desc">
                                אנחנו מספקים מגוון רחב של מוצרים וציוד תפעולי, בהתאמה לצרכים שלכם — עם שירות מהיר, אספקה יעילה וחיסכון אמיתי בעלויות.
                            </p>

                            <div class="brand-supply-section">
                                <div class="supply-title">מה אנחנו מספקים?</div>
                                <div class="supply-grid">
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מוצרי נייר וניגוב</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>חומרי ניקוי מקצועיים</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מוצרים חד־פעמיים</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>ציוד משרדי</span></div>
                                    <div class="supply-item"><i class="fa-solid fa-circle-check"></i> <span>מתקנים וציוד תפעולי</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                container.innerHTML = `
                    ${isMobile ? mobileBannerHtml : desktopBannerHtml}
                    <div class="banner-features-bar">
                        <div class="feature-item">
                            <i class="fa-solid fa-truck-fast"></i>
                            <span>משלוחים מהירים</span>
                        </div>
                        <div class="feature-divider"></div>
                        <div class="feature-item">
                            <i class="fa-solid fa-handshake-angle"></i>
                            <span>שירות אישי</span>
                        </div>
                        <div class="feature-divider"></div>
                        <div class="feature-item">
                            <i class="fa-solid fa-award"></i>
                            <span>איכות מנצחת</span>
                        </div>
                    </div>
                `;
                return;
            }

            // Group products by category
            let totalFoundInSearch = 0;
            const isSearching = !!searchQuery.trim();
            const cleanQuery = normalizeHebrewSearch(searchQuery);
            const searchTerms = cleanQuery.split(/\s+/).filter(t => t.length > 0);

            Object.keys(CATEGORIES).forEach(catId => {
                const catInfo = CATEGORIES[catId];
                
                // If not searching, filter out categories not matching active sub-category filter
                if (!isSearching && effSubCat !== 'all' && catId !== effSubCat) return;
                
                // Filter products belonging to this category, matching search titles/known names and active portal
                const catProducts = PRODUCTS.filter(p => {
                    if (p.category !== catId) return false;
                    
                    if (!isSearching) {
                        return effPortal === 'all' || (p.portals && p.portals.includes(effPortal));
                    }
                    
                    // Smart normalized Title / Category / Pack / Keywords matching
                    const prodName = normalizeHebrewSearch(p.name);
                    const catName = normalizeHebrewSearch(catInfo.name);
                    const packInfo = normalizeHebrewSearch(p.pack);
                    const keywords = Array.isArray(p.keywords) ? p.keywords.map(k => normalizeHebrewSearch(k)).join(' ') : '';
                    const searchPool = `${prodName} ${catName} ${packInfo} ${keywords}`;

                    return searchTerms.every(term => searchPool.includes(term));
                });

                if (catProducts.length === 0) return; // Skip categories with no matching items
                totalFoundInSearch += catProducts.length;

                let catHtml = `
                    <div class="category-block" id="cat-section-${catId}">
                        <h3 class="category-title">
                            ${catInfo.icon} ${catInfo.name}
                            <span>(${catProducts.length} מוצרים)</span>
                        </h3>
                        <div class="products-grid">
                `;

                catProducts.forEach(prod => {
                    const iconSvg = SVG_TEMPLATES[prod.icon] || '';
                    const activeColor = SELECTED_COLORS[prod.id] || 'black';
                    const activeImg = (activeColor === 'white' && prod.image_white) ? prod.image_white : prod.image;
                    
                    const visualHtml = prod.image 
                        ? `<img src="${activeImg}" alt="${prod.name}" class="product-img" id="prod-img-${prod.id}" width="200" height="160" loading="lazy" decoding="async">`
                        : iconSvg;

                    const colorSwatchesHtml = prod.hasColors ? `
                        <div class="color-swatch-container">
                            <span class="color-swatch-title">צבע:</span>
                            <div class="color-swatches-list">
                                <button class="color-swatch-btn ${activeColor === 'black' ? 'active' : ''}" 
                                        data-color="black"
                                        onclick="setProductColor(event, '${prod.id}', 'black', '${prod.image}')" 
                                        title="שחור" 
                                        style="background-color: #111827; border-color: #111827;">
                                </button>
                                <button class="color-swatch-btn ${activeColor === 'white' ? 'active' : ''}" 
                                        data-color="white"
                                        onclick="setProductColor(event, '${prod.id}', 'white', '${prod.image_white}')" 
                                        title="לבן" 
                                        style="background-color: #ffffff; border-color: #cbd5e1;">
                                </button>
                            </div>
                        </div>
                    ` : '';

                    const cartItem = cart.find(item => item.id === prod.id);
                    const qty = cartItem ? cartItem.quantity : 0;
                    
                    // Specific direct link for whatsapp single product
                    const waText = encodeURIComponent(`שלום שמואל, רציתי לקבל פרטים / להזמין מוצר: *${prod.name}* (${prod.pack})`);
                    const waLink = `https://wa.me/972505178445?text=${waText}`;

                    const displayName = getProductDisplayName(prod);
                    const isMobile = window.innerWidth <= 600;

                    catHtml += `
                        <div class="product-card" onmousemove="updateCardGlow(event, this)">
                            <div class="product-card-glow"></div>
                            <div class="product-visual" onclick="showProductDetails('${prod.id}')" style="cursor: pointer;">
                                ${visualHtml}
                                ${getProductBadge(prod)}
                            </div>
                            <div class="product-info">
                                <h4 class="product-name" title="${prod.name}" onclick="showProductDetails('${prod.id}')" style="cursor: pointer;">${displayName}</h4>
                                
                                <div class="product-pack">
                                    <i class="fa-solid fa-box-open"></i>
                                    <span>${prod.pack}</span>
                                </div>
                                
                                ${colorSwatchesHtml}
                                
                                <button class="read-more-link" onclick="showProductDetails('${prod.id}')">
                                    <span>מידע ומפרט</span>
                                    <i class="fa-solid fa-chevron-left" style="font-size: 0.6rem; margin-right: 4px; display: inline-block;"></i>
                                </button>
                                
                                <div class="product-price-row">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.05rem; direction: rtl; text-align: right;">
                                        <div class="product-price"><span>₪</span>${prod.price}</div>
                                        <span style="font-size: 0.65rem; color: var(--text-muted); font-weight: 700; display: block;">ללא מע"מ</span>
                                    </div>
                                    ${qty === 0 ? `
                                        <button class="add-to-cart-btn" onclick="addCatalogQtyToCart('${prod.id}', event)" style="width: auto; padding: 0.5rem 1.1rem; font-size: 0.88rem; border-radius: var(--border-radius-sm); display: flex; align-items: center; gap: 0.3rem;">
                                            <i class="fa-solid fa-cart-plus"></i> הוסף
                                        </button>
                                    ` : `
                                        <div class="quantity-control" style="width: 100px; height: 32px;">
                                            <button class="qty-btn" onclick="changeCatalogQty('${prod.id}', -1, this)">-</button>
                                            <input type="text" class="qty-num" value="${qty}" id="cat-qty-${prod.id}" onchange="setCatalogQty('${prod.id}', this.value)" style="font-size: 14px; height: 100%; border: none;">
                                            <button class="qty-btn" onclick="changeCatalogQty('${prod.id}', 1, this)">+</button>
                                        </div>
                                    `}
                                </div>
                            </div>
                        </div>
                    `;
                });

                catHtml += `
                        </div>
                    </div>
                `;
                container.innerHTML += catHtml;
            });

            // If user searched and nothing matched across all categories
            if (isSearching && totalFoundInSearch === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 3.5rem 1.5rem; background: #ffffff; border-radius: var(--border-radius-lg); border: 1px solid var(--color-border); margin: 1.5rem 0; box-shadow: var(--shadow-soft); direction: rtl;">
                        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.8rem; color: var(--color-blue); margin-bottom: 1rem; opacity: 0.6; display: block;"></i>
                        <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.5rem;">לא נמצאו מוצרים התואמים לחיפוש "${searchQuery}"</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.2rem;">נסו לחפש לפי כותרת המוצר (למשל: סבון, מגבת, שקיות, Tork, כוסות) או לפי קטגוריה</p>
                        <button onclick="clearSearch()" style="background: var(--color-navy); color: #ffffff; border: none; padding: 0.65rem 1.6rem; border-radius: var(--border-radius-sm); font-weight: 700; font-family: var(--font-main); cursor: pointer; transition: var(--transition-smooth);">נקה חיפוש והצג הכל</button>
                    </div>
                `;
            }
        }

        // Live input glow tracking (Handcrafted custom UI detail)
        function updateCardGlow(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }

        function changeCatalogQty(id, diff, btn) {
            const cartItem = cart.find(item => item.id === id);
            let currentQty = cartItem ? cartItem.quantity : 0;
            let newQty = Math.max(0, currentQty + diff);
            
            if (newQty <= 0) {
                removeFromCart(id);
            } else {
                if (cartItem) {
                    cartItem.quantity = newQty;
                    updateCartCounter();
                    renderCartList();
                } else {
                    addToCart(id, newQty);
                }
            }
            renderCatalog();
        }

        function setCatalogQty(id, value) {
            let val = parseInt(value, 10) || 0;
            val = Math.max(0, val);
            if (val <= 0) {
                removeFromCart(id);
            } else {
                const cartItem = cart.find(item => item.id === id);
                if (cartItem) {
                    cartItem.quantity = val;
                    updateCartCounter();
                    renderCartList();
                } else {
                    addToCart(id, val);
                }
            }
            renderCatalog();
        }

        function addCatalogQtyToCart(id, event) {
            addToCart(id, 1);

            // Trigger animation on the clicked button
            const btn = event ? event.currentTarget : null;
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.classList.add('btn-added-state');
                btn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
                btn.disabled = true;

                // Animate flying particle
                createCartFlyEffect(btn, 1);

                setTimeout(() => {
                    btn.classList.remove('btn-added-state');
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    renderCatalog();
                }, 400);
            } else {
                renderCatalog();
            }
        }

        // Flying particle Fly-to-Cart effect
        function createCartFlyEffect(originElement, count) {
            const rect = originElement.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;

            // Target is the floating cart button or header cart icon
            const cartBtn = document.querySelector('.floating-cart') || document.querySelector('.cart-btn');
            if (!cartBtn) return;
            
            const targetRect = cartBtn.getBoundingClientRect();
            const targetX = targetRect.left + targetRect.width / 2;
            const targetY = targetRect.top + targetRect.height / 2;

            // Create flyer particle
            const flyer = document.createElement('div');
            flyer.className = 'cart-flyer';
            flyer.innerHTML = `+${count}`;
            flyer.style.left = `${startX - 16}px`;
            flyer.style.top = `${startY - 16}px`;
            document.body.appendChild(flyer);

            // Trigger reflow
            flyer.offsetWidth;

            // Translate flyer to target
            flyer.style.transform = `translate(${targetX - startX}px, ${targetY - startY}px) scale(0.4)`;
            flyer.style.opacity = '0';

            // Clean up and animate cart icon
            setTimeout(() => {
                flyer.remove();
                
                // Add pop animation to header cart button
                cartBtn.classList.remove('cart-pop-active');
                void cartBtn.offsetWidth; // Trigger reflow to restart animation
                cartBtn.classList.add('cart-pop-active');
                
                setTimeout(() => {
                    cartBtn.classList.remove('cart-pop-active');
                }, 550);
            }, 800);
        }

        // Render the Express Spreadsheet table
        function renderQuickOrderTable() {
            const tbody = document.getElementById('quick-order-tbody');
            tbody.innerHTML = '';
            
            const cleanQuery = normalizeHebrewSearch(searchQuery);
            const searchTerms = cleanQuery.split(/\s+/).filter(t => t.length > 0);
            
            let filtered = PRODUCTS;
            if (searchTerms.length > 0) {
                filtered = PRODUCTS.filter(prod => {
                    const catInfo = CATEGORIES[prod.category] || { name: '' };
                    const prodName = normalizeHebrewSearch(prod.name);
                    const catName = normalizeHebrewSearch(catInfo.name);
                    const packInfo = normalizeHebrewSearch(prod.pack);
                    const keywords = Array.isArray(prod.keywords) ? prod.keywords.map(k => normalizeHebrewSearch(k)).join(' ') : '';
                    const searchPool = `${prodName} ${catName} ${packInfo} ${keywords}`;

                    return searchTerms.every(term => searchPool.includes(term));
                });
            }
            
            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 1.1rem; font-weight: 500;">לא נמצאו מוצרים תואמים לחיפוש.</td></tr>`;
                updateQuickTotal();
                return;
            }
            
            filtered.forEach((prod, index) => {
                const cartItem = cart.find(item => item.id === prod.id);
                const qty = cartItem ? cartItem.quantity : 0;
                
                tbody.innerHTML += `
                    <tr>
                        <td class="col-icon">${index + 1}</td>
                        <td class="col-name">${prod.name}</td>
                        <td class="col-pack">${prod.pack}</td>
                        <td class="col-price">₪${prod.price}</td>
                        <td class="col-qty">
                            <div class="quantity-control" style="width: 120px;">
                                <button class="qty-btn" onclick="changeQuickQty('${prod.id}', -1)">-</button>
                                <input type="text" class="qty-num" value="${qty}" id="quick-qty-${prod.id}" onchange="updateQuickTotal()">
                                <button class="qty-btn" onclick="changeQuickQty('${prod.id}', 1)">+</button>
                            </div>
                        </td>
                    </tr>
                `;
            });
            updateQuickTotal();
        }

        function changeQuickQty(id, diff) {
            const input = document.getElementById(`quick-qty-${id}`);
            let val = parseInt(input.value, 10) || 0;
            val = Math.max(0, val + diff);
            input.value = val;
            updateQuickTotal();
        }

        function updateQuickTotal() {
            let total = 0;
            PRODUCTS.forEach(prod => {
                const input = document.getElementById(`quick-qty-${prod.id}`);
                if (input) {
                    const val = parseInt(input.value, 10) || 0;
                    total += val * prod.price;
                }
            });
            document.getElementById('quick-total-price').textContent = `₪${total}`;
        }

        // Add items selected in quick order to the main shopping cart
        function addQuickItemsToCart() {
            let addedCount = 0;
            PRODUCTS.forEach(prod => {
                const input = document.getElementById(`quick-qty-${prod.id}`);
                if (input) {
                    const val = parseInt(input.value, 10) || 0;
                    if (val > 0) {
                        // Reset existing cart quantity for this product and add new amount
                        const existingIdx = cart.findIndex(item => item.id === prod.id);
                        if (existingIdx !== -1) {
                            cart[existingIdx].quantity = val;
                        } else {
                            cart.push({ ...prod, quantity: val });
                        }
                        addedCount++;
                    }
                }
            });
            saveCartToStorage();
            updateCartCounter();
            renderCartList();
            if (addedCount > 0) {
                alert('הפריטים נוספו בהצלחה לעגלת הקניות!');
            }
        }

        // ==========================================
        // UNIFIED CHECKOUT FLOW & PAYMENT SYSTEM
        // ==========================================
        let checkoutSource = 'cart'; // 'cart', 'quick', or 'single'
        let checkoutSingleItem = null;
        let checkoutAmount = 0;

        // Start Cart Checkout
        function startCartCheckout() {
            if (cart.length === 0) {
                alert('העגלה ריקה!');
                return;
            }
            checkoutSource = 'cart';
            checkoutAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            openCheckoutDetailsModal(checkoutAmount);
        }

        // Start Quick Order Table Checkout
        function startQuickCheckout() {
            let selectedCount = 0;
            PRODUCTS.forEach(prod => {
                const input = document.getElementById(`quick-qty-${prod.id}`);
                if (input) {
                    const val = parseInt(input.value, 10) || 0;
                    if (val > 0) {
                        selectedCount += val;
                    }
                }
            });

            if (selectedCount === 0) {
                alert('אנא בחר לפחות מוצר אחד להזמנה (שנה כמויות מעל 0)');
                return;
            }

            checkoutSource = 'quick';
            // Calculate total price of quick items
            let total = 0;
            PRODUCTS.forEach(prod => {
                const input = document.getElementById(`quick-qty-${prod.id}`);
                if (input) {
                    const val = parseInt(input.value, 10) || 0;
                    if (val > 0) {
                        total += (prod.price * val);
                    }
                }
            });
            checkoutAmount = total;
            openCheckoutDetailsModal(checkoutAmount);
        }

        // Start Single Product Card Checkout
        function checkoutSingleProduct(prodId) {
            const prod = PRODUCTS.find(p => p.id === prodId);
            if (!prod) return;

            const input = document.getElementById(`cat-qty-${prodId}`);
            let qty = 1;
            if (input) {
                qty = parseInt(input.value, 10) || 1;
            }

            checkoutSingleItem = { ...prod, quantity: qty };
            checkoutSource = 'single';
            checkoutAmount = prod.price * qty;
            openCheckoutDetailsModal(checkoutAmount);
        }

        // Open/Close Checkout Details Modal
        function openCheckoutDetailsModal(amount, shouldUpdateHash = true) {
            let totals;
            if (checkoutSource === 'cart') {
                totals = calculateCartTotals();
            } else if (checkoutSource === 'single' && checkoutSingleItem) {
                const rawSubtotal = checkoutSingleItem.price * checkoutSingleItem.quantity;
                let discount = 0;
                if (appliedCoupon) {
                    if (appliedCoupon.type === 'percent') {
                        discount = rawSubtotal * (appliedCoupon.value / 100);
                    } else if (appliedCoupon.type === 'fixed') {
                        discount = Math.min(rawSubtotal, appliedCoupon.value);
                    } else if (appliedCoupon.type === 'item_override' && appliedCoupon.itemPrices && appliedCoupon.itemPrices[checkoutSingleItem.id]) {
                        const sp = appliedCoupon.itemPrices[checkoutSingleItem.id];
                        if (checkoutSingleItem.price > sp) {
                            discount = (checkoutSingleItem.price - sp) * checkoutSingleItem.quantity;
                        }
                    }
                }
                const subAfter = Math.max(0, rawSubtotal - discount);
                const vat = subAfter * 0.18;
                totals = { rawSubtotal, discount, subtotalAfterDiscount: subAfter, vat, total: subAfter + vat };
            } else {
                const rawSubtotal = amount || 0;
                let discount = 0;
                if (appliedCoupon) {
                    if (appliedCoupon.type === 'percent') {
                        discount = rawSubtotal * (appliedCoupon.value / 100);
                    } else if (appliedCoupon.type === 'fixed') {
                        discount = Math.min(rawSubtotal, appliedCoupon.value);
                    }
                }
                const subAfter = Math.max(0, rawSubtotal - discount);
                const vat = subAfter * 0.18;
                totals = { rawSubtotal, discount, subtotalAfterDiscount: subAfter, vat, total: subAfter + vat };
            }
            
            checkoutAmount = totals.total;

            const subtotalEl = document.getElementById('checkout-subtotal-val');
            const discountRowEl = document.getElementById('checkout-discount-row');
            const discountValEl = document.getElementById('checkout-discount-val');
            const vatEl = document.getElementById('checkout-vat-val');
            const totalEl = document.getElementById('checkout-summary-amount');
            
            if (subtotalEl) subtotalEl.textContent = `₪${totals.rawSubtotal.toLocaleString('he-IL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            
            if (totals.discount > 0 && appliedCoupon) {
                if (discountRowEl) discountRowEl.style.display = 'flex';
                if (discountValEl) discountValEl.textContent = `-₪${totals.discount.toLocaleString('he-IL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            } else {
                if (discountRowEl) discountRowEl.style.display = 'none';
            }

            if (vatEl) vatEl.textContent = `₪${totals.vat.toLocaleString('he-IL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            if (totalEl) totalEl.textContent = `₪${totals.total.toLocaleString('he-IL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            
            document.getElementById('checkout-details-modal').style.display = 'flex';
            if (shouldUpdateHash) {
                const currentHash = window.location.hash || '#catalog';
                if (!currentHash.includes('/checkout')) {
                    updateHash(currentHash + '/checkout');
                }
            }
        }

        function closeCheckoutDetailsModal(shouldUpdateHash = true) {
            const modalEl = document.getElementById('checkout-details-modal');
            if (modalEl) {
                modalEl.style.display = 'none';
            }
            if (shouldUpdateHash) {
                const currentHash = window.location.hash;
                if (currentHash && currentHash.includes('/checkout')) {
                    updateHash(currentHash.split('/checkout')[0]);
                }
            }
        }


        // Get checkout items list based on source
        function getCheckoutItems() {
            if (checkoutSource === 'single') {
                return [checkoutSingleItem];
            } else if (checkoutSource === 'cart') {
                return cart;
            } else if (checkoutSource === 'quick') {
                let items = [];
                PRODUCTS.forEach(prod => {
                    const input = document.getElementById(`quick-qty-${prod.id}`);
                    if (input) {
                        const val = parseInt(input.value, 10) || 0;
                        if (val > 0) {
                            items.push({ ...prod, quantity: val });
                        }
                    }
                });
                return items;
            }
            return [];
        }

        // Submit Checkout Flow based on selected method
        function submitCheckoutFlow(method) {
            const clientName = document.getElementById('checkout-client-name').value.trim();
            const contactName = document.getElementById('checkout-contact-name').value.trim();
            const clientPhone = document.getElementById('checkout-client-phone').value.trim();
            const clientAddress = document.getElementById('checkout-client-address').value.trim();

            if (!clientName || !contactName || !clientPhone) {
                alert('אנא מלא את כל שדות החובה בפרטי המוסד (שם מוסד, איש קשר וטלפון)');
                return;
            }

            const items = getCheckoutItems();
            if (items.length === 0) {
                alert('סל הרכישה ריק!');
                return;
            }

            // Sync quick/single checkout to global cart memory for consistency
            if (checkoutSource !== 'cart') {
                items.forEach(sItem => {
                    const existingIdx = cart.findIndex(item => item.id === sItem.id);
                    if (existingIdx !== -1) {
                        cart[existingIdx].quantity = sItem.quantity;
                    } else {
                        cart.push(sItem);
                    }
                });
                updateCartCounter();
                renderCartList();
            }

            // Calculate exact pricing totals
            let subtotal = 0;
            let discount = 0;
            let vat = 0;
            let totalWithVat = 0;

            if (checkoutSource === 'cart') {
                const cartTotals = calculateCartTotals();
                subtotal = cartTotals.subtotalAfterDiscount;
                discount = cartTotals.discount;
                vat = cartTotals.vat;
                totalWithVat = cartTotals.total;
            } else {
                const raw = items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
                if (appliedCoupon) {
                    if (appliedCoupon.type === 'percent') {
                        discount = raw * (appliedCoupon.value / 100);
                    } else if (appliedCoupon.type === 'fixed') {
                        discount = Math.min(raw, appliedCoupon.value);
                    }
                }
                subtotal = Math.max(0, raw - discount);
                vat = subtotal * 0.18;
                totalWithVat = subtotal + vat;
            }

            const finalTotalFormatted = totalWithVat.toFixed(2);
            const fullClientName = `${clientName} (${contactName})`;
            const itemsSummary = items.map(i => `${i.name} (${i.pack || ''}) x${i.quantity} [₪${(i.price * i.quantity).toFixed(2)}]`).join(', ');
            let orderRecord = null;

            // Record order in Database Engine
            if (typeof db !== 'undefined' && db.addOrder) {
                orderRecord = db.addOrder({
                    clientName: fullClientName,
                    clientPhone: clientPhone,
                    clientAddress: clientAddress,
                    items: items.map(i => ({ id: i.id, name: i.name, pack: i.pack, price: i.price, quantity: i.quantity })),
                    rawSubtotal: subtotal + discount,
                    discount: discount,
                    couponCode: appliedCoupon ? appliedCoupon.code : null,
                    subtotalAfterDiscount: subtotal,
                    vat: vat,
                    total: totalWithVat,
                    paymentMethod: method
                });
            }

            const orderId = (orderRecord && orderRecord.id) ? orderRecord.id : ('SHK-' + Math.floor(100000 + Math.random() * 900000));

            if (method === 'whatsapp') {
                // Send directly to WhatsApp
                let orderText = `*הזמנה חדשה #${orderId} - שיווקים*\n\n`;
                orderText += `*פרטי המוסד:*\n`;
                orderText += `🏢 מוסד: ${clientName}\n`;
                orderText += `👤 איש קשר: ${contactName}\n`;
                orderText += `📞 טלפון: ${clientPhone}\n`;
                if (clientAddress) orderText += `📍 כתובת: ${clientAddress}\n`;
                orderText += `\n*רשימת מוצרים להזמנה:*\n`;

                items.forEach(item => {
                    const itemSum = item.price * item.quantity;
                    orderText += `• *${item.name}* (${item.pack || ''}) - כמות: *${item.quantity}* | מחיר: ${item.price} ₪ | סה"כ: *${itemSum}* ₪\n`;
                });
                if (discount > 0) {
                    orderText += `\n🏷️ הנחת קופון: -${discount.toFixed(2)} ₪`;
                }
                orderText += `\n💵 סכום הזמנה (לפני מע"מ): ${subtotal.toFixed(2)} ₪`;
                orderText += `\n➕ מע"מ (18%): ${vat.toFixed(2)} ₪`;
                orderText += `\n💰 *סה"כ לתשלום (כולל מע"מ): ${finalTotalFormatted} ₪*`;
                orderText += `\n\n_המחירים אינם כוללים מע"מ וסופיים בכפוף לתנאי האספקה._`;

                const waText = encodeURIComponent(orderText.replace(/\\n/g, '\n'));
                const waLink = `https://wa.me/972505178445?text=${waText}`;
                
                closeCheckoutDetailsModal();
                window.open(waLink, '_blank');

            } else if (method === 'credit') {
                const icountConf = (typeof db !== 'undefined' && db.getIcountConfig) ? db.getIcountConfig() : null;
                let payLink = icountConf && icountConf.paymentLink ? icountConf.paymentLink.trim() : '';
                
                if (payLink) {
                    try {
                        const url = new URL(payLink.startsWith('http') ? payLink : `https://${payLink}`);
                        
                        // Official iCount hosted payment shortcodes:
                        // 'cs' = Charge Sum, 'cd' = Charge Description, 'cn' = Client Name, 'cp' = Client Phone, 'ca' = Client Address
                        url.searchParams.set('cs', finalTotalFormatted);
                        url.searchParams.set('cd', `הזמנת שיווקים #${orderId}: ${itemsSummary}`);
                        url.searchParams.set('cn', fullClientName);
                        url.searchParams.set('cp', clientPhone);
                        if (clientAddress) {
                            url.searchParams.set('ca', clientAddress);
                        }
                        
                        // Standard fallback parameter names
                        url.searchParams.set('sum', finalTotalFormatted);
                        url.searchParams.set('amount', finalTotalFormatted);
                        url.searchParams.set('total', finalTotalFormatted);
                        url.searchParams.set('price', finalTotalFormatted);
                        url.searchParams.set('client_name', fullClientName);
                        url.searchParams.set('name', fullClientName);
                        url.searchParams.set('customer_name', fullClientName);
                        url.searchParams.set('phone', clientPhone);
                        url.searchParams.set('client_phone', clientPhone);
                        if (clientAddress) {
                            url.searchParams.set('address', clientAddress);
                            url.searchParams.set('client_address', clientAddress);
                        }
                        url.searchParams.set('info', `הזמנת שיווקים #${orderId}: ${itemsSummary}`);
                        url.searchParams.set('description', `הזמנת שיווקים #${orderId}: ${itemsSummary}`);
                        url.searchParams.set('order_id', orderId);
                        url.searchParams.set('custom', orderId);
                        
                        payLink = url.toString();
                    } catch (err) {
                        const sep = payLink.includes('?') ? '&' : '?';
                        payLink += `${sep}cs=${encodeURIComponent(finalTotalFormatted)}&cd=${encodeURIComponent('הזמנת שיווקים #' + orderId + ': ' + itemsSummary)}&sum=${encodeURIComponent(finalTotalFormatted)}&amount=${encodeURIComponent(finalTotalFormatted)}&total=${encodeURIComponent(finalTotalFormatted)}&client_name=${encodeURIComponent(fullClientName)}&phone=${encodeURIComponent(clientPhone)}&info=${encodeURIComponent('הזמנת שיווקים #' + orderId + ': ' + itemsSummary)}`;
                    }

                    closeCheckoutDetailsModal();
                    
                    // Direct secure redirection to external payment gateway with all cart params
                    const win = window.open(payLink, '_blank');
                    if (!win || win.closed || typeof win.closed === 'undefined') {
                        window.location.href = payLink;
                    }
                } else {
                    alert('דף התשלום המאובטח עדיין לא הוגדר במערכת הניהול. באפשרותך להשלים את ההזמנה בוואטסאפ או בטלפון.');
                }

            } else if (method === 'pdf') {
                // Dynamic invoice printing
                printInvoice(clientName, contactName, clientPhone, clientAddress, items, subtotal);
                closeCheckoutDetailsModal();
            }
        }

                // Print Invoice Window Generator
        function printInvoice(clientName, contactName, clientPhone, clientAddress, items, total) {
            const printWindow = window.open('', '_blank');
            const vatAmount = total * 0.18;
            const totalWithVat = total + vatAmount;
            let itemsRows = '';
            items.forEach(item => {
                itemsRows += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.pack || ''}</td>
                        <td>${item.price} ₪</td>
                        <td>${item.quantity}</td>
                        <td>${(item.price * item.quantity).toFixed(2)} ₪</td>
                    </tr>
                `;
            });

            const html = `
            <!DOCTYPE html>
            <html dir="rtl" lang="he">
            <head>
                <meta charset="UTF-8">
                <title>הצעת מחיר / הזמנה מרוכזת - שיווקים</title>
                <style>
        /* -------------------------------------------------------------
           FONT-DISPLAY SWAP OPTIMIZATION (Zero Layout Shift & Instant Render)
        ------------------------------------------------------------- */
        @font-face {
            font-family: 'Font Awesome 6 Free';
            font-style: normal;
            font-weight: 900;
            font-display: optional;
            src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2') format('woff2');
        }
        @font-face {
            font-family: 'Font Awesome 6 Brands';
            font-style: normal;
            font-weight: 400;
            font-display: optional;
            src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2') format('woff2');
        }

                    body { font-family: system-ui, -apple-system, sans-serif; padding: 20px; color: #0a1931; }
                    .header-wrap { display: flex; justify-content: space-between; border-bottom: 2px solid #0085ff; padding-bottom: 10px; margin-bottom: 20px; }
                    .logo-title { font-size: 1.5rem; font-weight: bold; }
                    .details-box { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; line-height: 1.6; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: right; }
                    th { background: #0a1931; color: white; }
                    .summary-row td { border: none; padding: 4px 12px; }
                    .total-row td { border-top: 2px solid #0a1931; font-weight: bold; font-size: 1.1rem; }
</style>
            </head>
            <body onload="window.print(); window.close();">
                <div class="header-wrap">
                    <div class="logo-title">שיווקים — הצעת מחיר והזמנה מרוכזת</div>
                    <div>תאריך: ${new Date().toLocaleDateString('he-IL')}</div>
                </div>
                <div class="details-box">
                    <strong>פרטי המוסד / המזמין:</strong><br>
                    🏢 מוסד: ${clientName}<br>
                    👤 איש קשר במקום: ${contactName}<br>
                    📞 טלפון נייד: ${clientPhone}<br>
                    ${clientAddress ? `📍 כתובת למשלוח: ${clientAddress}<br>` : ''}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>שם המוצר</th>
                            <th>אריזה</th>
                            <th>מחיר יחידה</th>
                            <th>כמות</th>
                            <th>סה"כ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsRows}
                        <tr class="summary-row">
                            <td colspan="4" style="text-align: left;">סה"כ מוצרים (לפני מע"מ):</td>
                            <td>${total.toFixed(2)} ₪</td>
                        </tr>
                        <tr class="summary-row">
                            <td colspan="4" style="text-align: left;">מע"מ (18%):</td>
                            <td>${vatAmount.toFixed(2)} ₪</td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="4" style="text-align: left;">סה"כ לתשלום (כולל מע"מ):</td>
                            <td>${totalWithVat.toFixed(2)} ₪</td>
                        </tr>
                    </tbody>
                </table>
</body>
            </html>
            `;
            printWindow.document.write(html);
            printWindow.document.close();
        }

        // Synced Mobile & Desktop Search Logic
        function handleSearch(e) {
            searchQuery = e.target.value.trim();
            
            // Sync desktop, mobile, and hero search inputs
            const deskInput = document.getElementById('catalog-search');
            const mobInput = document.getElementById('mobile-catalog-search');
            const heroInput = document.getElementById('hero-catalog-search');
            if (deskInput && deskInput !== e.target) deskInput.value = e.target.value;
            if (mobInput && mobInput !== e.target) mobInput.value = e.target.value;
            if (heroInput && heroInput !== e.target) heroInput.value = e.target.value;
            
            // Render filtered views
            renderCatalog();
            renderQuickOrderTable();
        }

        function clearSearch() {
            searchQuery = '';
            const deskInput = document.getElementById('catalog-search');
            const mobInput = document.getElementById('mobile-catalog-search');
            const heroInput = document.getElementById('hero-catalog-search');
            if (deskInput) deskInput.value = '';
            if (mobInput) mobInput.value = '';
            if (heroInput) heroInput.value = '';
            renderCatalog();
            renderQuickOrderTable();
        }

        const catalogSearchEl = document.getElementById('catalog-search');
        if (catalogSearchEl) {
            catalogSearchEl.addEventListener('input', handleSearch);
        }
        const mobileSearchEl = document.getElementById('mobile-catalog-search');
        if (mobileSearchEl) {
            mobileSearchEl.addEventListener('input', handleSearch);
        }
        const heroSearchEl = document.getElementById('hero-catalog-search');
        if (heroSearchEl) {
            heroSearchEl.addEventListener('input', handleSearch);
        }

        // 5. INTRO SPLASH LOAD INTERACTION LOGIC
        window.addEventListener('DOMContentLoaded', () => {
            const splash = document.getElementById('splash-screen');
            if (splash) splash.style.display = 'none';
        });

        // 6. CUSTOM MOUSE FOLLOW ANIMATION (Desktop Only with fine pointer)
        const hasFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const cursor = document.getElementById('custom-cursor');
        const follower = document.getElementById('custom-cursor-follower');
        
        let mouseX = 0, mouseY = 0;
        let followX = 0, followY = 0;

        if (hasFinePointer) {
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                if (cursor) {
                    cursor.style.left = `${mouseX}px`;
                    cursor.style.top = `${mouseY}px`;
                }
            }, { passive: true });

            function updateFollower() {
                if (!follower) return;
                const dx = mouseX - followX;
                const dy = mouseY - followY;
                
                followX += dx * 0.15;
                followY += dy * 0.15;
                
                follower.style.left = `${followX}px`;
                follower.style.top = `${followY}px`;
                
                requestAnimationFrame(updateFollower);
            }
            if (follower) {
                requestAnimationFrame(updateFollower);
            }
        }

        // Delegated cursor hover handler for zero main-thread overhead
        function bindCursorHover() {
            if (!hasFinePointer) return;
            document.addEventListener('mouseover', (e) => {
                if (e.target && e.target.closest && e.target.closest('a, button, .portal-card, .product-card, .qty-btn, .mode-square-btn')) {
                    document.body.classList.add('hover-link');
                }
            }, { passive: true });
            document.addEventListener('mouseout', (e) => {
                if (e.target && e.target.closest && e.target.closest('a, button, .portal-card, .product-card, .qty-btn, .mode-square-btn')) {
                    document.body.classList.remove('hover-link');
                }
            }, { passive: true });
        }

        // 7. HERO ABSTRACT BACKGROUND NETWORK (Custom Canvas Interactive Animation)
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let points = [];
        const POINT_COUNT = 45;

        function initCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            points = [];
            for (let i = 0; i < POINT_COUNT; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 2 + 1
                });
            }
        }

        function drawCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
            ctx.strokeStyle = 'rgba(0, 133, 255, 0.05)';
            ctx.lineWidth = 0.8;

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // Mouse interaction connection
                const dxm = mouseX - p.x;
                const dym = (mouseY - 80) - p.y; // Account for header margin
                const distm = Math.sqrt(dxm * dxm + dym * dym);
                if (distm < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouseX, mouseY - 80);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - distm / 150)})`;
                    ctx.stroke();
                }

                for (let j = i + 1; j < points.length; j++) {
                    const q = points[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(0, 133, 255, ${0.05 * (1 - dist / 100)})`;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawCanvas);
        }

        window.addEventListener('resize', initCanvas);

        // Header scroll behavior
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        }, { passive: true });

        
        // Helper to determine product badge
        function getProductBadge(prod) {
            if (prod.category === 'hospitality' || (prod.portals.includes('bb') && !prod.portals.includes('institution'))) {
                return '<span class="product-badge badge-bb">מתאים לצימרים</span>';
            } else if (prod.portals.includes('institution') && (prod.category === 'tork' || prod.category === 'cleaning' || prod.category === 'equipment' || prod.category === 'bags' || prod.category === 'disposable' || prod.category === 'paper')) {
                return '<span class="product-badge badge-inst">מתאים למוסדות</span>';
            }
            return '';
        }

        // Show product details modal (Quick View)
        function showProductDetails(productId, shouldUpdateHash = true) {
            const prod = PRODUCTS.find(p => p.id === productId);
            if (!prod) return;
            
            const modal = document.getElementById('product-details-modal');
            const content = document.getElementById('modal-product-content');
            
            const specsHtml = prod.specs ? `
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--border-radius-md); padding: 1rem; margin-top: 1rem; direction: rtl; text-align: right;">
                    <h5 style="color: var(--color-navy); font-weight: 800; margin-bottom: 0.5rem; font-size: 0.95rem;">
                        <i class="fa-solid fa-ruler-combined" style="color: var(--color-blue); margin-left: 5px;"></i> מפרט ומידות
                    </h5>
                    <p style="font-size: 0.88rem; color: var(--text-dark); line-height: 1.5; margin: 0;">${prod.specs.replace(/\|/g, '<br>')}</p>
                </div>
            ` : '';
            
            // Get current quantity in cart if any
            const cartItem = cart.find(item => item.id === prod.id);
            const currentQty = cartItem ? cartItem.quantity : 0;
            
            content.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 1.2rem; text-align: right; direction: rtl;">
                    <div style="width: 100%; height: 220px; background: #ffffff; border-radius: var(--border-radius-md); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #f1f5f9; position: relative;">
                        <img src="${prod.image || 'assets/placeholder_bg.webp'}" alt="${prod.name || 'תמונת מוצר'}" width="300" height="300" style="max-width: 100%; max-height: 100%; object-fit: contain; aspect-ratio: 1/1;" loading="lazy" decoding="async">
                        ${getProductBadge(prod)}
                    </div>
                    <div>
                        <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--color-navy); margin-bottom: 0.3rem;">${prod.name}</h3>
                        <div style="font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem; margin-bottom: 0.8rem;">
                            <i class="fa-solid fa-box-open" style="color: var(--color-blue);"></i>
                            <span>${prod.pack}</span>
                        </div>
                        
                        ${prod.desc ? `
                            <p style="font-size: 0.9rem; color: var(--text-dark); line-height: 1.5; margin: 0;">${prod.desc}</p>
                        ` : ''}
                        
                        ${specsHtml}
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #e2e8f0; padding-top: 1rem; margin-top: 0.5rem;">
                        <div style="font-size: 1.5rem; font-weight: 900; color: var(--color-blue);">₪${prod.price}</div>
                        <div style="display: flex; align-items: center; gap: 0.8rem;">
                            <button class="add-to-cart-btn" onclick="addModalQtyToCart('${prod.id}')" style="padding: 0.75rem 1.4rem; font-size: 0.95rem; border-radius: var(--border-radius-md); background-color: var(--color-blue); color: #ffffff; border: none; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 6px 15px rgba(0, 133, 255, 0.15);">
                                <i class="fa-solid fa-cart-plus"></i> הוסף לסל
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'flex';
            if (shouldUpdateHash) {
                const currentHash = window.location.hash || '#catalog';
                if (!currentHash.includes('/product/')) {
                    updateHash(currentHash + '/product/' + productId);
                }
            }
        }
        
        function closeProductModal(shouldUpdateHash = true) {
            const modalEl = document.getElementById('product-details-modal');
            if (modalEl) modalEl.style.display = 'none';
            if (shouldUpdateHash) {
                const currentHash = window.location.hash;
                if (currentHash.includes('/product/')) {
                    updateHash(currentHash.split('/product/')[0]);
                }
            }
        }
        
        function addModalQtyToCart(productId) {
            const qtyInput = document.getElementById(`cat-qty-${productId}`);
            let qty = 1;
            if (qtyInput) {
                qty = parseInt(qtyInput.value) || 1;
                if (qty === 0) qty = 1;
            }
            
            updateCartQuantity(productId, qty);
            closeProductModal();
            
            const btn = document.querySelector(`.product-card[onmousemove*="${productId}"] .add-to-cart-btn`);
            if (btn) {
                const rect = btn.getBoundingClientRect();
                const flyer = document.createElement('div');
                flyer.className = 'cart-flyer';
                flyer.innerHTML = `+${qty}`;
                flyer.style.top = `${rect.top}px`;
                flyer.style.left = `${rect.left + rect.width/2}px`;
                document.body.appendChild(flyer);
                
                const cartBtn = document.querySelector('.cart-btn') || document.querySelector('.floating-cart');
                if (!cartBtn) return;
                const targetRect = cartBtn.getBoundingClientRect();
                
                setTimeout(() => {
                    flyer.style.transform = `translate(${targetRect.left - rect.left}px, ${targetRect.top - rect.top}px) scale(0.5)`;
                    flyer.style.opacity = '0';
                }, 50);
                
                setTimeout(() => {
                    flyer.remove();
                }, 850);
            }
        }


        // ==========================================================================
        // B2B ACCESSIBILITY AND LEGAL PAGES MANAGEMENT SYSTEM
        // ==========================================================================
        const LEGAL_DOCS = {
            accessibility: {
                title: "הצהרת נגישות",
                icon: "fa-universal-access",
                html: `
                    <h3>הצהרת נגישות רשמית - שיווקים</h3>
                    <p>חברת "שיווקים - למוסד, לבית, למשרד ולצימרים" מייחסת חשיבות עליונה להנגשת האתר שלה לאנשים עם מוגבלויות, מתוך אמונה עמוקה כי לכל אדם מגיעה הזכות לחיות בשוויון, כבוד, נוחות ועצמאות מלאה.</p>
                    <p>אנו משקיעים משאבים רבים כדי להבטיח כי האתר יהיה קל וידידותי לשימוש עבור כלל האוכלוסייה, לרבות אנשים בעלי מוגבלויות מוטוריות, קוגניטיביות או ראייתיות.</p>
                    
                    <h3>התאמות הנגישות שבוצעו באתר:</h3>
                    <ul>
                        <li><strong>סרגל נגישות מובנה:</strong> כלי המאפשר התאמת ניגודיות (ניגודיות גבוהה), מעבר לגווני אפור (שחור-לבן), הגדלת גופנים בשתי רמות, החלפה לגופן מערכת קריא (Arial) והדגשת קישורים וכפתורים.</li>
                        <li><strong>ניווט מקלדת:</strong> האתר מותאם באופן מלא לניווט באמצעות המקלדת (שימוש במקש Tab למעבר בין אלמנטים ואינטראקציה).</li>
                        <li><strong>תמיכה ברספונסיביות:</strong> התאמה מלאה של ממשק המשתמש למובייל, טאבלטים ומחשבים נייחים.</li>
                        <li><strong>תגיות עזר (ARIA):</strong> שימוש בתיוג תקני של רכיבי DOM וקישורים כדי להקל על קוראי מסך.</li>
                    </ul>

                    <h3>רכז הנגישות של העסק:</h3>
                    <p>אם נתקלתם בקושי כלשהו במהלך הגלישה באתר, או אם ברצונכם להציע הצעה לשיפור רמת ההנגשה, נשמח מאוד לעמוד לשירותכם.</p>
                    <p>אנא פנו אל רכז הנגישות שלנו והנושא יטופל בהקדם האפשרי:</p>
                    <ul>
                        <li><strong>שם רכז הנגישות:</strong> שמואל לוי</li>
                        <li><strong>טלפון ליצירת קשר:</strong> 050-5178445</li>
                        <li><strong>שירות בוואטסאפ:</strong> <a href="https://wa.me/972505178445" target="_blank" style="color: var(--color-blue); text-decoration: underline;">לחץ כאן לפתיחת שיחה</a></li>
                        <li><strong>אזור אספקה:</strong> הפעילות מבוצעת במתכונת של משלוחים ישירים למוסדות ועסקים בכל הארץ. אין קבלת קהל פיזית במשרדי החברה.</li>
                    </ul>
                    <p style="margin-top: 1.5rem; font-size: 0.82rem; color: var(--text-muted);">הצהרת הנגישות עודכנה והיא תקפה לחודש יולי 2026.</p>
                `
            },
            terms: {
                title: "תקנון האתר ותנאי שימוש",
                icon: "fa-gavel",
                html: `
                    <h3>תקנון ותנאי שימוש באתר שיווקים</h3>
                    <p>ברוכים הבאים לאתר האינטרנט "שיווקים" (להלן: "האתר"). האתר מנוהל ומופעל על ידי שמואל לוי (להלן: "הנהלת האתר" או "העסק") ומציע מוצרי נייר, ניקוי, חומרי חיטוי, חד-פעמי וציוד משלים למוסדות, גנים, משרדים וצימרים.</p>
                    <p>כל שימוש באתר, גלישה בו או ביצוע הזמנה מגלמים את הסכמתך המלאה לתנאים המפורטים בתקנון זה. אנא קרא אותם בעיון.</p>

                    <h3>1. תנאי סף לשימוש באתר וביצוע הזמנות:</h3>
                    <p>רשאים לבצע הזמנות באתר משתמשים שהם בני 18 ומעלה, או תאגידים ומוסדות רשומים המוסמכים כדין לבצע עסקאות בישראל.</p>

                    <h3>2. מחירי האתר וחיוב מע"מ (B2B):</h3>
                    <ul>
                        <li>מכיוון שהאתר פועל במתכונת מוסדית ועסקית (B2B), **כל מחירי המוצרים המוצגים בקטלוג האתר אינם כוללים מע"מ (ללא מע"מ)**.</li>
                        <li>ליד כל מחיר מוצג בבירור הכיתוב "ללא מע"מ".</li>
                        <li>חיוב מע"מ תקני בשיעור 18% (או כפי שיהיה קבוע בחוק מעת לעת) יתווסף לחשבון באופן אוטומטי בעגלת הקניות ובסיכום הקופה לפני ביצוע התשלום או שליחת ההזמנה.</li>
                        <li>הנהלת האתר שומרת לעצמה את הזכות לעדכן את מחירי המוצרים, מגוון הפריטים ותעריפי האספקה בכל עת וללא הודעה מוקדמת.</li>
                    </ul>

                    <h3>3. משלוחים ואספקה:</h3>
                    <ul>
                        <li>הנהלת האתר מספקת את המשלוחים למוסדות, גנים, משרדים וצימרים באזורי החלוקה המורשים.</li>
                        <li>עלות המשלוח (במידה וקיימת) ומועד האספקה המדויק יתואמו מול איש הקשר מטעם הלקוח בשיחה טלפונית או בהודעת וואטסאפ לאחר קבלת פרטי ההזמנה במערכת.</li>
                        <li>האספקה תתבצע לכתובת שנמסרה בעת מילוי הטופס. העסק לא יהיה אחראי לעיכובים באספקה הנובעים מפרטים שגויים שנמסרו על ידי הלקוח, כוח עליון, שביתות, נזקי טבע או תקלות צד ג'.</li>
                    </ul>

                    <h3>4. ביטול עסקה ומדיניות החזרות:</h3>
                    <ul>
                        <li>ביטול עסקה והחזרת מוצרים יבוצעו בהתאם להוראות חוק הגנת הצרכן, התשמ"א-1981 ותקנות הגנת הצרכן (ביטול עסקה), התשע"א-2010.</li>
                        <li>ניתן לבצע ביטול עסקה על מוצרים יבשים/מתכלים שלא נעשה בהם שימוש, באריזתם המקורית והסגורה בלבד, תוך 14 ימים מיום קבלתם.</li>
                        <li><strong>מוצרים שאינם ניתנים להחזרה:</strong> מוצרי נייר שנפתחו, נוזלים כימיים או חומרי חיטוי שאריזתם נפתחה או נפגמה, מטעמי בריאות, בטיחות והיגיינה מוסדית.</li>
                        <li>זיכוי כספי ללקוח יבוצע באותו אמצעי תשלום שבו בוצע החיוב המקורי, בהתאם לתנאי חברות האשראי.</li>
                    </ul>

                    <h3>5. קניין רוחני והגבלת אחריות:</h3>
                    <ul>
                        <li>כל התכנים, התמונות, העיצובים והקוד באתר הם קניינו הרוחני הבלעדי של העסק ואין לעשות בהם כל שימוש מסחרי ללא אישור בכתב.</li>
                        <li>הנהלת האתר עושה כל מאמץ להציג מידע מדויק. במקרה חריג שבו נפלה שגיאת הגהה, תיאור מוצר לא מדויק או מחיר שגוי בתום לב (טעות סופר קיצונית), הנהלת האתר שומרת לעצמה את הזכות לבטל את ההזמנה הספציפית, לידע את הלקוח ולבצע זיכוי מלא ללא פיצוי נוסף.</li>
                    </ul>
                    <p style="margin-top: 1.5rem; font-size: 0.82rem; color: var(--text-muted);">סמכות השיפוט הבלעדית בכל עניין הנובע מתקנון זה תהא לבתי המשפט המוסמכים במחוז חיפה או צפון.</p>
                `
            },
            privacy: {
                title: "מדיניות פרטיות",
                icon: "fa-shield-halved",
                html: `
                    <h3>מדיניות פרטיות ואבטחת מידע - שיווקים</h3>
                    <p>הפרטיות של הגולשים והלקוחות שלנו חשובה לנו ביותר. מסמך זה מפרט איזה מידע נאסף בעת הגלישה והרכישה באתר וכיצד אנו שומרים עליו ומגנים עליו בהתאם לחוק הגנת הפרטיות, התשמ"ב-1982.</p>

                    <h3>1. איזה מידע אישי נאסף באתר?</h3>
                    <p>אנו אוספים אך ורק מידע שנמסר על ידך מרצונך החופשי בעת ביצוע רכישה או פנייה אלינו. מידע זה כולל:</p>
                    <ul>
                        <li>שם המוסד, הגן או העסק שלך.</li>
                        <li>שם מלא של איש הקשר.</li>
                        <li>מספר טלפון נייד (לצורך תיאום משלוח ושליחת פרטי ההזמנה לוואטסאפ).</li>
                        <li>כתובת מלאה למשלוח (רחוב, עיר, קומה).</li>
                        <li>רשימת הפריטים והכמויות שהוספת לעגלת הקניות שלך.</li>
                    </ul>

                    <h3>2. מהו השימוש שנעשה במידע שלך?</h3>
                    <p>המידע האישי שנאסף משמש אך ורק למטרות הבאות:</p>
                    <ul>
                        <li>עיבוד הזמנתך והכנת המשלוח.</li>
                        <li>יצירת קשר טלפוני או שליחת הודעת וואטסאפ לתיאום מועד המשלוח ופרטי התשלום.</li>
                        <li>הפקת חשבונית מס/קבלה או הצעת מחיר רשמית בפורמט PDF.</li>
                    </ul>

                    <h3>3. שיתוף מידע עם צדדים שלישיים:</h3>
                    <p>אנו מתחייבים באופן חד-משמעי **שלא למכור, להשכיר, להעביר או לשתף** את פרטיך האישיים או את היסטוריית הקניות שלך עם אף גורם שלישי ללא הסכמתך המפורשת. המידע מועבר אך ורק לחברות הסליקה המאובטחות לצורך ביצוע חיוב כרטיס האשראי, במידה ותבחר בדרך תשלום זו.</p>

                    <h3>4. אבטחת מידע וסליקת אשראי:</h3>
                    <ul>
                        <li>האתר עושה שימוש בפרוטוקול אבטחה תקני מסוג SSL המצפין את כל הנתונים המועברים בין הדפדפן שלך לשרת.</li>
                        <li>פרטי כרטיס האשראי שלך **אינם נשמרים בשום אופן בשרתי האתר**.</li>
                        <li>תהליך סליקת האשראי מבוצע ישירות מול מסוף מאובטח של חברת סליקה חיצונית מורשית, העומדת בתקן המחמיר ביותר לאבטחת עסקאות אשראי באינטרנט (PCI-DSS Level 1).</li>
                    </ul>
                    <p style="margin-top: 1.5rem; font-size: 0.82rem; color: var(--text-muted);">לכל שאלה, בירור או בקשה לעדכון או מחיקת המידע האישי שנמסר, ניתן לפנות ישירות לשמואל לוי בטלפון 050-5178445.</p>
                `
            },
            about: {
                title: "מי אנחנו - שיווקים",
                icon: "fa-circle-info",
                html: `
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <div class="logo-wrap" style="display: inline-flex; font-size: 2.4rem; justify-content: center; margin-bottom: 0.5rem;">
                            <div class="logo-arrow-icon" style="filter: drop-shadow(0 2px 4px rgba(0, 133, 255, 0.3)); transform: rotate(-15deg); margin-right: -4px;"></div>
                            <div class="logo-text" style="color: var(--color-navy); font-weight: 900;">שיווקים</div>
                        </div>
                        <div style="color: var(--text-muted); font-size: 0.95rem; font-weight: 600;">אספקה מקצועית למוסד, לבית, למשרד ולצימרים</div>
                    </div>
                    
                    <p>חברת <strong>שיווקים</strong>, בהנהלת שמואל לוי, היא ספקית מובילה של חומרי ניקוי מקצועיים, מוצרי נייר ניגוב, כלים חד-פעמיים וציוד משלים לעסקים, מוסדות חינוך, משרדים ומתחמי אירוח וצימרים בכל רחבי הארץ.</p>
                    
                    <h3>הערכים והמחויבות שלנו:</h3>
                    <ul>
                        <li><strong>שירות אישי ומהיר:</strong> אנו מאמינים כי מאחורי כל הזמנה עומד לקוח שצריך את הציוד שלו בזמן. אנו מתחייבים לטיפול מהיר ומשלוח ישיר ללא עיכובים.</li>
                        <li><strong>איכות ללא פשרות:</strong> כל המוצרים בקטלוג שלנו נבחרים בקפידה ומיוצרים על ידי המותגים המובילים ביותר (כולל סדרת המוצרים המקצועית של Tork).</li>
                        <li><strong>התאמה מלאה לצורכי הלקוח:</strong> בין אם אתם גן ילדים שצריך חומרי היגיינה בטוחים, משרד המעוניין בציוד משרדי ונייר צילום, או צימר יוקרתי הדורש מוצרי אירוח מפנקים - אנו נתאים לכם את החבילה המדויקת.</li>
                    </ul>
                    
                    <h3>זמינות ופרטי התקשרות:</h3>
                    <p>אנו מפעילים מערך משלוחים סופר-מהיר לכל חלקי הארץ. נשמח לעמוד לשירותכם לכל ייעוץ, הצעת מחיר מותאמת אישית או הזמנה מיוחדת:</p>
                    <ul style="list-style-type: none; padding-right: 0;">
                        <li>📞 <strong>טלפון ישיר:</strong> <a href="tel:050-5178445" style="color: var(--color-blue); text-decoration: underline;">050-5178445</a> (שמואל לוי)</li>
                        <li>💬 <strong>וואטסאפ:</strong> <a href="https://wa.me/972505178445" target="_blank" style="color: var(--color-blue); text-decoration: underline;">לחץ כאן לפתיחת שיחה ישירה</a></li>
                    </ul>
                `
            }
        };

        function renderPortals() {
            initPortalsGrid();
        }

        // ACCESSIBILITY STATE ENGINE
        let accSettings = {
            contrast: false,
            grayscale: false,
            links: false,
            font: false,
            zoom: 0 // 0 = standard, 1 = zoom1, 2 = zoom2
        };

        function toggleAccessibilityPanel(show) {
            const panel = document.getElementById('acc-panel');
            if (!panel) return;
            
            if (show === undefined) {
                show = !panel.classList.contains('active');
            }
            
            if (show) {
                panel.style.display = 'block';
                setTimeout(() => panel.classList.add('active'), 10);
            } else {
                panel.classList.remove('active');
                setTimeout(() => {
                    if (!panel.classList.contains('active')) panel.style.display = 'none';
                }, 300);
            }
        }

        function toggleAccessibilityOption(option) {
            if (option === 'zoom1') {
                if (accSettings.zoom === 1) {
                    accSettings.zoom = 0;
                } else {
                    accSettings.zoom = 1;
                }
            } else if (option === 'zoom2') {
                if (accSettings.zoom === 2) {
                    accSettings.zoom = 0;
                } else {
                    accSettings.zoom = 2;
                }
            } else {
                accSettings[option] = !accSettings[option];
            }
            applyAccessibilityDOM();
            saveAccessibilitySettings();
        }

        function applyAccessibilityDOM() {
            const body = document.body;
            
            // Contrast
            if (accSettings.contrast) {
                body.classList.add('acc-contrast');
                document.getElementById('acc-contrast-btn')?.classList.add('active');
            } else {
                body.classList.remove('acc-contrast');
                document.getElementById('acc-contrast-btn')?.classList.remove('active');
            }

            // Grayscale
            if (accSettings.grayscale) {
                body.classList.add('acc-grayscale');
                document.getElementById('acc-grayscale-btn')?.classList.add('active');
            } else {
                body.classList.remove('acc-grayscale');
                document.getElementById('acc-grayscale-btn')?.classList.remove('active');
            }

            // Highlight Links
            if (accSettings.links) {
                body.classList.add('acc-links');
                document.getElementById('acc-links-btn')?.classList.add('active');
            } else {
                body.classList.remove('acc-links');
                document.getElementById('acc-links-btn')?.classList.remove('active');
            }

            // Readable Font
            if (accSettings.font) {
                body.classList.add('acc-font');
                document.getElementById('acc-font-btn')?.classList.add('active');
            } else {
                body.classList.remove('acc-font');
                document.getElementById('acc-font-btn')?.classList.remove('active');
            }

            // Zoom level
            body.classList.remove('acc-zoom-1', 'acc-zoom-2');
            document.getElementById('acc-zoom1-btn')?.classList.remove('active');
            document.getElementById('acc-zoom2-btn')?.classList.remove('active');

            if (accSettings.zoom === 1) {
                body.classList.add('acc-zoom-1');
                document.getElementById('acc-zoom1-btn')?.classList.add('active');
            } else if (accSettings.zoom === 2) {
                body.classList.add('acc-zoom-2');
                document.getElementById('acc-zoom2-btn')?.classList.add('active');
            }
        }

        function saveAccessibilitySettings() {
            localStorage.setItem('shokim_acc_settings', JSON.stringify(accSettings));
        }

        function loadAccessibilitySettings() {
            const saved = localStorage.getItem('shokim_acc_settings');
            if (saved) {
                try {
                    accSettings = JSON.parse(saved);
                    applyAccessibilityDOM();
                } catch(e) {
                    console.error("Could not parse saved accessibility settings", e);
                }
            }
        }

        function resetAccessibility() {
            accSettings = {
                contrast: false,
                grayscale: false,
                links: false,
                font: false,
                zoom: 0
            };
            applyAccessibilityDOM();
            saveAccessibilitySettings();
        }

        // LEGAL MODALS MANAGEMENT
        function openLegalDoc(type) {
            const doc = LEGAL_DOCS[type];
            if (!doc) return;
            
            document.getElementById('legal-modal-title').innerHTML = `
                <i class="fa-solid ${doc.icon}"></i>
                <span>${doc.title}</span>
            `;
            document.getElementById('legal-modal-content').innerHTML = doc.html;
            
            const modal = document.getElementById('legal-doc-modal');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        }

        function closeLegalDoc() {
            const modal = document.getElementById('legal-doc-modal');
            if (!modal) return;
            modal.classList.remove('active');
            setTimeout(() => {
                if (!modal.classList.contains('active')) modal.style.display = 'none';
            }, 300);
        }


        let isSyncingHash = false;
        let isHandlingHashChange = false;

        function updateHash(hash) {
            isSyncingHash = true;
            window.location.hash = hash;
            
            // Execute state update synchronously since hashchange listener is ignored
            isHandlingHashChange = true;
            handleHashChange();
            isHandlingHashChange = false;
            
            setTimeout(() => { isSyncingHash = false; }, 50);
        }

        window.addEventListener('hashchange', () => {
            if (isSyncingHash) return;
            isHandlingHashChange = true;
            handleHashChange();
            isHandlingHashChange = false;
        });

        window.addEventListener('popstate', () => {
            if (isSyncingHash) return;
            isHandlingHashChange = true;
            handleHashChange();
            isHandlingHashChange = false;
        });

        function handleHashChange() {
            let hash = window.location.hash || '#home';
            const isMobile = window.innerWidth <= 600;
            
            // Extract suffix state for modals & cart
            let openProduct = null;
            let openCheckout = false;
            let openCart = false;
            
            if (hash.includes('/cart')) {
                hash = hash.split('/cart')[0];
                openCart = true;
            }
            if (hash.includes('/product/')) {
                const parts = hash.split('/product/');
                hash = parts[0];
                openProduct = parts[1].split('/')[0];
            }
            if (hash.includes('/checkout')) {
                hash = hash.split('/checkout')[0];
                openCheckout = true;
            }
            
            // Re-render portals grid in case we resized or switched layouts
            initPortalsGrid();
            
            if (hash === '#home') {
                if (isMobile) {
                    // Mobile Home View: Show Catalog View with Welcome State (no selection squares)
                    document.body.classList.remove('mobile-home-active', 'mobile-quick-active', 'mobile-in-category');
                    document.body.classList.add('mobile-catalog-active');
                    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('revealed'));
                    const activeView = document.getElementById('view-catalog');
                    if (activeView) activeView.classList.add('revealed');
                    
                    activePortal = '';
                    activeSubCategory = '';
                    
                    // Restore slider wrapper and dots
                    const wrapper = document.querySelector('.portals-grid-wrapper');
                    if (wrapper) wrapper.style.display = '';
                    const dotsBar = document.getElementById('mobile-categories-dots');
                    if (dotsBar) dotsBar.style.display = '';

                    const pGridEl = document.getElementById('portals-grid');
                    const subGridEl = document.getElementById('sub-portals-grid');
                    const actHeadEl = document.getElementById('active-portal-header');
                    if (pGridEl) pGridEl.style.display = 'flex';
                    if (subGridEl) subGridEl.style.display = 'none';
                    if (actHeadEl) actHeadEl.style.display = 'none';
                    
                    renderCatalog();
                } else {
                    // Desktop Home View: Show Catalog View with Welcome State
                    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
                    document.getElementById('view-catalog').classList.add('active');
                    
                    activePortal = '';
                    activeSubCategory = '';
                    
                    const pGridD = document.getElementById('portals-grid');
                    const subGridD = document.getElementById('sub-portals-grid');
                    const actHeadD = document.getElementById('active-portal-header');
                    if (pGridD) pGridD.style.display = 'grid';
                    if (subGridD) subGridD.style.display = 'none';
                    if (actHeadD) actHeadD.style.display = 'none';
                    
                    // Clear active styling from all cards in portals-grid
                    document.querySelectorAll('#portals-grid .portal-card').forEach(c => c.classList.remove('active'));
                    
                    renderCatalog();
                }
            } 
            else if (hash === '#quick') {
                switchMode('quick');
                if (isMobile) {
                    document.body.classList.remove('mobile-home-active', 'mobile-catalog-active');
                    document.body.classList.add('mobile-quick-active');
                    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('revealed'));
                    const activeView = document.getElementById('view-quick');
                    if (activeView) activeView.classList.add('revealed');
                }
            } 
            else if (hash === '#catalog') {
                switchMode('catalog');
                if (isMobile) {
                    document.body.classList.remove('mobile-home-active', 'mobile-quick-active', 'mobile-in-category');
                    document.body.classList.add('mobile-catalog-active');
                    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('revealed'));
                    const activeView = document.getElementById('view-catalog');
                    if (activeView) activeView.classList.add('revealed');
                    
                    activePortal = '';
                    activeSubCategory = '';
                    
                    // Restore slider wrapper and dots
                    const wrapper = document.querySelector('.portals-grid-wrapper');
                    if (wrapper) wrapper.style.display = '';
                    const dotsBar = document.getElementById('mobile-categories-dots');
                    if (dotsBar) dotsBar.style.display = '';

                    const pGridEl = document.getElementById('portals-grid');
                    const subGridEl = document.getElementById('sub-portals-grid');
                    const actHeadEl = document.getElementById('active-portal-header');
                    if (pGridEl) pGridEl.style.display = 'flex';
                    if (subGridEl) subGridEl.style.display = 'none';
                    if (actHeadEl) actHeadEl.style.display = 'none';
                    
                    renderCatalog();
                } else {
                    activePortal = 'all';
                    activeSubCategory = 'all';
                    
                    const pGridA = document.getElementById('portals-grid');
                    const subGridA = document.getElementById('sub-portals-grid');
                    const actHeadA = document.getElementById('active-portal-header');
                    const titleTextA = document.getElementById('active-portal-title-text');
                    if (pGridA) pGridA.style.display = 'none';
                    if (subGridA) subGridA.style.display = 'none';
                    if (actHeadA) actHeadA.style.display = 'flex';
                    if (titleTextA) titleTextA.textContent = 'כל המוצרים';
                    
                    renderCatalog();
                }
            } 
            else if (hash.startsWith('#catalog/')) {
                const portalOrCat = hash.split('/')[1];
                switchMode('catalog');
                
                if (isMobile) {
                    document.body.classList.remove('mobile-home-active', 'mobile-quick-active');
                    document.body.classList.add('mobile-catalog-active');
                    document.querySelectorAll('.content-view').forEach(v => v.classList.remove('revealed'));
                    const activeView = document.getElementById('view-catalog');
                    if (activeView) activeView.classList.add('revealed');
                }
                
                if (portalOrCat in CATEGORIES) {
                    activePortal = '';
                    activeSubCategory = portalOrCat;
                } else {
                    activePortal = portalOrCat;
                    activeSubCategory = 'all';
                }
                
                const pGridC = document.getElementById('portals-grid');
                const subGridC = document.getElementById('sub-portals-grid');
                const actHeadC = document.getElementById('active-portal-header');
                const titleTextC = document.getElementById('active-portal-title-text');
                if (pGridC) pGridC.style.display = 'none';
                if (subGridC) subGridC.style.display = 'none';
                if (actHeadC) actHeadC.style.display = 'flex';
                
                let titleText = 'כל המוצרים';
                if (portalOrCat !== 'all' && CATEGORIES[portalOrCat]) {
                    titleText = CATEGORIES[portalOrCat].name;
                }
                if (titleTextC) titleTextC.textContent = titleText;
                
                renderCatalog();
            }

            // Sync rendering states for modals & cart
            if (openCart) {
                toggleCart(true, false);
            } else {
                toggleCart(false, false);
            }

            if (openProduct) {
                showProductDetails(openProduct, false);
            } else {
                closeProductModal(false);
            }

            if (openCheckout) {
                openCheckoutDetailsModal(checkoutAmount, false);
            } else {
                closeCheckoutDetailsModal(false);
            }

        }

        function initPortalsGrid() {
            const portalsGrid = document.getElementById('portals-grid');
            if (!portalsGrid) return;
            const isMobile = window.innerWidth <= 600;
            if (isMobile) {
                initMobileCategoriesSlider();
            }
        }

        function setupInfiniteScroll() {
            // Obsolete: Desktop uses a compact static 5x2 grid, mobile uses a smooth finite slider with boundaries
            return;
        }

        function scrollPortals(dir) {
            const slider = document.getElementById('portals-grid');
            if (!slider) return;
            const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
            const scrollAmount = window.innerWidth <= 600 ? 180 : 304;

            if (dir === 'next') {
                slider.scrollBy({ left: isRTL ? -scrollAmount : scrollAmount, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: isRTL ? scrollAmount : -scrollAmount, behavior: 'smooth' });
            }
        }

        function handlePortalCardClick(portalId, el) {
            filterPortal(portalId, el);
        }

        function toggleQuickOrderMode() {
            const isQuick = document.body.classList.contains('mobile-quick-active') || 
                            document.getElementById('view-quick').classList.contains('active');
            if (isQuick) {
                if (window.innerWidth <= 600) {
                    handleMobileBackClick();
                } else {
                    switchMode('catalog');
                }
            } else {
                if (window.innerWidth <= 600) {
                    handleMobileModeClick('quick');
                } else {
                    switchMode('quick');
                }
            }
        }

        function handleMobileModeClick(mode) {
            // Run native switchMode routine
            switchMode(mode);
            
            // Mark mobile layout states cleanly on body tag
            document.body.classList.remove('mobile-home-active');
            document.body.classList.add(`mobile-${mode}-active`);
            
            // Mark revealed status for mobile view
            document.querySelectorAll('.content-view').forEach(v => {
                v.classList.remove('revealed');
            });
            const activeView = document.getElementById(`view-${mode}`);
            if (activeView) activeView.classList.add('revealed');
            
            // Update active styling on mobile square buttons
            document.querySelectorAll('.mode-square-btn').forEach(b => {
                b.classList.remove('active');
            });
            const activeBtn = document.getElementById(`square-${mode}-btn`);
            if (activeBtn) activeBtn.classList.add('active');
            
            // Scroll to the very top of the page
            window.scrollTo({ top: 0, behavior: 'auto' });
        }

        function handleMobileBackClick() {
            if (activePortal) {
                // If we are inside a category or All Products, go back to main category grid (step 2)
                goBackToPortals();
                const backText = document.getElementById('back-btn-text');
                if (backText) backText.textContent = 'חזרה למסך הבית';
                return;
            }
            
            // Otherwise, restore mobile home states cleanly on body tag
            document.body.classList.remove('mobile-catalog-active', 'mobile-quick-active');
            document.body.classList.add('mobile-home-active');
            
            // Hide content views
            document.querySelectorAll('.content-view').forEach(v => {
                v.classList.remove('revealed');
            });
            
            // De-select square buttons
            document.querySelectorAll('.mode-square-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Update URL hash back to home
            updateHash('#home');
            
            // Scroll back to top
            window.scrollTo({ top: 0, behavior: 'auto' });
        }

                // Initialize app state
        window.addEventListener('load', () => {
            // Defer portal grid JS re-render until after initial paint (LCP/CLS fix)
            if (window.requestIdleCallback) {
                requestIdleCallback(() => { initPortalsGrid(); }, { timeout: 300 });
            } else {
                setTimeout(() => { initPortalsGrid(); }, 100);
            }
            const currentHash = window.location.hash;
            if (currentHash && currentHash !== '#home') {
                handleHashChange();
            }
        });
        
        let _resizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(_resizeTimer);
            _resizeTimer = setTimeout(initPortalsGrid, 150);
        });
        
        // 8. INITIALIZE EVERYTHING
        loadAccessibilitySettings();
        handleHashChange();
        updateCartCounter();
        renderCartList();
        bindCursorHover();
        
        // Defer canvas animation to idle to protect First Contentful Paint / CPU
        setTimeout(() => {
            if (window.innerWidth > 768) {
                initCanvas();
                drawCanvas();
            }
        }, 100);

        // Dynamically load Firebase SDKs on idle to keep initial paint 100% non-blocking
        function loadFirebaseDynamically() {
            if (window._fbLoaded) return;
            window._fbLoaded = true;
            const s1 = document.createElement('script');
            s1.src = "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js";
            s1.defer = true;
            s1.onload = () => {
                const s2 = document.createElement('script');
                s2.src = "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js";
                s2.defer = true;
                s2.onload = () => {
                    const s3 = document.createElement('script');
                    s3.src = "db.js";
                    s3.defer = true;
                    document.body.appendChild(s3);
                };
                document.body.appendChild(s2);
            };
            document.body.appendChild(s1);
        }

        if (window.requestIdleCallback) {
            requestIdleCallback(loadFirebaseDynamically, { timeout: 1500 });
        } else {
            window.addEventListener('load', () => setTimeout(loadFirebaseDynamically, 500));
        }