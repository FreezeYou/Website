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
    "revision": "0ccb8b5556bd96f63e847d8550bc588e"
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
    "url": "assets/js/14.67b6af58.js",
    "revision": "0f72490daaff29a2e9cc392627690221"
  },
  {
    "url": "assets/js/15.19b0641a.js",
    "revision": "13960aba7de77ded1fce424ba1a30b22"
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
    "url": "assets/js/30.8e0f5492.js",
    "revision": "48339c494370dfad835fd9a7c2f4272c"
  },
  {
    "url": "assets/js/31.e1c55a87.js",
    "revision": "ac672c23ca5520957dd6aef20d1b7ff5"
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
    "url": "assets/js/37.6ceb9b5e.js",
    "revision": "c10fa2ff1e9f051ace74f05fcc23db78"
  },
  {
    "url": "assets/js/38.9dfee769.js",
    "revision": "cf23f4804cdcaf76011b21483edc613a"
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
    "url": "assets/js/app.622ae956.js",
    "revision": "f9ba2b17ca8551f90f361ebaddf5f4b4"
  },
  {
    "url": "en-US/api/index.html",
    "revision": "b595d635c3d10e0b6cde22419f0599a6"
  },
  {
    "url": "en-US/api/provider.html",
    "revision": "bf9c9a7a3bb93d03d0863ec561d2c817"
  },
  {
    "url": "en-US/api/start-activity.html",
    "revision": "fe1db9448232ca18135d83d7331005bf"
  },
  {
    "url": "en-US/api/uri.html",
    "revision": "f5792817f0ccb7d67eeae97e7bb04d68"
  },
  {
    "url": "en-US/changelog/index.html",
    "revision": "7373ca63508806cc5dba9379cdee3b0e"
  },
  {
    "url": "en-US/download/index.html",
    "revision": "fd3822dd0e786ea6980ca5b38214c9bf"
  },
  {
    "url": "en-US/faq/daily.html",
    "revision": "fd94e0cae499c7925dc80810aad3c5c4"
  },
  {
    "url": "en-US/faq/index.html",
    "revision": "6d2254280a79b476d84f9690900f053c"
  },
  {
    "url": "en-US/faq/mroot.html",
    "revision": "11b27d1a769919a5737957275c4fad0c"
  },
  {
    "url": "en-US/faq/schedules.html",
    "revision": "173b7c5123d58e3b3a42b56ceb10cb96"
  },
  {
    "url": "en-US/guide/enable-mroot.html",
    "revision": "82e0760547d31d554123fe708440b4c4"
  },
  {
    "url": "en-US/guide/how-to-use.html",
    "revision": "228e747ecf7cf29437637bdd0c7b5f5a"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "9e3f5deb87cb474b82bdb5b388ba76ec"
  },
  {
    "url": "en-US/guide/schedules.html",
    "revision": "90f2c9d185495d14d712c8239805761f"
  },
  {
    "url": "en-US/guide/warning.html",
    "revision": "6dde595d2b50c0ccb887ccb2803f9411"
  },
  {
    "url": "en-US/index.html",
    "revision": "73062aae29270cb87322fc60a8b821d6"
  },
  {
    "url": "index.html",
    "revision": "49c005e11f9f9fa026a84d0147261ab9"
  },
  {
    "url": "zh-CN/api/index.html",
    "revision": "7df2c5205686cc201fac9ca371d1b0ec"
  },
  {
    "url": "zh-CN/api/provider.html",
    "revision": "28dac9bb9a9ef564bbd9cfbec4e79820"
  },
  {
    "url": "zh-CN/api/start-activity.html",
    "revision": "94ba0edffa8e1bc9714c46e0b666cc4e"
  },
  {
    "url": "zh-CN/api/uri.html",
    "revision": "9d71c450b147b962be7601ba04cdaff3"
  },
  {
    "url": "zh-CN/changelog/index.html",
    "revision": "253f4df68e4ec190b3fc0434205abed2"
  },
  {
    "url": "zh-CN/download/index.html",
    "revision": "cf447ebe5cbe894cb126ad1405276a7a"
  },
  {
    "url": "zh-CN/faq/daily.html",
    "revision": "de19aa440695106c936a78bbcf4281c9"
  },
  {
    "url": "zh-CN/faq/index.html",
    "revision": "5e704f5ec58e4910824a5c4bf28624f1"
  },
  {
    "url": "zh-CN/faq/mroot.html",
    "revision": "ac28470e36a89fe45f65c783df1172a8"
  },
  {
    "url": "zh-CN/faq/schedules.html",
    "revision": "0c2c521df70f506f0357e4dd83abbc68"
  },
  {
    "url": "zh-CN/guide/enable-mroot.html",
    "revision": "afc3de40a3146d415b677144b2d14fa1"
  },
  {
    "url": "zh-CN/guide/how-to-use.html",
    "revision": "7f90ff604de7751256c50c22e5c09c49"
  },
  {
    "url": "zh-CN/guide/index.html",
    "revision": "8dc389b1d32092604d98873af67b84e6"
  },
  {
    "url": "zh-CN/guide/schedules.html",
    "revision": "c91f5e6e1cf01afa74a402da5c169a67"
  },
  {
    "url": "zh-CN/guide/warning.html",
    "revision": "a8ddcf41a7a5a82094b441c008657bb1"
  },
  {
    "url": "zh-CN/index.html",
    "revision": "879f069638cdb69f38500585af4f4cba"
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
