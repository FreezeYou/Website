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
    "revision": "7222401bf46eb881955b5b3029501dea"
  },
  {
    "url": "assets/css/0.styles.86d0d4a4.css",
    "revision": "8014ffa0dbaa2f9243b81865e023d187"
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
    "url": "assets/js/10.f2abbca1.js",
    "revision": "ba3d0baba9dfa0f7f91f99fc3650c43a"
  },
  {
    "url": "assets/js/11.f71c1e02.js",
    "revision": "c91164b05f0d1d88424272c09aedf418"
  },
  {
    "url": "assets/js/12.892b106f.js",
    "revision": "0a09bf0870e59a3ce47fcdd3ce487226"
  },
  {
    "url": "assets/js/13.7ad754a2.js",
    "revision": "c5ed311b95e12f107bce953d5f5d1401"
  },
  {
    "url": "assets/js/14.05903fc6.js",
    "revision": "e8f3aae5a49569c4df1126475f6e0283"
  },
  {
    "url": "assets/js/15.9764d037.js",
    "revision": "4c0a3687856053255ab7dcfaa35c975d"
  },
  {
    "url": "assets/js/16.d666d375.js",
    "revision": "91f2752854614d12b99c7661b8c1fc00"
  },
  {
    "url": "assets/js/17.e733be92.js",
    "revision": "80cd384bf17c7fd2d5e22ef772812c00"
  },
  {
    "url": "assets/js/18.535c4faf.js",
    "revision": "6c7cdb420140da4546f898300711ee7c"
  },
  {
    "url": "assets/js/19.c83cc2d1.js",
    "revision": "a3b054d84a0b65349e558d5dd859a81c"
  },
  {
    "url": "assets/js/2.82f884ed.js",
    "revision": "7fa1b4add9b6a6b418b4e9d7bb681806"
  },
  {
    "url": "assets/js/20.d71041d1.js",
    "revision": "b702c6cf9c5ec2d9ec50e2195f1d2ba0"
  },
  {
    "url": "assets/js/21.c65ed66f.js",
    "revision": "12d5c6dd0e731529952f4067b53ee19e"
  },
  {
    "url": "assets/js/22.5eb9b30e.js",
    "revision": "438f026ab39b3c851967d552ae5a1993"
  },
  {
    "url": "assets/js/23.03addff2.js",
    "revision": "2ac821c25d581070ae6625c1cba776bc"
  },
  {
    "url": "assets/js/24.a30df1cb.js",
    "revision": "d1acd87ef7ab97d7a166b7c098b967b2"
  },
  {
    "url": "assets/js/25.c8119c3a.js",
    "revision": "03a5d16840500e08deccc0d0b2a3eaf7"
  },
  {
    "url": "assets/js/26.d16aa6c2.js",
    "revision": "0cf3939b4da240a07209503bb4359334"
  },
  {
    "url": "assets/js/27.160538fd.js",
    "revision": "2856645d5991e57a28ad00bca5b79257"
  },
  {
    "url": "assets/js/28.e40e831c.js",
    "revision": "46972924abd299a306cda35cf2e47be5"
  },
  {
    "url": "assets/js/29.f84d8381.js",
    "revision": "eeb9b8aba2eb14c49b92377f8aa53587"
  },
  {
    "url": "assets/js/3.a3caa392.js",
    "revision": "41fb2e62ce2ff21a3337957be6d560cc"
  },
  {
    "url": "assets/js/30.5eb3748c.js",
    "revision": "48339c494370dfad835fd9a7c2f4272c"
  },
  {
    "url": "assets/js/31.b63cb61f.js",
    "revision": "75c15a40e0b4b60c6edac599e74de0c3"
  },
  {
    "url": "assets/js/32.fdc84107.js",
    "revision": "9a0b1c6d335727c701e104ad7611bc4f"
  },
  {
    "url": "assets/js/33.723f2e0d.js",
    "revision": "f4e2d19dcbee719f0fd95279b882dd90"
  },
  {
    "url": "assets/js/34.b40c3e0b.js",
    "revision": "b0c4e52816b16bfa661b7b8aeb5c1f87"
  },
  {
    "url": "assets/js/35.08938f66.js",
    "revision": "088fb4c1a33b059fb237a0e1625cde4c"
  },
  {
    "url": "assets/js/36.55a4e41c.js",
    "revision": "b736190cfacb8da950308a9bc8d8684f"
  },
  {
    "url": "assets/js/37.debd4dfd.js",
    "revision": "c10fa2ff1e9f051ace74f05fcc23db78"
  },
  {
    "url": "assets/js/38.71da0c76.js",
    "revision": "bf8df98a60ea2f868d484a684ea6a758"
  },
  {
    "url": "assets/js/39.0c6a0c69.js",
    "revision": "7670f88a17c1b8f2473cfbc113ff6993"
  },
  {
    "url": "assets/js/4.dea36bc3.js",
    "revision": "cfad3acd851fbc37597b716f1a190116"
  },
  {
    "url": "assets/js/40.3a6368bb.js",
    "revision": "28769b223569ee7eb1371990b1521a05"
  },
  {
    "url": "assets/js/41.3d949f66.js",
    "revision": "04657729dbb149d2d7bedc1005ed1880"
  },
  {
    "url": "assets/js/5.0019c310.js",
    "revision": "3e1b652a12a3d25186a0dba08e03b26b"
  },
  {
    "url": "assets/js/6.fe1cdd98.js",
    "revision": "58433abc0e8a32060312e00a32a0d13c"
  },
  {
    "url": "assets/js/7.9eec3696.js",
    "revision": "72c9d93db9be8b050e6214a50da806d1"
  },
  {
    "url": "assets/js/8.bb3aab8d.js",
    "revision": "7a763904bc0ed9a1c623d72829c310c5"
  },
  {
    "url": "assets/js/9.2ce35809.js",
    "revision": "7099bfee0b3cb26ec0da0f34bc4e5e9a"
  },
  {
    "url": "assets/js/app.ec5d1d02.js",
    "revision": "f1f3e42bdefebf3b46e034f4ee6591ae"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "8f88802a78868d3af30779289d0e791b"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "453e88185b9c1ff08883ab6eb69f26ea"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "4059a512c0458d2487f8663ed2ba87cd"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "ec14152891fa10c62329f47b590e1e9e"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "b80c94f51fd1d42d69763da7928349ce"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "f06327bb81d096ee195899d192492315"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "622983809dcae8b5bff77e2449e65569"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "929e6f02dd90c4567cff495397e48997"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "2f0c7061623e8fce38e14da1c4b718b7"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "3bbbdfcf71c14263cab9ca72376cd9c7"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "915f1d92be6bae2956399fced9ddcc89"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "3963874ece9f1f5e406ddd3d408aff7f"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "6f46746923e7a0fd4f1581e8b8109ccd"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "cff74a5ce81972f52dab1033ab727a09"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "231eaaec2285cee3d3e4b33990cebbd4"
  },
  {
    "url": "en-US/index.html",
    "revision": "da6fd9f96bb52a08c55068f631d6383f"
  },
  {
    "url": "index.html",
    "revision": "8916ca576c5f1e220260c1303b4fb9a2"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "c6c1668d347370f3addcb5eb69787e80"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "f7290056081931424c174001c7cc0510"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "977014bb537f054abf7709e4baf91c69"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "e6980e5a4d79268b7dd97b5ef79059a1"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "1b738e8342cfdbe5d1fbbdcebe0426d1"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "7ec5375b415d566b4c3f8f6ea8d85256"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "064be22fde33a8a1d34bc2aa2c243d28"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "bcc303a094391c655dcf0d0f8ead942f"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "a3a91d563fed585d9c4c6054e45c3223"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "ef305980ab68b984a2216eb067987987"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "87db7694aa6113bf3a15f9775e122dfe"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "b616f04c5685d0894e8f7d96753387eb"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "7ad65101f17cebe2a02da6772704cca9"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "1312ea8a887a342b856447d01bd99978"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "5b21e496314691cae5381dd9996ec589"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "e702c3af5849b4421f1d3402a891a676"
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
