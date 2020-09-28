"use strict";
// && 'PushManager' in window
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('14');
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/OneSignalSDKUpdaterWorker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/service-worker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/OneSignalSDKUpdaterWorker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/OneSignalSDKWorker.js')
            .then(function (success) {
                console.log('[Service Worker Sucessed]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker Failed]', error);
            });
    });
}