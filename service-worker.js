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
    "revision": "73d02248ebb5686258e73ef924e28ac6"
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
    "url": "assets/js/11.6c0932d4.js",
    "revision": "a67efa1acb5727912889cd4deba55140"
  },
  {
    "url": "assets/js/12.474866f0.js",
    "revision": "fc0742a5b5573225c3cf202cff1895a8"
  },
  {
    "url": "assets/js/13.a48e915a.js",
    "revision": "f18079f1afe06a856c5ca6eac739d2cf"
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
    "url": "assets/js/17.0dbb7287.js",
    "revision": "afe95c6727948aaacb958c19a91fd05a"
  },
  {
    "url": "assets/js/18.b7d7a03f.js",
    "revision": "6a5c61917b17195f13979c0723e33f8c"
  },
  {
    "url": "assets/js/19.de6dc669.js",
    "revision": "90754454d03f528801cb9cecd433ee58"
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
    "url": "assets/js/22.61d0dcbf.js",
    "revision": "d8797a744cd2a02f013c18778d11b166"
  },
  {
    "url": "assets/js/23.40d51e8a.js",
    "revision": "1980a655943fb559f9dfacef6c2f288e"
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
    "url": "assets/js/27.9ff5cef1.js",
    "revision": "3af35a990b4045f67dbd818a16767c1f"
  },
  {
    "url": "assets/js/28.fb14a361.js",
    "revision": "bcec75e3d15eb6d8464f4b34f44ec282"
  },
  {
    "url": "assets/js/29.38cd2d83.js",
    "revision": "4ebfa0266f88abeaa377a4699d361565"
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
    "url": "assets/js/app.b1dd6d63.js",
    "revision": "350730bc7b80beee4598a7cf53253f96"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "5a9506646b213e3a36d02ee11282e507"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "ca7676f9c03e3e10420d40bc7fccbcd9"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "939c5138296b5a155fc2983a28a08510"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "20785a64a325a6d6d424286c6e4fbc49"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "13f47862e65abb7b24d2f99f56e19309"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "0a0aa1d7668d5bbe48bca0529a6960d5"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "43e5a37b05457af68246df44f056a929"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "116562fd296b4cb137bec3c4b970deff"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "5ceac945c99fd68d84fd2024aba61d8c"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "5d28acd796944c20aff6ec8f82967bd3"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "d35060cb7fc0c7e9c02adfb0598f1490"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "cfa9d85fa7e8860f9b2dde93b022e534"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "ef69032ed317efd7a8ca903dcf5a6904"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "dc8b558c6e69985e45be5c8226cfd767"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "28b1be4faf87384ca58c71de58362040"
  },
  {
    "url": "en-US/index.html",
    "revision": "41be9478a891c5b6b139e5078b60d4b1"
  },
  {
    "url": "index.html",
    "revision": "bc5815568a31843f0a56177032e3a562"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "fd4aa79bdb2231459a11d9f0f105839d"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "ec203fa0005b35ff3c9ffc5d982a41e3"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "e25652b0bf79164de1f726da0b43c5bf"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "df62bd0c789b66e2682dea862d9e3deb"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "7fc8bcc5569d93ff23eccab87c4ebb0c"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "1d064ef0ba1b622a3d53917ce28e4926"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "881de4a3177465faa3df498ccc4428a4"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "4d9cd3216a9e1b2939bfe94fe23bdece"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "c4ebae0b44073f09b1a25b9bfd55880a"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "f7622a7476ec89990d6e583575c2f44d"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "95f6607f83d60460626d1210f97b20e8"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "0f19629f54406aebb85b9297a40a066e"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "59bec8cde74cba9f14158497d3dac5db"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "cd4eb212af3c665c062282d8392257f2"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "660d7c8e29fa586f520008fa1a17c69a"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "4a03944eedcb2275c6e6f1c37d4c40ab"
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
