/**
 * ملف الإعدادات المركزية لربط بوابة الطالب بالخادم
 * هذا الملف يغذي المتغيرات المستخدمة في HTML و Chat System
 */
const WEB_APP_URL_Chat = "https://script.google.com/macros/s/AKfycbxzvqKPrtIHrnTW6RKKgeBnvYNPHqLGZcvlpa2rOfM3FK055lW177aVEM62mo3y75y1/exec";
// 1. الرابط الموحد للسكربت (بناءً على الكود الذي أرفقته)
// ملاحظة: تأكد من نشر السكربت في Google Apps Script بصيغة (Web App) ومنح صلاحية الوصول لـ (Anyone)
const BASE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec";

// 2. المتغيرات التي يطلبها كود الواجهة الخاص بك
const WEB_APP_URL_Chat = BASE_SCRIPT_URL; // لعمليات البريد والدردشة
const WEB_APP_URL_Main = BASE_SCRIPT_URL; // للعمليات الإدارية (حضور، تقارير، ملف شخصي)

// 3. كائن الإعدادات الشامل (للمطورة PRO)
const CONFIG = {
  API_URL: BASE_SCRIPT_URL,
  CHAT_SCRIPT: BASE_SCRIPT_URL,
  // مفتاح الأمان الموجود في شيت الإعدادات (يجب أن يطابق الموجود في السبريدشيت)
  API_KEY: "YOUR_SECRET_KEY_HERE", 
  STUDENT_ID_PREFIX: "STD-",
  VERSION: "2.0.0"
};

/**
 * دالة مساعدة لبناء الروابط مع مفتاح الأمان تلقائياً
 * @param {string} action - العملية المطلوبة (مثلاً: getProfile)
 * @param {object} params - أي بارامترات إضافية
 */
function getApiUrl(action, params = {}) {
    let url = new URL(BASE_SCRIPT_URL);
    url.searchParams.append("action", action);
    url.searchParams.append("apiKey", CONFIG.API_KEY);
    for (let key in params) {
        url.searchParams.append(key, params[key]);
    }
    return url.toString();
}

// تجميد الكائن لمنع التلاعب بالإعدادات أثناء التشغيل
Object.freeze(CONFIG);
