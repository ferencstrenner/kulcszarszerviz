// EmailJS konfiguráció
// Töltsd ki az EmailJS dashboardról kapott adatokkal

const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',        // EmailJS Account -> General -> Public Key
    serviceId: 'YOUR_SERVICE_ID',        // Email Services -> Service ID
    templateId: 'YOUR_TEMPLATE_ID'       // Email Templates -> Template ID
};

// Inicializálás
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    } else {
        console.warn('EmailJS nincs megfelelően konfigurálva. Lásd: EMAILJS_SETUP.md');
    }
})();
