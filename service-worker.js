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
    "revision": "60b851b8998238254a48ddb8d2e1a937"
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
    "url": "assets/js/10.5f80ef49.js",
    "revision": "02f15ac0c0c584b6b6a736bbd3d0672b"
  },
  {
    "url": "assets/js/11.e5ebb04a.js",
    "revision": "d59273162f81441dc37e6e095c661694"
  },
  {
    "url": "assets/js/12.374e481e.js",
    "revision": "9d8188c6c6135b4d2643070bf316c083"
  },
  {
    "url": "assets/js/13.8b86e054.js",
    "revision": "0da8f9f5ebac989f886fb254dc5f621d"
  },
  {
    "url": "assets/js/14.47d38584.js",
    "revision": "35498b739b58ed470eb0848cb263643f"
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
    "url": "assets/js/22.15c7d971.js",
    "revision": "58eec3ab3b400a903f72f277d7e446e7"
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
    "url": "assets/js/28.44a59c97.js",
    "revision": "21d74b835e37c71aaf101ba1a343025e"
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
    "url": "assets/js/30.b744b4b4.js",
    "revision": "d3bdb93fdd68a26985acfcec06316057"
  },
  {
    "url": "assets/js/31.ebd72d78.js",
    "revision": "678cb0e522542b9fbafa5b19a0d3830f"
  },
  {
    "url": "assets/js/32.781e9fad.js",
    "revision": "5cd3b2028d4289ae5a31c1d2b87b057c"
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
    "url": "assets/js/40.a64976b2.js",
    "revision": "b5c7162a79bece7d21bb7d10febad2b8"
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
    "url": "assets/js/app.f3e10577.js",
    "revision": "050db39f0c2adb4eabb7efc79bc9d3ed"
  },
  {
    "url": "en-US/about/contactUs.html",
    "revision": "435094438822979c7c70e7603bbdedfc"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "f0d2e4c24f90bd1acb2e816b8a5cffc3"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "077e04f6d73bf078067525dcbf033dc7"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "e90caea021284f1c3772c9343b2872c9"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "324f2374bbed30fb7f261767525a079a"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "9775037af80e2195a7f0255d209634ce"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "382afa922fc4c159f16988f7f7b5b434"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "043edc1144b4d3fa44685d308c112ddf"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "f9946c58de8b5cb57fce023379231845"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "f9063b37722f22af12b6b206f96ac544"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "5ded5defab0d1798814dd38efc115d95"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "dfe184a62338ceae16f0bcc073b243fe"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "347f5be3c0839cbef7fc8e2a1f2fe289"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "80ef8cd90f373ffeb7ca5c0e29c68ee8"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "3fa858c4665cc62b8da0944476e322a0"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "8fa04a8d1cef385d93e36bbad6e4a2e7"
  },
  {
    "url": "en-US/index.html",
    "revision": "1f94aadebcf224bb7c43fe7f66645e1b"
  },
  {
    "url": "en-US/thanks/index.html",
    "revision": "0905a9da60b3fe79d593fb29568949f6"
  },
  {
    "url": "index.html",
    "revision": "98c65e1f7379aba62865033ec65de9c1"
  },
  {
    "url": "zh-CN/about/contactUs.html",
    "revision": "f7b059dc4ad48d37798a3c76d9f39b7a"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "b5e5eb9064ea098f34466ad70cbfb0a8"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "08b922413db2603cce79506c727c34f6"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "340b701b257f9d9c06799f7ca027160e"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "0cfa9728296173b061db30d29c2e71f7"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "b5ff095aad88ab4cd301ea893716906b"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "33ad532db195c0b8164f3bef9d720a66"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "6b262b21de47a460b765105856beb06e"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "4543a38723587b581fb4671b93f158cb"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "f266bda923440ba91e4e0e1c2bb315c7"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "1468e5b710daec53ac5741325777ef95"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "7fcbba1cfef639d3806203ac2a6fafc9"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "a97b97a00398717dd58cc2cb3657f0f7"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "b1e76bd254ceae3870846ab71b54ec19"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "007adc754829ea83ab587da33ed4659f"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "226374833f146c1096cfd0746229e79b"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "ef92360bacc839d91796095db2a66f51"
  },
  {
    "url": "zh-CN/thanks/index.html",
    "revision": "5f676e1d3cc0b4095968eb95a92d0b81"
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
