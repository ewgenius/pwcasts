/**
 * workaround for typescript type errors
 */

interface WorkerLocation { }

interface WorkerNavigator { }

interface WorkerPerformance { }

interface ServiceWorkerGlobalScope extends EventTarget {
  fetch: GlobalFetch;
  indexedDB: IDBFactory;
  initServiceWorker(self);
  location: WorkerLocation;
  navigator: WorkerNavigator;
  onactivate: (this: ServiceWorkerGlobalScope, event) => any;
  onerror: (this: ServiceWorkerGlobalScope, event) => any;
  onfetch: (this: ServiceWorkerGlobalScope, event) => any;
  oninstall: (this: ServiceWorkerGlobalScope, event) => any;
  onmessage: (this: ServiceWorkerGlobalScope, event) => any;
  onnotificationclick: (this: ServiceWorkerGlobalScope, event) => any;
  onnotificationclose: (this: ServiceWorkerGlobalScope, event) => any;
  onpush: (this: ServiceWorkerGlobalScope, event) => any;
  onrejectionhandled: (this: ServiceWorkerGlobalScope, event) => any;
  onsync: (this: ServiceWorkerGlobalScope, event) => any;
  onunhandledrejection: (this: ServiceWorkerGlobalScope, event) => any;
  performance: WorkerPerformance;
  registration: ServiceWorkerRegistration;
  self: ServiceWorkerGlobalScope;
  skipWaiting();
  unescape();
}

function initServiceWorker(self: ServiceWorkerGlobalScope) {
  console.dir(self);

  function pushListener(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    fetch('http://x.appodeal.com/agency')
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(e => console.log(e));

    const title = 'Push Codelab';
    const options = {
      body: 'Yay it works.',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
  }

  self.addEventListener('push', event => {

  });
}

initServiceWorker(self as any);
