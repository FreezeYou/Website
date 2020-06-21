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
    "revision": "ac7af52b6865de5d862c3b65630f4938"
  },
  {
    "url": "assets/css/0.styles.c565c15e.css",
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
    "url": "assets/js/10.c2b589ec.js",
    "revision": "464969e04161beef87b9d90feaae24f8"
  },
  {
    "url": "assets/js/11.789c5581.js",
    "revision": "53e663ad171a5ffb58664cb23a9f3b3f"
  },
  {
    "url": "assets/js/12.4ecd69d3.js",
    "revision": "416e370c48da7a338855633d6d84000e"
  },
  {
    "url": "assets/js/13.0a3d2ba1.js",
    "revision": "cb4a5e17261803e6c478fc57b6d1e324"
  },
  {
    "url": "assets/js/14.1c4c0c5b.js",
    "revision": "230a58abbb7c8f25c9be4ef6b7d7e87d"
  },
  {
    "url": "assets/js/15.13715c8f.js",
    "revision": "cb27c5c838b7148806e0e48664513c86"
  },
  {
    "url": "assets/js/16.0cbd88e0.js",
    "revision": "9daf7174e9441d19ccd9d2dbe1651a3b"
  },
  {
    "url": "assets/js/17.e9399f3d.js",
    "revision": "17832a55130ab5e62a726f4bc39d1185"
  },
  {
    "url": "assets/js/18.a08dd9b3.js",
    "revision": "7415d63d51f3c53446115d101506c04c"
  },
  {
    "url": "assets/js/19.8f06b236.js",
    "revision": "b305b580edd79676bc9d62e956675c0a"
  },
  {
    "url": "assets/js/2.ea487343.js",
    "revision": "673afa237b746273aa2ca325a5c661ba"
  },
  {
    "url": "assets/js/20.b96ead75.js",
    "revision": "6e635dd4fb99d6c786c8fd414c4ca361"
  },
  {
    "url": "assets/js/21.227a78b7.js",
    "revision": "bb609fbe2c9799c4906bdff1b62a3198"
  },
  {
    "url": "assets/js/22.59411e2c.js",
    "revision": "98610c2bcb311750348f9e3d02f00475"
  },
  {
    "url": "assets/js/23.5c6cbcbe.js",
    "revision": "d4ecff22bf51a76e776553cae0fb5b28"
  },
  {
    "url": "assets/js/3.f9358317.js",
    "revision": "de41942afc5df41f9245032aa29f8653"
  },
  {
    "url": "assets/js/4.d961c482.js",
    "revision": "bbdb9cbb3b87563ffe7c468d46ab7c7d"
  },
  {
    "url": "assets/js/5.b359c37c.js",
    "revision": "6b6260427c1317048464a8e26371feb9"
  },
  {
    "url": "assets/js/6.fe150c99.js",
    "revision": "c842a865c04c23bb384d5dc2de76e904"
  },
  {
    "url": "assets/js/7.13371df2.js",
    "revision": "170acb80e6175f00beb13b57866742b7"
  },
  {
    "url": "assets/js/8.58273160.js",
    "revision": "b6be86cbe75c297a68d6145c0fee9462"
  },
  {
    "url": "assets/js/9.d62eb4af.js",
    "revision": "5e8568807bdb478b424f8f88120e0db3"
  },
  {
    "url": "assets/js/app.41cbef71.js",
    "revision": "905c6f15c90c3d0054bdc5dc51d7a431"
  },
  {
    "url": "index.html",
    "revision": "344ab241a1666d0013cef855c0e68a9a"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "fd8f47df78962c10147d938d89ddf9aa"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "ae8ea44d47d1d1961645761a983ace98"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "001d54c3daa726abb6c14838cbc32516"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "3e316076d9ddd2ecfad1cb8529cc8ceb"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "a5b779dede228f2b3081263ea8768d39"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "94d34bd1ebad7856b0c9a8217b02a987"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "ca9aaa0bce6d44c467bcf0c272213172"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "6ea8546e4a898bf0fce7c8fdb06dbf69"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "99c19356e6956970f7cd3048daa01217"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "59729fe02a7557ce26776b47c747af32"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "ccfec52abcbd77b4201b4beb568dddc2"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "c50e959c603eebbabb90bcac45171318"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "051e1b7d46be06da21b2d3d56ee20e16"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "db8789e13878ba08bc55656551921869"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "9850e16ef759587cc9a7128a1477bd42"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "96054d43252dc7007f408e105ac7bf8b"
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
