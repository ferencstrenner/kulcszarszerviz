// Kulcs-Zár Szerviz - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Weboldal betöltve');

    // Smooth scroll navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
