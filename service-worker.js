if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>l(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"73cda425eb17d75a0e31ab2cfcad00f5"},{url:"assets/20180207104242.696221d5.js",revision:null},{url:"assets/404.86c76da1.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.9be3b606.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contactUs.html.1aa64b73.js",revision:null},{url:"assets/contactUs.html.572aaa7d.js",revision:null},{url:"assets/contactUs.html.7f6ffcec.js",revision:null},{url:"assets/contactUs.html.e06b2861.js",revision:null},{url:"assets/daily.html.112ab529.js",revision:null},{url:"assets/daily.html.3da4a252.js",revision:null},{url:"assets/daily.html.4c8cb666.js",revision:null},{url:"assets/daily.html.dcfb6c77.js",revision:null},{url:"assets/enable-mroot.html.3e93a6da.js",revision:null},{url:"assets/enable-mroot.html.9e4b0023.js",revision:null},{url:"assets/enable-mroot.html.c093197f.js",revision:null},{url:"assets/enable-mroot.html.cd34e1b1.js",revision:null},{url:"assets/how-to-use.html.9dd2e4ae.js",revision:null},{url:"assets/how-to-use.html.aada4903.js",revision:null},{url:"assets/how-to-use.html.df5d77cd.js",revision:null},{url:"assets/how-to-use.html.f4943561.js",revision:null},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0e9f4626.js",revision:null},{url:"assets/index.html.15972768.js",revision:null},{url:"assets/index.html.249be25f.js",revision:null},{url:"assets/index.html.29d7e873.js",revision:null},{url:"assets/index.html.2eb3167c.js",revision:null},{url:"assets/index.html.30083576.js",revision:null},{url:"assets/index.html.39b878f5.js",revision:null},{url:"assets/index.html.3ada51ad.js",revision:null},{url:"assets/index.html.40902f54.js",revision:null},{url:"assets/index.html.4b696c98.js",revision:null},{url:"assets/index.html.54298337.js",revision:null},{url:"assets/index.html.55780718.js",revision:null},{url:"assets/index.html.6953bbdd.js",revision:null},{url:"assets/index.html.6c9282f3.js",revision:null},{url:"assets/index.html.75cf91b7.js",revision:null},{url:"assets/index.html.7707a31c.js",revision:null},{url:"assets/index.html.9027b99d.js",revision:null},{url:"assets/index.html.93547c75.js",revision:null},{url:"assets/index.html.93d1322e.js",revision:null},{url:"assets/index.html.a8cbdfb9.js",revision:null},{url:"assets/index.html.ad219d4a.js",revision:null},{url:"assets/index.html.b4908a4f.js",revision:null},{url:"assets/index.html.b92ddcc2.js",revision:null},{url:"assets/index.html.bf1e3f47.js",revision:null},{url:"assets/index.html.e755629e.js",revision:null},{url:"assets/index.html.eb4d98f4.js",revision:null},{url:"assets/index.html.f10513da.js",revision:null},{url:"assets/index.html.f8e44342.js",revision:null},{url:"assets/index.html.fa89515a.js",revision:null},{url:"assets/index.html.feebcd56.js",revision:null},{url:"assets/Layout.2d91072a.js",revision:null},{url:"assets/mroot.html.059678b2.js",revision:null},{url:"assets/mroot.html.0bd8d502.js",revision:null},{url:"assets/mroot.html.c6ec7259.js",revision:null},{url:"assets/mroot.html.e973fb40.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/provider.html.0349ba5e.js",revision:null},{url:"assets/provider.html.0c890a4a.js",revision:null},{url:"assets/provider.html.ba50b265.js",revision:null},{url:"assets/provider.html.f6106d15.js",revision:null},{url:"assets/schedules.html.05739690.js",revision:null},{url:"assets/schedules.html.09b3ec17.js",revision:null},{url:"assets/schedules.html.30b32c6a.js",revision:null},{url:"assets/schedules.html.4a14ed52.js",revision:null},{url:"assets/schedules.html.61bac54a.js",revision:null},{url:"assets/schedules.html.7380f4be.js",revision:null},{url:"assets/schedules.html.9ed9f184.js",revision:null},{url:"assets/schedules.html.f116dd8e.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/start-activity.html.1a922c72.js",revision:null},{url:"assets/start-activity.html.331eafd5.js",revision:null},{url:"assets/start-activity.html.648f24bb.js",revision:null},{url:"assets/start-activity.html.7068f656.js",revision:null},{url:"assets/style.0761390d.css",revision:null},{url:"assets/uri.html.1b0d7f4e.js",revision:null},{url:"assets/uri.html.5d303ad7.js",revision:null},{url:"assets/uri.html.b7244ee5.js",revision:null},{url:"assets/uri.html.d3821596.js",revision:null},{url:"assets/warning.html.105a45d7.js",revision:null},{url:"assets/warning.html.4a2f29d5.js",revision:null},{url:"assets/warning.html.83bddd3a.js",revision:null},{url:"assets/warning.html.98b4adab.js",revision:null},{url:"en-US/about/contactUs.html",revision:"1bfdd65441e163113dbea4ced4581ad9"},{url:"en-US/api/index.html",revision:"6b20c9f7b7a17afe7f081af5456f25f0"},{url:"en-US/api/provider.html",revision:"f2b3cd8403354c0f83cae080145f001a"},{url:"en-US/api/start-activity.html",revision:"259ceb4d80aed191944e28778705e2e8"},{url:"en-US/api/uri.html",revision:"41c0df4969ffff4d17f0f46096b25f9e"},{url:"en-US/changelog/index.html",revision:"05d836cb82e9e5566c3317e89b5b027a"},{url:"en-US/download/index.html",revision:"e74daa07645be2e03b9456f677b4319f"},{url:"en-US/faq/daily.html",revision:"61220eae05bd9d92d30cfc6d72cb56fd"},{url:"en-US/faq/index.html",revision:"43f3ff461d13e62ff0490703637c8fec"},{url:"en-US/faq/mroot.html",revision:"f7d152ef6ff2aabf2e5fb2fec1e0a10f"},{url:"en-US/faq/schedules.html",revision:"76888837ef62e43caad185300c4f6d7b"},{url:"en-US/guide/enable-mroot.html",revision:"240ac7a4be6093af8de922dbda1102c7"},{url:"en-US/guide/how-to-use.html",revision:"eb732d47c6cd2f5d19132d8a058754e0"},{url:"en-US/guide/index.html",revision:"a206cd82cc85f92946b8bcce9f6d67f0"},{url:"en-US/guide/schedules.html",revision:"78366a6cad198b8f8ec67b0b5d633b04"},{url:"en-US/guide/warning.html",revision:"b3a71eba86d6f333f0ab789fd84e6a52"},{url:"en-US/index.html",revision:"f300e991123bff3dbea0f07425d0f03e"},{url:"en-US/thanks/index.html",revision:"add96de9edff9266b1863e6732022e12"},{url:"index.html",revision:"37754a9f9c147789d4c33b89121a85ca"},{url:"zh-CN/about/contactUs.html",revision:"5d96f0819079792219fdc3769378a27f"},{url:"zh-CN/api/index.html",revision:"5dbf73379ae57efcf30a43562bef5119"},{url:"zh-CN/api/provider.html",revision:"01ce58d9e627d9afdc2f7c4e99f087ba"},{url:"zh-CN/api/start-activity.html",revision:"d7314c7b121c64f84c62e6922ccd6775"},{url:"zh-CN/api/uri.html",revision:"16f4178af7fbfd5ab6aaa503195d40a6"},{url:"zh-CN/changelog/index.html",revision:"a3f44d1ce1c7248d170ffa457ba97373"},{url:"zh-CN/download/index.html",revision:"a1696a1acf0f10e7c992972cee13218a"},{url:"zh-CN/faq/daily.html",revision:"135cf80aa472ee4202d8398c45764b7f"},{url:"zh-CN/faq/index.html",revision:"12f6ebf4ce7aa0462c16536cf38a37a0"},{url:"zh-CN/faq/mroot.html",revision:"00c2b5ec7995abc6900465cf21794fd7"},{url:"zh-CN/faq/schedules.html",revision:"6f530b8a9f99b6952bfd4c89195a766b"},{url:"zh-CN/guide/enable-mroot.html",revision:"9fcaf36775acd7e49dad8638831d55d7"},{url:"zh-CN/guide/how-to-use.html",revision:"fe4079b171267f302f87c864ced7e158"},{url:"zh-CN/guide/index.html",revision:"f48c94f738d2c05c9c71b74f425d8d66"},{url:"zh-CN/guide/schedules.html",revision:"7b60f3e93b5b7aa62531a09596845db9"},{url:"zh-CN/guide/warning.html",revision:"2028b3921248e38daa131e5c69afb7c8"},{url:"zh-CN/index.html",revision:"e05e88e15d48741cddb49072a7c945b4"},{url:"zh-CN/thanks/index.html",revision:"732d6e62b869d1a21b1052f74d712262"}],{})}));
