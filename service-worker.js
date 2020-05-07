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
    "revision": "81f4dfc13ac1c9234d23b9c03ede9672"
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
    "url": "assets/js/14.232defeb.js",
    "revision": "a029923aa378380189a4c4212ec73821"
  },
  {
    "url": "assets/js/15.ec0592cb.js",
    "revision": "570ee51c47ee683735adc917f5e571d0"
  },
  {
    "url": "assets/js/16.baec9801.js",
    "revision": "997ba874167d2bc4fe01a2871f22cfbe"
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
    "url": "assets/js/19.6191655e.js",
    "revision": "9cd32cfe861d1d9c68cff10fdd2cdd58"
  },
  {
    "url": "assets/js/2.d179a4cf.js",
    "revision": "c35362d367af52b60b56a08a65af73c6"
  },
  {
    "url": "assets/js/20.81d2fb48.js",
    "revision": "80e5fa8bfa68b2bc55633c559a69fc6d"
  },
  {
    "url": "assets/js/21.77d7ce9c.js",
    "revision": "5d02d390292cff5e3f282e0ed106b41d"
  },
  {
    "url": "assets/js/22.3750ebc2.js",
    "revision": "a0b9b25d7b61f8e2b9122bc1c3da4718"
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
    "url": "assets/js/app.89659d6a.js",
    "revision": "0d54866944c040eee64bd0a92b5440ef"
  },
  {
    "url": "index.html",
    "revision": "1f48fd1a591bd700c6df88cc4ab76d23"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "2685381de71d19187df0726779549372"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "edba2c5047018fa8ac5c1fc3a52fb9cd"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "1d943c396be25a639e393fea2eab5578"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "b800ca4256a30e52568e331d94661195"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "7b33c5be2aa2e259c4b7591fe2f6e8b5"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "7d0c54d540a71f4cc227dd50a623c5d1"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "803c8d6dd0712c3287384354cf5c7e4e"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "e31e7d898cde9044cafc26bfe6f79858"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "e7a05f2a7a22ddf631d7a335dc2bdcf2"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "a5e401cf4cf73bed0fbfc472d847cb0e"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "4de2039a486e275909e852334880ef24"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "8639975bf7e9852f087830a0776ddeab"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "9dc34168ea790a60e53eef8f077a8446"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "24f7103d3fb97d7b25319ca2b6f079f8"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "5f582ad66621b5c1f6b6274b81168118"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "42dad0bd814319ca2363e6be3168897f"
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
