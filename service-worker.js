/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4bb711b048c120924761461560ef0e3f"
  },
  {
    "url": "assets/css/0.styles.375a0391.css",
    "revision": "cad8050fe2a281f8c06d5f781b9f8ca6"
  },
  {
    "url": "assets/icons/apple-touch-icon-152x152.png",
    "revision": "c05c8e4546b8e74483cb8ff465749a08"
  },
  {
    "url": "assets/icons/msapplication-icon-144x144.png",
    "revision": "cb48ad61b7f2ec0e908141aa35806ea6"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "1ed3c878d60c65c03e9cd5794be8a754"
  },
  {
    "url": "assets/img/20180207104242.png",
    "revision": "b91b3660380ae4f1f8fefd284ba94a55"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "757b632912a0fc3126d7661366e7849d"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "1ed3c878d60c65c03e9cd5794be8a754"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen144.png",
    "revision": "2660b9fbac1b7c82473edaa43564f675"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen168.png",
    "revision": "64d66122dc7a8f892a08cb0cd39d693f"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen192.png",
    "revision": "98c878af6f08889c8a1a94ee42091bc4"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen48.png",
    "revision": "a0eee1cba3aaa6ddbf28eb6c539b5985"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen72.png",
    "revision": "58da9becadf63efcd99f6907105dbfd6"
  },
  {
    "url": "assets/img/manifest_json/images/homescreen96.png",
    "revision": "81bb0bcad8cb5353133e9d679d90cbc7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a074de8.js",
    "revision": "fa9a8dfc4772204eb079bfa812692b6a"
  },
  {
    "url": "assets/js/11.92258372.js",
    "revision": "96d94e43c5a6ec0986e0a4c175edead2"
  },
  {
    "url": "assets/js/12.fdec0692.js",
    "revision": "776b003e91cc6336862a17e84dd1c83f"
  },
  {
    "url": "assets/js/13.274a8a40.js",
    "revision": "6892dde42435edd75510e6038adc2307"
  },
  {
    "url": "assets/js/14.2c16b9db.js",
    "revision": "42cba9e6ef2a57a3eefe297f9bb79c10"
  },
  {
    "url": "assets/js/15.ec0592cb.js",
    "revision": "570ee51c47ee683735adc917f5e571d0"
  },
  {
    "url": "assets/js/16.f3114c3b.js",
    "revision": "ada4e9c9c852eb953f9a22ef19f8e083"
  },
  {
    "url": "assets/js/17.3cbc7034.js",
    "revision": "a2282f3e628204102113a61f5e4d77c9"
  },
  {
    "url": "assets/js/18.8f15bf35.js",
    "revision": "13b5d97ed55a7b9410d7af41c8510c7f"
  },
  {
    "url": "assets/js/19.a743c359.js",
    "revision": "605e2ee069192ce4929b9fa6a82539b1"
  },
  {
    "url": "assets/js/2.d179a4cf.js",
    "revision": "c35362d367af52b60b56a08a65af73c6"
  },
  {
    "url": "assets/js/20.0ce456b4.js",
    "revision": "e3c71144095e8549aea51540a56c52a7"
  },
  {
    "url": "assets/js/21.77d7ce9c.js",
    "revision": "5d02d390292cff5e3f282e0ed106b41d"
  },
  {
    "url": "assets/js/22.489ca1f5.js",
    "revision": "7d43876ed65e2de2d91c4d4296317848"
  },
  {
    "url": "assets/js/23.c7942a67.js",
    "revision": "67b6e69c121258ccf1ca3c9d3d146d36"
  },
  {
    "url": "assets/js/24.4f76a7b3.js",
    "revision": "551748622ef72812e7794b5addfffa2d"
  },
  {
    "url": "assets/js/3.b4185f25.js",
    "revision": "6b20c5fe2223018d2d4e1efc6644977a"
  },
  {
    "url": "assets/js/4.3f4c1fb3.js",
    "revision": "697f7e4b58ec3ce7308827c30718d61f"
  },
  {
    "url": "assets/js/5.cc7985d8.js",
    "revision": "b2d1011bb5347258e2bf535f635baf7b"
  },
  {
    "url": "assets/js/6.3718994a.js",
    "revision": "508a64e338af401a742f9b38127c42b3"
  },
  {
    "url": "assets/js/7.360c9851.js",
    "revision": "415ea4ce0571815092b6652c0099ad80"
  },
  {
    "url": "assets/js/8.adeddc1f.js",
    "revision": "b0febdc28c2fbb8b90ed0973c66d6c49"
  },
  {
    "url": "assets/js/9.f5fdca3f.js",
    "revision": "0d6f5d0876b1f69cffb476d7001c300b"
  },
  {
    "url": "assets/js/app.efdb07d6.js",
    "revision": "efd5fd5384986594b5ce8ecdceada93e"
  },
  {
    "url": "index.html",
    "revision": "7aff8ac0c35fcd8fd475ca39a5ec9038"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "0b1e184ce2b8c203ae8b0fd26a2fc9dc"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "34d0ec4fe5386e0187e666b420d193ba"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "66219b6192b25757ccaceba373316627"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "70a7830c91b1e55d86cf00b6069e6f10"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "42a47fe38c5035efb78f50a06654d9f5"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "8ca7036ff9af175ae91a4f5ab36fe3f4"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "bd2ed5c212775f0a490233f8b84c94e3"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "7129d019ad188722681ee84d1c439f0f"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "9e0f68f64ff00ae14924d0fe2eeada1a"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "6a3188f3dedd012404f392bb9ed92575"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "62624a88bb4bd03a91df543b9d146da2"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "ff62b8bacdd6cc67708ac8ec42b1376c"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "c6aea590ca48f8ee98edd5b2cb4b4673"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "ea1c516ed2978efbe49bb0489855c918"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "d4f694ab9ab7626d9e4d6bbb62376b67"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "e614dbb85838a3073463da114c1f60da"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
