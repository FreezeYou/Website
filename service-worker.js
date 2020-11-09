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
    "revision": "a917c37d11b98777217437214bc54e7b"
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
    "url": "assets/js/app.ffaa91d7.js",
    "revision": "3bb99ab6b92f2025e3e81a70025ef68b"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "29be9fd572e569b37c1e24c8d9aae1eb"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "265046ef61eda53ba07649217b77763a"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "bc4fb0a8cbb846dc1bcf4e7ae51c6c0b"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "50ad7ef3e8e6d6a3e2635575653c427e"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "592eabb1efeeef3774d1d2a58b30664a"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "4717271782ec5cd90a670c7d560caa9c"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "2c3ca1651c7d646d25cc6e3ea9dc091f"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "6cf5de44d524db0212347bacc3375576"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "a7df46d2658c8826a7c586b4867c4e5a"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "27957e4f7f4e69cc33884620eb90d0f8"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "7dfb51c75ebe2cb38739ff77dbd3f484"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "53c9c62a0e531092da5f70d0256495e4"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "aa502fdcd84fbc30d5aee2dace8d5eb6"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "83ec7efeda7076f8894cf600f1a46d2b"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "0a3c8064b73c3fe3aa16cc6ebd23087e"
  },
  {
    "url": "en-US/index.html",
    "revision": "a3c6a5b947c4311e0adab166c8e3b8cb"
  },
  {
    "url": "index.html",
    "revision": "1ff017c473aaa57fd3a7d28ad7e202b4"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "c6c78ed8d83cd0996a17d25f5ceaba0e"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "b9c8e866103d683a12b010ca2a5a30e5"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "03f19f8efeea1d74db59ba1817f61419"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "d9f796e7a4d21a2a12a97cbd0f5f4f2f"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "4640dab8593d4b74e192ffa083bdec98"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "c4e83a1cf0f214b5e1ad5fc5aea842f8"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "e87ef96b0e6e70245c121d8acdf15b65"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "e0a297c2ae143ce70781a8fd33a56339"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "98d3e268906cc13bd382264abed02353"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "75bb08a356fde88bb58c5a70f0bfbaa7"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "20a18097fa65123a9d51a009e03714b9"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "1951c1fe14aa9d093bce210d46961243"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "0e55adf28a29674294c2d9e53f6420c7"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "947599ffc0121ec7764a110968d6425e"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "1213678f657f3f65f72abc2293c7426e"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "311fcfd9ab7fcac84021080f77967505"
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
