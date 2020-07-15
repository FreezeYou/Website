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
    "revision": "cdbbf73cd4e1e348ea9f95fc2df9a0a3"
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
    "url": "assets/js/10.0495f89c.js",
    "revision": "eaa1508775914dd6b871257cbf10bfa5"
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
    "url": "assets/js/14.0dc15bdb.js",
    "revision": "a758c2be6acc0e9e6f562279c347b3c6"
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
    "url": "assets/js/17.a6293ce3.js",
    "revision": "d22d51d6a3a6260c5b0b77b2fed4fce9"
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
    "url": "assets/js/30.171c461d.js",
    "revision": "a99be12c4a0433b4f02fb7df91db566a"
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
    "url": "assets/js/33.74a0b5a7.js",
    "revision": "bed7e06a6cfd8c8c084fd1299face50b"
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
    "url": "assets/js/7.2a0ad2e5.js",
    "revision": "a0c77e1c33cbcb247a9c011a219fa6d8"
  },
  {
    "url": "assets/js/8.07045aa6.js",
    "revision": "23679fbf8945517edba85c28ad5de707"
  },
  {
    "url": "assets/js/9.6feb662c.js",
    "revision": "11c3796ddf02025f00acafb7ba91b048"
  },
  {
    "url": "assets/js/app.f3f7ffe2.js",
    "revision": "e91c5058aba2b3409d32857c5ba28ba2"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "bbd3c6acbc5b9198aee2a198cb122479"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "7c9b31ac3c29e62c70e1459562613bb7"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "a9a56eb12cec074b26f4b533ec8abc64"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "5bc98b25faadd99c67c535e23b1360db"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "c3a22276d6f46bb5cddc4af1397390a3"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "e81074a621365de430c827f89bd91409"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "eed30d77e54b8d667fcfbee93e3774d9"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "5497da927863a936c374b697d1c15268"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "5e2ce4015007b35cf1a93a834b1b4a9c"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "fc356ba2c26782ef2da6c1baedba1410"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "a115e381edadbcc6ef8d466221882b34"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "f97b87b59dbdc8647ffb64b9584a5357"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "980fdfc7284a05c57fb120fd495560da"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "b561f291e13d297f890b9a665d50b2c1"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "c7e335692f0298c4e8d96ab6f24edfa6"
  },
  {
    "url": "en-US/index.html",
    "revision": "6d8b96f5c427b4a5148207e45c45713d"
  },
  {
    "url": "index.html",
    "revision": "e3318079cb1d6b6bed0b468383c83e8b"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "7e4d2525972943f43960ede9ce0ec98b"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "9d3f81980056a3b160b598a3f4249f04"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "23290f8f730fc76bd9e13788ea55a6f0"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "3050a5fe6fe9acfc44eb632899ac6305"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "7603c0f1b2b5673be4428a6a1dcd0d03"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "e4d2c1efa4599f423d8212dd1d569bb0"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "977f8894bcaa85818b2787ae718a0b11"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "6be36aacb02f29d1bc949ec225053a22"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "bf160ef2c4b2077f017629436bd07fa7"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "732dfd022d5821fda558ba5faf721347"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "46c3ac16da49195e1b9c746639da9083"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "a757d0469246a585a07c414e9dd8a156"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "6c47c708adc8ced563440e409853d2e0"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "259999cd9c45508729f04a00f2228e57"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "bb95cbb65f111272dc9c46d214135af6"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "d36ce8a6b91d55b11a4a84b56d606cbf"
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
