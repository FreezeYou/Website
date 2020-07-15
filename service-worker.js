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
    "revision": "ce3dd7393d9f05768158ec0b6549fa51"
  },
  {
    "url": "assets/css/0.styles.c565c15e.css",
    "revision": "3bdab99c4bd43d19fa11b4e03aca5420"
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
    "url": "assets/js/10.a28574ee.js",
    "revision": "464969e04161beef87b9d90feaae24f8"
  },
  {
    "url": "assets/js/11.01b7c50b.js",
    "revision": "53e663ad171a5ffb58664cb23a9f3b3f"
  },
  {
    "url": "assets/js/12.6b129a7e.js",
    "revision": "416e370c48da7a338855633d6d84000e"
  },
  {
    "url": "assets/js/13.d084798c.js",
    "revision": "cb4a5e17261803e6c478fc57b6d1e324"
  },
  {
    "url": "assets/js/14.0274fa4c.js",
    "revision": "8bb38c4539bbf83be9fe0fb9b2451c9a"
  },
  {
    "url": "assets/js/15.8c46284c.js",
    "revision": "1a99b28363a914ae2fd2716e8341a220"
  },
  {
    "url": "assets/js/16.9c3f5737.js",
    "revision": "ab84cbf93790cdb7fee879ee98955670"
  },
  {
    "url": "assets/js/17.69bb57b3.js",
    "revision": "24c135faa11e587bad08fb12195bab3d"
  },
  {
    "url": "assets/js/18.b591f41b.js",
    "revision": "7415d63d51f3c53446115d101506c04c"
  },
  {
    "url": "assets/js/19.d722d874.js",
    "revision": "bb86178b6492ba73ccc1239d0834a1d1"
  },
  {
    "url": "assets/js/2.ea487343.js",
    "revision": "673afa237b746273aa2ca325a5c661ba"
  },
  {
    "url": "assets/js/20.daf3bf09.js",
    "revision": "0003a5a83ab935d4a44aa8bba78b461f"
  },
  {
    "url": "assets/js/21.70567467.js",
    "revision": "8a7c4ca65d4d4db5a8ddd0e789bf3a82"
  },
  {
    "url": "assets/js/22.01a5346a.js",
    "revision": "98610c2bcb311750348f9e3d02f00475"
  },
  {
    "url": "assets/js/23.6f04c84a.js",
    "revision": "8128dfd6208b0dd837944f6306828e72"
  },
  {
    "url": "assets/js/24.0ba8450e.js",
    "revision": "6ff1291d2e471c428b21b7f8bab71758"
  },
  {
    "url": "assets/js/25.fd7cb439.js",
    "revision": "0bf9cd5e11a8a48f11dcbf52a8f4d54a"
  },
  {
    "url": "assets/js/26.d302a1f3.js",
    "revision": "412a3cc7b8ab3950bc02089439234dc8"
  },
  {
    "url": "assets/js/27.686f8915.js",
    "revision": "976fb90bfd791854e1ddd3771d6b711c"
  },
  {
    "url": "assets/js/28.3ee5dfd0.js",
    "revision": "8fdb7911b21da7d48d947cc06f6a0e62"
  },
  {
    "url": "assets/js/29.1e4ce18c.js",
    "revision": "ca5d083f88fbea13e0bf6745a31e410e"
  },
  {
    "url": "assets/js/3.badac0a7.js",
    "revision": "c3b188c1dea7085839ba768d8d5ce2a0"
  },
  {
    "url": "assets/js/30.f0a2eef2.js",
    "revision": "828e45d8b75aa13faad8aebb3cb01828"
  },
  {
    "url": "assets/js/31.8e22fd17.js",
    "revision": "51e922fcd2a54e691109c10ff87d437f"
  },
  {
    "url": "assets/js/32.9d06fcef.js",
    "revision": "f6f00563b8b53da053fa22e747895664"
  },
  {
    "url": "assets/js/33.54286db5.js",
    "revision": "e5a2c2ad90fd14b10094795be7d2cfc3"
  },
  {
    "url": "assets/js/34.5e3dbea5.js",
    "revision": "c04a2f9ccee14c4961ed8bcaf193802c"
  },
  {
    "url": "assets/js/35.b0daf2f8.js",
    "revision": "db8b61df23e5bbf04d3f53d3b4c6f7f4"
  },
  {
    "url": "assets/js/36.ba208d38.js",
    "revision": "289ca5d41f6cdcd986dfdc62e612beb9"
  },
  {
    "url": "assets/js/37.844d5eaf.js",
    "revision": "a34f9eae699b195d3bdd5d368879f75c"
  },
  {
    "url": "assets/js/38.f00b9a05.js",
    "revision": "db4860b64ecd617492d6a7d3b6fae8d0"
  },
  {
    "url": "assets/js/39.73bd5a41.js",
    "revision": "febed5a552148cf98fb70f3f1cb9443c"
  },
  {
    "url": "assets/js/4.81e974a0.js",
    "revision": "5d46b16f5ff7375506e0ce5c606eb937"
  },
  {
    "url": "assets/js/5.b359c37c.js",
    "revision": "6b6260427c1317048464a8e26371feb9"
  },
  {
    "url": "assets/js/6.fe150c99.js",
    "revision": "c842a865c04c23bb384d5dc2de76e904"
  },
  {
    "url": "assets/js/7.85d6231c.js",
    "revision": "170acb80e6175f00beb13b57866742b7"
  },
  {
    "url": "assets/js/8.3903ecab.js",
    "revision": "0e5c5332d69fb76675a33515fefac810"
  },
  {
    "url": "assets/js/9.43f950af.js",
    "revision": "5e8568807bdb478b424f8f88120e0db3"
  },
  {
    "url": "assets/js/app.a17ad54c.js",
    "revision": "959c16db1dde29729ca2d50e0fc6525a"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "4bbfcbbf80e52f1ae9948887adb972d0"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "3cbeb425abfcbe8fa5547a95cfcb33a3"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "3a5529926cbc800f569d8d58b731759d"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "f4eb97bf9999d20a784812a0b59818b3"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "f5a3df5731c7f73e8d497f87521e736d"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "c55b907aea734fb9467ea27d5638460d"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "d2bca3f33c304bdec49af5dee65dffa0"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "7fee5117f795336b5a278c00a9d3b325"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "e2467df23dbaadbefffeaf8b124336d0"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "9c6082c3c1947463afc758587698a08a"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "32d7bb2b5012b58957509f1857a989e1"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "c3b2a605ce0d29f6d6c308611e5be07d"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "9fc90571f3b9f5ce608f1d1a35a57ade"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "e5ce7620b94ed923b80d4871e43af2ca"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "53bc55e14471baf80660ec09193b0fac"
  },
  {
    "url": "en-US/index.html",
    "revision": "65939d8b59efabe3911850b533f75f4c"
  },
  {
    "url": "index.html",
    "revision": "f4c13fa6d7b02746624aab23d9932bd7"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "202c08e76a2085cbf95a46791f56dd81"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "eeb946ec27979be93e5555bcec8413a2"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "b7f9bf18a5112928d5a66d331147163f"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "cb124f1293058cc9976ddd40b1b9eae7"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "cd453fcc86a6174f637337bb18251be3"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "eb88a026e1a0adcdb332b61b5d4b5596"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "ba0202afc67632eed232345be5ad1fae"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "52bdf43ad90daf5084a2337195679b43"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "249d15b5a060a077395e661e1f118845"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "f1e51a367924136856efa4df3f2c0261"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "1e650ea033b252ab37ad3f36c3987ba8"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "74afab63f6c3c45c21102d7a00ff7d07"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "5df9a7e2686806f48a0b4f31f9e6347c"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "54dc75ddd58d8fa82f752efd43dbf876"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "cad7104a8431839eaed35eee7c644065"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "7f8b3898b90f9d31dd1f3ea11b2c37b0"
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
