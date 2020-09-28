"use strict";
// && 'PushManager' in window
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('10');
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/OneSignalSDKUpdaterWorker.js')
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/pushtest/service-worker.js')
            .then(function (success) {
                console.log('[Service Worker 등록 완료]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker 등록 실패]', error);
            });
    });
}