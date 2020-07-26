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
    "revision": "e23dbdea9034d7fe0cdc713259b7ed70"
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
    "url": "assets/js/12.ddcd7409.js",
    "revision": "db91c9ca00a1537a6686e64438e33d71"
  },
  {
    "url": "assets/js/13.4dcb8df9.js",
    "revision": "fccda84314324ca2ceda40bf612fafdf"
  },
  {
    "url": "assets/js/14.2faf3230.js",
    "revision": "6c82365672bd8f102db6ef971d203870"
  },
  {
    "url": "assets/js/15.68d65b03.js",
    "revision": "ce79704e0624253d076df148a83f2444"
  },
  {
    "url": "assets/js/16.d5c2269d.js",
    "revision": "2e1e46586a01b88a86a53f35ac2b5466"
  },
  {
    "url": "assets/js/17.bb6f37d1.js",
    "revision": "273b10cea74b37d735c802d26ea352e0"
  },
  {
    "url": "assets/js/18.3d25eeb4.js",
    "revision": "e27b3df9ce5bd63b6c83e63ab4c3662d"
  },
  {
    "url": "assets/js/19.827bc5e7.js",
    "revision": "8c6f4ffdc0d23286989c8264cc8b129a"
  },
  {
    "url": "assets/js/2.e4422bec.js",
    "revision": "9057577ea2936cf899b8e84a7fda2a94"
  },
  {
    "url": "assets/js/20.04947b85.js",
    "revision": "192bd2d33eaa9017ef06ab2952fddc13"
  },
  {
    "url": "assets/js/21.4e15124b.js",
    "revision": "d819b106b81b90ca557ac35d8e6d7469"
  },
  {
    "url": "assets/js/22.216c131f.js",
    "revision": "6a36effe16684d9e0b0b6a86a7f1ed76"
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
    "url": "assets/js/28.0aad4210.js",
    "revision": "965a5c654f182439b77372794cac2f8f"
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
    "url": "assets/js/31.95936f57.js",
    "revision": "e3b5e807f40549d2548fd2109de33316"
  },
  {
    "url": "assets/js/32.1f2a089a.js",
    "revision": "699a14117d173a2cbf132af786fbcd08"
  },
  {
    "url": "assets/js/33.f423b6ac.js",
    "revision": "4d9adcbb2351a37027449ca4d0c8ee93"
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
    "url": "assets/js/37.16518cbc.js",
    "revision": "0a15974e4385ba2b58b38add14c91ef0"
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
    "url": "assets/js/6.685e2a6e.js",
    "revision": "365eeb4c69f9661dcc0cf93511c299b1"
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
    "url": "assets/js/app.c43e7fc9.js",
    "revision": "2fe84e986455b8b94bff33364793b689"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "054da2de296e41f3cf305adafb68db4a"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "eb5ab06e94237e79ea44371cfcd5baae"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "86d1c360d9356fce251851e246dd78a6"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "b2b52678269e4ef34910cd8e0b5a3f08"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "1404d5316a6677b040607c79acc97cbd"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "2a91e041ebf3d58a392d8147fc6c5de0"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "ab78ba4d836308d884f9ac28f9fe71fc"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "6e86b804449805e11fabdb4725c71d74"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "0c9a345eb78b19c4ed46c585c2908bca"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "b286b1713cbc1937fed40d64ecf4574e"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "32933cae6a9e70e5c8e14b5ba74ed02a"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "dfb4dee1ae8518beffdf3690df3a52b1"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "ab22fe6a2dac087238e7879c403b93b2"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "a6f9247ae633cd00fadf92a53706d4cb"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "10d793f6d45e2533df208d19edb123fa"
  },
  {
    "url": "en-US/index.html",
    "revision": "f0da7d5876b713bdf260dbd559e774f2"
  },
  {
    "url": "index.html",
    "revision": "6751322ce95f1adda458c4a19407c3a1"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "eb89a3f4127cbc7fa13d0f8a88f0f6cc"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "d1670717f04b38e9173a86c529a39412"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "2bb7ec9ed0cdbef598c3457baa4b0006"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "5191b0787e81f592c1ba4d810478db33"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "db31a7af6fe36472225678d8f377673a"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "69184c1fb89d4a424a4d370ca7bc29db"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "aba8c704209ada9825179a42e0a91203"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "9d4fe1f58bd685e9644c15f466b172b8"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "957001f442fc8e88253d9924b643c39c"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "7e2c0aa0009497849ba543f21a2604ce"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "3d5e12638b7723ce255d1fd31cf5e30c"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "8d6b3929bd9c4bdca1a2b4fa29bcfb6d"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "375374969752401a15d782f3c5838a59"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "35374dcbde9f578cb6531b65aa942fb4"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "e76792c985bf863ccc371fc03b6ecd7f"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "cd74235c124cbe8603cce16284052e64"
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
