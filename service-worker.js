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
    "revision": "206530905b53a63b079a9bf6dc3694ab"
  },
  {
    "url": "assets/css/0.styles.121e0470.css",
    "revision": "411ebed0e209a4c941b16cdbab504c6c"
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
    "url": "assets/js/10.68f0052b.js",
    "revision": "aa373d36e1b494ef1d64ba392f06d53d"
  },
  {
    "url": "assets/js/11.ec0f8609.js",
    "revision": "90ebbc2be70ac9e797dcc7aab4da0530"
  },
  {
    "url": "assets/js/12.5984751a.js",
    "revision": "2a2fb2a60f7ca9b003bd5289ffa9eb84"
  },
  {
    "url": "assets/js/13.a4d9714b.js",
    "revision": "fccda84314324ca2ceda40bf612fafdf"
  },
  {
    "url": "assets/js/14.d71fe618.js",
    "revision": "6c82365672bd8f102db6ef971d203870"
  },
  {
    "url": "assets/js/15.b985e09d.js",
    "revision": "38ead7607045268dabfe081b789e32f8"
  },
  {
    "url": "assets/js/16.c3d92ec4.js",
    "revision": "ea930d36a7610a35cc6a72527b85633a"
  },
  {
    "url": "assets/js/17.22c8a93b.js",
    "revision": "273b10cea74b37d735c802d26ea352e0"
  },
  {
    "url": "assets/js/18.ab6f4a17.js",
    "revision": "69162f85572eb1a0baff3d2b6c48f300"
  },
  {
    "url": "assets/js/19.ca3b2dd4.js",
    "revision": "8c6f4ffdc0d23286989c8264cc8b129a"
  },
  {
    "url": "assets/js/2.50ba7db2.js",
    "revision": "de0bf3b9dde19f7f7bb63cb6eeaa8093"
  },
  {
    "url": "assets/js/20.d4545084.js",
    "revision": "192bd2d33eaa9017ef06ab2952fddc13"
  },
  {
    "url": "assets/js/21.99c7182c.js",
    "revision": "e2adfb1e41cadd83dfb22d96366ab82c"
  },
  {
    "url": "assets/js/22.b0805ce1.js",
    "revision": "6a36effe16684d9e0b0b6a86a7f1ed76"
  },
  {
    "url": "assets/js/23.8b13902f.js",
    "revision": "a7e81e912ec4b39d705c358637cd4f5a"
  },
  {
    "url": "assets/js/24.10dd606b.js",
    "revision": "e39aa63b8097b59e128830c92e44a54a"
  },
  {
    "url": "assets/js/25.ff78755c.js",
    "revision": "8533517fdcf2224ba0ff8e39f3407422"
  },
  {
    "url": "assets/js/26.363ed6d6.js",
    "revision": "e484e5108a2593dcd35cf192f36d4c74"
  },
  {
    "url": "assets/js/27.de700fcb.js",
    "revision": "17e0b3494afdfbece42fce51d53cc3d5"
  },
  {
    "url": "assets/js/28.a4b95284.js",
    "revision": "1c195d8386d283fb9e256b9c23b18ea7"
  },
  {
    "url": "assets/js/29.f85cb93e.js",
    "revision": "23174cbc4c78f8ac459f461733c39a04"
  },
  {
    "url": "assets/js/3.dbae0d33.js",
    "revision": "041175107c3dae8a1a1068ba0c4c7aef"
  },
  {
    "url": "assets/js/30.ea8ed4d6.js",
    "revision": "3f7069e0abbb755d3a08cfe6470c99ef"
  },
  {
    "url": "assets/js/31.2e3dc563.js",
    "revision": "740f00af6b4df8c40e1319516901db43"
  },
  {
    "url": "assets/js/32.12d83fee.js",
    "revision": "dc0a876b09bf031537d5447bd67dd7c3"
  },
  {
    "url": "assets/js/33.1799b021.js",
    "revision": "4d9adcbb2351a37027449ca4d0c8ee93"
  },
  {
    "url": "assets/js/34.64ba39e0.js",
    "revision": "edbbdef374b1af81fc9f4c7fe8288534"
  },
  {
    "url": "assets/js/35.8409e78e.js",
    "revision": "58bb8aa8d530695f965921c64a42776e"
  },
  {
    "url": "assets/js/36.393a34f1.js",
    "revision": "40faeaa242f637846c80bf2e13abc065"
  },
  {
    "url": "assets/js/37.b9e80c34.js",
    "revision": "e8423c1e0a4eed24461763f8726f745c"
  },
  {
    "url": "assets/js/38.b5453073.js",
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
    "url": "assets/js/5.ab04f7a2.js",
    "revision": "26f76642c8566174830cc77f7d395c58"
  },
  {
    "url": "assets/js/6.d142c492.js",
    "revision": "365eeb4c69f9661dcc0cf93511c299b1"
  },
  {
    "url": "assets/js/7.69f8fc1c.js",
    "revision": "0916ea25f3277d4222329145e0a67068"
  },
  {
    "url": "assets/js/8.3a921c0e.js",
    "revision": "20d66005f47521f471027903672fac20"
  },
  {
    "url": "assets/js/9.95742fa2.js",
    "revision": "13a793a38a6e79bc509f406f1768826f"
  },
  {
    "url": "assets/js/app.2e871568.js",
    "revision": "47d5556d731a9f521b2863b9f692f0bf"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "e5be2ccedbfb8ff682129b392a87c547"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "073ca1011b22c95d4cf6567bcc466436"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "57e544970f751785abec385e60e68773"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "32a81b63a96db5ce9ea9ed5fe4e70de0"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "fccda5afffad4e98309ba13e1c37841c"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "6705bfe8ed0e7539afda84721f3dbe2d"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "938f3df38e706361d9525f48be6ab6eb"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "9095408ac2859213ab0b593f47305ce2"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "46503cae5ffb228b07e0be0ca8dd88bf"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "b70803c84d9915cb241a8cba2da452a4"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "15a29936467faf9133794df8acfbec16"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "a5ec636bef4ab40ba0ac8ed53d15d934"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "b17fe809bff66dbb7704f47699a5572e"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "389cd87d608510e21a67b10cd660c736"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "155823a8e929f1686dd42f4d78295bd5"
  },
  {
    "url": "en-US/index.html",
    "revision": "7cc8cf21485a94ade05ce94c8bff55a8"
  },
  {
    "url": "index.html",
    "revision": "565f3ead50328744c2a9b80aac9210ca"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "c4bbf4c070d057ac6bbb9adf6a3cc000"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "48e9d2bbc60c558963e3de3729e4b910"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "13e5f581339f5c932097df834b6a37b3"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "f9f411e07d80d8ea8ffca8eb3df48bcc"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "aad5987dce243b5a1cbcfd2435f48950"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "9ee338da178d4ae179185de66ed998ae"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "1652f48b3148c21733c913ad3ff2896e"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "5e3725c21ee03fff4794d0d450dccda7"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "7158d2a559c18e33002cd2c8945dae99"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "59d72ca411e09b0427f9b0bf99fa4346"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "b284737b54f797dedeeabd3baf63baf9"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "caa79af786c0addf9ccaa6973d89b8c2"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "e41b9b2271b25b117d37ca1b51ead749"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "b85fb55634c4eea21a40ad04f2e15470"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "15931f2e4f75757942d1bfcfa04b774f"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "1185b7759dfa43355fea11a2a67c8835"
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
