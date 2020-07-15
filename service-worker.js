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
    "revision": "3e8de2fdb8bf6d38ff22a348a448566b"
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
    "url": "assets/js/app.72d53e93.js",
    "revision": "c0380955f0bb126230b7410d8fd95823"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "634b836da4801f5de73161edf67c02c2"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "80dd5ae311cc39b960b05707f69ddb3e"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "01d40a606085f7cc250c611d2a7478f5"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "8772ae06d2f365ea53c9199ce81d0749"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "1f219da979df54ee8d5fc49df380d58c"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "9b1b4a63a197a83f622a9f38c4b87888"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "236b83557fc86c1483262392237cf7ef"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "4887df779a78100404331ffc43be059f"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "6e29f0d24b917c26320cc6d6be2eab79"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "9099ae23f6a8261e1277ee1081691564"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "30ef41775db0adab5b8060e02500da4c"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "d736419fac44158d452ddd9f939d3fc3"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "f99db3628a34e6a45f25e766bcafb0b7"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "3c4969aa6eb511ce8eaa376a071084ad"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "33bc22c14cccd5057f246151272d3219"
  },
  {
    "url": "en-US/index.html",
    "revision": "5b4dd8f542420354c31b19279ae54756"
  },
  {
    "url": "index.html",
    "revision": "2c0b1c911c654d69100e9db07fbda13e"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "01cbcf98260a283ab0f58297d5c3e21c"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "ac1fc6574cdb4937eadbdf3571c361ed"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "252f381f5681551e95e99857e49f1de3"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "4ce57ea4cea49688d3fce3cb11d68e35"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "7182e946633fdbcdfb00e5c1078a2187"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "e9fbfc7984ffb53a3e756f845bddaf61"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "3321ba61f75610347c31d7624cea58a9"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "22f080174a2a98e553c3e4234d82f454"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "87f82aab3a36cdb49421286125fd20ed"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "b901c93fcffd52ebcd32d4b70d67b3ca"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "e5996c6d3758e7912edb5171bf0160c7"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "3ae14e92f8a39eee7df437081be92324"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "f3f544ab5010d331cd273527b23c1c62"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "781fbad875dfc633ed401497d6933a12"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "e664a93a20ea6cbf681450b9c648d6e8"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "ff6dae2abe4cccbd12bb6720495bc851"
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
