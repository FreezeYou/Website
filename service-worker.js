if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>l(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-ec81a2a1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"a9ff3c454253bbb4b7f4e7d9d760d4b2"},{url:"assets/20180207104242.696221d5.js",revision:null},{url:"assets/404.58d7634d.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.2bc474b0.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contactUs.html.07ee66ac.js",revision:null},{url:"assets/contactUs.html.0cf84f0a.js",revision:null},{url:"assets/contactUs.html.311ba0a8.js",revision:null},{url:"assets/contactUs.html.4391eecf.js",revision:null},{url:"assets/contactUs.html.444c68cb.js",revision:null},{url:"assets/contactUs.html.61d1335a.js",revision:null},{url:"assets/contactUs.html.65dcd3af.js",revision:null},{url:"assets/contactUs.html.76f24d63.js",revision:null},{url:"assets/contactUs.html.7a7cd4f3.js",revision:null},{url:"assets/contactUs.html.8a9846a3.js",revision:null},{url:"assets/contactUs.html.8f56d8d5.js",revision:null},{url:"assets/contactUs.html.a351a231.js",revision:null},{url:"assets/contactUs.html.c6138c8c.js",revision:null},{url:"assets/contactUs.html.d9eba35a.js",revision:null},{url:"assets/contactUs.html.e9e46984.js",revision:null},{url:"assets/contactUs.html.fc0109aa.js",revision:null},{url:"assets/daily.html.11ac30ff.js",revision:null},{url:"assets/daily.html.22881132.js",revision:null},{url:"assets/daily.html.2660d141.js",revision:null},{url:"assets/daily.html.3ed3664f.js",revision:null},{url:"assets/daily.html.5c6d8872.js",revision:null},{url:"assets/daily.html.66020df1.js",revision:null},{url:"assets/daily.html.7f03c716.js",revision:null},{url:"assets/daily.html.86a47cfc.js",revision:null},{url:"assets/daily.html.94b6261d.js",revision:null},{url:"assets/daily.html.961a0748.js",revision:null},{url:"assets/daily.html.97075a85.js",revision:null},{url:"assets/daily.html.a2eb9a10.js",revision:null},{url:"assets/daily.html.d6637aea.js",revision:null},{url:"assets/daily.html.e2732c65.js",revision:null},{url:"assets/daily.html.ec332fcc.js",revision:null},{url:"assets/daily.html.fc7505ff.js",revision:null},{url:"assets/enable-mroot.html.1e153e0a.js",revision:null},{url:"assets/enable-mroot.html.2d9bad87.js",revision:null},{url:"assets/enable-mroot.html.2f7a1602.js",revision:null},{url:"assets/enable-mroot.html.448d930b.js",revision:null},{url:"assets/enable-mroot.html.4b78fd7a.js",revision:null},{url:"assets/enable-mroot.html.4c87445a.js",revision:null},{url:"assets/enable-mroot.html.63df0c2d.js",revision:null},{url:"assets/enable-mroot.html.688e0dbb.js",revision:null},{url:"assets/enable-mroot.html.696c2f12.js",revision:null},{url:"assets/enable-mroot.html.6a9cfb64.js",revision:null},{url:"assets/enable-mroot.html.9850be67.js",revision:null},{url:"assets/enable-mroot.html.9e4e13de.js",revision:null},{url:"assets/enable-mroot.html.a786c0d4.js",revision:null},{url:"assets/enable-mroot.html.c43c35dd.js",revision:null},{url:"assets/enable-mroot.html.f5fc9238.js",revision:null},{url:"assets/enable-mroot.html.f860123e.js",revision:null},{url:"assets/how-to-use.html.060c4e01.js",revision:null},{url:"assets/how-to-use.html.1429b441.js",revision:null},{url:"assets/how-to-use.html.2b42e8ca.js",revision:null},{url:"assets/how-to-use.html.3a635fb4.js",revision:null},{url:"assets/how-to-use.html.3c60ec43.js",revision:null},{url:"assets/how-to-use.html.495aedc0.js",revision:null},{url:"assets/how-to-use.html.599996f5.js",revision:null},{url:"assets/how-to-use.html.6b389462.js",revision:null},{url:"assets/how-to-use.html.7dc6cc5c.js",revision:null},{url:"assets/how-to-use.html.85803132.js",revision:null},{url:"assets/how-to-use.html.9405bd94.js",revision:null},{url:"assets/how-to-use.html.bbc2957d.js",revision:null},{url:"assets/how-to-use.html.bd34ca9e.js",revision:null},{url:"assets/how-to-use.html.c28399bd.js",revision:null},{url:"assets/how-to-use.html.f5360b58.js",revision:null},{url:"assets/how-to-use.html.f81db065.js",revision:null},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.01c8ec4d.js",revision:null},{url:"assets/index.html.01fc37d4.js",revision:null},{url:"assets/index.html.08437ef1.js",revision:null},{url:"assets/index.html.091d62fd.js",revision:null},{url:"assets/index.html.099e54e4.js",revision:null},{url:"assets/index.html.09dec8fa.js",revision:null},{url:"assets/index.html.10b14596.js",revision:null},{url:"assets/index.html.113d023f.js",revision:null},{url:"assets/index.html.1254548b.js",revision:null},{url:"assets/index.html.12587c55.js",revision:null},{url:"assets/index.html.1386e8d4.js",revision:null},{url:"assets/index.html.1465dc1e.js",revision:null},{url:"assets/index.html.1652eeb4.js",revision:null},{url:"assets/index.html.18d26264.js",revision:null},{url:"assets/index.html.1909b674.js",revision:null},{url:"assets/index.html.19580cc0.js",revision:null},{url:"assets/index.html.1aacb4f3.js",revision:null},{url:"assets/index.html.1b1f9c59.js",revision:null},{url:"assets/index.html.20fa7d70.js",revision:null},{url:"assets/index.html.22aa2c3f.js",revision:null},{url:"assets/index.html.24966890.js",revision:null},{url:"assets/index.html.263f26d1.js",revision:null},{url:"assets/index.html.27d3989a.js",revision:null},{url:"assets/index.html.29c2c730.js",revision:null},{url:"assets/index.html.2b90361c.js",revision:null},{url:"assets/index.html.2f6d6036.js",revision:null},{url:"assets/index.html.308dd390.js",revision:null},{url:"assets/index.html.3af537a6.js",revision:null},{url:"assets/index.html.3c867424.js",revision:null},{url:"assets/index.html.3d7c0e7b.js",revision:null},{url:"assets/index.html.3ec41eec.js",revision:null},{url:"assets/index.html.408e1c75.js",revision:null},{url:"assets/index.html.40902f54.js",revision:null},{url:"assets/index.html.42564962.js",revision:null},{url:"assets/index.html.4273cff0.js",revision:null},{url:"assets/index.html.42cbfb3a.js",revision:null},{url:"assets/index.html.498d8c6a.js",revision:null},{url:"assets/index.html.531c3ef6.js",revision:null},{url:"assets/index.html.536843f5.js",revision:null},{url:"assets/index.html.57cffb6b.js",revision:null},{url:"assets/index.html.5afca2c8.js",revision:null},{url:"assets/index.html.5d6a2182.js",revision:null},{url:"assets/index.html.5d8fbe26.js",revision:null},{url:"assets/index.html.5dfe59d1.js",revision:null},{url:"assets/index.html.5f09cc81.js",revision:null},{url:"assets/index.html.60b7e08d.js",revision:null},{url:"assets/index.html.60cd0bd4.js",revision:null},{url:"assets/index.html.64f7b24f.js",revision:null},{url:"assets/index.html.68fdb5c0.js",revision:null},{url:"assets/index.html.6bb1e00d.js",revision:null},{url:"assets/index.html.6d8e99b5.js",revision:null},{url:"assets/index.html.6da52a39.js",revision:null},{url:"assets/index.html.709efa2c.js",revision:null},{url:"assets/index.html.7106db75.js",revision:null},{url:"assets/index.html.7249a2ae.js",revision:null},{url:"assets/index.html.7424bb4d.js",revision:null},{url:"assets/index.html.756443c9.js",revision:null},{url:"assets/index.html.788d93f2.js",revision:null},{url:"assets/index.html.7bbf03d5.js",revision:null},{url:"assets/index.html.7c39ecea.js",revision:null},{url:"assets/index.html.80749aba.js",revision:null},{url:"assets/index.html.83d33902.js",revision:null},{url:"assets/index.html.86f44b2b.js",revision:null},{url:"assets/index.html.8755e915.js",revision:null},{url:"assets/index.html.8c2e6e90.js",revision:null},{url:"assets/index.html.8eb778a6.js",revision:null},{url:"assets/index.html.90df8043.js",revision:null},{url:"assets/index.html.95c611a5.js",revision:null},{url:"assets/index.html.97a55dd3.js",revision:null},{url:"assets/index.html.98e48975.js",revision:null},{url:"assets/index.html.9a529a9a.js",revision:null},{url:"assets/index.html.9b98db81.js",revision:null},{url:"assets/index.html.a064e946.js",revision:null},{url:"assets/index.html.a2348f96.js",revision:null},{url:"assets/index.html.a365bf8a.js",revision:null},{url:"assets/index.html.a51a7267.js",revision:null},{url:"assets/index.html.a5778582.js",revision:null},{url:"assets/index.html.a5eb3352.js",revision:null},{url:"assets/index.html.a97bda99.js",revision:null},{url:"assets/index.html.ab1f718b.js",revision:null},{url:"assets/index.html.ac7b1d03.js",revision:null},{url:"assets/index.html.ae21abab.js",revision:null},{url:"assets/index.html.afa2f7f5.js",revision:null},{url:"assets/index.html.b476d5af.js",revision:null},{url:"assets/index.html.b4fafba9.js",revision:null},{url:"assets/index.html.b53dcf91.js",revision:null},{url:"assets/index.html.b76e8605.js",revision:null},{url:"assets/index.html.bf211307.js",revision:null},{url:"assets/index.html.c2c4a18a.js",revision:null},{url:"assets/index.html.c785e389.js",revision:null},{url:"assets/index.html.caa06575.js",revision:null},{url:"assets/index.html.cc897982.js",revision:null},{url:"assets/index.html.cd0532be.js",revision:null},{url:"assets/index.html.d47ac391.js",revision:null},{url:"assets/index.html.d98e419b.js",revision:null},{url:"assets/index.html.da83a867.js",revision:null},{url:"assets/index.html.dc08fdbf.js",revision:null},{url:"assets/index.html.dda33ed4.js",revision:null},{url:"assets/index.html.de9c1494.js",revision:null},{url:"assets/index.html.e0cc851f.js",revision:null},{url:"assets/index.html.e4740674.js",revision:null},{url:"assets/index.html.e7b0f951.js",revision:null},{url:"assets/index.html.e88df939.js",revision:null},{url:"assets/index.html.e933bf52.js",revision:null},{url:"assets/index.html.e9620fa6.js",revision:null},{url:"assets/index.html.eb6723db.js",revision:null},{url:"assets/index.html.ee964372.js",revision:null},{url:"assets/index.html.f30b0413.js",revision:null},{url:"assets/index.html.f66b684c.js",revision:null},{url:"assets/index.html.f86ddea3.js",revision:null},{url:"assets/index.html.fa4869e8.js",revision:null},{url:"assets/index.html.fdee14f3.js",revision:null},{url:"assets/index.html.fe8f27ba.js",revision:null},{url:"assets/index.html.feebcd56.js",revision:null},{url:"assets/Layout.47907700.js",revision:null},{url:"assets/mroot.html.1516686e.js",revision:null},{url:"assets/mroot.html.15e2f86b.js",revision:null},{url:"assets/mroot.html.2717913b.js",revision:null},{url:"assets/mroot.html.28da1996.js",revision:null},{url:"assets/mroot.html.3b966128.js",revision:null},{url:"assets/mroot.html.7632e27f.js",revision:null},{url:"assets/mroot.html.77a4d7e9.js",revision:null},{url:"assets/mroot.html.80703858.js",revision:null},{url:"assets/mroot.html.84c37bcd.js",revision:null},{url:"assets/mroot.html.926f81ab.js",revision:null},{url:"assets/mroot.html.9b148a75.js",revision:null},{url:"assets/mroot.html.a80f7500.js",revision:null},{url:"assets/mroot.html.b1f275e0.js",revision:null},{url:"assets/mroot.html.b3cb0832.js",revision:null},{url:"assets/mroot.html.c2f11791.js",revision:null},{url:"assets/mroot.html.c609bbbe.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/provider.html.231be9cb.js",revision:null},{url:"assets/provider.html.7baea938.js",revision:null},{url:"assets/provider.html.7be5c77d.js",revision:null},{url:"assets/provider.html.8247e296.js",revision:null},{url:"assets/provider.html.9f08d623.js",revision:null},{url:"assets/provider.html.a16ed854.js",revision:null},{url:"assets/provider.html.a69b72bb.js",revision:null},{url:"assets/provider.html.a8549c47.js",revision:null},{url:"assets/provider.html.b5b677d3.js",revision:null},{url:"assets/provider.html.bc6ce690.js",revision:null},{url:"assets/provider.html.be7cecc6.js",revision:null},{url:"assets/provider.html.bf86200e.js",revision:null},{url:"assets/provider.html.c25debc0.js",revision:null},{url:"assets/provider.html.d012fea6.js",revision:null},{url:"assets/provider.html.d1632efe.js",revision:null},{url:"assets/provider.html.e798cdea.js",revision:null},{url:"assets/schedules.html.0a962a7a.js",revision:null},{url:"assets/schedules.html.0d20b62c.js",revision:null},{url:"assets/schedules.html.17641031.js",revision:null},{url:"assets/schedules.html.1f29bb72.js",revision:null},{url:"assets/schedules.html.2321a9d7.js",revision:null},{url:"assets/schedules.html.25a6041b.js",revision:null},{url:"assets/schedules.html.261a22ef.js",revision:null},{url:"assets/schedules.html.2c42eb1c.js",revision:null},{url:"assets/schedules.html.320b2e12.js",revision:null},{url:"assets/schedules.html.349402cc.js",revision:null},{url:"assets/schedules.html.41b6fabe.js",revision:null},{url:"assets/schedules.html.4262e005.js",revision:null},{url:"assets/schedules.html.4ada83b7.js",revision:null},{url:"assets/schedules.html.4efb9991.js",revision:null},{url:"assets/schedules.html.4fd73a57.js",revision:null},{url:"assets/schedules.html.528916ce.js",revision:null},{url:"assets/schedules.html.53936f04.js",revision:null},{url:"assets/schedules.html.66c8a834.js",revision:null},{url:"assets/schedules.html.818a30e5.js",revision:null},{url:"assets/schedules.html.83a03d73.js",revision:null},{url:"assets/schedules.html.9cc559a7.js",revision:null},{url:"assets/schedules.html.9f8fef49.js",revision:null},{url:"assets/schedules.html.b73cc157.js",revision:null},{url:"assets/schedules.html.c42ca0a0.js",revision:null},{url:"assets/schedules.html.c955c216.js",revision:null},{url:"assets/schedules.html.cfb2714c.js",revision:null},{url:"assets/schedules.html.da6a0581.js",revision:null},{url:"assets/schedules.html.e62f4623.js",revision:null},{url:"assets/schedules.html.eaacd189.js",revision:null},{url:"assets/schedules.html.f2c55440.js",revision:null},{url:"assets/schedules.html.f801b2a8.js",revision:null},{url:"assets/schedules.html.fb7c6926.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/start-activity.html.32636017.js",revision:null},{url:"assets/start-activity.html.412b0d8b.js",revision:null},{url:"assets/start-activity.html.4856eb33.js",revision:null},{url:"assets/start-activity.html.66a9c19b.js",revision:null},{url:"assets/start-activity.html.698fe58a.js",revision:null},{url:"assets/start-activity.html.85a0c8cc.js",revision:null},{url:"assets/start-activity.html.877d43f9.js",revision:null},{url:"assets/start-activity.html.9306be6d.js",revision:null},{url:"assets/start-activity.html.a13847be.js",revision:null},{url:"assets/start-activity.html.aa7e3b14.js",revision:null},{url:"assets/start-activity.html.b968fb00.js",revision:null},{url:"assets/start-activity.html.bfa24e4c.js",revision:null},{url:"assets/start-activity.html.c82b1439.js",revision:null},{url:"assets/start-activity.html.dfd891f8.js",revision:null},{url:"assets/start-activity.html.eaa40d6d.js",revision:null},{url:"assets/start-activity.html.fabf2daa.js",revision:null},{url:"assets/style.c63797f2.css",revision:null},{url:"assets/uri.html.040d1b23.js",revision:null},{url:"assets/uri.html.0b1e2d0f.js",revision:null},{url:"assets/uri.html.1abc53b0.js",revision:null},{url:"assets/uri.html.22a1efe9.js",revision:null},{url:"assets/uri.html.3214f3c2.js",revision:null},{url:"assets/uri.html.34295859.js",revision:null},{url:"assets/uri.html.4f68753d.js",revision:null},{url:"assets/uri.html.592de997.js",revision:null},{url:"assets/uri.html.6d637f99.js",revision:null},{url:"assets/uri.html.76121bab.js",revision:null},{url:"assets/uri.html.7cb9a3b0.js",revision:null},{url:"assets/uri.html.9ca177fb.js",revision:null},{url:"assets/uri.html.a0b54f48.js",revision:null},{url:"assets/uri.html.ccff2306.js",revision:null},{url:"assets/uri.html.def8cab8.js",revision:null},{url:"assets/uri.html.f7be0b58.js",revision:null},{url:"assets/warning.html.09b9768a.js",revision:null},{url:"assets/warning.html.0f4b9daf.js",revision:null},{url:"assets/warning.html.19f54dc7.js",revision:null},{url:"assets/warning.html.47de3678.js",revision:null},{url:"assets/warning.html.4ab049b7.js",revision:null},{url:"assets/warning.html.51056034.js",revision:null},{url:"assets/warning.html.68d34140.js",revision:null},{url:"assets/warning.html.7e75ec13.js",revision:null},{url:"assets/warning.html.85c00d11.js",revision:null},{url:"assets/warning.html.95084da4.js",revision:null},{url:"assets/warning.html.9d68747e.js",revision:null},{url:"assets/warning.html.ba27f756.js",revision:null},{url:"assets/warning.html.d1232986.js",revision:null},{url:"assets/warning.html.e15f32e7.js",revision:null},{url:"assets/warning.html.e33e48a4.js",revision:null},{url:"assets/warning.html.f1db9481.js",revision:null},{url:"en-US/about/contactUs.html",revision:"61633264866b92d19a5a914beccaf293"},{url:"en-US/api/index.html",revision:"239e4c0b7decd178eba2165f6e77bf2c"},{url:"en-US/api/provider.html",revision:"dad358a6f428fe696638d4694bd0b0c8"},{url:"en-US/api/start-activity.html",revision:"c4c135ddbd6476c45bfb954ca52101ef"},{url:"en-US/api/uri.html",revision:"752c544bcd56d8bc25fe23a4d454ca64"},{url:"en-US/changelog/index.html",revision:"f413f014e6325a30069878f66c45af1d"},{url:"en-US/download/index.html",revision:"7475298d32f8ce03cbc5012271003159"},{url:"en-US/faq/daily.html",revision:"9a151d6e309fb681a7bfe4c749df3af8"},{url:"en-US/faq/index.html",revision:"84b2ff20db0a564897a4c9e897deac1d"},{url:"en-US/faq/mroot.html",revision:"fcb57bfb379223660b142bd26ffd361e"},{url:"en-US/faq/schedules.html",revision:"a582a080724ff5c23b15bab1b222759d"},{url:"en-US/guide/enable-mroot.html",revision:"74166c223f401e6fdacdcada1685d8cf"},{url:"en-US/guide/how-to-use.html",revision:"fed47f9528b8fc4620996b0c63d5ce01"},{url:"en-US/guide/index.html",revision:"08d16691ce8ec8ce95eefeffe2543298"},{url:"en-US/guide/schedules.html",revision:"980e24b4304122adcf44f025c18271fc"},{url:"en-US/guide/warning.html",revision:"3a7f808af8abfefe6ea36d4028ac90bf"},{url:"en-US/index.html",revision:"0c46b23c473bb794473246424cf0df13"},{url:"en-US/thanks/index.html",revision:"9c3b48e2ff82fa74f2fde20d550f7806"},{url:"index.html",revision:"992351a9d1fe8239cbb770a2d7c2523b"},{url:"pt-BR/about/contactUs.html",revision:"06c9216497bd254555750eb7deef29e4"},{url:"pt-BR/api/index.html",revision:"1e516c1c2b1579248a5ac2c55b9e4492"},{url:"pt-BR/api/provider.html",revision:"20316a9bbf5c8c9abd23b209290b96b3"},{url:"pt-BR/api/start-activity.html",revision:"2d9244e01967ac4426ec58e4ea3e4888"},{url:"pt-BR/api/uri.html",revision:"813c41d559847520e5144f8420818cdc"},{url:"pt-BR/changelog/index.html",revision:"9332fda40af6941decf14a7168b1d319"},{url:"pt-BR/download/index.html",revision:"b00dbe934162f8bd7d05455af44a4735"},{url:"pt-BR/faq/daily.html",revision:"02cb1ce3c5d8a906b29ce12f759b7c22"},{url:"pt-BR/faq/index.html",revision:"38a0c9f4c3d3b89dc3f99e7fb21b3420"},{url:"pt-BR/faq/mroot.html",revision:"34365d4bc71cfdc9b37eca8f7da2bfe8"},{url:"pt-BR/faq/schedules.html",revision:"f160740e98854ebfb1172992312fa981"},{url:"pt-BR/guide/enable-mroot.html",revision:"10fd5990e159a0db87b4cec9461d6545"},{url:"pt-BR/guide/how-to-use.html",revision:"83f58c1f7ff4872e94094af39fdcfcb2"},{url:"pt-BR/guide/index.html",revision:"a4a9d893731e28cccb6f62ef2b0d45a6"},{url:"pt-BR/guide/schedules.html",revision:"abc7ba36ae0dcdc25550027c51412974"},{url:"pt-BR/guide/warning.html",revision:"09a020a88cba7bd8a4128b242e16d6d3"},{url:"pt-BR/index.html",revision:"696af3bad92bc5ba55603af9a766e5ec"},{url:"pt-BR/thanks/index.html",revision:"4e7c4ab3038a9554b74add6dcf672cae"},{url:"ru-RU/about/contactUs.html",revision:"1ea41fa52c658c8a71302c632fc470ce"},{url:"ru-RU/api/index.html",revision:"0cf9adf2c6d62c18386ff9acfa7dacd8"},{url:"ru-RU/api/provider.html",revision:"02ff75486386f851e326db27a06a401a"},{url:"ru-RU/api/start-activity.html",revision:"306c4f46721a8780dfb7f47ccbd5d198"},{url:"ru-RU/api/uri.html",revision:"d5dd255ceb731ba0457c03e2ea4e7091"},{url:"ru-RU/changelog/index.html",revision:"b7a48a4c21aa56d2437c039ff58739c2"},{url:"ru-RU/download/index.html",revision:"da4b01b29fc098234688c0f28e23eec4"},{url:"ru-RU/faq/daily.html",revision:"f2339ec51051e871ba41cf40b5ce955c"},{url:"ru-RU/faq/index.html",revision:"9eb17d17c82c3f63a432e9e6db29056e"},{url:"ru-RU/faq/mroot.html",revision:"bad9b497abce53d3f238bf59506a3c5a"},{url:"ru-RU/faq/schedules.html",revision:"0b33d29bcb24ebc93dbd511c4439cd07"},{url:"ru-RU/guide/enable-mroot.html",revision:"b01aff28cd9667866b97b6f8e1da5d69"},{url:"ru-RU/guide/how-to-use.html",revision:"91f32206cd3c1b8c071a12fef4e6335b"},{url:"ru-RU/guide/index.html",revision:"4d056f20bcc7d66ee43f70914e0b16f3"},{url:"ru-RU/guide/schedules.html",revision:"7cd28ab338188b6ab08de8ca465cd573"},{url:"ru-RU/guide/warning.html",revision:"6c3034222781fd4d55998eef575c9281"},{url:"ru-RU/index.html",revision:"67b21d443817547bc0003e490b41a52b"},{url:"ru-RU/thanks/index.html",revision:"5b5d273e00091b6fb8849f72048ddfd0"},{url:"ru-UA/about/contactUs.html",revision:"70414656362fcb613cf627ee294a37ff"},{url:"ru-UA/api/index.html",revision:"0c4e417f05d7e1eccae60cc75b4ecaff"},{url:"ru-UA/api/provider.html",revision:"5692221d32efd8feaa031459a159d3cb"},{url:"ru-UA/api/start-activity.html",revision:"e1bc3891cdb8998f1046cf654dcb4222"},{url:"ru-UA/api/uri.html",revision:"e720f8ab5d59b62797013460b6d98ce9"},{url:"ru-UA/changelog/index.html",revision:"9e7fcd49fde2b093a1961fee4a1e4c37"},{url:"ru-UA/download/index.html",revision:"bf102b6f15cd7a8acc1fed26540a8078"},{url:"ru-UA/faq/daily.html",revision:"96b7332ac5f1d908f9744fee17fc5884"},{url:"ru-UA/faq/index.html",revision:"095c3141a8a3abf707f5e391dea10e62"},{url:"ru-UA/faq/mroot.html",revision:"d3430599b8ff7ecfee94a4160672af6f"},{url:"ru-UA/faq/schedules.html",revision:"21e94daaabe61f8e5f93a5ca3240ca29"},{url:"ru-UA/guide/enable-mroot.html",revision:"6b0c27cddff4830160be1a0b30029ea9"},{url:"ru-UA/guide/how-to-use.html",revision:"89334fa45d8d800d5112063f82b7016e"},{url:"ru-UA/guide/index.html",revision:"b0816dd206bb711032d3069cdcd9e7cb"},{url:"ru-UA/guide/schedules.html",revision:"efae0f5ab2b422dee4e211806b62435f"},{url:"ru-UA/guide/warning.html",revision:"3d9acb9c7e87f5ff784e6f728a64d10f"},{url:"ru-UA/index.html",revision:"7d1a427199e6a9d0db31394cde785bbd"},{url:"ru-UA/thanks/index.html",revision:"d62b5e6514595ec243bbf6fc797bde61"},{url:"tr-TR/about/contactUs.html",revision:"ef8b0f60ce37863bf0516d5b6d5d3804"},{url:"tr-TR/api/index.html",revision:"62853ad1730c4fb020a080d0aa070dc7"},{url:"tr-TR/api/provider.html",revision:"44ad9da80921c44a33828c64c71c1649"},{url:"tr-TR/api/start-activity.html",revision:"81dbeff6d35d303831c420386ec5a2e1"},{url:"tr-TR/api/uri.html",revision:"d30f11f10fb3f143d1b958e24f22d7b7"},{url:"tr-TR/changelog/index.html",revision:"3860e0e335b6b81ce3393c1f722005f7"},{url:"tr-TR/download/index.html",revision:"f54bf0b7ac140f4b8cfc4d74dca68cb2"},{url:"tr-TR/faq/daily.html",revision:"e2de1397097a08b38e8921492ccd01f2"},{url:"tr-TR/faq/index.html",revision:"e2f29c76e797f28bb79f37b49239489d"},{url:"tr-TR/faq/mroot.html",revision:"0e62e68f591dacdbb8a0ef1991b759a4"},{url:"tr-TR/faq/schedules.html",revision:"3742011d28cfeab6450162991f03d7d2"},{url:"tr-TR/guide/enable-mroot.html",revision:"115b410400dfcfef7f41d254fff5eaa6"},{url:"tr-TR/guide/how-to-use.html",revision:"8d62c74ec85b8765c2fb50577f6046ea"},{url:"tr-TR/guide/index.html",revision:"ef93631e1ab4a33bff7fb6ea18e88485"},{url:"tr-TR/guide/schedules.html",revision:"70ec78cbf7dd44f08445d19061bee646"},{url:"tr-TR/guide/warning.html",revision:"b54e83295aae1ccbc07d09c3bd25850b"},{url:"tr-TR/index.html",revision:"44a8ca5c021863dea2c45891e11d37e5"},{url:"tr-TR/thanks/index.html",revision:"81c4602ed05db81a826af08f5680eecb"},{url:"uk-UA/about/contactUs.html",revision:"e37e1267c2c9870c4d79b22ca8f792e2"},{url:"uk-UA/api/index.html",revision:"00308733edc4b130ffed0cd40cb61556"},{url:"uk-UA/api/provider.html",revision:"050af982f0e6b9e2204ceba5b4e548e6"},{url:"uk-UA/api/start-activity.html",revision:"45d17f3fd511f50b44550edbb3d780dd"},{url:"uk-UA/api/uri.html",revision:"0a64b9871ca812127ecc7373a16830dd"},{url:"uk-UA/changelog/index.html",revision:"c073043290adbf97b748467f2646100f"},{url:"uk-UA/download/index.html",revision:"231643e02a69663e0cde2005d3e81462"},{url:"uk-UA/faq/daily.html",revision:"c21e18ac7d87531179a792d28d3e0fd6"},{url:"uk-UA/faq/index.html",revision:"ec8c9a8c1aac40d0d2cbba97bfc790b1"},{url:"uk-UA/faq/mroot.html",revision:"bb0b988d3c714bd0d9f9bb0d2607d790"},{url:"uk-UA/faq/schedules.html",revision:"7564fcf12ec3bd2084cd748bee44802f"},{url:"uk-UA/guide/enable-mroot.html",revision:"453173759aa2527d1c02ad7f3924ac55"},{url:"uk-UA/guide/how-to-use.html",revision:"03a8c81a79193e6188c82a3eed5d0313"},{url:"uk-UA/guide/index.html",revision:"e1164d7be0f04db85d995b603eac1061"},{url:"uk-UA/guide/schedules.html",revision:"b046c3835ea4ece8dc4a29c037be885c"},{url:"uk-UA/guide/warning.html",revision:"c0a6ace07982ac037f61a8271352f226"},{url:"uk-UA/index.html",revision:"56097f46e898243e85551de19b367e70"},{url:"uk-UA/thanks/index.html",revision:"56a8e37fc2ee62e4a49c7f2f6e39804c"},{url:"zh-CN/about/contactUs.html",revision:"17816856ec7e51547b8ed7471bccd182"},{url:"zh-CN/api/index.html",revision:"c282a7f30259f854a191207d694fece4"},{url:"zh-CN/api/provider.html",revision:"2362dca2519e9fbaed7a24dc8b32d931"},{url:"zh-CN/api/start-activity.html",revision:"a751dba97f09cc5d7d38ab9c481f85fa"},{url:"zh-CN/api/uri.html",revision:"8203600dad325c3df582e9732d23442f"},{url:"zh-CN/changelog/index.html",revision:"47e25c00d7359800dd6eb70cbef70e8c"},{url:"zh-CN/download/index.html",revision:"69790885df59c19ecee4e40fd19b4e28"},{url:"zh-CN/faq/daily.html",revision:"4a556da284f10e37391cab5d7ff58e21"},{url:"zh-CN/faq/index.html",revision:"37583f71eb11f55f3699e36b7e4bcca8"},{url:"zh-CN/faq/mroot.html",revision:"966676961053d0f05d063249cac8677b"},{url:"zh-CN/faq/schedules.html",revision:"318a902a0105d0f816bc06e7610ad7d5"},{url:"zh-CN/guide/enable-mroot.html",revision:"61347f36f346f18577073e85d933f32b"},{url:"zh-CN/guide/how-to-use.html",revision:"4fcf30dc9decc8309145111d535518ac"},{url:"zh-CN/guide/index.html",revision:"f8ce00a83de4fc7df1f5e292f7f66a85"},{url:"zh-CN/guide/schedules.html",revision:"1e6afb8239c85b383a183ecb3df3527c"},{url:"zh-CN/guide/warning.html",revision:"a1f28cd483441bdc655893d09c5e5eeb"},{url:"zh-CN/index.html",revision:"d2b230af2780a4916d0b6aa1df72556a"},{url:"zh-CN/thanks/index.html",revision:"004d68d4c82065bbc26b2bbb0f88d57d"},{url:"zh-TW/about/contactUs.html",revision:"c77ebba566a5c22d7970e0ae503e0202"},{url:"zh-TW/api/index.html",revision:"e92316e9c291958e88c7dce4996d90b6"},{url:"zh-TW/api/provider.html",revision:"566466b9bbffad1d15eae94a8dad7c07"},{url:"zh-TW/api/start-activity.html",revision:"3a63274c6a33685b690718e3d3401952"},{url:"zh-TW/api/uri.html",revision:"0f02e78499acf5ec48bea275a6ed0c63"},{url:"zh-TW/changelog/index.html",revision:"57220b70721687688d187290234dcb4a"},{url:"zh-TW/download/index.html",revision:"243ad648893d4f62dda1f6c5cdb8e8c2"},{url:"zh-TW/faq/daily.html",revision:"fb7f1e82d51f99efd96de97aa19e20eb"},{url:"zh-TW/faq/index.html",revision:"262c5315495308081cff59c597d702b9"},{url:"zh-TW/faq/mroot.html",revision:"87a9c489b1119c4b559d2d22260b1705"},{url:"zh-TW/faq/schedules.html",revision:"a168832088a37c60038cada843da3567"},{url:"zh-TW/guide/enable-mroot.html",revision:"be835a1a464e69e5097310f93c94d453"},{url:"zh-TW/guide/how-to-use.html",revision:"274e9da2496070a7478d72a29113c4ea"},{url:"zh-TW/guide/index.html",revision:"27af5d0a3e7d28d6662adbad1f823e46"},{url:"zh-TW/guide/schedules.html",revision:"bd7b78a8c76af2c6c6aa9995e2110582"},{url:"zh-TW/guide/warning.html",revision:"c115ce26f5cae840934bd82092ed24d0"},{url:"zh-TW/index.html",revision:"00c93a644a12ee5ea1d045374f179ed3"},{url:"zh-TW/thanks/index.html",revision:"be9260b5ad26a05a0e5d583c072dd8bc"}],{})}));
