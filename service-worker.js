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
    "revision": "dd640c197ae9eb6c0a1842790ecf7011"
  },
  {
    "url": "assets/css/0.styles.a0c3c126.css",
    "revision": "f7fb1e16c050e755e4d6cd23354dc7b4"
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
    "url": "assets/js/10.95e3bc75.js",
    "revision": "d77bf46ac0ec945e7637a7ff9fab6e71"
  },
  {
    "url": "assets/js/11.86ec8cb9.js",
    "revision": "3f1a08e42c94aaf86e9aa763ab2bee41"
  },
  {
    "url": "assets/js/12.662e8656.js",
    "revision": "9a0ae03982f51e9d76a999ea3f26f72e"
  },
  {
    "url": "assets/js/13.08f15a8b.js",
    "revision": "a751589843dc902653d27a3cec9ce131"
  },
  {
    "url": "assets/js/14.9580cf31.js",
    "revision": "921fb49c7197139db90f1687902c9af3"
  },
  {
    "url": "assets/js/15.894b1b94.js",
    "revision": "3740bac625ba2e0e9a6e57d28875261d"
  },
  {
    "url": "assets/js/16.8b7d334d.js",
    "revision": "2536c4cd684f82a5d6b1ee259e335f01"
  },
  {
    "url": "assets/js/17.37ed8f53.js",
    "revision": "8e9df2ecb20221364b45667b98159c70"
  },
  {
    "url": "assets/js/18.2d49b7c8.js",
    "revision": "47dbd4ace2e3b18a1861ad5f896c5927"
  },
  {
    "url": "assets/js/19.499a9362.js",
    "revision": "84ca0f7e7a46aff20cc0c35a8b698cb8"
  },
  {
    "url": "assets/js/2.d1b18b19.js",
    "revision": "b3c037b8bd39585ac032a9dfe6b52eb7"
  },
  {
    "url": "assets/js/20.065f2fed.js",
    "revision": "a06079bde93ecf9a8802f7c938a2929d"
  },
  {
    "url": "assets/js/21.9bba625b.js",
    "revision": "23628042a64bb6b0d969411582687e81"
  },
  {
    "url": "assets/js/22.f1647523.js",
    "revision": "05644fa69fbd5c5d5a5a0b45becbe7c9"
  },
  {
    "url": "assets/js/23.e412ad02.js",
    "revision": "7ec5e513aa6161bcdcc220641a086799"
  },
  {
    "url": "assets/js/24.c75d415c.js",
    "revision": "7c04de037f26fe9b1d2aad66bb22878c"
  },
  {
    "url": "assets/js/25.5f303b7d.js",
    "revision": "d29991f9b6cf211ef7bca5e2aba9fced"
  },
  {
    "url": "assets/js/26.10904d35.js",
    "revision": "23231aa7883b351d3d8195f71e313a52"
  },
  {
    "url": "assets/js/27.97c85527.js",
    "revision": "87a297846b1e952962ea7efbff35fbfc"
  },
  {
    "url": "assets/js/28.2650f136.js",
    "revision": "a03380c50e272d02cca646d9b677a035"
  },
  {
    "url": "assets/js/29.00f07738.js",
    "revision": "d327308636bf0c968920a35d0479d5f3"
  },
  {
    "url": "assets/js/3.3629d7de.js",
    "revision": "15f5638b86a0bf1eaaada181f08b7260"
  },
  {
    "url": "assets/js/30.9069867f.js",
    "revision": "5f237ce9923f25cc0a9bc072d7a01add"
  },
  {
    "url": "assets/js/31.b3e43b40.js",
    "revision": "e8e8f4acd5b2dfc62a21b620ddf34b76"
  },
  {
    "url": "assets/js/32.b1ad6685.js",
    "revision": "7863422248f48e752e60f849b67039fe"
  },
  {
    "url": "assets/js/33.7f49f57f.js",
    "revision": "4228fc7efa64a5dd0a927ba8acd6b7ee"
  },
  {
    "url": "assets/js/34.ee0f2863.js",
    "revision": "c17e865b9fdbe79591efc684ce669024"
  },
  {
    "url": "assets/js/35.6fe2995f.js",
    "revision": "9affba809f5287bb130b8142be8f1e3b"
  },
  {
    "url": "assets/js/36.25162b79.js",
    "revision": "27a64d6add160106f46d4e74001db0ea"
  },
  {
    "url": "assets/js/37.4eba172c.js",
    "revision": "9d34e7c8d5a7350d3b6db48fc18e2488"
  },
  {
    "url": "assets/js/38.442b43fb.js",
    "revision": "63171040c6b0f023aa7ba0e4ae5c9f68"
  },
  {
    "url": "assets/js/39.f999e387.js",
    "revision": "b9393a079b353e44d8da22cfc9d3a221"
  },
  {
    "url": "assets/js/4.5c2e3f93.js",
    "revision": "1306c5a312df7aab77b77eabc44ddf35"
  },
  {
    "url": "assets/js/40.9b7b2c3d.js",
    "revision": "420f4dd6ece1c95e7d2b2291762af41f"
  },
  {
    "url": "assets/js/41.dbb6f309.js",
    "revision": "2a94f418e078d0a01ed68a981438a25a"
  },
  {
    "url": "assets/js/5.9e68c90f.js",
    "revision": "0494260426bea9f40e9994898e5c2a27"
  },
  {
    "url": "assets/js/6.e8c3fc91.js",
    "revision": "307b47da296caddf233ca07dc2ec8c02"
  },
  {
    "url": "assets/js/7.50552fec.js",
    "revision": "da3a1064eb40401b1ed231576adf821f"
  },
  {
    "url": "assets/js/8.31a5c5c8.js",
    "revision": "732202e8dd6e99bf05b171bb7012d1fa"
  },
  {
    "url": "assets/js/9.4c02a850.js",
    "revision": "d09814c1a8223a6cbba5f323e8fdd142"
  },
  {
    "url": "assets/js/app.a11316b8.js",
    "revision": "655738792f4da0736b734d1ca00ba903"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "75596b472cc220438f3c7015f6d32e52"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "5771f37fce8697d384628b9b839eade4"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "b2ba29c66cbf252b0fa797dbaacdeeb7"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "a641c84cc65ce2ccdcd8c0aca1145111"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "5abe750623e4114e07a7b917ae7ad709"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "3ef062ab5126a8e41848cf35e887457d"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "2710572d21e6700da02b99045fe9af3e"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "0c7bbb4605706262dc3fb2ba85b0bf80"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "4adfce4baa1fe0e1c60228e3e1a25a60"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "508c9e968a7bbff06ea391484699d991"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "9415f2bcba74fee2f83343c97cdaee7e"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "48bca585dcf5b03a8e4ca1d549f3d510"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "b3987966e51e1b47b67f2671423086f1"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "8c2b65d58832e5e120a2e732209d9c11"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "f8f68038e5f80e4e6a898c46d9b8d6f5"
  },
  {
    "url": "en-US/index.html",
    "revision": "c6b29b2cbed884662a0b3af03b9d50bd"
  },
  {
    "url": "index.html",
    "revision": "2d6f0e0db6cadeca1a59ab44e45cff57"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "62f9f64b63eb8ff00b8c4df92b20050b"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "3e052464732b97ed367f7fcb62603d25"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "69fb5b79e73da4a9bd4d3e9f3af0d932"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "c8cfec8980b5d8db6d3724c118817965"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "95375ea4bb650244c4894db0699ad515"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "393aecb56425acaf1ce105169ebd7cbe"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "3196f7d137355268e5d873a171857084"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "a989f888453b29499f9016a23bb93aa2"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "3871e2f34b4ce1ec4babb914bab2a12d"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "03fa3590ae3c60ff17f5f12277d7db02"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "d140d4beb8af908e1435ee0988bc911e"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "789a15df7253aebabe5c63236221d5d7"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8ae12b2fcd93d1296834dff1da01f785"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "55b514aec029524493e95cab6a30b904"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "d61d8ecff91f8b5319969e7173bf8c5c"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "987a28c2f5462dfb5495469e024623a2"
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
