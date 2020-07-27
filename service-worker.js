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
    "revision": "2e61ee17ad9c4fece6fc3945f70c0224"
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
    "url": "assets/js/app.54e3f794.js",
    "revision": "3af265de45a1dad9d36e84bce23c1275"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "8d3f9aefdc068526738280ab9aa39e61"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "f884f951fad40ec2cc904373c7e45c1a"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "dc8c8cd941430e0835d4bad22de422f3"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "686f54e72c820cd3909c8ce673ccab13"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "0be3e5920d16573d0713892b7c77ba52"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "ab1acd96c58cdb71416669f96a9ae0de"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "2b0a8f69219c5e6077254f493f3b63e5"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "df68841386bb78381cfdae8f6d68deb5"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "062707e3d9adc800c7e5de4a520847f8"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "1c75f429e907f0cf710ca40b933c1320"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "6750357a175f72787095f2e3ec8767cf"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "46271dd67b9693bfd9c0cc5d30468cb4"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "f7ca03d029786c3ba5b5fa9924acc666"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "3c05f2b131813a8bcdabebc9a649b15e"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "f2f8fb2449a701ec2b6b414891024442"
  },
  {
    "url": "en-US/index.html",
    "revision": "73b990fa0451049ab046eeedb9b9158a"
  },
  {
    "url": "index.html",
    "revision": "b06936d6d92d566035dfb9ce185d7367"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "930b01c898f5454e288df0b0c069ceeb"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "1f67c1072b24cdc6a1e70a1d712d0f2e"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "9eefbba3d4af82397e713d40c56c18e8"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "446fd58314c841def047250bf65a5ea8"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "81196d61cd817d27052cfb24452b2b19"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "28c4111d13d82f34530f7d4db800f672"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "4d6249374bb1d684b0f6708c693edec2"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "f1096e8c8680460e2ba411d1c3a84a5b"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "c99a4c81f54d7a73803e9c4f3c1a8012"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "a3de803b0747a2184476b1d5cccf2552"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "583e73cfb7afcee2735938be97f11ab0"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "4cfeee164ae0390777a48406c993ef55"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "348208fab4e064dfa41b68407324b4d9"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "f5f0b3e5ece3c4b4ad706ef05fbba8b2"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "b38a496873b3afc10b80eb31773840ee"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "c520152c3df78dd02e0b3f6c21b4a47b"
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
