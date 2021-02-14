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
    "revision": "e1b805b5e18e085cd2b073fd46682758"
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
    "url": "assets/js/15.61165f5b.js",
    "revision": "cbc7a382b7698048bdc1365dc7b61092"
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
    "url": "assets/js/31.c70ed353.js",
    "revision": "45d56ea4bcb869983d922d355bb98d39"
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
    "url": "assets/js/app.f121a21a.js",
    "revision": "156a1875ac556822da16d22739586eb4"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "1c94f9e698fa886603d88cf78a7790dd"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "2b513241b33008e712f2a70a42cc5ef6"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "fa94ccbb81e95ad3857162ebc4e01e41"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "f4cfe2d90f1987dff0396743c2237f14"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "b399471a20c81f2ba9d72ac3576604c5"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "0509875dc18c7ae06bc4fe808a27152d"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "95c967db74ea59d6c2f289369783c266"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "7a7c3b446a8de7faecc75ad6bcc735b5"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "436a015d843a8dc5649a5ed0549456e3"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "49ab64f94f7030c4dbeb12666392a1c6"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "e69ff35e7081a72d1ad563b954fc3e8d"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "293ec206a3e36fe95fb62b5b0d64540b"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "c900f8a0d121dbec3dbb22f6aead1150"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "871deb1366ded226133228c2d0f94f58"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "e2f9e3de43e055adf23ed0a429356273"
  },
  {
    "url": "en-US/index.html",
    "revision": "677ef0e279b1b0e9038b39ed4a1db7b0"
  },
  {
    "url": "index.html",
    "revision": "9ee8a8469193bf33a92cd13c71e3181b"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "73336fb53197e74150d797a3e812a8b7"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "340f6aa55b5f0657678641214cda82b3"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "1385f3336e4ab2d78abde64fb2c34356"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "906dacf26bbf38b288c607436faed905"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "fac42d1fdd3b451fa72fdea9364e60a0"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "5bc02b7977a10edc61f3d6c67b1a2017"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "fad3072e2e1f9989b154b1a750f4053d"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "d661ba32eaa592f97eca6587142a49b2"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "82bf58bb677f2325c8f9adb56cfe8b8b"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "f2c7321f9f2c0a1f07b631b1e7b43454"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "8c332734fee46003e08b697f8fd66959"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "7b909faaccfab05db89e60a07c7a7fd6"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "184a7ae783dc6632fb68be7108da4a6e"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "8b1fbe53de8ac8972f0e59527bd18760"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "cd88f575b005239313545bedf2130bdf"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "9918dcf78b62b176c8fb5e7b93e00ec1"
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
