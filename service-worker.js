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
    "revision": "d88e90327fc9a0d814266b1449c95956"
  },
  {
    "url": "assets/css/0.styles.4b8378b9.css",
    "revision": "db18c4cc998d66d98c7451023f2225a3"
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
    "url": "assets/js/10.5d984899.js",
    "revision": "ba3d0baba9dfa0f7f91f99fc3650c43a"
  },
  {
    "url": "assets/js/11.e7bbe807.js",
    "revision": "a67efa1acb5727912889cd4deba55140"
  },
  {
    "url": "assets/js/12.6243f7ee.js",
    "revision": "fc0742a5b5573225c3cf202cff1895a8"
  },
  {
    "url": "assets/js/13.075485df.js",
    "revision": "f18079f1afe06a856c5ca6eac739d2cf"
  },
  {
    "url": "assets/js/14.6c6f999c.js",
    "revision": "00253a8ed51e00741583b18e09b55ae9"
  },
  {
    "url": "assets/js/15.b0ec2b68.js",
    "revision": "b1361207bb232b71d27bfce06a6faca3"
  },
  {
    "url": "assets/js/16.9845ab80.js",
    "revision": "573f80564e68b3948eb181eb5463211e"
  },
  {
    "url": "assets/js/17.eb1abb04.js",
    "revision": "af599604535d1dfabf578e0774912ed6"
  },
  {
    "url": "assets/js/18.e0fb90da.js",
    "revision": "27ba8de69ab60f43ea30de42481ba41c"
  },
  {
    "url": "assets/js/19.b75f2b57.js",
    "revision": "4b0761109e9bd8e151b938415ce98f58"
  },
  {
    "url": "assets/js/2.7ce11c93.js",
    "revision": "7fa1b4add9b6a6b418b4e9d7bb681806"
  },
  {
    "url": "assets/js/20.3202e052.js",
    "revision": "6a2627e85bc0af0a8ab2d437d598e8c4"
  },
  {
    "url": "assets/js/21.1a4eb83a.js",
    "revision": "8b90244df32dad7b8c6cb1f9dab64db7"
  },
  {
    "url": "assets/js/22.4b8fd063.js",
    "revision": "c22cea547e1b0cf0a267dfab8dea1ea8"
  },
  {
    "url": "assets/js/23.64455242.js",
    "revision": "8f95ff93e12f1ea7e967dff2dbf5a84f"
  },
  {
    "url": "assets/js/24.90483372.js",
    "revision": "d1acd87ef7ab97d7a166b7c098b967b2"
  },
  {
    "url": "assets/js/25.cf43571c.js",
    "revision": "03a5d16840500e08deccc0d0b2a3eaf7"
  },
  {
    "url": "assets/js/26.b9bb4bb5.js",
    "revision": "0cf3939b4da240a07209503bb4359334"
  },
  {
    "url": "assets/js/27.3fa4fdf2.js",
    "revision": "3af35a990b4045f67dbd818a16767c1f"
  },
  {
    "url": "assets/js/28.02f01717.js",
    "revision": "bcec75e3d15eb6d8464f4b34f44ec282"
  },
  {
    "url": "assets/js/29.44f146b3.js",
    "revision": "4ebfa0266f88abeaa377a4699d361565"
  },
  {
    "url": "assets/js/3.31d7afaf.js",
    "revision": "41fb2e62ce2ff21a3337957be6d560cc"
  },
  {
    "url": "assets/js/30.ef5c087e.js",
    "revision": "905b803aa1138dfb94a4ed120ad8ae72"
  },
  {
    "url": "assets/js/31.cd83759c.js",
    "revision": "19714826632818ca102536a975146270"
  },
  {
    "url": "assets/js/32.c1cbc2c8.js",
    "revision": "9a0b1c6d335727c701e104ad7611bc4f"
  },
  {
    "url": "assets/js/33.670fe8b0.js",
    "revision": "f4e2d19dcbee719f0fd95279b882dd90"
  },
  {
    "url": "assets/js/34.07572bb2.js",
    "revision": "b0c4e52816b16bfa661b7b8aeb5c1f87"
  },
  {
    "url": "assets/js/35.2b550586.js",
    "revision": "088fb4c1a33b059fb237a0e1625cde4c"
  },
  {
    "url": "assets/js/36.563daa37.js",
    "revision": "b736190cfacb8da950308a9bc8d8684f"
  },
  {
    "url": "assets/js/37.1d8b2852.js",
    "revision": "d99cd963b3dc4d3e31bba531b40b561a"
  },
  {
    "url": "assets/js/38.f2d3ddfb.js",
    "revision": "f44d94d0368fbbbb4ed06a3459f2a986"
  },
  {
    "url": "assets/js/39.eac32f0f.js",
    "revision": "7670f88a17c1b8f2473cfbc113ff6993"
  },
  {
    "url": "assets/js/4.dea36bc3.js",
    "revision": "cfad3acd851fbc37597b716f1a190116"
  },
  {
    "url": "assets/js/40.d7a5c57a.js",
    "revision": "28769b223569ee7eb1371990b1521a05"
  },
  {
    "url": "assets/js/41.3d949f66.js",
    "revision": "04657729dbb149d2d7bedc1005ed1880"
  },
  {
    "url": "assets/js/5.ceb8e3b4.js",
    "revision": "03c3a30ee373531209f86259fdf41768"
  },
  {
    "url": "assets/js/6.4996153d.js",
    "revision": "37a8d306c04199838dcdce568783d04c"
  },
  {
    "url": "assets/js/7.75852606.js",
    "revision": "72c9d93db9be8b050e6214a50da806d1"
  },
  {
    "url": "assets/js/8.07d4ed1b.js",
    "revision": "7a763904bc0ed9a1c623d72829c310c5"
  },
  {
    "url": "assets/js/9.b0100137.js",
    "revision": "7099bfee0b3cb26ec0da0f34bc4e5e9a"
  },
  {
    "url": "assets/js/app.50e297cb.js",
    "revision": "84a2058985b4f9481722794287857f8d"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "ed781792e5ec6d02522b6ffa95c087a2"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "61c939e1b4a61b7f283bb7fd630ddb43"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "a7d8b578f9ff06e15c8b195e1878442f"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "c6816477ef6f32db27e9faf11e96f6e9"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "cab1113d79ba2c63d94eaa768d43fb60"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "ba92b78e252601ebeeb4b0c46cebb040"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "c881c43856c2bfcbadfbee9699582d59"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "c9996d97ae88b042f04b9a8934608a9c"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "44a44644b51a58602812e84ab3864b8d"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "80b70b5424386b8ccdfd95b784913c22"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "78ad6341c3f1e8378eed1685d939aa16"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "bbff3c697867624d768541f33a359a0c"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "1c4b35fd82573151d03cf5f34de5fcdd"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "3eca08f6bf2575594cdc7cadedf058a9"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "6414b3b2bcd7a31dced13d73b1827d3d"
  },
  {
    "url": "en-US/index.html",
    "revision": "9daacd05680c39dc43cb9f90c9728a92"
  },
  {
    "url": "index.html",
    "revision": "d6e9a641022372990ee5d8c3e49b9ecf"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "6eb244ae35982da65286c5ba8d4ca52a"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "12df1dc08d536ae0c281246a54f16c38"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "864c36eb743873f8c1aeeea3285d4bba"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "5b84ed4509257ee3291d704f4a29730c"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "4b44c8abc25b463e58c60507e19faef8"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "253e742def5eec3a0c5928a0d2a5b04f"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "ce13db7affe643d07da58bbe69f0656c"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "d45b3f6bb500d651c5d7d1f0fc7bbd8d"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "cfe4bf95b156182c3bb91bd8f8f8dfd1"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "1733ff98cadced30f9ff20a6a586098d"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "972b204af6cd1702c0ce2cf4ae2cb97e"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "ddb8968c239c9f7d2d0dc20aabf97c6c"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8a1e4abad732b7f2b2535f36bac25414"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "09ba873010c8118aca6bbd24a8538f9c"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "8f76dd20d671857454df1cbf3ceed8f0"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "a005b46ab20a3c6ca06cd4fc19b67aac"
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
