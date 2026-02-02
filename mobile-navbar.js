(function() {
    'use strict';

    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (!mobileMenu || !navList) return;

    function toggleMenu() {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        navLinks.forEach(function(link) {
            link.style.animation = link.style.animation
                ? ''
                : 'navLink .5s ease-in-out';
        });
    }

    function closeMenu() {
        navList.classList.remove('active');
        mobileMenu.classList.remove('active');
    }

    mobileMenu.addEventListener('click', toggleMenu);

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    window.closeNav = closeMenu;
})();
