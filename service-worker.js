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
    "revision": "2c0178a75066dc7d08e83f5d3f7f6c2c"
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
    "url": "assets/js/10.f7ac0589.js",
    "revision": "c1bb53f352f911b9d7f2af7318a2f795"
  },
  {
    "url": "assets/js/11.e5ebb04a.js",
    "revision": "d59273162f81441dc37e6e095c661694"
  },
  {
    "url": "assets/js/12.87609689.js",
    "revision": "e5961f364d120c8bbde9170e4ec9474c"
  },
  {
    "url": "assets/js/13.28e92545.js",
    "revision": "82767c03497d4c4940b1b4c7939f07c8"
  },
  {
    "url": "assets/js/14.aabef272.js",
    "revision": "60d2ba8113b729cbaf99ea7615ba4b73"
  },
  {
    "url": "assets/js/15.945f2945.js",
    "revision": "2144b8600df6a17692fca3a31560f27e"
  },
  {
    "url": "assets/js/16.657caf12.js",
    "revision": "8e0d3a28721c32494f279a64c7fef08b"
  },
  {
    "url": "assets/js/17.c15a4a3e.js",
    "revision": "23a2c848266ac5a1aff39e4fa86d4640"
  },
  {
    "url": "assets/js/18.3aafacc1.js",
    "revision": "9d08687739f2e994278de35a7d601afb"
  },
  {
    "url": "assets/js/19.6e152b41.js",
    "revision": "ec6b125ee3f5df01965ed5d54764378c"
  },
  {
    "url": "assets/js/2.554df5b4.js",
    "revision": "5758ccd197cfffea096425ed13f3abbb"
  },
  {
    "url": "assets/js/20.dcdec84f.js",
    "revision": "a472e9cf0b25f99be7e5fce1ba8ee110"
  },
  {
    "url": "assets/js/21.dfd10e0d.js",
    "revision": "66018b336469edb44b425391be7106f8"
  },
  {
    "url": "assets/js/22.5e9d69f0.js",
    "revision": "172f604449ca0062006bc5f181566006"
  },
  {
    "url": "assets/js/23.2d6566d2.js",
    "revision": "dfc1f2a5020270c703393d895f074bed"
  },
  {
    "url": "assets/js/24.6312cf32.js",
    "revision": "a66a50815a5d8d6d14b4ef1c0c2cb464"
  },
  {
    "url": "assets/js/25.79f22319.js",
    "revision": "935cf064845be1244b0d681aefb25362"
  },
  {
    "url": "assets/js/26.dfc5b0b4.js",
    "revision": "555f527d891de696b5f0d8c6144c7ff0"
  },
  {
    "url": "assets/js/27.dfe17f2b.js",
    "revision": "ec976195e20cb28ab3ce4d890a4466b3"
  },
  {
    "url": "assets/js/28.f058a240.js",
    "revision": "156ffdf985541325a82e0af14129a0b1"
  },
  {
    "url": "assets/js/29.158dd008.js",
    "revision": "e74dc1905ce6d1d2a3bd5c5c01e96cd0"
  },
  {
    "url": "assets/js/3.0aa2bbad.js",
    "revision": "03045738de5b37103368ec30011fbf3a"
  },
  {
    "url": "assets/js/30.4d3fb67f.js",
    "revision": "5787282b85448a20b0e2f0c6f7a75991"
  },
  {
    "url": "assets/js/31.67d156a7.js",
    "revision": "912911711308d66b7915f03617d0e3b0"
  },
  {
    "url": "assets/js/32.33474b44.js",
    "revision": "36ba7b20f0a40bd08076534e8dc1c76e"
  },
  {
    "url": "assets/js/33.c3ffcadb.js",
    "revision": "e97f75d151983918a236da5f98d66120"
  },
  {
    "url": "assets/js/34.be9c99ed.js",
    "revision": "2bf6ca7143dc6d94cc2a17de15973391"
  },
  {
    "url": "assets/js/35.ecc1ec6f.js",
    "revision": "ee478fa849bda331cfc129fa4930654b"
  },
  {
    "url": "assets/js/36.8d3fc925.js",
    "revision": "ea761876fc78fb403f1a101faeb52025"
  },
  {
    "url": "assets/js/37.b1ccf290.js",
    "revision": "39331f19e39f96fd4a9c8287f6450c93"
  },
  {
    "url": "assets/js/38.e21b80b6.js",
    "revision": "5a6a2c32de49d72cf383079f347d2cb4"
  },
  {
    "url": "assets/js/39.ce0069f9.js",
    "revision": "c25a92bca06357101d3858b07302957f"
  },
  {
    "url": "assets/js/4.51362a42.js",
    "revision": "0be72b72fd5ca67b0cce4bc771cba720"
  },
  {
    "url": "assets/js/40.fd2abd97.js",
    "revision": "305498d2254ac8368986ba39a67994ba"
  },
  {
    "url": "assets/js/41.88e6887b.js",
    "revision": "652e5f4e0c0613693e72140d125e35e9"
  },
  {
    "url": "assets/js/42.da2ed878.js",
    "revision": "5016756d29fbcc4e30ed5b1bd6f2681b"
  },
  {
    "url": "assets/js/43.49d1434c.js",
    "revision": "2f8b33690921413c5cde8e4b6acc80c1"
  },
  {
    "url": "assets/js/44.831d4a1b.js",
    "revision": "7025757226fcd626b871cd542cd65f65"
  },
  {
    "url": "assets/js/45.37236f87.js",
    "revision": "d3d28ea0b42b4704fd31cc6988cd15a5"
  },
  {
    "url": "assets/js/5.a9a6d3a1.js",
    "revision": "926839e938ac089fcb95659d6767ea01"
  },
  {
    "url": "assets/js/6.afbaa0fd.js",
    "revision": "7df06450fbe36c833b41bbcdd59ff40c"
  },
  {
    "url": "assets/js/7.154e88c4.js",
    "revision": "c85d3ec48bf2ce58b27db632e5afb871"
  },
  {
    "url": "assets/js/8.95ef65fa.js",
    "revision": "a2d69e24425b250e15d7539a46d454ae"
  },
  {
    "url": "assets/js/9.bfbfe423.js",
    "revision": "2eafc14c3b07a36412c0adc057895f2c"
  },
  {
    "url": "assets/js/app.3272dd16.js",
    "revision": "6346bfdb0abf142a4abcc0b756ec8b49"
  },
  {
    "url": "en-US/about/contactUs.html",
    "revision": "bca9edac4a734270f3e8c776a867a582"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "d64f01d52d6e913a5d8d375a1c4591b0"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "fb1de9fcf4cf4763eee9f822b2324949"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "92c9b17182e4eb305211a1de60860b85"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "0b9448bbc657eca2ff1789f64ace81bc"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "e4999b9408ef31159adf93a702df9782"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "bb1173f28bd8a0fd15937d7c83235435"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "5bad6fd34b4dd62b8b2a00c418c848a0"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "d4d97c3e8fc1d99403f8115660225a01"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "1bbc42345e2e4c255e75bd794c480273"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "c9ed94459e436fad855b463ddb32128d"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "4e1c875e70719cf3485548cc6fc72307"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "47b053e48c6a3cc5a4b1feddb7ed87c9"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "0483ce1ea3defe5292b59ce83d06a9bc"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "51fbe403caa41de0f81897caf89b68f2"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "7557cc3105ed49ddf6ff5ee65a6c113f"
  },
  {
    "url": "en-US/index.html",
    "revision": "bb59a7bc7cecc6727c6a1f21986d6f08"
  },
  {
    "url": "en-US/thanks/index.html",
    "revision": "015f501bbf2677cdf365b707a819f93d"
  },
  {
    "url": "index.html",
    "revision": "1945fdc8d8278a8f42eb906958e84dfe"
  },
  {
    "url": "zh-CN/about/contactUs.html",
    "revision": "6a4b6dc3a2fb12b79e331fb62fd1b0c0"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "dd4d39d98076521173d31bf25b6c67d7"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "ab6ab7ed72efcfc71c337605c97853c0"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "f8cd05e41465e2294bc6fe90f9af68c0"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "e1f449ad75f885cf700e9dfa81dec37f"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "04158412965e7dd7a5ad52c6533068cc"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "dc1e8ce65adcbeed78821939eccc25ea"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "22c75b35728ded3739c302bfa1628fc1"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "4199e0b385ab7571c37c237017eaa60b"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "0c282fe3c24834ab61f84c5cafabd419"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "39c25aaf54a26d9e578b284e6710be6d"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "d65fd9f061ee8b40e134285e1749fb1e"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "748535b26d46fac58b062c3c89be0499"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "ce3e3164db2e9caa09acdb73226a62f8"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "07e01546a602a9975324037ae4f11a42"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "251193511064ed2631e39d4db04d6e89"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "24ef7d2212d7bab68367612623a074d8"
  },
  {
    "url": "zh-CN/thanks/index.html",
    "revision": "2a58098b0e175722fd02712461d806bd"
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
