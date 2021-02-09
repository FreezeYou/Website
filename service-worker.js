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
    "revision": "8e7ec4eff67c24ad48c5feb7db63f6cf"
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
    "url": "assets/js/14.67b6af58.js",
    "revision": "0f72490daaff29a2e9cc392627690221"
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
    "url": "assets/js/20.2e7578a9.js",
    "revision": "a3209fea9b445d1833e2c344e2894861"
  },
  {
    "url": "assets/js/21.189ef549.js",
    "revision": "12d5c6dd0e731529952f4067b53ee19e"
  },
  {
    "url": "assets/js/22.5374a08b.js",
    "revision": "0ce4c1aa6f34b7d84e4fb73d4200ba97"
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
    "url": "assets/js/30.8e0f5492.js",
    "revision": "48339c494370dfad835fd9a7c2f4272c"
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
    "url": "assets/js/38.7313c3b4.js",
    "revision": "bf8df98a60ea2f868d484a684ea6a758"
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
    "url": "assets/js/8.07d4ed1b.js",
    "revision": "7a763904bc0ed9a1c623d72829c310c5"
  },
  {
    "url": "assets/js/9.b0100137.js",
    "revision": "7099bfee0b3cb26ec0da0f34bc4e5e9a"
  },
  {
    "url": "assets/js/app.023029c4.js",
    "revision": "98bfebaefad0b86164c4045b1a9f763f"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "a1d335f6c6bf8d7c63d50e9a80b77200"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "02e51d9f4346cda6f9cc4ec12292f227"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "cb9450f46a08b5b28dd6a94af702d5e8"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "97a5a27fa2c7a8798ed86a06725ff324"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "ffc95a9dd960442763a4d7a5d3a6d8ff"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "a782058695d95710c341e656519a3509"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "7cf7c0d6f9e6a3a40c3d6466188d0a04"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "8494b1de59db60f1b0a76e06c831f35d"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "4ba88ed510a0cca67a8df055ed5dd730"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "b3ff6a64192d573d9816c773729591a2"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "54520dd97b6854d92f764328449e7074"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "231ff7f47947a0b5a4e12f1db783159c"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "ce8f4b9ac364e7fa51e6b6cddbba05eb"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "30c727c2fb88d5a12be1b32e99f0e46b"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "7d79aee1b1f033ae8852f6c003f3a23d"
  },
  {
    "url": "en-US/index.html",
    "revision": "fafbf9373daee39915f4d3d27c7926da"
  },
  {
    "url": "index.html",
    "revision": "3c1e6bddda8ea22f47ef56d7a4865e86"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "e526041d18bf51c4ab84450a4394117c"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "05507274c0a077589ad2b65a0f176a45"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "43084c7253efc135729187b1c59fa0c3"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "33d99376f144d155a0422cd2b1984d91"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "f61eb116a0070e3583ca4bc91f9bafc5"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "3d68ae762b03be4bbb88dae1570f13f4"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "21e7578466d8bc5e19aa013eb9621dfb"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "37e370bfa1dfef317722d99385f01337"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "b4ac499bcf676cb1b4110052b7fd44d9"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "e67b2ed96b0cad7102c8be95a40e2168"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "779a5c2afb50ca53033b3e37aac374cd"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "deea8906c712d5adc724b2584cd8c06a"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "d13e8095002a44e0e154f3336ed9c2f5"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "715e6405f5e65feba24f284bb01fed84"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "cfe0d100989910efe44ed59dda30c998"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "43c9c39208fd7190b06ff48b96145a03"
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
