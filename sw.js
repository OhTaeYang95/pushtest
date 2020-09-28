"use strict";
// && 'PushManager' in window
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('16');
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/OneSignalSDKUpdaterWorker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/OneSignalSDKWorker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/service-worker.js')

            .then(function (success) {
                console.log('[Service Worker Sucessed]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker Failed]', error);
            });
    });
}