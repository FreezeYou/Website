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
    "revision": "653d7d61a8940b0882eabebc19586725"
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
    "url": "assets/js/10.8858ef0e.js",
    "revision": "e28cdd76a376480e89d7402f659f5946"
  },
  {
    "url": "assets/js/11.509455e0.js",
    "revision": "e98f8eeb8f744193c7b4fad671094465"
  },
  {
    "url": "assets/js/12.021b4f3f.js",
    "revision": "83303b51e2a3e00ae0fa5ef96ccaaf5a"
  },
  {
    "url": "assets/js/13.6da863c8.js",
    "revision": "c5fbe2e3c9c52839d24335e714871a09"
  },
  {
    "url": "assets/js/14.f097881b.js",
    "revision": "fa598e8fdf9049ba9f1a45d93bee95f1"
  },
  {
    "url": "assets/js/15.09719633.js",
    "revision": "acde38ffc722a0a4fb7e01855f7169c6"
  },
  {
    "url": "assets/js/16.f975a606.js",
    "revision": "de4e3a21588f419250e18083aa23f47c"
  },
  {
    "url": "assets/js/17.0c223109.js",
    "revision": "7bf3dd3afb676d2fe27bf5b8f9e3fcee"
  },
  {
    "url": "assets/js/18.9f1bf912.js",
    "revision": "21044bf97fb59485302e4581c7addf30"
  },
  {
    "url": "assets/js/19.b069b2a6.js",
    "revision": "956a14494edc29afdeab281f055a5072"
  },
  {
    "url": "assets/js/2.554df5b4.js",
    "revision": "5758ccd197cfffea096425ed13f3abbb"
  },
  {
    "url": "assets/js/20.d5e5e3b0.js",
    "revision": "77e3f16adcb9b742ef67073573a6892d"
  },
  {
    "url": "assets/js/21.3ac94697.js",
    "revision": "98374a068adfe46a5ce8638089105f83"
  },
  {
    "url": "assets/js/22.c03d803e.js",
    "revision": "1a9a9fb5d7c22b98d66c55e1437d486b"
  },
  {
    "url": "assets/js/23.855dc504.js",
    "revision": "b4806f4d0cf03038d8c7290d5c5e4a9c"
  },
  {
    "url": "assets/js/24.5aac3e05.js",
    "revision": "4a77f6e14cc04a55acfa69f5a16dcffd"
  },
  {
    "url": "assets/js/25.463e01ee.js",
    "revision": "09b0174ee180db283728f84a0f99e05e"
  },
  {
    "url": "assets/js/26.e6bbaa24.js",
    "revision": "1635f7b50cfdcc588d56de1a4db1c741"
  },
  {
    "url": "assets/js/27.e94cb636.js",
    "revision": "04a2d4b81d36a26dcb75869bf8387876"
  },
  {
    "url": "assets/js/28.4529b877.js",
    "revision": "f40611405541e6a92a973d9c368e991f"
  },
  {
    "url": "assets/js/29.630466d3.js",
    "revision": "80afec9a220090e7fd0a2f6cb172596f"
  },
  {
    "url": "assets/js/3.0aa2bbad.js",
    "revision": "03045738de5b37103368ec30011fbf3a"
  },
  {
    "url": "assets/js/30.fb3bb4df.js",
    "revision": "0e50825cfe0ba7365a25d15dd06e314d"
  },
  {
    "url": "assets/js/31.300e118c.js",
    "revision": "24b2c9042850b0ac1f46ef8920a5a751"
  },
  {
    "url": "assets/js/32.e751abd5.js",
    "revision": "1d57fb25feabe4effb69e4ecf15bc081"
  },
  {
    "url": "assets/js/33.040cca9a.js",
    "revision": "f98f07cef268fccb7392ff0d784c4d1e"
  },
  {
    "url": "assets/js/34.c57e9e53.js",
    "revision": "7006b47c9a4956199655cf431bc9291f"
  },
  {
    "url": "assets/js/35.b96d808d.js",
    "revision": "c771054314de7eb4acd94bf111b54e6f"
  },
  {
    "url": "assets/js/36.62c343cc.js",
    "revision": "11f454abb9e772890fea4dbee6ad9b50"
  },
  {
    "url": "assets/js/37.77fdcd47.js",
    "revision": "7f185928ccd0f85faa29512de5fd96ec"
  },
  {
    "url": "assets/js/38.eccc4703.js",
    "revision": "496aea9dfecd31f6c494a58fefc25865"
  },
  {
    "url": "assets/js/39.33171dd7.js",
    "revision": "a7841ad73cd59031c47f82366d20ac22"
  },
  {
    "url": "assets/js/4.b0ee6a53.js",
    "revision": "cbbe4d7e19cfc2fe526bcb3027c35853"
  },
  {
    "url": "assets/js/40.6ce4ca61.js",
    "revision": "9d9ebc9474503c5e92a6a98195892367"
  },
  {
    "url": "assets/js/41.0d35ce9f.js",
    "revision": "e209867e1d08f41f4f37e3feb3409803"
  },
  {
    "url": "assets/js/42.8b616946.js",
    "revision": "fb66f56fb464e8846f82bde18d6bd9b2"
  },
  {
    "url": "assets/js/43.8a8a20b6.js",
    "revision": "7d2bd9e6dec41b73bd6782a36a12e1d0"
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
    "url": "assets/js/app.d8de7f16.js",
    "revision": "390d0029e5b6e4ca17f07d6d65287a99"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "99396e03e01fc32c14867362ff43a892"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "9df942cfeec8df108099bfa71f17181e"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "1361f1d81732bfe8be272fa1ab607e01"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "e72ca12f0d499fb9b2325f06a2c03a37"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "48e862e72d0e48aacbc39ce7892e4e41"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "a70dfb3bd8df090e301199822d11fc38"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "d09eefe63475b5197b7be5113af76399"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "5786abd5fbc0e3d0c176849d42452b35"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "65cdd7c90c6619d32270e449cca9ec0b"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "ced9e542ca7427ba8db714f1fe38265b"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "dffd514a87dce0321825681d2584a612"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "3508c3cb10d9a0ae3af5e928612bd303"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "fc3a9092a1ce66fc67d58f3703a6a126"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "0f2c9ac578ae816882622ef7347d81d5"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "667b25bb8afc0f89e894009668e0edb7"
  },
  {
    "url": "en-US/index.html",
    "revision": "676eb610b176cf1775c34031a23dc373"
  },
  {
    "url": "en-US/thanks/index.html",
    "revision": "4bb69ea6dc2f0785d551e677f14a1447"
  },
  {
    "url": "index.html",
    "revision": "9215c94e000bbaf5af8a054d2bc738cf"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "648bad856af3448078841f423a1a97cc"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "9b0231437bf05c73624c56d179361fcc"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "faf895963b7f83945ef5b403e8af75ec"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "7164478cbede12dbc49c797dec08cf7c"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "bd0186fcde59b3205ecaa4e7ffe7576c"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "5027570548eb1df60c918f359c9fa645"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "fd79dd2d30f593c893921585bb6c6f9b"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "c51a2dfe16fe1c98dfabfa78e0db0a34"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "7b1cdfe16ea3410ff33f5d28f294e61c"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "fe66112b1959085b87d4a1f66aa543d0"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "5eda6546c630b171d99975289d1e5761"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "8d400e4cac9722d5dab78fba6c3ba81e"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8ec61a5ea0616866997a1c7f1468917d"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "0d75e7304819d258af51e119003821d3"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "8adc28e99f10562a815092ac8f74fa5c"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "f015c9e4951aaa1a1087962f7d3d636f"
  },
  {
    "url": "zh-CN/thanks/index.html",
    "revision": "9f165141c55ae4e148424bd870b6a429"
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
