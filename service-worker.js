if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const t=s=>l(s,n),u={module:{uri:n},exports:a,require:t};e[n]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(r(...s),a)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"20582649329dc018655b94cab2ca9af4"},{url:"assets/20180207104242.696221d5.js",revision:null},{url:"assets/404.38728e6d.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.d5dec032.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contactUs.html.02262ed5.js",revision:null},{url:"assets/contactUs.html.1ced16c6.js",revision:null},{url:"assets/contactUs.html.2fbbe4ae.js",revision:null},{url:"assets/contactUs.html.338c046c.js",revision:null},{url:"assets/contactUs.html.34385ed8.js",revision:null},{url:"assets/contactUs.html.5892e5aa.js",revision:null},{url:"assets/contactUs.html.61e1851c.js",revision:null},{url:"assets/contactUs.html.719b2673.js",revision:null},{url:"assets/contactUs.html.76f6551b.js",revision:null},{url:"assets/contactUs.html.7aa963f8.js",revision:null},{url:"assets/contactUs.html.8567897d.js",revision:null},{url:"assets/contactUs.html.958943db.js",revision:null},{url:"assets/contactUs.html.d7860654.js",revision:null},{url:"assets/contactUs.html.f554be34.js",revision:null},{url:"assets/daily.html.09548313.js",revision:null},{url:"assets/daily.html.148943aa.js",revision:null},{url:"assets/daily.html.1cdeaa44.js",revision:null},{url:"assets/daily.html.225f282b.js",revision:null},{url:"assets/daily.html.3a719671.js",revision:null},{url:"assets/daily.html.40e3e8bd.js",revision:null},{url:"assets/daily.html.52ff8a22.js",revision:null},{url:"assets/daily.html.5fd1a73a.js",revision:null},{url:"assets/daily.html.6567825b.js",revision:null},{url:"assets/daily.html.7786f9d8.js",revision:null},{url:"assets/daily.html.7944c06b.js",revision:null},{url:"assets/daily.html.9efa88be.js",revision:null},{url:"assets/daily.html.a3ecabe2.js",revision:null},{url:"assets/daily.html.c6dc091f.js",revision:null},{url:"assets/enable-mroot.html.1ce2470c.js",revision:null},{url:"assets/enable-mroot.html.22cf1061.js",revision:null},{url:"assets/enable-mroot.html.28d13f52.js",revision:null},{url:"assets/enable-mroot.html.6048e222.js",revision:null},{url:"assets/enable-mroot.html.8c8863ba.js",revision:null},{url:"assets/enable-mroot.html.95d63213.js",revision:null},{url:"assets/enable-mroot.html.9bb98d0c.js",revision:null},{url:"assets/enable-mroot.html.9dadb605.js",revision:null},{url:"assets/enable-mroot.html.adc5c7fb.js",revision:null},{url:"assets/enable-mroot.html.cad1daea.js",revision:null},{url:"assets/enable-mroot.html.cadefadf.js",revision:null},{url:"assets/enable-mroot.html.cfa9ece4.js",revision:null},{url:"assets/enable-mroot.html.e3df7cf6.js",revision:null},{url:"assets/enable-mroot.html.f93861e1.js",revision:null},{url:"assets/how-to-use.html.05c90f3c.js",revision:null},{url:"assets/how-to-use.html.10ff9067.js",revision:null},{url:"assets/how-to-use.html.24763e29.js",revision:null},{url:"assets/how-to-use.html.3faa9ee8.js",revision:null},{url:"assets/how-to-use.html.5c3cb6b3.js",revision:null},{url:"assets/how-to-use.html.5d37f068.js",revision:null},{url:"assets/how-to-use.html.64ae8330.js",revision:null},{url:"assets/how-to-use.html.827f8be3.js",revision:null},{url:"assets/how-to-use.html.999da7db.js",revision:null},{url:"assets/how-to-use.html.ca8aaaa7.js",revision:null},{url:"assets/how-to-use.html.cc465921.js",revision:null},{url:"assets/how-to-use.html.cd5bed9f.js",revision:null},{url:"assets/how-to-use.html.cf762301.js",revision:null},{url:"assets/how-to-use.html.e8799e2f.js",revision:null},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.04f59ca0.js",revision:null},{url:"assets/index.html.0a7aa0e8.js",revision:null},{url:"assets/index.html.0b7758a9.js",revision:null},{url:"assets/index.html.117657d3.js",revision:null},{url:"assets/index.html.15155f6f.js",revision:null},{url:"assets/index.html.17c67928.js",revision:null},{url:"assets/index.html.17d29306.js",revision:null},{url:"assets/index.html.1ce360b5.js",revision:null},{url:"assets/index.html.262e434d.js",revision:null},{url:"assets/index.html.382b61e9.js",revision:null},{url:"assets/index.html.3bedac14.js",revision:null},{url:"assets/index.html.3ceb8e2d.js",revision:null},{url:"assets/index.html.3dd094c2.js",revision:null},{url:"assets/index.html.3e4bb764.js",revision:null},{url:"assets/index.html.40902f54.js",revision:null},{url:"assets/index.html.4192b862.js",revision:null},{url:"assets/index.html.4292c48b.js",revision:null},{url:"assets/index.html.44210eb8.js",revision:null},{url:"assets/index.html.45e85a90.js",revision:null},{url:"assets/index.html.46553d72.js",revision:null},{url:"assets/index.html.47785aca.js",revision:null},{url:"assets/index.html.48469fa4.js",revision:null},{url:"assets/index.html.50ae1330.js",revision:null},{url:"assets/index.html.51bf99ef.js",revision:null},{url:"assets/index.html.54989b50.js",revision:null},{url:"assets/index.html.5587cd16.js",revision:null},{url:"assets/index.html.5e2b7645.js",revision:null},{url:"assets/index.html.60e2f010.js",revision:null},{url:"assets/index.html.65ddbc42.js",revision:null},{url:"assets/index.html.66b7becf.js",revision:null},{url:"assets/index.html.69785de6.js",revision:null},{url:"assets/index.html.6d8e99b5.js",revision:null},{url:"assets/index.html.6f18d4bb.js",revision:null},{url:"assets/index.html.6f53e0a8.js",revision:null},{url:"assets/index.html.710e6403.js",revision:null},{url:"assets/index.html.713b3c36.js",revision:null},{url:"assets/index.html.72f1cfa3.js",revision:null},{url:"assets/index.html.730c8139.js",revision:null},{url:"assets/index.html.73967648.js",revision:null},{url:"assets/index.html.73aeedb2.js",revision:null},{url:"assets/index.html.77850470.js",revision:null},{url:"assets/index.html.79642318.js",revision:null},{url:"assets/index.html.7a130745.js",revision:null},{url:"assets/index.html.7c39ecea.js",revision:null},{url:"assets/index.html.7c892da3.js",revision:null},{url:"assets/index.html.7cf1de4d.js",revision:null},{url:"assets/index.html.7d9fc6f7.js",revision:null},{url:"assets/index.html.7e50f565.js",revision:null},{url:"assets/index.html.842ecf9f.js",revision:null},{url:"assets/index.html.863737ab.js",revision:null},{url:"assets/index.html.88b5a7ba.js",revision:null},{url:"assets/index.html.89e9048e.js",revision:null},{url:"assets/index.html.8a964c96.js",revision:null},{url:"assets/index.html.8a987635.js",revision:null},{url:"assets/index.html.8fb59d74.js",revision:null},{url:"assets/index.html.9766e22d.js",revision:null},{url:"assets/index.html.99c3a7b6.js",revision:null},{url:"assets/index.html.9d53e48a.js",revision:null},{url:"assets/index.html.9f0d56f6.js",revision:null},{url:"assets/index.html.a3f9e946.js",revision:null},{url:"assets/index.html.a6f48beb.js",revision:null},{url:"assets/index.html.a9ef6970.js",revision:null},{url:"assets/index.html.abc7f994.js",revision:null},{url:"assets/index.html.abfa1670.js",revision:null},{url:"assets/index.html.ac663b9c.js",revision:null},{url:"assets/index.html.ac7b1d03.js",revision:null},{url:"assets/index.html.acc1f91f.js",revision:null},{url:"assets/index.html.ae9fb199.js",revision:null},{url:"assets/index.html.b7693dee.js",revision:null},{url:"assets/index.html.bb774086.js",revision:null},{url:"assets/index.html.bb8bf8b5.js",revision:null},{url:"assets/index.html.beb3e615.js",revision:null},{url:"assets/index.html.bf583aeb.js",revision:null},{url:"assets/index.html.c8e789df.js",revision:null},{url:"assets/index.html.ca85575b.js",revision:null},{url:"assets/index.html.cd43b623.js",revision:null},{url:"assets/index.html.cfd9e889.js",revision:null},{url:"assets/index.html.d31815a1.js",revision:null},{url:"assets/index.html.d4edc1e2.js",revision:null},{url:"assets/index.html.d5816ad5.js",revision:null},{url:"assets/index.html.d5b3caea.js",revision:null},{url:"assets/index.html.d6d380a9.js",revision:null},{url:"assets/index.html.df04e28a.js",revision:null},{url:"assets/index.html.e2bf1e5e.js",revision:null},{url:"assets/index.html.e400c0d8.js",revision:null},{url:"assets/index.html.e4768f35.js",revision:null},{url:"assets/index.html.e4c4dbee.js",revision:null},{url:"assets/index.html.e772e161.js",revision:null},{url:"assets/index.html.e88df939.js",revision:null},{url:"assets/index.html.e91b405d.js",revision:null},{url:"assets/index.html.e93216cd.js",revision:null},{url:"assets/index.html.e9b7a2aa.js",revision:null},{url:"assets/index.html.eebadc67.js",revision:null},{url:"assets/index.html.f18ac775.js",revision:null},{url:"assets/index.html.f3c55319.js",revision:null},{url:"assets/index.html.f7a65cca.js",revision:null},{url:"assets/index.html.fb6e4303.js",revision:null},{url:"assets/index.html.fe8f27ba.js",revision:null},{url:"assets/index.html.feebcd56.js",revision:null},{url:"assets/index.html.ffbccbec.js",revision:null},{url:"assets/Layout.15f017f4.js",revision:null},{url:"assets/mroot.html.097f70a3.js",revision:null},{url:"assets/mroot.html.0c170459.js",revision:null},{url:"assets/mroot.html.1755080e.js",revision:null},{url:"assets/mroot.html.31653fe8.js",revision:null},{url:"assets/mroot.html.37f4c311.js",revision:null},{url:"assets/mroot.html.3b1b2fb8.js",revision:null},{url:"assets/mroot.html.4b69e8a6.js",revision:null},{url:"assets/mroot.html.667cbc67.js",revision:null},{url:"assets/mroot.html.6c5e680d.js",revision:null},{url:"assets/mroot.html.7ebef3dc.js",revision:null},{url:"assets/mroot.html.811e1281.js",revision:null},{url:"assets/mroot.html.8c08f9cb.js",revision:null},{url:"assets/mroot.html.af1b1da2.js",revision:null},{url:"assets/mroot.html.d4b28977.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/provider.html.095cb860.js",revision:null},{url:"assets/provider.html.0abd7ce6.js",revision:null},{url:"assets/provider.html.18504a85.js",revision:null},{url:"assets/provider.html.2977198b.js",revision:null},{url:"assets/provider.html.2d4ba496.js",revision:null},{url:"assets/provider.html.457318ab.js",revision:null},{url:"assets/provider.html.621005d0.js",revision:null},{url:"assets/provider.html.6de64bd9.js",revision:null},{url:"assets/provider.html.6f54429c.js",revision:null},{url:"assets/provider.html.97ed4170.js",revision:null},{url:"assets/provider.html.a65b3e48.js",revision:null},{url:"assets/provider.html.be125efc.js",revision:null},{url:"assets/provider.html.d01664ae.js",revision:null},{url:"assets/provider.html.f0602099.js",revision:null},{url:"assets/schedules.html.01f7769e.js",revision:null},{url:"assets/schedules.html.0772dd26.js",revision:null},{url:"assets/schedules.html.0e69fad4.js",revision:null},{url:"assets/schedules.html.1cf6f0cd.js",revision:null},{url:"assets/schedules.html.1d010e79.js",revision:null},{url:"assets/schedules.html.26a3caf3.js",revision:null},{url:"assets/schedules.html.3e62c92c.js",revision:null},{url:"assets/schedules.html.3eefc571.js",revision:null},{url:"assets/schedules.html.4088b08c.js",revision:null},{url:"assets/schedules.html.4bca82f2.js",revision:null},{url:"assets/schedules.html.4e0ce6e5.js",revision:null},{url:"assets/schedules.html.589202cc.js",revision:null},{url:"assets/schedules.html.7b0f8004.js",revision:null},{url:"assets/schedules.html.93361de4.js",revision:null},{url:"assets/schedules.html.942dfe11.js",revision:null},{url:"assets/schedules.html.94a20fa5.js",revision:null},{url:"assets/schedules.html.b49cfb68.js",revision:null},{url:"assets/schedules.html.bd98a93e.js",revision:null},{url:"assets/schedules.html.c5530bf2.js",revision:null},{url:"assets/schedules.html.e27805e1.js",revision:null},{url:"assets/schedules.html.e411276e.js",revision:null},{url:"assets/schedules.html.e4fe1177.js",revision:null},{url:"assets/schedules.html.e53b0927.js",revision:null},{url:"assets/schedules.html.e732120b.js",revision:null},{url:"assets/schedules.html.ed3302a3.js",revision:null},{url:"assets/schedules.html.f55d40ab.js",revision:null},{url:"assets/schedules.html.f5c80b64.js",revision:null},{url:"assets/schedules.html.f89c7f00.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/start-activity.html.15ed6acc.js",revision:null},{url:"assets/start-activity.html.1bb2d084.js",revision:null},{url:"assets/start-activity.html.1dfc5b3d.js",revision:null},{url:"assets/start-activity.html.3043635c.js",revision:null},{url:"assets/start-activity.html.33a1804d.js",revision:null},{url:"assets/start-activity.html.470ac630.js",revision:null},{url:"assets/start-activity.html.5c77e8cc.js",revision:null},{url:"assets/start-activity.html.6880e2a0.js",revision:null},{url:"assets/start-activity.html.76c0e297.js",revision:null},{url:"assets/start-activity.html.9318aa36.js",revision:null},{url:"assets/start-activity.html.93f7a0b1.js",revision:null},{url:"assets/start-activity.html.94c6ac7b.js",revision:null},{url:"assets/start-activity.html.ce48c5b1.js",revision:null},{url:"assets/start-activity.html.fa8e2289.js",revision:null},{url:"assets/style.0761390d.css",revision:null},{url:"assets/uri.html.0915fb9a.js",revision:null},{url:"assets/uri.html.27071038.js",revision:null},{url:"assets/uri.html.392559a3.js",revision:null},{url:"assets/uri.html.3925aa87.js",revision:null},{url:"assets/uri.html.61df3a17.js",revision:null},{url:"assets/uri.html.92f45408.js",revision:null},{url:"assets/uri.html.d5a7436b.js",revision:null},{url:"assets/uri.html.ddda0882.js",revision:null},{url:"assets/uri.html.e7cc8f66.js",revision:null},{url:"assets/uri.html.e8bed009.js",revision:null},{url:"assets/uri.html.f5634e89.js",revision:null},{url:"assets/uri.html.f71ca1a7.js",revision:null},{url:"assets/uri.html.fdb1f555.js",revision:null},{url:"assets/uri.html.ffd45657.js",revision:null},{url:"assets/warning.html.12497906.js",revision:null},{url:"assets/warning.html.12fadbf5.js",revision:null},{url:"assets/warning.html.260c8a42.js",revision:null},{url:"assets/warning.html.5994f0bc.js",revision:null},{url:"assets/warning.html.64a90138.js",revision:null},{url:"assets/warning.html.6b93cad1.js",revision:null},{url:"assets/warning.html.6f908689.js",revision:null},{url:"assets/warning.html.79624f70.js",revision:null},{url:"assets/warning.html.906ada93.js",revision:null},{url:"assets/warning.html.a63d5aa1.js",revision:null},{url:"assets/warning.html.a6cd8e80.js",revision:null},{url:"assets/warning.html.d5ddc751.js",revision:null},{url:"assets/warning.html.e6cd8087.js",revision:null},{url:"assets/warning.html.f14ebf38.js",revision:null},{url:"en-US/about/contactUs.html",revision:"c0d5c6297a1a382738504a1a2f0c7aa0"},{url:"en-US/api/index.html",revision:"89ce328702985afb664132bd7fa6e236"},{url:"en-US/api/provider.html",revision:"db18df92e426567edcfdd32a2658cc2b"},{url:"en-US/api/start-activity.html",revision:"e0e88f40ffcc23252d2c1c2a3ebb15c2"},{url:"en-US/api/uri.html",revision:"f21aeeab0b6318e839d715eeca4d7d2e"},{url:"en-US/changelog/index.html",revision:"fc264e3d47309397a05b21ae1c76ef80"},{url:"en-US/download/index.html",revision:"5687bcb650351860aebdbdabb396091a"},{url:"en-US/faq/daily.html",revision:"419623bf66117d39d2c2bdf0a87529ba"},{url:"en-US/faq/index.html",revision:"9ca7b4d082e37c0a3e36b3566ce40aed"},{url:"en-US/faq/mroot.html",revision:"c0fdbf6378db96054f4c474593d17885"},{url:"en-US/faq/schedules.html",revision:"30bcb351aadfb8d5592ecf7561216a71"},{url:"en-US/guide/enable-mroot.html",revision:"6d0fe0bbfd44d52ba5a40413377baba2"},{url:"en-US/guide/how-to-use.html",revision:"bc5c9ebd457e67ba59086c280344e323"},{url:"en-US/guide/index.html",revision:"c6d956d46b77f736e3896d4b689f6831"},{url:"en-US/guide/schedules.html",revision:"a7efd560a1bf4bce5d6e22f01f4d02fe"},{url:"en-US/guide/warning.html",revision:"87977695c30e21c62678970f3905912d"},{url:"en-US/index.html",revision:"351f552de181828da670c60fe3bf5876"},{url:"en-US/thanks/index.html",revision:"1ada16318f3c607b67732f0c574a216e"},{url:"index.html",revision:"29ba5089096b24adc00fd0610834f2a7"},{url:"pt-BR/about/contactUs.html",revision:"584790586d1643751b2047be5390e66d"},{url:"pt-BR/api/index.html",revision:"f781ae07715ef96d95b3a81cdf44ad19"},{url:"pt-BR/api/provider.html",revision:"92047c32b2d2bc25a35d06d917d908da"},{url:"pt-BR/api/start-activity.html",revision:"4e002599211aa1f54422b279e6fd4900"},{url:"pt-BR/api/uri.html",revision:"1b9e1c06be35ca4c8d8bee9743e4161d"},{url:"pt-BR/changelog/index.html",revision:"ccc3db48d7114d2ec0503a425aacedc0"},{url:"pt-BR/download/index.html",revision:"2a03dcd2eb22f37b5ce6876e156019a9"},{url:"pt-BR/faq/daily.html",revision:"7b109db407471a1152867e7c8cdc957b"},{url:"pt-BR/faq/index.html",revision:"0d48589c95c931d831fc12056177978e"},{url:"pt-BR/faq/mroot.html",revision:"c0fd000ab496c881e5cfa61215d4fcbe"},{url:"pt-BR/faq/schedules.html",revision:"4b2ac82f6fe60030c671c973cd22ce78"},{url:"pt-BR/guide/enable-mroot.html",revision:"d4ed860ea670d295a8dd960666a15b8b"},{url:"pt-BR/guide/how-to-use.html",revision:"a7fa6c635bee7b54a7f23fab6d86c57e"},{url:"pt-BR/guide/index.html",revision:"267f2fd30c4880e730864a166459798e"},{url:"pt-BR/guide/schedules.html",revision:"9facf251c7eac41cc53f3945df029d57"},{url:"pt-BR/guide/warning.html",revision:"23afc1d264a1eec4a4a3edb174297ca3"},{url:"pt-BR/index.html",revision:"b3ce99d1a508cf1b63e09830bc7e5b89"},{url:"pt-BR/thanks/index.html",revision:"4f7a293e08fc036bf35f6b79005acb0f"},{url:"ru-RU/about/contactUs.html",revision:"11b858871282e571c5cd984d0d06b92c"},{url:"ru-RU/api/index.html",revision:"0cfaa4caaeb17c2b4d5363ee9a57a982"},{url:"ru-RU/api/provider.html",revision:"b90aa7c312aacff16e3b8b6da87ecdfb"},{url:"ru-RU/api/start-activity.html",revision:"e809450750a6ec9124e90b329c54445d"},{url:"ru-RU/api/uri.html",revision:"5f993e0be486b33e0686e3a5ef4c395d"},{url:"ru-RU/changelog/index.html",revision:"55bb459702d7447e134f11a268f77686"},{url:"ru-RU/download/index.html",revision:"5208ecef54eda5a371520cd61fcd5dc3"},{url:"ru-RU/faq/daily.html",revision:"4e99ab4146bf9d811f8aba3a5f99339c"},{url:"ru-RU/faq/index.html",revision:"6b5938ba73c8e2a23244475c6b8167d3"},{url:"ru-RU/faq/mroot.html",revision:"1aa7dba2cee6eafe73ed92bb6582ecad"},{url:"ru-RU/faq/schedules.html",revision:"9b236d6d0276bef93b701095451c77f5"},{url:"ru-RU/guide/enable-mroot.html",revision:"e4acc55e2eb672c1322afe0a5a080651"},{url:"ru-RU/guide/how-to-use.html",revision:"33021eb1101a7283a59ff933d6742e45"},{url:"ru-RU/guide/index.html",revision:"5bc4d045e547806a536d1a23abfba47e"},{url:"ru-RU/guide/schedules.html",revision:"a2f4d8553d558d3978a4a54277db9018"},{url:"ru-RU/guide/warning.html",revision:"054d1bf6663662b164eea7070007aa99"},{url:"ru-RU/index.html",revision:"9cb0651e747c6e277527a8ce037495b1"},{url:"ru-RU/thanks/index.html",revision:"4418ded640e86dd1ab421104983c750b"},{url:"ru-UA/about/contactUs.html",revision:"6e5438a20dcd3203e572ada4d9e7ed09"},{url:"ru-UA/api/index.html",revision:"cfaf5150ac127b42255727fdc987add9"},{url:"ru-UA/api/provider.html",revision:"d6a516e5581adcd6d9d3561c5137b0bf"},{url:"ru-UA/api/start-activity.html",revision:"2a88a9cd1c1637f24ec2be6d18d6548c"},{url:"ru-UA/api/uri.html",revision:"521588c1ab670ef5a5687fadbe7b34ed"},{url:"ru-UA/changelog/index.html",revision:"244634a775faf3ab1106d8171b0ba213"},{url:"ru-UA/download/index.html",revision:"e27a7819817eb2b7225dd806ea9ba71a"},{url:"ru-UA/faq/daily.html",revision:"41ebb97af841a1219d1e34a4d84a95a1"},{url:"ru-UA/faq/index.html",revision:"fc631a57902f3213b854aa52586850d5"},{url:"ru-UA/faq/mroot.html",revision:"82a74c8c350b0e0813f532ba39eb47e1"},{url:"ru-UA/faq/schedules.html",revision:"1500a4a8d69df96b0e2d097e8bf4088f"},{url:"ru-UA/guide/enable-mroot.html",revision:"3340fc876ab1f4539be5cab560227114"},{url:"ru-UA/guide/how-to-use.html",revision:"6556d45348fc5416c0986d57062b6cbe"},{url:"ru-UA/guide/index.html",revision:"df9be32ea9720c20bb2010bfd5188b7c"},{url:"ru-UA/guide/schedules.html",revision:"57e98f7f817dcce38688c099b4619005"},{url:"ru-UA/guide/warning.html",revision:"c5b1b2d5a39afe308b0db4f81764b264"},{url:"ru-UA/index.html",revision:"eb73eefdd30b9c75532d81a4f3da743a"},{url:"ru-UA/thanks/index.html",revision:"255fbe1058ca7c18481e2e1289073386"},{url:"uk-UA/about/contactUs.html",revision:"01a52712f111aa1f5d5fc80b06c7c6b5"},{url:"uk-UA/api/index.html",revision:"4bd87520b256583f7275b3f4242842ae"},{url:"uk-UA/api/provider.html",revision:"56634f23d45c8cb999bdafa0cf873a05"},{url:"uk-UA/api/start-activity.html",revision:"bb0182320fdf1b9f6524a1feb482ae05"},{url:"uk-UA/api/uri.html",revision:"ae5b9719e72b589f147ea72fef50168f"},{url:"uk-UA/changelog/index.html",revision:"9946352af953d01283a111eb72eb3053"},{url:"uk-UA/download/index.html",revision:"bc470d8831e9ea6d3c7d65c79257c0d4"},{url:"uk-UA/faq/daily.html",revision:"01bf8306fdc53898c29f8cc7d7750f64"},{url:"uk-UA/faq/index.html",revision:"f1df6fcd483eec58f767548aee0b8461"},{url:"uk-UA/faq/mroot.html",revision:"68f0445ad6e27943afeab9a3c9757cea"},{url:"uk-UA/faq/schedules.html",revision:"dfe89619f81a28a8d8acb9b3c014f0ee"},{url:"uk-UA/guide/enable-mroot.html",revision:"e5cfdb7fc79d04ef2b1f5329ba2c5653"},{url:"uk-UA/guide/how-to-use.html",revision:"6793ddb0ce5694fa3b0f1c0e246b6c0e"},{url:"uk-UA/guide/index.html",revision:"047d58c32925cd297d1abdf1e876d892"},{url:"uk-UA/guide/schedules.html",revision:"6794ca81a0281e882de2aca80c629c4d"},{url:"uk-UA/guide/warning.html",revision:"0f2e38370abbe2d9d867aafe2b7c1461"},{url:"uk-UA/index.html",revision:"f39e4b93b3006ba0c0dc36f1b196b5f8"},{url:"uk-UA/thanks/index.html",revision:"eb2f11e5c8f6296ad7c14b3cb523c833"},{url:"zh-CN/about/contactUs.html",revision:"4f86989b99d57d2d5085d6a12afe8587"},{url:"zh-CN/api/index.html",revision:"12335e30ff14a8afe902f5d7dc53abf1"},{url:"zh-CN/api/provider.html",revision:"b38810866ecbf71ade78478383e7002f"},{url:"zh-CN/api/start-activity.html",revision:"fa92b8633c139a0c3f528b19b87a5e6d"},{url:"zh-CN/api/uri.html",revision:"cf2f99789405cf6cabdd50497dc4920f"},{url:"zh-CN/changelog/index.html",revision:"ec4d5a53fcab29202a2d294c6d72c3d6"},{url:"zh-CN/download/index.html",revision:"9ae5e7383d8c5ced6ba6c4d6912d678e"},{url:"zh-CN/faq/daily.html",revision:"fd35ff2c60ea00074a840bd9b04c10f0"},{url:"zh-CN/faq/index.html",revision:"bf73a5d4d12e7dbdf9b57a97c766ee5c"},{url:"zh-CN/faq/mroot.html",revision:"b9f8ebb4610884db9a9766382b271ac9"},{url:"zh-CN/faq/schedules.html",revision:"b5d23111380e020789f09692e09b300e"},{url:"zh-CN/guide/enable-mroot.html",revision:"77fd65cec029da47ecb5a905290e7d70"},{url:"zh-CN/guide/how-to-use.html",revision:"a147730319283b9d4a5b5992de93927a"},{url:"zh-CN/guide/index.html",revision:"d12f404eb6a613ce989070733a4db555"},{url:"zh-CN/guide/schedules.html",revision:"17540d7318c0cc307269f242e1377b81"},{url:"zh-CN/guide/warning.html",revision:"761404fa6334beb1ea1faade27480093"},{url:"zh-CN/index.html",revision:"d60df3cc59a3bcf260629a6ea2801035"},{url:"zh-CN/thanks/index.html",revision:"8d107e638232e504a133de31a4fdfd65"},{url:"zh-TW/about/contactUs.html",revision:"5e899623e6b31cdb7073e5a902debb74"},{url:"zh-TW/api/index.html",revision:"27c7a727fbd851926d9c4f8d83defa54"},{url:"zh-TW/api/provider.html",revision:"7997021b41e0e6c81a1ad8757ee0dd7c"},{url:"zh-TW/api/start-activity.html",revision:"4b2f59e07661aa90aef78e2731ba8a1c"},{url:"zh-TW/api/uri.html",revision:"20fd141235c3f01427483e652b167c49"},{url:"zh-TW/changelog/index.html",revision:"9d151501acc847c27e2efd07cc2a556d"},{url:"zh-TW/download/index.html",revision:"3728596e294a76449cdf7ac00672ab49"},{url:"zh-TW/faq/daily.html",revision:"7e697ab9168f759bbe4462c2ef20dcec"},{url:"zh-TW/faq/index.html",revision:"6bc1239ad9ea9d3c10213c2e2c4adf11"},{url:"zh-TW/faq/mroot.html",revision:"98e0891a5ec66264991cd33fccfb1495"},{url:"zh-TW/faq/schedules.html",revision:"d9cc3f48c0411741a1569d2ddd7231a9"},{url:"zh-TW/guide/enable-mroot.html",revision:"7062e106e5e264752be2b63cfe9ec4fa"},{url:"zh-TW/guide/how-to-use.html",revision:"f7190780982e0fb1f019888ba582de76"},{url:"zh-TW/guide/index.html",revision:"46b12760d64577b8c1e78270622f8f79"},{url:"zh-TW/guide/schedules.html",revision:"da05c3ac7353c6f37ac379c909b69d7a"},{url:"zh-TW/guide/warning.html",revision:"049ec8826f7a4b0ba99ed3dae7c44128"},{url:"zh-TW/index.html",revision:"8cbced7c341d2b30d07627c2a81a4bf0"},{url:"zh-TW/thanks/index.html",revision:"76cacca2b8163e3f59886fddbe9b3622"}],{})}));
