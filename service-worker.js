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
    "revision": "8970a3b4b2fffaea7cedc3ba610f8137"
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
    "url": "assets/js/20.3202e052.js",
    "revision": "6a2627e85bc0af0a8ab2d437d598e8c4"
  },
  {
    "url": "assets/js/21.1a4eb83a.js",
    "revision": "8b90244df32dad7b8c6cb1f9dab64db7"
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
    "url": "assets/js/app.a9d94067.js",
    "revision": "cf176ef9409c084c2658b19ed5e673b4"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "2c6603548e552e082a81861bf2668ca7"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "87af137ec3a12a31fa68fe986e7e685b"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "3eca472e0fd44ca296854d728227e64f"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "02038abd0a4783cc179a68f1b9851cd4"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "5d339ac1966b2c6a54d3895b115b55af"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "afde455dce2f828f0fec4f84c9c79ae8"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "540d9ccf0596f12332f89afe57f87e0e"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "1fa6fc58eea03e31b21190a308383015"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "acd30adf253ebd769dff418020244174"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "7540ab1fba9d457b411906382b449930"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "0dba7c8a00273ee58a243aa5613947f6"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "568d4c6b8ef088fae629b794bfa46e1a"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "8a57011782016d0215839bb0fbd19d55"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "e54b9c0e845a87ddd4a9cd7fbb9cd9b8"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "2ac768cf76afc175af110ccc9de72822"
  },
  {
    "url": "en-US/index.html",
    "revision": "cbb0429a3c2b6e87125d2923d315c320"
  },
  {
    "url": "index.html",
    "revision": "c34a685071e194b7c104d9b6f7a375e2"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "f7ed4394dbe94000f10bbfbf7eb20fef"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "08066c194ccc1e14b278c316ccedf136"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "7ff53f71becd3be10e37dfdf35c6bf97"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "182a732a225a37f384e10fe65403776b"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "819636f93ea0ab2d83a1541bcc3d3b5e"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "fedb5ec458df6ddbffe3d3c526113983"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "c36460aec4a8d244ed7032a0e2679e00"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "ec3a2efc8aa3e6bed62de89925306b8f"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "50b5f0b6df1d92279cba966989faefe6"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "fba075562722847fdc0240327e48415e"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "39db8cacaa152cbe524589b911ce1bb0"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "03c16ad67e7e68d504366b75a02630b7"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8937acb111bff81f60afefa83d536fd6"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "6c8b365fd90b097f700a9623a1dcf2d0"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "1c470c89177ba5a644548896874a22d0"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "f351cdf1c88d5c0d671b5fefca9d7c39"
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
