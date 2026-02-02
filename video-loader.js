(function() {
    'use strict';

    const video = document.getElementById('bg-video');
    if (!video) return;

    const breakpoints = {
        mobile: 450,
        tablet: 1030
    };

    const videoSources = {
        mobile: {
            webm: './assets/bg/video-home-mobile.webm',
            mp4: './assets/bg/video-home-mobile.mp4'
        },
        tablet: {
            webm: './assets/bg/video-home-tablet.webm',
            mp4: './assets/bg/video-home-tablet.mp4'
        },
        desktop: {
            webm: './assets/bg/video-home.webm',
            mp4: './assets/bg/video-home.mp4'
        }
    };

    function getDeviceType() {
        const width = window.innerWidth;
        if (width <= breakpoints.mobile) return 'mobile';
        if (width <= breakpoints.tablet) return 'tablet';
        return 'desktop';
    }

    function loadVideo() {
        const deviceType = getDeviceType();
        const sources = videoSources[deviceType];

        video.innerHTML = '';

        const webmSource = document.createElement('source');
        webmSource.src = sources.webm;
        webmSource.type = 'video/webm';

        const mp4Source = document.createElement('source');
        mp4Source.src = sources.mp4;
        mp4Source.type = 'video/mp4';

        video.appendChild(webmSource);
        video.appendChild(mp4Source);
        video.load();
    }

    let currentDevice = getDeviceType();
    loadVideo();

    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const newDevice = getDeviceType();
            if (newDevice !== currentDevice) {
                currentDevice = newDevice;
                loadVideo();
            }
        }, 250);
    });
})();
