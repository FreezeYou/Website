if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),b={module:{uri:c},exports:r,require:f};s[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f02abdd53af0bdb5f28a95928f1ee5a2"},{url:"assets/20180207104242-9491a6dd.js",revision:"e8470a6cb4b8fe31790cf5aa341ccb87"},{url:"assets/404.html-60b35caa.js",revision:"7465db92eeb25f209fcf2c19f59c07e9"},{url:"assets/404.html-db3bf879.js",revision:"2f714ccae846991d8df3f99c51fa697a"},{url:"assets/app-ed572c69.js",revision:"a44f4d68f3cd9ec4adb8f87465e9c0f5"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/contactUs.html-0fdc5695.js",revision:"ca7b2dd0b35a20d35c06ea3fa2c8641d"},{url:"assets/contactUs.html-2ddeb40f.js",revision:"5fdf2c9ba38b66d34fc33331defd73d1"},{url:"assets/contactUs.html-31f02c9d.js",revision:"4198b43963dd1aa85173b9da78b5c866"},{url:"assets/contactUs.html-436bb5cc.js",revision:"c8d1dcd68c75bfd0a06dca3d814270c6"},{url:"assets/contactUs.html-4b888455.js",revision:"9467137539923cd0f1b8d9e7f32b6bec"},{url:"assets/contactUs.html-618a6829.js",revision:"d84f102ed28d9853df2989047a8647a8"},{url:"assets/contactUs.html-67db6b56.js",revision:"b465a09d95c5d6928a5e7e6b9e8c10fb"},{url:"assets/contactUs.html-70514404.js",revision:"7f99d4a9e156c9866cf8027b7472f1e8"},{url:"assets/contactUs.html-79de0756.js",revision:"5fdf2c9ba38b66d34fc33331defd73d1"},{url:"assets/contactUs.html-bc44979f.js",revision:"b4b4375ede8feb3eaaff1785638de6ad"},{url:"assets/contactUs.html-c4187e9c.js",revision:"d5aaba20dcb445d46255ac9714af9909"},{url:"assets/contactUs.html-c784cff3.js",revision:"5fdf2c9ba38b66d34fc33331defd73d1"},{url:"assets/contactUs.html-d39303c7.js",revision:"c56e8226e638ba2c47f876be056fd82b"},{url:"assets/contactUs.html-e960cb45.js",revision:"c56e8226e638ba2c47f876be056fd82b"},{url:"assets/contactUs.html-f134712b.js",revision:"5fdf2c9ba38b66d34fc33331defd73d1"},{url:"assets/contactUs.html-fcd80fbe.js",revision:"df7a15a6616065a59db508dbff0e86e1"},{url:"assets/daily.html-02ee86bf.js",revision:"ca7a16f070ceee5e2c58609ff1752cfe"},{url:"assets/daily.html-2253b43b.js",revision:"b1edda1896ac2127fef05f05f996781a"},{url:"assets/daily.html-2d6ad6ba.js",revision:"981ff25d971e37f3efee3f8877b1af92"},{url:"assets/daily.html-44e69b45.js",revision:"0f6464c8e11c0afa98dc13deaa7cdb70"},{url:"assets/daily.html-487d91bc.js",revision:"c41f6214621cf95f0d8e26c2167eff3b"},{url:"assets/daily.html-544cf665.js",revision:"2d8455d5888dfe452df3e4883594bd9a"},{url:"assets/daily.html-5cbefbf0.js",revision:"3c1cf2b6b2fa1d146e399d73d45c4d86"},{url:"assets/daily.html-888d4117.js",revision:"ec2c397b7bca7c2b355e41add915058c"},{url:"assets/daily.html-916a5bac.js",revision:"63fefff5282c92c9365a00f4ff60458d"},{url:"assets/daily.html-a2f1faf1.js",revision:"748a5cd595e097e7d955b1ec551da077"},{url:"assets/daily.html-a7c1df0c.js",revision:"c1c43b32230c16c75bcddb583fe87cea"},{url:"assets/daily.html-d929d0d8.js",revision:"3229c7f9fdede030864ec9fa77f5ac8b"},{url:"assets/daily.html-e91f26c5.js",revision:"16a5b12e3c99ac4a9f682995807e081b"},{url:"assets/daily.html-f08ab787.js",revision:"3dd9f1d5069fd8b0f29bd4fb3dea42c4"},{url:"assets/daily.html-f6c29a9f.js",revision:"e73babc8e8a8204fd544eaa3be5947dd"},{url:"assets/daily.html-f9265a4f.js",revision:"5337d72c040f6ace2d25f866ac13ff95"},{url:"assets/enable-mroot.html-252302cd.js",revision:"7480b50ec60adf186aa62628e31970b2"},{url:"assets/enable-mroot.html-32df0bac.js",revision:"0f652691c6667e93e15aefd363290c0e"},{url:"assets/enable-mroot.html-388852fc.js",revision:"38d3cb92bb8b3ff8cca982b3e092d4b6"},{url:"assets/enable-mroot.html-3e14489d.js",revision:"f14c04d0f6795e136eef349389d92919"},{url:"assets/enable-mroot.html-457032f4.js",revision:"1750f2d3b118e7eccb5d927ebd558fa8"},{url:"assets/enable-mroot.html-491a0baa.js",revision:"f8723286f2037f829b1a13621b34233e"},{url:"assets/enable-mroot.html-53a2514b.js",revision:"77e9457033aff74454bb80b4a2729aa9"},{url:"assets/enable-mroot.html-5801f4dc.js",revision:"06aa0dcc943f3064a4ec453cc2561d9a"},{url:"assets/enable-mroot.html-7084631e.js",revision:"aa915fa01e1ef35e048facdf325bb993"},{url:"assets/enable-mroot.html-8a72d7d3.js",revision:"072720e13f0cd387cd0b947eb1253490"},{url:"assets/enable-mroot.html-98d6fde1.js",revision:"6c6a67e424f83954100c6396ab20d1cf"},{url:"assets/enable-mroot.html-9e678ee7.js",revision:"e57446355d9095711aefd18170faacb9"},{url:"assets/enable-mroot.html-a85b61a2.js",revision:"92803a70b2a67f62fb55c7f6dc981e82"},{url:"assets/enable-mroot.html-afc061b5.js",revision:"bb00513de3e18817961b15d37e53f370"},{url:"assets/enable-mroot.html-d9b6771e.js",revision:"138c286304a7b95308cc37b2eb3e3da6"},{url:"assets/enable-mroot.html-f94e324f.js",revision:"673f94eeab94380615c0db98fa29cc0a"},{url:"assets/how-to-use.html-15002dd2.js",revision:"2598441b1bdafd4a827c43851df1615f"},{url:"assets/how-to-use.html-2a18bc98.js",revision:"1099162fd6d7f6c30e9b4b0850027325"},{url:"assets/how-to-use.html-2dcc6e4d.js",revision:"bc3be2e5f2a4cd696c907d9251cac957"},{url:"assets/how-to-use.html-3f1a9756.js",revision:"9cc8a42359c0595c4d2bacd4772eb928"},{url:"assets/how-to-use.html-5bf78c7f.js",revision:"c23870e387f91f87766e99cfdb81febc"},{url:"assets/how-to-use.html-6e787aff.js",revision:"d9d9205a22f25b53518bb22db9dac5ec"},{url:"assets/how-to-use.html-6ea4fd6f.js",revision:"73f727f285ab61c2821f38c2f28e8bb7"},{url:"assets/how-to-use.html-7d7736bb.js",revision:"1c266ee4f465feb6519c07376ceecfa0"},{url:"assets/how-to-use.html-828a1bac.js",revision:"66c4ed2c3085953d8cfdaf5ddbea07ee"},{url:"assets/how-to-use.html-885df4d5.js",revision:"c55aafeba4986a9f54260120abd580f4"},{url:"assets/how-to-use.html-9e968fa6.js",revision:"f57fc6332ebc0d7ac3c29ac8937c1af5"},{url:"assets/how-to-use.html-b50c6b77.js",revision:"937a37b3b61b7a0e314fea70fb8bbfa3"},{url:"assets/how-to-use.html-c57a61cb.js",revision:"2b2567ceb509b6ffee91c2c876f15f4d"},{url:"assets/how-to-use.html-cc3156b2.js",revision:"ddc691869bd958d410458c7ecabab9d5"},{url:"assets/how-to-use.html-e2e3ccf5.js",revision:"118d438c24fd8b79eabdfb44e9ee0eea"},{url:"assets/how-to-use.html-fb435091.js",revision:"96b44862eede4e5ee020eb6fcfcd8874"},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-017ef425.js",revision:"29779162eb0161c2bd32529e1923fa88"},{url:"assets/index.html-040a3edc.js",revision:"4fc962f4603197755884e17ec666b6b6"},{url:"assets/index.html-0fe1a269.js",revision:"66b0cefb5f684244b26fc7897830bbda"},{url:"assets/index.html-110b33e2.js",revision:"8468f66e56fed5a726ebce25878c6232"},{url:"assets/index.html-11421085.js",revision:"27e924f57f2b0d8306a7f25f68ed1d72"},{url:"assets/index.html-12751008.js",revision:"db946f4fe1e895924a27fac64d3aa987"},{url:"assets/index.html-1490ce79.js",revision:"07fabb0172ea949a0606545f300bfcf3"},{url:"assets/index.html-1498069a.js",revision:"c2595c2aeaf0d38c50b90742df13a190"},{url:"assets/index.html-14d1a6a1.js",revision:"5691be24acd912bac19fb464b701c7cd"},{url:"assets/index.html-17067d95.js",revision:"4ba1e011deee4899d4d809cd30fe0244"},{url:"assets/index.html-171a0258.js",revision:"57b20424c77b06d2a4209b2cad3c5fbe"},{url:"assets/index.html-1f0c632a.js",revision:"955b1d50ac28794190ec9884d2931150"},{url:"assets/index.html-215a325b.js",revision:"ce998643a1f88d6c0ce3a79abd9be721"},{url:"assets/index.html-21d91647.js",revision:"f8a217481b571ed94787dfdc55cff7b7"},{url:"assets/index.html-22016787.js",revision:"67fc68e40e865c1806e9dd81b170f318"},{url:"assets/index.html-26b2bbd3.js",revision:"4c8f5c1445a29ab887def3b4231bbad7"},{url:"assets/index.html-26e8ae82.js",revision:"8767160eafa4bb60c366ba6069103cbb"},{url:"assets/index.html-296f5aa8.js",revision:"a1f2db39f64019fbc171525ca2fc61ed"},{url:"assets/index.html-2a6f319e.js",revision:"e8842672eea4fd0b2cde1ca3c13cee9a"},{url:"assets/index.html-2b619767.js",revision:"4c1c54ddc1049630d937faad88d05ec4"},{url:"assets/index.html-2f30e453.js",revision:"620aa07eaac8b5c6a1e9bba9eaabcc27"},{url:"assets/index.html-316e8b0e.js",revision:"b4817c2c3c0b5ea6d38e42f498a07ae5"},{url:"assets/index.html-35cda0d3.js",revision:"e8ef055d391408bb0f110040f82269aa"},{url:"assets/index.html-3797daf7.js",revision:"50e14998aab398bc5763e5a03ece93ec"},{url:"assets/index.html-3b09640d.js",revision:"e0bb103dba6f1dcc456bb679ec1d7480"},{url:"assets/index.html-3be3cd25.js",revision:"eec41950e814a9db35c30e1cfd209979"},{url:"assets/index.html-3c373cfe.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-3cdc36ea.js",revision:"4d704c59536dd2f6f2f0af8299df4565"},{url:"assets/index.html-3cf357d3.js",revision:"66d9db08c7e29f46fa6eff31447803b5"},{url:"assets/index.html-3d49b0c0.js",revision:"c7bf417c11c762612329bbce86daa315"},{url:"assets/index.html-3d7e32e3.js",revision:"6ae77e463bb969bafe21a84b94262f50"},{url:"assets/index.html-3f479863.js",revision:"2569d88e665f556fc2b052c1dc7627af"},{url:"assets/index.html-408d24e6.js",revision:"0d06a19db02c9225fadd50dc4930dfc6"},{url:"assets/index.html-40912f05.js",revision:"afcc0de762c4053680cd0578b69e1710"},{url:"assets/index.html-44ae5bad.js",revision:"85a80cda4ae051481c9c054ef98ef635"},{url:"assets/index.html-46c429b7.js",revision:"7dc83e79e63bf8862d5bd7ed6bf1f24d"},{url:"assets/index.html-46d6809b.js",revision:"b0ff1b54ad27fbeb61f0496709e37f0c"},{url:"assets/index.html-4974d40e.js",revision:"b54b3209065f67f0a5a8d8708ec18c7d"},{url:"assets/index.html-4f7a6cfd.js",revision:"c78fb4997d070d3b1183a7985274fbe3"},{url:"assets/index.html-52777faf.js",revision:"c52160969dccf47832f094820ac2867e"},{url:"assets/index.html-583f16cd.js",revision:"78cf087d5fe5de8f5f6b050ad46846a6"},{url:"assets/index.html-596d68e2.js",revision:"93f75dc85fb0147e1d192373c5fb3dab"},{url:"assets/index.html-59933d3e.js",revision:"4f6ca74cc107fdc1366db31f7358093e"},{url:"assets/index.html-5c6c11e3.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-5fc1fb22.js",revision:"66d9db08c7e29f46fa6eff31447803b5"},{url:"assets/index.html-663d9c7f.js",revision:"515a41c69a332e667e91b0f90dc83f50"},{url:"assets/index.html-675ebd7b.js",revision:"0610b67a0d5872f93aa0463e440b3c29"},{url:"assets/index.html-683cb503.js",revision:"a4c203b2504ee345d95b9dcac150c9d3"},{url:"assets/index.html-6b82d1a9.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-6e3ba0c7.js",revision:"f00b2fa401c284acc538ae60cc99d9e3"},{url:"assets/index.html-71754b4b.js",revision:"59fcabb1eca2f2739df3ed75c999132f"},{url:"assets/index.html-738bd221.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-738f476c.js",revision:"68d181a22a3870917a680bc315025e58"},{url:"assets/index.html-795975dc.js",revision:"0351d0ab7c45e01afd4811d360cb7106"},{url:"assets/index.html-7b690402.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-7e5f063b.js",revision:"c18c671a71e5938ebdbb18fea456f4e7"},{url:"assets/index.html-802ed9c5.js",revision:"3f737c68aa1f3d308f9ef615ddd31a0c"},{url:"assets/index.html-80a57818.js",revision:"30325870ea554d35fe20ca622407f906"},{url:"assets/index.html-81947e58.js",revision:"e6f7a60ed2b6b524585d3b33962b7204"},{url:"assets/index.html-84d219e7.js",revision:"af27e379db4b2f9f682f1f233dc41f0e"},{url:"assets/index.html-8cef63fc.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-8d01bd26.js",revision:"4380be9065ae58c8bdb9443c54452174"},{url:"assets/index.html-916b0a6e.js",revision:"77fec1232b2dafa24fd26ab628924b82"},{url:"assets/index.html-95c0bbc6.js",revision:"86e7c890887d816f33d0c514d7d7806d"},{url:"assets/index.html-98b487bc.js",revision:"9938bee89ec18a8ae2af12e83c9cacca"},{url:"assets/index.html-9ad62437.js",revision:"809e535108417eac161c3b30395b3e65"},{url:"assets/index.html-9e95e42b.js",revision:"16f31bfeb2ba75f4eaaf6191ce2040b6"},{url:"assets/index.html-9fb3d37f.js",revision:"38d46254ec1267f8358d026ab9354507"},{url:"assets/index.html-9fedcd43.js",revision:"68509a460fa86640b988b62566b2f2df"},{url:"assets/index.html-a09fa9ef.js",revision:"4ca1b15d3fd439fcb3eb00efd141aa6d"},{url:"assets/index.html-a14fb32c.js",revision:"8b5da15373bcfeb1e4d292774649d870"},{url:"assets/index.html-a226789b.js",revision:"7c671fede1374d986d3c6ee69e8de50d"},{url:"assets/index.html-a392c9bb.js",revision:"e4faff444b65128c605e84302919f99d"},{url:"assets/index.html-a4a55bd4.js",revision:"bedc5274e7d8aee009e6747eafeb59ca"},{url:"assets/index.html-a4e991db.js",revision:"0c13c2b77e986fab4ba5e087c0448c8e"},{url:"assets/index.html-a6505ae9.js",revision:"659267d872990c59a8993a9959672075"},{url:"assets/index.html-a6ce9a34.js",revision:"66d9db08c7e29f46fa6eff31447803b5"},{url:"assets/index.html-a71133f6.js",revision:"66d9db08c7e29f46fa6eff31447803b5"},{url:"assets/index.html-acd4ad0b.js",revision:"8fb1776063aa69b0eebc67b23035bbda"},{url:"assets/index.html-ae424ab2.js",revision:"e5478e747e73e2c4a8e37b6ef61b5170"},{url:"assets/index.html-b643723a.js",revision:"047d092645d5d4699eecbe55ac31c28f"},{url:"assets/index.html-b7488f90.js",revision:"d3b0fb837c706385da12f2baa6fbac32"},{url:"assets/index.html-b763f36a.js",revision:"a83cef7f970647f75f9f63b09078500c"},{url:"assets/index.html-b93d5707.js",revision:"27a9f1aa8444cab873e742796e9281d5"},{url:"assets/index.html-b961e946.js",revision:"d9af2301e2ab8921fa3f7a3124cbe514"},{url:"assets/index.html-c4e1d90e.js",revision:"257bee495ca37eb45e07a162b42bdd2d"},{url:"assets/index.html-c8c46766.js",revision:"90a225a9ef2ce174303a2cd1294f1d80"},{url:"assets/index.html-cc1f794b.js",revision:"8057e5ffd7f752bdcca01b01d5130d9c"},{url:"assets/index.html-cc1fa52b.js",revision:"68d181a22a3870917a680bc315025e58"},{url:"assets/index.html-ced6d766.js",revision:"a4c203b2504ee345d95b9dcac150c9d3"},{url:"assets/index.html-d07b6501.js",revision:"b4d259bb3de96ced92cb100b8a5331e8"},{url:"assets/index.html-d33fcae1.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-d4cee7ed.js",revision:"ac11517a6d0c2fcbc109c85f87260f73"},{url:"assets/index.html-d4da0eb8.js",revision:"4380be9065ae58c8bdb9443c54452174"},{url:"assets/index.html-de6832b3.js",revision:"33e27544ea680af7e18a493fd10d6bec"},{url:"assets/index.html-e17527c1.js",revision:"ef3df416cfa6b7e4371151b9b65bf7b7"},{url:"assets/index.html-e38fa3a4.js",revision:"464c93a1aa0a760ebeae4f1f54263ea9"},{url:"assets/index.html-e41b782c.js",revision:"ac11517a6d0c2fcbc109c85f87260f73"},{url:"assets/index.html-e47a23f6.js",revision:"c6dbb77f9fbebcba2f18dda56fe4bae6"},{url:"assets/index.html-e5a101ac.js",revision:"67a41657ad0b4d5eb3c454d8b0e3ee14"},{url:"assets/index.html-e605a520.js",revision:"8d9dbe58edf5966a0369aebe35382e8b"},{url:"assets/index.html-e66c4d21.js",revision:"3d11534b7e0a9494794fd27d40ab885a"},{url:"assets/index.html-e7962fbe.js",revision:"603aafdb876663ab9888db96a4e9c212"},{url:"assets/index.html-e873ac06.js",revision:"68d181a22a3870917a680bc315025e58"},{url:"assets/index.html-e9ae51fe.js",revision:"f8166eeefc0507ef4771292258ce1c58"},{url:"assets/index.html-ed3e2332.js",revision:"d2769e879f635479c013a972ba1c24a2"},{url:"assets/index.html-f096b007.js",revision:"6372c61df71168ce3bbf1f240f32d7b9"},{url:"assets/index.html-f2dd71ba.js",revision:"a95d90a563cdd73a314085e62c2efebd"},{url:"assets/index.html-f4dd1055.js",revision:"68d181a22a3870917a680bc315025e58"},{url:"assets/index.html-f50e1329.js",revision:"5e0c34b75bd64133ffa2e644c0d7b17a"},{url:"assets/index.html-f8a86d7b.js",revision:"68d181a22a3870917a680bc315025e58"},{url:"assets/index.html-f92b6613.js",revision:"e6f7a60ed2b6b524585d3b33962b7204"},{url:"assets/index.html-fa97ff02.js",revision:"4fbad5ffb1f3d2f7cd4c78dc66103992"},{url:"assets/index.html-ffe46a32.js",revision:"6cad214af706697e92cc78b8d5ebbf42"},{url:"assets/js/lang.min.js",revision:"2aa835c86ec046488292c2fb2c5d4567"},{url:"assets/js/statistics.js",revision:"98b5c2fec06fc75ebbbe23daea58945c"},{url:"assets/mroot.html-2138884b.js",revision:"25d0d4f5c13ade49ecc0bfc80f22f788"},{url:"assets/mroot.html-2aabd2a0.js",revision:"218019c7a622396e50ed53aad6eeb540"},{url:"assets/mroot.html-4d003346.js",revision:"dc63548cf262a09af5939bb887e742f5"},{url:"assets/mroot.html-631fc09a.js",revision:"02e498df3f65d7c727acff7193a33765"},{url:"assets/mroot.html-6ee30c6e.js",revision:"aa108ad91129df92f4502486938d38c7"},{url:"assets/mroot.html-92554b14.js",revision:"d9ad23be8bc044ffadd4280129083e71"},{url:"assets/mroot.html-92fe2945.js",revision:"3709dd2452c31389139e3750402dedab"},{url:"assets/mroot.html-aa50c7e3.js",revision:"63e21a621d540f17c55db375ce8a85b9"},{url:"assets/mroot.html-aee8216d.js",revision:"530d05fc7612fa482d65b7ba4873094f"},{url:"assets/mroot.html-b49bcd32.js",revision:"64e2a0fa7ed982af8408fcf46127d8ff"},{url:"assets/mroot.html-bb947060.js",revision:"42f65b4bc20a5c8da549ea717b7c0a2b"},{url:"assets/mroot.html-c3a85617.js",revision:"cffe466755b0aba0ecac046557543be2"},{url:"assets/mroot.html-db1a4902.js",revision:"5a094deab91562a3230edb3d321b28d3"},{url:"assets/mroot.html-deb3d46d.js",revision:"a9d8bdc9fcb41ccdd14c0501d0d370b9"},{url:"assets/mroot.html-e8ac1caf.js",revision:"a0ee5f83b5fb1f6b7cb78ab96ee03f14"},{url:"assets/mroot.html-eb1ab178.js",revision:"02f0eb7babfabb2786ef7a114bbfab6e"},{url:"assets/provider.html-08b96b7d.js",revision:"60a345fd82a6c2adb4d76e71e5c2c3a4"},{url:"assets/provider.html-0fa9651c.js",revision:"fe5e929bda3277b04fbfb2b19c30b89a"},{url:"assets/provider.html-12d9d661.js",revision:"ebb24ff3ca85a90292d86822331215cd"},{url:"assets/provider.html-14e83d2d.js",revision:"38db9e162f0310742aefd1824bafd9b7"},{url:"assets/provider.html-1644b2cf.js",revision:"22d21fe106597fb52056802eb9643c8f"},{url:"assets/provider.html-4475b3b5.js",revision:"542ea709d29e0433a3d60206c5a2638d"},{url:"assets/provider.html-49fd72b5.js",revision:"07ff1976bf3497fd03d3cec6f3159975"},{url:"assets/provider.html-4ec2492c.js",revision:"1ed21090ab95c5dc1efd58f87d702ed0"},{url:"assets/provider.html-893bf988.js",revision:"52d7ea154463dc48f70e2168c5084a05"},{url:"assets/provider.html-89d052f2.js",revision:"20870379096120d5a2a4f0f95fa9885b"},{url:"assets/provider.html-94a88ce0.js",revision:"9f9b1e12ce3b910fcd78308010fca68e"},{url:"assets/provider.html-b1fc8821.js",revision:"7a616feb540d8eedbf036a3dacee0133"},{url:"assets/provider.html-d37a0827.js",revision:"16a699f293696b285eadc9190033869b"},{url:"assets/provider.html-d8783d71.js",revision:"94dcb63485b9ac424f5dc2bed1d023d4"},{url:"assets/provider.html-fab6daec.js",revision:"8e6a64d13ece250d6d87941ce12b18d2"},{url:"assets/provider.html-ff8bfe78.js",revision:"5636e2cfbe6f6bf66df6f6d2ecd6b161"},{url:"assets/schedules.html-01b2014b.js",revision:"624a7c7954e2cbe3af691671c32d41ed"},{url:"assets/schedules.html-030f8292.js",revision:"48f35ad634f7fc8a37c6018ef5354b1c"},{url:"assets/schedules.html-050a35e0.js",revision:"0941610e1a1baac0801a8ee63a567c0c"},{url:"assets/schedules.html-0c24fc44.js",revision:"0f6ada1cd24d66968ed2c44048af2209"},{url:"assets/schedules.html-126852d3.js",revision:"70b80ef7d5a556077ec637d46eee5104"},{url:"assets/schedules.html-13a04057.js",revision:"95c5dc7e3a35b710cf5c144c78ab4ea9"},{url:"assets/schedules.html-148f91a9.js",revision:"3ea8ce3b1b7056f0372cb1b2c6c668f8"},{url:"assets/schedules.html-253cccf7.js",revision:"541c6f027f17000d822a18fe4e0ce9d1"},{url:"assets/schedules.html-2fba695c.js",revision:"f0e0a30e371d1e647a904b653dd370b2"},{url:"assets/schedules.html-304510fb.js",revision:"0b3325a6242344ab4235b19d63645543"},{url:"assets/schedules.html-33ef8063.js",revision:"fa965e98c3aae624d4e7d715ecd31f9a"},{url:"assets/schedules.html-3457b76b.js",revision:"a866017d9141c65642925b0927be90b9"},{url:"assets/schedules.html-482d6d4b.js",revision:"a12cd7d3e6565a25a989b8cfe0e11e67"},{url:"assets/schedules.html-48e8c82f.js",revision:"31b66dea94f767f359616d70f0b85070"},{url:"assets/schedules.html-5e4ab6c8.js",revision:"6f08d674fcf091e403a70ff6f35212fa"},{url:"assets/schedules.html-630ecf8f.js",revision:"19df4be4cef34c3c6217226b1e878389"},{url:"assets/schedules.html-66e99b8e.js",revision:"8080aadc17c0c3c3672faba7d97cab58"},{url:"assets/schedules.html-6cd384f7.js",revision:"1133139e05b0ab56718d11c887bf9be0"},{url:"assets/schedules.html-7adc6b39.js",revision:"03ca1823ce15bc86288a59a2778d37c8"},{url:"assets/schedules.html-7b392271.js",revision:"365761ff5ebd67117a49b7d61b0fff23"},{url:"assets/schedules.html-7d6e8191.js",revision:"8ef12246d699bec82d2b198ca3299c11"},{url:"assets/schedules.html-7febab15.js",revision:"a4b0f92bc7e5e3e598d25f0cd18f1157"},{url:"assets/schedules.html-9409bfff.js",revision:"e1305cbd3d77919c58281f835a54be5a"},{url:"assets/schedules.html-978a2c40.js",revision:"ed04fba0f723772f9899777df2f379e9"},{url:"assets/schedules.html-9cfae836.js",revision:"669a174cf5a4ebad814f84af508a4e08"},{url:"assets/schedules.html-acb42aba.js",revision:"02da119d2bcb924c1a5c444e88f3c35e"},{url:"assets/schedules.html-dc404e4e.js",revision:"6862038d33f68215b569c77e4fb5d89b"},{url:"assets/schedules.html-deed5701.js",revision:"54be2e80dea93ae50560ce593fefefa2"},{url:"assets/schedules.html-e2dc05f6.js",revision:"79becbe4e7940b3a2826489afe27ed4c"},{url:"assets/schedules.html-e82e3deb.js",revision:"45a08d29a6f3370b31fbc49ef7baa33c"},{url:"assets/schedules.html-f43446e5.js",revision:"ca40935550e80b44efe8ebb0d15686fe"},{url:"assets/schedules.html-fde5a2fd.js",revision:"3d36b0e8508a7cd69558be1249337316"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/start-activity.html-1167c2b1.js",revision:"b90df1abbac606be07b9cfcff120deb4"},{url:"assets/start-activity.html-244e6c07.js",revision:"d91f8bee822a3caf9fbc5950100b9ef1"},{url:"assets/start-activity.html-2a2a923a.js",revision:"0ac30aa2a12df9f285ef655c6568e70d"},{url:"assets/start-activity.html-3c9807fa.js",revision:"21496bf15f9fdf4dd48a90212b0f9534"},{url:"assets/start-activity.html-477fc7c8.js",revision:"9d3b939c68d0096360912f5172462573"},{url:"assets/start-activity.html-61a0c84d.js",revision:"ff72152b46c403eeac4c80ebe081dc69"},{url:"assets/start-activity.html-6a05a3e4.js",revision:"a0e4a877798aaebc5c3c0ecdcf0de7db"},{url:"assets/start-activity.html-7961d614.js",revision:"74217cb275160d8c81bc37d0aaeb9542"},{url:"assets/start-activity.html-808c8bc8.js",revision:"86b5e310e2da90e3fcecac309babfdc7"},{url:"assets/start-activity.html-836876bc.js",revision:"0f6051acd3aa756662434c84bc7a4453"},{url:"assets/start-activity.html-b060ae9b.js",revision:"d0f99a4ceaba23cdf3e673ea61e815a7"},{url:"assets/start-activity.html-bfffb789.js",revision:"ea6bbde8c39a22678f348e23271ac643"},{url:"assets/start-activity.html-ea63f96b.js",revision:"54a92cfc7d6edc6b5733bbd34e2d2707"},{url:"assets/start-activity.html-f3aa9dcc.js",revision:"e9e4ba07f3c1e6a0d7a6fa1f64b50e55"},{url:"assets/start-activity.html-f5e0fdad.js",revision:"f1c56f60f52e07756981989f26176beb"},{url:"assets/start-activity.html-f76ba837.js",revision:"bd2c365062d9710213aee8f0f66a5dc6"},{url:"assets/style-5f6a1533.css",revision:"7652a88e91f2f94db9e15bdc76ede51d"},{url:"assets/uri.html-031280be.js",revision:"9371e0f49700f368a2f56904308f852b"},{url:"assets/uri.html-054415b5.js",revision:"3138691e27e142b1b7cccd44b0808cba"},{url:"assets/uri.html-26215d6e.js",revision:"4f7766ae5437170ea471563009a63d7b"},{url:"assets/uri.html-3584c2f8.js",revision:"6a000e975c13d10b8d388933e11bfb5b"},{url:"assets/uri.html-4918c4b9.js",revision:"3b6b5aa9d6ebbf74f5d1e3dad44823bc"},{url:"assets/uri.html-5e9d3d63.js",revision:"3aa64c561ef62b79f23323f8372484ed"},{url:"assets/uri.html-7a5f69c1.js",revision:"e8fcf1af889a6f7aec906a97828b3b95"},{url:"assets/uri.html-7dd9a3d7.js",revision:"04cc9b06feab917f22bbf9cc7d6ed7a4"},{url:"assets/uri.html-925fed75.js",revision:"26e0e392ad20b02681618a106d9eef57"},{url:"assets/uri.html-b41d5ca4.js",revision:"d5cecf6d7d98688c6275e8aba5effcf0"},{url:"assets/uri.html-b72f75a1.js",revision:"14ff0daa0e1ed90302b3af05151144f7"},{url:"assets/uri.html-d8190243.js",revision:"9111fe1893da545eb1bc58e369fe5085"},{url:"assets/uri.html-dd531fd1.js",revision:"1e06bfaf3add2d3c611a8af84767d153"},{url:"assets/uri.html-e6be0237.js",revision:"acbf9c5244f24c357af19dc6f9f11d75"},{url:"assets/uri.html-f55083d7.js",revision:"5112ade38ff18384aba8eb4c8a1da6bc"},{url:"assets/uri.html-fb973d08.js",revision:"8f8ae2c74acd32529558858d9949e4e3"},{url:"assets/warning.html-21e358af.js",revision:"725da2060b7bfac909549adf1c4fe36f"},{url:"assets/warning.html-30eea020.js",revision:"ae6dc7f15c41b317c51b15d3e56a788b"},{url:"assets/warning.html-3df29db5.js",revision:"a31fb0cab3dc12c4d5a53ad244670242"},{url:"assets/warning.html-4ad26b36.js",revision:"bb95a02d0245fa070d82d6869c5209fd"},{url:"assets/warning.html-59d81cc2.js",revision:"8909076601a0b3bd8029b59f775f0423"},{url:"assets/warning.html-620f9a57.js",revision:"83bc82fd0ef1522153aa3507e7513784"},{url:"assets/warning.html-78671a74.js",revision:"f165c9c87d9df2c580abeb71747193ad"},{url:"assets/warning.html-7cc776e8.js",revision:"f165c9c87d9df2c580abeb71747193ad"},{url:"assets/warning.html-887c3fc2.js",revision:"b0a661dc8f75d0181fc259fd594d4631"},{url:"assets/warning.html-a0478395.js",revision:"1ebfe15d2e25f63fb070e36e1b83625b"},{url:"assets/warning.html-a56e877b.js",revision:"b62a6623c5f078b1778bebd3a3fe567d"},{url:"assets/warning.html-bb24c602.js",revision:"b62a6623c5f078b1778bebd3a3fe567d"},{url:"assets/warning.html-cb074294.js",revision:"b62a6623c5f078b1778bebd3a3fe567d"},{url:"assets/warning.html-eb30429f.js",revision:"73e4ba0be6d881c912d413e0bee388d6"},{url:"assets/warning.html-ee794721.js",revision:"cbf9a51cbe7e98543324ee3db09d4e89"},{url:"assets/warning.html-f7d0ae84.js",revision:"b62a6623c5f078b1778bebd3a3fe567d"},{url:"en-US/about/contactUs.html",revision:"30f1c2d76b8def13bbb9b078612b1cbd"},{url:"en-US/api/index.html",revision:"dd9f1e432231608e75815a5fe31f43b9"},{url:"en-US/api/provider.html",revision:"43f5fb145ac1dce3d6dd5ece2cfe209a"},{url:"en-US/api/start-activity.html",revision:"cdc9bfe52335ac759ab37acf18eea101"},{url:"en-US/api/uri.html",revision:"4d03e5749b41f8653b1905edcc49e70d"},{url:"en-US/changelog/index.html",revision:"09ab79b803c5fb1f98eaf288bcd54238"},{url:"en-US/download/index.html",revision:"14b784982abe64c33d141b2e209447d0"},{url:"en-US/faq/daily.html",revision:"ccd713b486ec0968d8f3fa7738b32753"},{url:"en-US/faq/index.html",revision:"279022d96ce12188cb57c38c4520bff8"},{url:"en-US/faq/mroot.html",revision:"c2f18890ca2336384b4c2a72198f7026"},{url:"en-US/faq/schedules.html",revision:"1154e6242b4b42358740079d9ac14900"},{url:"en-US/guide/enable-mroot.html",revision:"10a2be13fe75e5c257acce31eab8674b"},{url:"en-US/guide/how-to-use.html",revision:"5775cab37ac2f88ce7c0eea32649fb2a"},{url:"en-US/guide/index.html",revision:"65b20e15863597d2768981cffc6a81b7"},{url:"en-US/guide/schedules.html",revision:"2cebc693313c364c14e28d0df8fc6cb8"},{url:"en-US/guide/warning.html",revision:"21a21a9212500b9f794888523368ff14"},{url:"en-US/index.html",revision:"168431c8a013fa74c7cf1ea2e6f4ca22"},{url:"en-US/thanks/index.html",revision:"eddfcc83248dbe33e27f4cd8442299bf"},{url:"index.html",revision:"fa4af6cf7c5a003da850ebba0fc99453"},{url:"pt-BR/about/contactUs.html",revision:"5124081a1717833830ef4c045c3eca35"},{url:"pt-BR/api/index.html",revision:"5a40eeb13afd7cdbbeacf907672ceb06"},{url:"pt-BR/api/provider.html",revision:"e99facf5b7ed2a627af44a2f26bba608"},{url:"pt-BR/api/start-activity.html",revision:"74851a9807af6af4d342e55ee622bd2b"},{url:"pt-BR/api/uri.html",revision:"200e195e4f6ae06782615f7575060cb8"},{url:"pt-BR/changelog/index.html",revision:"1bda77328ffc7d2eae3d0db1401d11fd"},{url:"pt-BR/download/index.html",revision:"e8c0f27a1c4aade5f675cbe14b3de577"},{url:"pt-BR/faq/daily.html",revision:"b7449b08252f95fb4b1bb0f20317fc42"},{url:"pt-BR/faq/index.html",revision:"dc0e42f788c5d8b5cac8f955b1158c3f"},{url:"pt-BR/faq/mroot.html",revision:"4529e69884ba8b7931be7406aeea286c"},{url:"pt-BR/faq/schedules.html",revision:"8ee87c18f96ccf2674643ed47d03bca0"},{url:"pt-BR/guide/enable-mroot.html",revision:"2ea6238347719e2b39dddadeca4e7721"},{url:"pt-BR/guide/how-to-use.html",revision:"0213dead1a753703b091552886008ae5"},{url:"pt-BR/guide/index.html",revision:"7e3313c669834c58c1861900b2fe3ce2"},{url:"pt-BR/guide/schedules.html",revision:"2a79092bcbf63ce7ea9a51521621a752"},{url:"pt-BR/guide/warning.html",revision:"10cc6784208390cae5e9e49ce0efe243"},{url:"pt-BR/index.html",revision:"89e1ac23e24054abff740527c6029e9f"},{url:"pt-BR/thanks/index.html",revision:"6d84efbb31c30a343ce59e64257ac577"},{url:"ru-RU/about/contactUs.html",revision:"0cdcb835b7f3e76958da2f401d014a0f"},{url:"ru-RU/api/index.html",revision:"625b5509496e74497ca04d0ad53a82c6"},{url:"ru-RU/api/provider.html",revision:"71d85e748869b3d87312ab66ad187a77"},{url:"ru-RU/api/start-activity.html",revision:"82999620461687de456ce27f4245ddf6"},{url:"ru-RU/api/uri.html",revision:"0ddeb11c1c496c827a89495a60c79e39"},{url:"ru-RU/changelog/index.html",revision:"4981a6dbba080d42d11c24b3bd6f76e0"},{url:"ru-RU/download/index.html",revision:"8c26d253b7f249e33d4f953934f21288"},{url:"ru-RU/faq/daily.html",revision:"1fe1f22197c677ebfd7c9d5e3c0a53ef"},{url:"ru-RU/faq/index.html",revision:"c7cfc5ae5a933a76f9ef2e3a5d35c15c"},{url:"ru-RU/faq/mroot.html",revision:"90d43c4ed45ee9906699827128225db2"},{url:"ru-RU/faq/schedules.html",revision:"9b29901868396e59d23a0f0cdb7be558"},{url:"ru-RU/guide/enable-mroot.html",revision:"5440ae1b410b13986bc460f776ce57cc"},{url:"ru-RU/guide/how-to-use.html",revision:"808ad80f29eae25d2af3b9145283acab"},{url:"ru-RU/guide/index.html",revision:"ad16cb8b8e5c6f2405260d3084a406e7"},{url:"ru-RU/guide/schedules.html",revision:"f73e3eabec8cc4aa88035e9208b58bbb"},{url:"ru-RU/guide/warning.html",revision:"dc95b6d839ea18866bed6e10e245caa5"},{url:"ru-RU/index.html",revision:"ec12ff6aca036e8c72d0ef8b7e11c6ee"},{url:"ru-RU/thanks/index.html",revision:"0025fb4f34b2a0cca501c3ac3990dc61"},{url:"ru-UA/about/contactUs.html",revision:"f15aa0abb1f912b67cd7457ed37d999f"},{url:"ru-UA/api/index.html",revision:"eac7e4150a7eb7dda0c93afd69168086"},{url:"ru-UA/api/provider.html",revision:"e43a3a3cabeeebf799c0dfda5594fe0e"},{url:"ru-UA/api/start-activity.html",revision:"634a0e444a39fc191a6bc4cd1cde1a1c"},{url:"ru-UA/api/uri.html",revision:"1fc4c67bf588d8c364a36f67441f4be5"},{url:"ru-UA/changelog/index.html",revision:"0b74a3f7f0ee173b361b659970e96071"},{url:"ru-UA/download/index.html",revision:"6a246d0285f714bcd122b41f57c1fb16"},{url:"ru-UA/faq/daily.html",revision:"e761c449027f7578b6dd9549dd0df45f"},{url:"ru-UA/faq/index.html",revision:"1cfc0d993f850e2c2cb6f58ed1a3fb9d"},{url:"ru-UA/faq/mroot.html",revision:"8bd052f63351c291ec925dd4da9ef409"},{url:"ru-UA/faq/schedules.html",revision:"a0648e337a509dac04482c9245b9eff5"},{url:"ru-UA/guide/enable-mroot.html",revision:"f431da385d4fec609e49ce7a12c3ff7e"},{url:"ru-UA/guide/how-to-use.html",revision:"980c9651dba4ca845f11d7d07681d7f9"},{url:"ru-UA/guide/index.html",revision:"9c033b2bbffdc5ddce8ae1037c7b5faa"},{url:"ru-UA/guide/schedules.html",revision:"8da4d2bec17af0ff3c16f4b8b13afe7d"},{url:"ru-UA/guide/warning.html",revision:"67abbd4bce3eb5b1f7b17679a728705b"},{url:"ru-UA/index.html",revision:"92e10be12e7cf3e51a244b75cd2ca3c9"},{url:"ru-UA/thanks/index.html",revision:"d996e7ab096ba79c90497be6b86bdf01"},{url:"tr-TR/about/contactUs.html",revision:"e567aef8617666b2cdb3a4b08ae1684b"},{url:"tr-TR/api/index.html",revision:"2544d00060174328d8dc2ed0e07dafc8"},{url:"tr-TR/api/provider.html",revision:"cf54a3cb5b5ad0dfef69636fa8d84121"},{url:"tr-TR/api/start-activity.html",revision:"a852b2096969ff0f93c60bec44e2f091"},{url:"tr-TR/api/uri.html",revision:"e41e1bde8c8328e8b8dd8f900fb052a5"},{url:"tr-TR/changelog/index.html",revision:"3622263af4d04fc2ff35a8bd1ae10136"},{url:"tr-TR/download/index.html",revision:"f5c0b1346dfb5d7c1ae7aea730394245"},{url:"tr-TR/faq/daily.html",revision:"e0b5cd44c59e37ec726df2ad4a0d47b4"},{url:"tr-TR/faq/index.html",revision:"610129587778d48608e39c6e36701a11"},{url:"tr-TR/faq/mroot.html",revision:"3ae868d86364ae5feb489adc7b1ab41b"},{url:"tr-TR/faq/schedules.html",revision:"8e3fbe9ee4bb8d00ff33fd9cf29b4eab"},{url:"tr-TR/guide/enable-mroot.html",revision:"dddf6998ee0afd65a040ac263f9a1dc1"},{url:"tr-TR/guide/how-to-use.html",revision:"d686ebeb34f18290fca8d641124756be"},{url:"tr-TR/guide/index.html",revision:"18cccfdf935b857e6c93c67b2820fd39"},{url:"tr-TR/guide/schedules.html",revision:"a0d8ed8bb8cd6bcb1e5c6f56285672d8"},{url:"tr-TR/guide/warning.html",revision:"9d44dae40755cb6489455be9c706e0ab"},{url:"tr-TR/index.html",revision:"187a48c78fc4f11b50f73cfe55720a5d"},{url:"tr-TR/thanks/index.html",revision:"3a9d544206049529a1fd05efdea27084"},{url:"uk-UA/about/contactUs.html",revision:"943dda7ea7f10b5ccb4303b6f7fc6c80"},{url:"uk-UA/api/index.html",revision:"520097e18655393b9510691889f10732"},{url:"uk-UA/api/provider.html",revision:"79d10b5cc1e861694ea582bfa0fcd9e5"},{url:"uk-UA/api/start-activity.html",revision:"e2563f7b0b98d963ceead5ddda303c8a"},{url:"uk-UA/api/uri.html",revision:"f350dc7318249f3e189e6f16fec592b7"},{url:"uk-UA/changelog/index.html",revision:"0066026a1b1a3ba2073ea438a6e29e42"},{url:"uk-UA/download/index.html",revision:"f8725cfcb4ee6507c1f2aa237f433e24"},{url:"uk-UA/faq/daily.html",revision:"2d71b572255fa6ca3b3e56ff3899b8f3"},{url:"uk-UA/faq/index.html",revision:"68c817f7deb36248a70d483cc3910a09"},{url:"uk-UA/faq/mroot.html",revision:"3b57ea4f0c5492b3e0c7be4dde0f1c3b"},{url:"uk-UA/faq/schedules.html",revision:"3dbc32ba320c5173b98d5c4c20e231ac"},{url:"uk-UA/guide/enable-mroot.html",revision:"e836145ec9f49dda3920f74ab6f75de1"},{url:"uk-UA/guide/how-to-use.html",revision:"4b10337c2bef83ee9b9356efb7e7e8ad"},{url:"uk-UA/guide/index.html",revision:"0d9e1bb3d7b1dcf22c5e5825fcf2728e"},{url:"uk-UA/guide/schedules.html",revision:"871651a4cbe6645dbe1e6fe90246f2f6"},{url:"uk-UA/guide/warning.html",revision:"1395f0ffd76c742b56d37a8b9b0bf8ef"},{url:"uk-UA/index.html",revision:"96a988ea1f552228a62311378a3f4705"},{url:"uk-UA/thanks/index.html",revision:"af27c7596ab66e9385f17005706b3488"},{url:"zh-CN/about/contactUs.html",revision:"4841218f34dfcb8e5cd6bc2f14a25f7c"},{url:"zh-CN/api/index.html",revision:"badcd975b7279beb146584dad6d98019"},{url:"zh-CN/api/provider.html",revision:"56af75817d4ae9960fa1a5e0c6362404"},{url:"zh-CN/api/start-activity.html",revision:"d16143de62730dccf0ed4f7c8180ef02"},{url:"zh-CN/api/uri.html",revision:"433cea0f4c233e96b689efec1b2f8416"},{url:"zh-CN/changelog/index.html",revision:"79fa22def2211463f5c8202341c92e19"},{url:"zh-CN/download/index.html",revision:"b3909095296aafed3fb110968c79abf4"},{url:"zh-CN/faq/daily.html",revision:"f454920caae0433359afc85d6416bdc9"},{url:"zh-CN/faq/index.html",revision:"973bff34eb051c605c63389b41f3df3a"},{url:"zh-CN/faq/mroot.html",revision:"c104160066b9db7df152d2b16f9a7edf"},{url:"zh-CN/faq/schedules.html",revision:"bf50e55b76e7a1d186a43ba3e42815f2"},{url:"zh-CN/guide/enable-mroot.html",revision:"dc17a12bd46cd15cd32306e82cb772b9"},{url:"zh-CN/guide/how-to-use.html",revision:"2d4f8c2d236c942a7bcee651b2673f38"},{url:"zh-CN/guide/index.html",revision:"f10ea6db8207ed6c9fd2569f5ce8caf5"},{url:"zh-CN/guide/schedules.html",revision:"3dd51dede5f569de30cf945d0d137607"},{url:"zh-CN/guide/warning.html",revision:"f8246037ca81ed9585b9cebb8d089f4c"},{url:"zh-CN/index.html",revision:"fe5872b7850f1e57b1b5e350111bc334"},{url:"zh-CN/thanks/index.html",revision:"3053c9ec6eebc2b5e043ea7f17602a73"},{url:"zh-TW/about/contactUs.html",revision:"98a5973e6915d836c1b672d6946e0b97"},{url:"zh-TW/api/index.html",revision:"67bb1c0440a2034faead2a46e24be1bc"},{url:"zh-TW/api/provider.html",revision:"a17ecb6378d41a980668008c4203241c"},{url:"zh-TW/api/start-activity.html",revision:"b0ccebb55db33d76bd6cd958fea2342b"},{url:"zh-TW/api/uri.html",revision:"f7aa7ba4ee45f78f161c9e612e26c017"},{url:"zh-TW/changelog/index.html",revision:"76db877b663c290044bdab6db39ad45b"},{url:"zh-TW/download/index.html",revision:"aa40cd09beecc36d001750b7fcf74ac1"},{url:"zh-TW/faq/daily.html",revision:"2fc37007974b8d793aece73450003d85"},{url:"zh-TW/faq/index.html",revision:"036064ef367bfa93ba2ba3a764517f43"},{url:"zh-TW/faq/mroot.html",revision:"c8fc610103524ce1f8acdc6f65fb9cd2"},{url:"zh-TW/faq/schedules.html",revision:"32983be14720752b40e6d29d8cfceefc"},{url:"zh-TW/guide/enable-mroot.html",revision:"5d3c8231482e69353af8045e5ef0415b"},{url:"zh-TW/guide/how-to-use.html",revision:"c0a82fc3634e149b6406feccf9a16754"},{url:"zh-TW/guide/index.html",revision:"130836fb816e6368f37ac4c1d2e1b384"},{url:"zh-TW/guide/schedules.html",revision:"5a36d366a5e9e04a676c33a5e3a5e71e"},{url:"zh-TW/guide/warning.html",revision:"4f93706ef0318972f058191ede650013"},{url:"zh-TW/index.html",revision:"a8625e49419dfea5fd1ebe5aa29e8be6"},{url:"zh-TW/thanks/index.html",revision:"c8842b17d5568bfa755e57214444816f"}],{})}));
