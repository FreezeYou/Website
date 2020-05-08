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
    "revision": "1729e86d26d59cd4e0ec1c90dc900900"
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
    "url": "assets/js/21.df36df62.js",
    "revision": "d75e9e8fae0eedc9097064405dbc9c11"
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
    "url": "assets/js/app.ccf61276.js",
    "revision": "9765617cb770a2260a90879041c699e8"
  },
  {
    "url": "index.html",
    "revision": "600d2a3654a87ec2b0c18c3a2e2e9713"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "26731fee2309285429087597b95e13d8"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "825f01818a77b5752ce5853b228d4b79"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "ed0445a01297875d67f31417e5ea57cd"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "5a74d9788297e7ae19973d62eac551a6"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "ddd3eaa24418138a657afc8a918c7dfb"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "4175773dbf7e9026e2d884d8ff7463bd"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "6c8a886ab268ce53785af6136fff62e3"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "bd1dc783f770013ef6a4a9aaff36ccb2"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "66c87f8ffa9db82d2c81934c7ddf1018"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "95df8810f783bf940c88f0b94432fdc5"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "b55e6c9fa07e21b2019cf00721e67faf"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "886bbdff41231f3590cb64904f7430bb"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8840a22cd2d41ca1d437444070f44caf"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "51e86f2e73ebff9050600571e6fcb0b7"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "2d66555db20a439bbed47748b7e8d275"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "73c808a55c0983163af6f9a2dd8f445a"
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
