(function() {
    'use strict';

    const progressCircle = document.querySelector('.autoplay-progress svg');
    const progressContent = document.querySelector('.autoplay-progress span');
    const swiperEl = document.querySelector('swiper-container');

    if (!swiperEl || !progressCircle || !progressContent) return;

    swiperEl.addEventListener('autoplaytimeleft', function(e) {
        const [, time, progress] = e.detail;
        progressCircle.style.setProperty('--progress', 1 - progress);
        progressContent.textContent = Math.ceil(time / 1000) + 's';
    });
})();
