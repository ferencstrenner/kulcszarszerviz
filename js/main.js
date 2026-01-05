// Kulcs-Zár Szerviz - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Weboldal betöltve');

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Smooth scroll navigation
    const allNavLinks = document.querySelectorAll('nav a, #mobile-nav a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
