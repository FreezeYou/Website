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
    "revision": "80ad6185e095e434f5c8bf6ce36272bd"
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
    "url": "assets/js/10.293693ef.js",
    "revision": "aa373d36e1b494ef1d64ba392f06d53d"
  },
  {
    "url": "assets/js/11.a627ccec.js",
    "revision": "90ebbc2be70ac9e797dcc7aab4da0530"
  },
  {
    "url": "assets/js/12.98634be3.js",
    "revision": "2a2fb2a60f7ca9b003bd5289ffa9eb84"
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
    "url": "assets/js/25.0c0ae7d3.js",
    "revision": "8533517fdcf2224ba0ff8e39f3407422"
  },
  {
    "url": "assets/js/26.5b1509dc.js",
    "revision": "e484e5108a2593dcd35cf192f36d4c74"
  },
  {
    "url": "assets/js/27.3e10bf7a.js",
    "revision": "17e0b3494afdfbece42fce51d53cc3d5"
  },
  {
    "url": "assets/js/28.c055b239.js",
    "revision": "1c195d8386d283fb9e256b9c23b18ea7"
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
    "url": "assets/js/9.1f7af023.js",
    "revision": "13a793a38a6e79bc509f406f1768826f"
  },
  {
    "url": "assets/js/app.27984772.js",
    "revision": "b2bb0c1a8c09a345264b8fe45999e1d9"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "38ce258eae0582974d200b9f777130f2"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "b06010b219fdf9fd48fb12e4d95bd3f8"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "6030918e73aae60f4326a5bd14e00682"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "8550aa4f982d6afb0cf22f94d54aaf54"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "c6335bb592ebfddfd29901e17883bd03"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "e3bea193953a875e6230f771da0c4e52"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "f3226472a341b4139f6057adec57d748"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "5697b65fe496da168bd82d25a8006efd"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "a671b1e09e22fa3b6b45528aee829d86"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "717682d11ff686c489fae818d8870a46"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "d615ad853da1af7325dfaa622d61a6f6"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "9eeae3012f6437bf47700e7e0a6464db"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "cd6a3c264b39f5a0e145ed986cad7103"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "329884a3e64b2a4bfdbb7c3e7ea5e6fe"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "45c97e5257dd225ba4aaff78a6bc815b"
  },
  {
    "url": "en-US/index.html",
    "revision": "14e56a3fb06a18322733f98ec1492890"
  },
  {
    "url": "index.html",
    "revision": "0b9b27cce66dd69838cad312fcd83cd4"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "fdefab71f2467d47596a7d2718a254cf"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "e8a7249aee1289b0d3961f00184bcb35"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "dc682d86c4e23b512daa39d28c1eb81b"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "89f0f40317668d4a523526e2a972e96e"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "4d100a4f29c0283bf6af3ede82fd657f"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "80e3e2b452df1639ef549126a7763bf0"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "86c0045e2b26cbefae5c36ee7ba068a6"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "75e3739cb051aa84b69a761444f3265d"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "206a8cdf90573a7adce67b9d5abb70cc"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "692131f40e736e52c274e2d766ce9f12"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "1ffa7c7075e013c1f14961cac03b2266"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "5cb3022285009da6bdbbdc7e30a5879e"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "e06f0851c1c96b1cac328f7aee5bf89f"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "fea1c5c6b95ccaeaca5c1b340fa3d529"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "c84c3c7e562ba6c693133e85c234325f"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "b7cae46265ba36858725d94af83af462"
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
