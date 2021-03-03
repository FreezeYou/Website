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
    "revision": "fcdd82f01c0a2c4747ea1134c7370a94"
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
    "url": "assets/js/18.e26b3e19.js",
    "revision": "3e3bfc93f8958ea397481f9560998977"
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
    "url": "assets/js/34.bf52c23c.js",
    "revision": "f0987208cccf177616e10d7b20b93f19"
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
    "url": "assets/js/app.fd6ddaad.js",
    "revision": "846d76f0c5a5fe9288bdeb345943c898"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "110bf7c5ca61424834d7517faac047de"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "cd112c5841305bd0031a70539dd8d95f"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "0b26037b84cdb2fe3ffee3ca24bbb975"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "9f1e237fb0e652ed6f355b465fbf3a10"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "fe44a74333931cab3f9bdf934fbf6592"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "e32fa43cd0456fd2681ddc9b2bf92c81"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "0e9378adbebf6ef848c579abbbbf2e18"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "174e86ad9032c2446fa1ee68ab942f09"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "b09b93e3032b7c5e6ee84567ca669b9a"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "0665496dd732ab3aba7ee33dc70bdab9"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "0d76101c72c80051768c023900885be8"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "1a9c4e385787d24a66b9ed66c14886f6"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "1d93f0e80c0826900a9d3e3e94241b85"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "ce455cdcce66e524ea877ecba2db8d41"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "1f28e6dfc595ceda2c37997531cb2f3a"
  },
  {
    "url": "en-US/index.html",
    "revision": "9ebf5790f1d761be3aceb97c5a2522dc"
  },
  {
    "url": "index.html",
    "revision": "e0a91c71f7b8e6f97d4ecae43f0f7972"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "6276fb7c00915c6f9292edc66903eca8"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "f75ccd2d67917dcf9a928f0ed25cce4a"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "d367a195887a5c9a580514ca32c727ca"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "5d667d611e66b41b30775ed6a4291deb"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "1e124890176d7f83a36965537a1ad91d"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "58892a1f42238037f33d6590a9cdebf7"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "4e6d5376372427b4bfb76ae2a6a597dd"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "cb4d30cb7c84a92b64bcd755790fcd55"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "274ce82af7c79f63b18558b69b49bbfc"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "1e1dc55f1f53ffe6920ed307680f7b84"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "cfbbcfa2c08fb03a49295dbfca136ab8"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "749be3f92f812b5bf34d9a8bd747568f"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "6b5f76f2215b3459ff859a7c488c2d5f"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "699b85442ed514b9cf490532485626b6"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "91ddb358b850e83a81edcec38ba4505b"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "980d55c4131b401a577b4e8f3090a193"
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
