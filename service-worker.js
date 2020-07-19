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
    "revision": "a7138c065fd681e962b2fdd2c0b10179"
  },
  {
    "url": "assets/css/0.styles.e40b065d.css",
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
    "url": "assets/js/10.23ee5571.js",
    "revision": "245c1d5cc1ee7aaed6969fe47cb28c61"
  },
  {
    "url": "assets/js/11.9f61fd37.js",
    "revision": "29f3968b50b0afc0ac1f0470feef6a28"
  },
  {
    "url": "assets/js/12.ebd4d31f.js",
    "revision": "7a2e3dfb33b785f331a6dd7135b0a504"
  },
  {
    "url": "assets/js/13.58c85fe8.js",
    "revision": "51b3d3377a139424eb10751a97f981f8"
  },
  {
    "url": "assets/js/14.1fbd830e.js",
    "revision": "4027e5a3ee0f6f40f067ca57b7dc7c56"
  },
  {
    "url": "assets/js/15.0fed7c22.js",
    "revision": "6147238223c84c265a6ee167e5f3bc82"
  },
  {
    "url": "assets/js/16.f2ad6293.js",
    "revision": "ef8ee5c08c73f758c556b6308de1808c"
  },
  {
    "url": "assets/js/17.a486631f.js",
    "revision": "8d22cfb12cbe06a7527a843d5db41e31"
  },
  {
    "url": "assets/js/18.ec02a392.js",
    "revision": "a3e8b1aeb0ee5065dccd6290c1e57d58"
  },
  {
    "url": "assets/js/19.de360023.js",
    "revision": "ebba3ff5a1eddd9a2e3186c04d60e651"
  },
  {
    "url": "assets/js/2.e4422bec.js",
    "revision": "9057577ea2936cf899b8e84a7fda2a94"
  },
  {
    "url": "assets/js/20.7e682435.js",
    "revision": "d7296037a291ca13f3c9f6caa2c82946"
  },
  {
    "url": "assets/js/21.f8d52f46.js",
    "revision": "f328e1a7f9dcc3c49a3a173bee30a331"
  },
  {
    "url": "assets/js/22.76ccdc2d.js",
    "revision": "f178ce7dd1d65104f51f447cb9c30d91"
  },
  {
    "url": "assets/js/23.022cc063.js",
    "revision": "a7e81e912ec4b39d705c358637cd4f5a"
  },
  {
    "url": "assets/js/24.31997e30.js",
    "revision": "e39aa63b8097b59e128830c92e44a54a"
  },
  {
    "url": "assets/js/25.b104c017.js",
    "revision": "6fea731d285347fab42b39a68866bfd6"
  },
  {
    "url": "assets/js/26.4bae23cf.js",
    "revision": "1e3802bf594960a9906796b5f60069f1"
  },
  {
    "url": "assets/js/27.bcab322f.js",
    "revision": "6d6bb72c92ad21525086663536bd618f"
  },
  {
    "url": "assets/js/28.91a006a4.js",
    "revision": "7b731a390a44af8ebd1850e43d399749"
  },
  {
    "url": "assets/js/29.71e6bbc7.js",
    "revision": "23174cbc4c78f8ac459f461733c39a04"
  },
  {
    "url": "assets/js/3.e837a793.js",
    "revision": "041175107c3dae8a1a1068ba0c4c7aef"
  },
  {
    "url": "assets/js/30.e299a137.js",
    "revision": "3f7069e0abbb755d3a08cfe6470c99ef"
  },
  {
    "url": "assets/js/31.b793de9e.js",
    "revision": "3b5e4ea6984a652071012b3a9f474d59"
  },
  {
    "url": "assets/js/32.efc9dad6.js",
    "revision": "224078c0b2c6e08ce089680147532f9b"
  },
  {
    "url": "assets/js/33.410b7775.js",
    "revision": "5c55c81d1234962f1804e601200e44ad"
  },
  {
    "url": "assets/js/34.7c88db19.js",
    "revision": "85ff0b0cc86fb26ede939e33e0fe0018"
  },
  {
    "url": "assets/js/35.2211c015.js",
    "revision": "58bb8aa8d530695f965921c64a42776e"
  },
  {
    "url": "assets/js/36.abdee825.js",
    "revision": "40faeaa242f637846c80bf2e13abc065"
  },
  {
    "url": "assets/js/37.8a2378a0.js",
    "revision": "92ba53a1b465e5e86ffa81d92d73e2e3"
  },
  {
    "url": "assets/js/38.43892ffd.js",
    "revision": "b540a7eaf05a255e662425ba600fb366"
  },
  {
    "url": "assets/js/39.8862a8ee.js",
    "revision": "43998266117ab853c4623ce1dc0e7a43"
  },
  {
    "url": "assets/js/4.53f796f3.js",
    "revision": "cdf037a92f32e6a3787ada2098f5303e"
  },
  {
    "url": "assets/js/5.23f973fb.js",
    "revision": "26f76642c8566174830cc77f7d395c58"
  },
  {
    "url": "assets/js/6.1df998d7.js",
    "revision": "c09193c419244fd7a9f551737fba149b"
  },
  {
    "url": "assets/js/7.68beb669.js",
    "revision": "0916ea25f3277d4222329145e0a67068"
  },
  {
    "url": "assets/js/8.39d168ab.js",
    "revision": "20d66005f47521f471027903672fac20"
  },
  {
    "url": "assets/js/9.a4dc5ade.js",
    "revision": "c13ee3350ee08192b6d1e0379911de9a"
  },
  {
    "url": "assets/js/app.8ab3da14.js",
    "revision": "9c51a852744741a602c09e5e10feff02"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "8e04d9490ce81b5245ea1b0eb1905b2f"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "fcc9465f2384b42520a8297751714402"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "3e79ed53b157388a4b22580b0e04ff24"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "f4cab0c325e1a8937f733c577f754175"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "2eca3ad7b7f0fc822375f7549d845127"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "942bce971c88b84f995428e0b3689006"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "315927451d3433de5cd3c2f28f857031"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "15d7488ecbe071359453cd56161e95b1"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "56fddfb4111c1e72b0e1acb188b8f19c"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "440a7ad8c4c6ab4dd0009f2922c88ecf"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "23a2e0d7db773e5f5b7501f32417d90c"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "a3a48bc7c8459fd3eb5e98c3020fb413"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "3f419a1a6124e9d77c47f3fe1ddf2f69"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "4933a604310249b91f121af8fd9abb04"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "998a589529be210f490141ffaf0f39a4"
  },
  {
    "url": "en-US/index.html",
    "revision": "6204f475741e87d76f1912951f593602"
  },
  {
    "url": "index.html",
    "revision": "8824919a710d7f79fbab1b49d30dae67"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "daa2ba6b899ff183229bfba8973d223a"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "fab59e81d5e6b15c5dc0de7230724e17"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "fe97b1d38dbc3c1d58df8a7b409529fd"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "7642743f4c6de7df803acc0aafa4516b"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "267e3183e7cfdc4227268d44433b6fe0"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "c5489cc4a6ec064857f19e796e40f676"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "88d5fc156b866381b9b1b5b73de37cf4"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "80856dcee237a1c74dd482679c8b4d27"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "5e651ab584cd2133be0806858238003f"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "5424770e6af58cdcf6e42e371fdf8287"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "1bccc183bcb3ce87ecf9c25931798729"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "8dbcc22ef43e300796fef7917e8c0664"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "da4b2cf8d5fad77c675973d060924c2e"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "9727ad4ba117b0c4256efb7405d307b4"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "d23fa3a30bf23a829cadcbd8b7598d0b"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "bb76f3c3c65246c74e812507b9844dd1"
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
