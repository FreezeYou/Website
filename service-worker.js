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
    "revision": "c8ca9e0862ebfe62d29677d18fce1187"
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
    "url": "assets/js/18.2026c9ba.js",
    "revision": "69162f85572eb1a0baff3d2b6c48f300"
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
    "url": "assets/js/21.36555623.js",
    "revision": "b043be8e7b1cba3709f8ded9224e1534"
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
    "url": "assets/js/34.57f3f3e9.js",
    "revision": "edbbdef374b1af81fc9f4c7fe8288534"
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
    "url": "assets/js/37.98b0ccd2.js",
    "revision": "48fc9eebff7a3b3aa193184fa75df1fd"
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
    "url": "assets/js/app.24f37629.js",
    "revision": "a386b491579ece346bda6ca20553e1b3"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "6e92430b56cc372afb7b69ce88f54472"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "58f9bb4a8124bd291a970ca18c55931a"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "288aa196d37c2bab96c36f1bf4ca9731"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "7c6f64d72e63debe733e48725c14d493"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "25e70253f93c80bd79ef197b1126ecf2"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "ea2692fd3893af8200f2c74746557444"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "6d05be7ac078b5e487eba0786b21192c"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "2b7ed6bdab62ec9060efa29457bdd268"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "20e3a8ff1305b9911926cea6652285d1"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "757c1cc577eacbb55cfe4b8e64081f39"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "1e223666e8b51eb7bcb7532ebba91753"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "8ec331e184cc6e818f0594d2dcf2aa94"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "0189c4b4f73e72a50c399be5644c280a"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "96f0b343945d9648f8a02fd0fc76d609"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "f5e7eca067c57bbd5e8e8a038fbe6bca"
  },
  {
    "url": "en-US/index.html",
    "revision": "289a03d8fb65c4b5f82f83fb5733b66a"
  },
  {
    "url": "index.html",
    "revision": "8d314a725c0448c60f46d7cfe9587b19"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "3575acb8481363a114254441b034f1db"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "2de3dc834711686756973e7df4edee4d"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "b0c1e86db3d81bcdc1591aad35c86eb2"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "ace0422d8dd6f396fbc0bd072aab4bca"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "957d7498409a3c505edc2c81ff8a1d50"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "e8182f47a6aa057a29863da0a7227a99"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "47fd89fc242efcb5dcb2946c28855509"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "35f07653b1eaf886724935795ef3a1f7"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "66e4f677267b54fe86521d5a6f94b68b"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "8599bddb1693fb349f18ee3741be39f0"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "4b990b7b7b976fab78329a4813e4ee85"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "97a013f799a8af64920cfb1cdf5f8212"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "938691e0b448d887d304e8d26a121004"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "a74ae705223946085e33a27d47c936e9"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "6b866d132ca5b19b50a86e992d282cbb"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "f2b050a576216ad35e6705afc10a714a"
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
