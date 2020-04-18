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
    "revision": "28471207f95702725124051fa1ab0369"
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
    "url": "assets/js/12.8683484a.js",
    "revision": "5881458d57f02558cfdda471738a6fed"
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
    "url": "assets/js/15.3b13da16.js",
    "revision": "7368e079dcc082e552ba90cbce6d3176"
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
    "url": "assets/js/19.ca367a9b.js",
    "revision": "05c842884de887356d4b274494f913cb"
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
    "url": "assets/js/21.818ce362.js",
    "revision": "87e21a69cd7d51cf737aeb56b36351f9"
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
    "url": "assets/js/3.a88e4e47.js",
    "revision": "871681aa7abfba55ee4e346a04fb14ae"
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
    "url": "assets/js/6.f1e5bad2.js",
    "revision": "3548fda23dee2f77d29ba8a62577aae3"
  },
  {
    "url": "assets/js/7.832434d5.js",
    "revision": "03cc01b04af3d11a4a36fec9d77e1b1e"
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
    "url": "assets/js/app.7279cea7.js",
    "revision": "d2fa8960e37aa116fb4ae23f642c2050"
  },
  {
    "url": "index.html",
    "revision": "e2d0babdb9c2de66f02764818499e87f"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "f5a68a5ca1971db54465ad22329ebabb"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "7263f1408ea863bfed461b9102dda1f3"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "a28f18edae67e9dbb5008972aaebf7ec"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "76db8f725047978ff7deda6d0958b197"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "f14b11698c31198df6541906e210fb4c"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "e04bcce159e6f62e73f66465a6058023"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "62d11dead6aae241cab01badf8cb7c60"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "99564bc223b3a0ec512ed0cef06114e6"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "5a7df2f84432f13988df3c33a8e79b17"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "4f3caaae3468bf4ffd10187b8e7e6862"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "bb0ee4bec96dbbc69fc11a2bffd6bc46"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "513ff0a0861a129807b48a585b4146a2"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "fc38f3fa5eda063dddbf9555638f4bab"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "5c6ffecebe04b2ec4d91f21b58f8e028"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "013e2ff46b1b30e7de2759cf9e46fe0e"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "4737c85696f92becdf983502acab16cd"
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
