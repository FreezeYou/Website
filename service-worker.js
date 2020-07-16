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
    "revision": "d98329a45894b2c3e45062ed7be81225"
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
    "url": "assets/js/16.c4c57d19.js",
    "revision": "aec163c58cb45a7fd2ed7f36cfd2fe6f"
  },
  {
    "url": "assets/js/17.814d2ba1.js",
    "revision": "92dcdcd310ac287d2ee56f5b8d3f3b15"
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
    "url": "assets/js/20.71b66bcf.js",
    "revision": "86f3a40bdfcb6722e062fb67978e66f0"
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
    "url": "assets/js/32.2aa101b4.js",
    "revision": "b330913ad8c550bc8fdacf9be2e0a91c"
  },
  {
    "url": "assets/js/33.47476fd9.js",
    "revision": "a76a2d7352f6208ab4c560a5d2de9d23"
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
    "url": "assets/js/36.a280bf4b.js",
    "revision": "054553402accb85fb22a55792c779e60"
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
    "url": "assets/js/app.f03f146a.js",
    "revision": "9bc245ecb29eff0c79cd1e80e7c9abe6"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "99f358691aba238415382ec13d2d1780"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "39241782df6e39308bd4e59f5487b13f"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "11edddf3bf610713b8c4f1895cceb719"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "5db19401fcd8a9d8f91919efa64afa56"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "58e6e82f45b2c6f13959f8845245f7a9"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "637f0d71276d9acd8ae789f44ab0bf68"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "c8abf5cf2e1a476bf0cb0111906d16cc"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "a56c6fc137bf5ff11f8966413748e4ed"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "e93b86be62e5faab5e4b89977f1a2bd4"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "06dfbf46c484e9ca0c8fd1c4d2b14803"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "1e1edbcaa75a21c6adeed58f62d85c01"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "1b48b565eca384cef904f8aca9a36c72"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "2796927a4c4aa268ebb91792462f7e63"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "fb08b28d6746f1ca5b0cb1740c2dfa96"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "56346b05b3e0d53d30bb58c9cad5a825"
  },
  {
    "url": "en-US/index.html",
    "revision": "e11e22bdf723d34383a6d62c8ee65958"
  },
  {
    "url": "index.html",
    "revision": "2353a73b6196acf6c5d6533b771e2526"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "ad80a1f1f4ba8632b6d0cab84b0c30c0"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "714c6ae85e9e4ccf2c3211ca4881c30b"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "403108661ff6f6096cdc193e7edfb333"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "726e7ab855e218536832f8d509234a04"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "60d02ee3b8a86b98146e980f885dc000"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "4134943c7a324096ab0c84245087ce34"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "17079c55da5b655017d811d784b4f157"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "ff696540c6ace641916b395b30ce6816"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "b02f397fd3e2d815c9fc5db9b8e7f706"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "9ee38f833f3385a9e21c90cf234816ae"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "5c76b4f2f1f35240ebf3b9c5b0c26dc9"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "6a5311ecdd1d0da94a32b217c5b75f0e"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "0ebf9e3e72a9583e9ac3a92c17c4da94"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "3d012a58cbfe7cc59452d87414a1e025"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "7ca8b7e843b435a3da0872625c872317"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "15fa8392291e11bccb22474d3430429d"
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
