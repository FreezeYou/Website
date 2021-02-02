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
    "revision": "5781c034e88bce9dfa25f56c4449a74d"
  },
  {
    "url": "assets/css/0.styles.4b8378b9.css",
    "revision": "db18c4cc998d66d98c7451023f2225a3"
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
    "url": "assets/js/10.5d984899.js",
    "revision": "ba3d0baba9dfa0f7f91f99fc3650c43a"
  },
  {
    "url": "assets/js/11.e7bbe807.js",
    "revision": "a67efa1acb5727912889cd4deba55140"
  },
  {
    "url": "assets/js/12.6243f7ee.js",
    "revision": "fc0742a5b5573225c3cf202cff1895a8"
  },
  {
    "url": "assets/js/13.075485df.js",
    "revision": "f18079f1afe06a856c5ca6eac739d2cf"
  },
  {
    "url": "assets/js/14.92ebeb39.js",
    "revision": "760d3b163d192f4bb85e7f3ed75bc300"
  },
  {
    "url": "assets/js/15.19b0641a.js",
    "revision": "13960aba7de77ded1fce424ba1a30b22"
  },
  {
    "url": "assets/js/16.9845ab80.js",
    "revision": "573f80564e68b3948eb181eb5463211e"
  },
  {
    "url": "assets/js/17.eb1abb04.js",
    "revision": "af599604535d1dfabf578e0774912ed6"
  },
  {
    "url": "assets/js/18.e0fb90da.js",
    "revision": "27ba8de69ab60f43ea30de42481ba41c"
  },
  {
    "url": "assets/js/19.b75f2b57.js",
    "revision": "4b0761109e9bd8e151b938415ce98f58"
  },
  {
    "url": "assets/js/2.7ce11c93.js",
    "revision": "7fa1b4add9b6a6b418b4e9d7bb681806"
  },
  {
    "url": "assets/js/20.3202e052.js",
    "revision": "6a2627e85bc0af0a8ab2d437d598e8c4"
  },
  {
    "url": "assets/js/21.1a4eb83a.js",
    "revision": "8b90244df32dad7b8c6cb1f9dab64db7"
  },
  {
    "url": "assets/js/22.4b8fd063.js",
    "revision": "c22cea547e1b0cf0a267dfab8dea1ea8"
  },
  {
    "url": "assets/js/23.64455242.js",
    "revision": "8f95ff93e12f1ea7e967dff2dbf5a84f"
  },
  {
    "url": "assets/js/24.90483372.js",
    "revision": "d1acd87ef7ab97d7a166b7c098b967b2"
  },
  {
    "url": "assets/js/25.cf43571c.js",
    "revision": "03a5d16840500e08deccc0d0b2a3eaf7"
  },
  {
    "url": "assets/js/26.b9bb4bb5.js",
    "revision": "0cf3939b4da240a07209503bb4359334"
  },
  {
    "url": "assets/js/27.3fa4fdf2.js",
    "revision": "3af35a990b4045f67dbd818a16767c1f"
  },
  {
    "url": "assets/js/28.02f01717.js",
    "revision": "bcec75e3d15eb6d8464f4b34f44ec282"
  },
  {
    "url": "assets/js/29.44f146b3.js",
    "revision": "4ebfa0266f88abeaa377a4699d361565"
  },
  {
    "url": "assets/js/3.31d7afaf.js",
    "revision": "41fb2e62ce2ff21a3337957be6d560cc"
  },
  {
    "url": "assets/js/30.d6829f14.js",
    "revision": "820a8ea792445576243bd6b76d61329a"
  },
  {
    "url": "assets/js/31.e1c55a87.js",
    "revision": "ac672c23ca5520957dd6aef20d1b7ff5"
  },
  {
    "url": "assets/js/32.c1cbc2c8.js",
    "revision": "9a0b1c6d335727c701e104ad7611bc4f"
  },
  {
    "url": "assets/js/33.670fe8b0.js",
    "revision": "f4e2d19dcbee719f0fd95279b882dd90"
  },
  {
    "url": "assets/js/34.07572bb2.js",
    "revision": "b0c4e52816b16bfa661b7b8aeb5c1f87"
  },
  {
    "url": "assets/js/35.2b550586.js",
    "revision": "088fb4c1a33b059fb237a0e1625cde4c"
  },
  {
    "url": "assets/js/36.563daa37.js",
    "revision": "b736190cfacb8da950308a9bc8d8684f"
  },
  {
    "url": "assets/js/37.6ceb9b5e.js",
    "revision": "c10fa2ff1e9f051ace74f05fcc23db78"
  },
  {
    "url": "assets/js/38.9dfee769.js",
    "revision": "cf23f4804cdcaf76011b21483edc613a"
  },
  {
    "url": "assets/js/39.eac32f0f.js",
    "revision": "7670f88a17c1b8f2473cfbc113ff6993"
  },
  {
    "url": "assets/js/4.dea36bc3.js",
    "revision": "cfad3acd851fbc37597b716f1a190116"
  },
  {
    "url": "assets/js/40.d7a5c57a.js",
    "revision": "28769b223569ee7eb1371990b1521a05"
  },
  {
    "url": "assets/js/41.3d949f66.js",
    "revision": "04657729dbb149d2d7bedc1005ed1880"
  },
  {
    "url": "assets/js/5.ceb8e3b4.js",
    "revision": "03c3a30ee373531209f86259fdf41768"
  },
  {
    "url": "assets/js/6.4996153d.js",
    "revision": "37a8d306c04199838dcdce568783d04c"
  },
  {
    "url": "assets/js/7.75852606.js",
    "revision": "72c9d93db9be8b050e6214a50da806d1"
  },
  {
    "url": "assets/js/8.bdd95a60.js",
    "revision": "18e17627d4f4943bad81cb76faf9124e"
  },
  {
    "url": "assets/js/9.e6c748b7.js",
    "revision": "1a5d509a1baa8287086599dd21cd077f"
  },
  {
    "url": "assets/js/app.6d9ada26.js",
    "revision": "7627ab7b2e7bd2815c5c2ef50847a4dd"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "f18aee7e82b399f3da70ce848cf3a381"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "1db90daf986670d82758c999ff34119e"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "d3417490e9f39665787fa8d7d5e7223e"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "f7e01d2ee735ddcced0cfd9f45a4541b"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "09046ce95f32634ffdd1916da7bc68e7"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "d4770c4b57f92a4a19af2b45c393ea83"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "094aa97e2e80b7a6748edac4dc4ce167"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "28bc42df1d98a714810c43cf395e9f99"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "cdc73b4b248b871af752e6d37078d4a6"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "4046108be30aaa6cedaac0aca8ecf4ab"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "803aca3e3321222898665805b16543de"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "c856ac61184a411ed57d19c3626e6f43"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "073a87c34756fc3d61a4c73561774bb0"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "8e8befc7f459834081c99404ddc7d1cf"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "d6fbc48c18a43d2da67228adefeeb4cd"
  },
  {
    "url": "en-US/index.html",
    "revision": "584e43beaf176aa705ffb3902a62c26d"
  },
  {
    "url": "index.html",
    "revision": "c06aaa2db7b6d90e77f16bef3f082dd7"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "2742304e9e673380af5827d56447a140"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "32b803eb0a80636a63998f2650dcfc9b"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "4b9db9d731f7dd086eceac5f2e9f756a"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "489ab2eac19ab0792135b7583af69e18"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "242ffb34267c2411a691e8d1cea8c1d4"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "f490fcc92c7586ddfe5b1acab6f94384"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "5c440727b9acddd9b4fe42122bb5faf3"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "9b9be8d72efde6e7eb993c52bc9b56da"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "e4dda4203464b9f9fe53a8a3a33d0235"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "3dc36442288a4a3c651934083d1a4b97"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "ea867c5be0e20d3880a50254f227b7c7"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "cf58ea4be3db1d559a17af781d05aafe"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "69dcba0f29dd9505583c2f22b2e6080a"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "f86e209668ff3fe8d3b3257547b261d0"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "3fc0b07ceb0fb5b2491edcb799763448"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "004ce3f3afbb26e33780380550a280a6"
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
