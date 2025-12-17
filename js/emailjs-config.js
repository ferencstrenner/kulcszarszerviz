// EmailJS konfiguráció
// Töltsd ki az EmailJS dashboardról kapott adatokkal

const EMAILJS_CONFIG = {
    publicKey: 'qWK6UjtkpwVzHVHNV',        // EmailJS Account -> General -> Public Key
    serviceId: 'service_zoq10oh',        // Email Services -> Service ID
    templateId: 'template_rpokz8k'       // Email Templates -> Template ID
};

// Inicializálás
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    } else {
        console.warn('EmailJS nincs megfelelően konfigurálva. Lásd: EMAILJS_SETUP.md');
    }
})();
