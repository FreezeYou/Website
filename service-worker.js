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
    "revision": "3e688aff7725247c4c8d63b15354e719"
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
    "url": "assets/js/12.c6a6deb3.js",
    "revision": "7e39ff5151d472caeaf23497aeb571bc"
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
    "url": "assets/js/28.9c5cf60f.js",
    "revision": "e0659b636636119901e561fed8a5e0ef"
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
    "url": "assets/js/app.432f1c9a.js",
    "revision": "78a388fe8e976bd30e1c93366564e5d7"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "9c461bf75420844900f74c97c8fed181"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "735d8370a070c6f7208335e49fcabe01"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "fbcf43ec47019bb6a54cb81a30f1c6c3"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "aa0613cee876bfafd9309f6f09cc1f39"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "a85c8a8be308420ba9adc5dc5fea7308"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "d459246e91a0e6cf92042a89e34413c1"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "cca35281fff41f4bdecb9ec39a08414c"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "2bb90a80baec7ec90fb7d8b48acae01c"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "bd0bc2630a8794294eb2f80bae3b8c95"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "9038bbd9862f2728d98c727e1f493a52"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "8e7a983e994e659af054fb7273f6cba1"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "82972ca0e37c41984bca5dd179ff6574"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "dce259f0709f6153c7d66cca5e42f16b"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "4676f16aaaea502be9f4ee6e84b3ce14"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "663e3dff6527ee0c0f289b6e529ea6ae"
  },
  {
    "url": "en-US/index.html",
    "revision": "b9b56f5b193a90d190a7075d192c1c4a"
  },
  {
    "url": "index.html",
    "revision": "1f416f1e179e8fc35a31fe20a2cd1a89"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "225335af530bb51b6e42db6b24f2fd5b"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "0402c251e9262fbaa09136a4824f42eb"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "fff5e934006e8ea7221f4807a7bf3eac"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "610e42557a176f4798ab202770997821"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "a3be67fed5dda1dc3a5dcd7dbbbd5fbc"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "857ce5508d2c01546449efe6f330331f"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "db8637c2d99e2fdedf14986ff88b372f"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "bc424bfb585cffe57aaf0cdc52acf2d6"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "435563fe5b6ca698728c0680e5a964b1"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "f5c5a66b7070d91210a090b0ee5d7c63"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "77889d6de5969bf45248b2acb76269c8"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "4b7ba2fe3a624f5181e3fba27b27dc36"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "e2c1a71f598f6aa534345c8732997cb7"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "65aba3ad7ee7aab57d253c68fd967721"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "5579503e38aacd2fc321bf60e71aa330"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "1e713e52fbceb8f18b3d1e1f41637c76"
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
