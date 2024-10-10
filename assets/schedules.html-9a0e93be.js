import{_ as r,r as n,o as h,c as m,b as e,e as a,w as i,d as o,a as d}from"./app-fd192d5b.js";const u={},p=e("h1",{id:"scheduled-task",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task","aria-hidden":"true"},"#"),o(" Scheduled Task")],-1),f={class:"table-of-contents"},b=e("h2",{id:"general-task-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#general-task-commands","aria-hidden":"true"},"#"),o(" General Task Commands")],-1),_=e("h3",{id:"available-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-commands","aria-hidden":"true"},"#"),o(" Available Commands")],-1),q=d("<li><code>okff</code> : One key freeze.</li><li><code>okuf</code> : One key unfreeze.</li><li><code>ff</code> : Freeze.</li><li><code>uf</code> : Unfreeze.</li><li><code>es</code> : Enable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>ds</code> : Disable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>st</code> : Show one toast.</li>",7),k=e("code",null,"sn",-1),g=e("li",null,[e("code",null,"sp"),o(" : Open the specified application.")],-1),x=e("li",null,[e("code",null,"su"),o(" : Open the specified application by URI.")],-1),y=e("code",null,"lg",-1),v=e("code",null,"ls",-1),Q=e("h3",{id:"additional-parameters-optional",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-parameters-optional","aria-hidden":"true"},"#"),o(" Additional Parameters(Optional)")],-1),w=e("code",null,"-d",-1),z=e("code",null,"seconds",-1),E=e("h3",{id:"internal-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal-variables","aria-hidden":"true"},"#"),o(" Internal Variables")],-1),R=e("code",null,"[ppkgn]",-1),O=e("code",null,"When Leave Applications",-1),W=e("code",null,"When Open Applications",-1),F=e("code",null,"st [ppkgn]",-1),A=e("code",null,"[cpkgn]",-1),X=e("code",null,"When Leave Applications",-1),C=e("code",null,"When Open Applications",-1),T=e("code",null,"When Unfreeze Applications",-1),U=e("code",null,"When Freeze Applications",-1),G=e("code",null,"st [cpkgn]",-1),I=d('<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><h4 id="okff" tabindex="-1"><a class="header-anchor" href="#okff" aria-hidden="true">#</a> okff</h4><ul><li><code>okff</code>: Execute one-key freeze immediately.</li></ul><h4 id="okuf" tabindex="-1"><a class="header-anchor" href="#okuf" aria-hidden="true">#</a> okuf</h4><ul><li><code>okuf</code>: Execute one-key unfreeze immediately.</li><li><code>okuf -d 10</code>: Delay 10 seconds to perform one-key unfreeze.</li></ul><h4 id="ff" tabindex="-1"><a class="header-anchor" href="#ff" aria-hidden="true">#</a> ff</h4><ul><li><code>ff com.tencent.mobileqq</code>: Freeze the application with package name <code>com.tencent.mobileqq</code> (QQ).</li><li><code>ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code>: Freeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and package names in alias <code>5oiR55qE5YiX6KGo</code>(My customization).</li><li><code>ff com.tencent.mobileqq,com.tencent.mm</code>: Freeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and <code>com.tencent.mm</code> (WeChat).</li><li><code>ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code>: Freeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and <code>com.tencent.mm</code> (WeChat) and <code>com.taobao.taobao</code> (TaoBao).</li><li><code>ff -d 3600 com.tencent.mobileqq</code>: Delay 3600 seconds to freeze app with package name <code>com.tencent.mobileqq</code> (QQ).</li></ul><h4 id="uf" tabindex="-1"><a class="header-anchor" href="#uf" aria-hidden="true">#</a> uf</h4><ul><li><code>uf com.tencent.mobileqq</code>: Unfreeze the application with package name <code>com.tencent.mobileqq</code> (QQ).</li><li><code>uf com.tencent.mobileqq,com.tencent.mm</code>: Unfreeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and <code>com.tencent.mm</code> (WeChat).</li><li><code>uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code>: Unfreeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and package names in alias <code>5oiR55qE5YiX6KGo</code>(My customization).</li><li><code>uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code>: Unfreeze the application with package name <code>com.tencent.mobileqq</code> (QQ) and <code>com.tencent.mm</code> (WeChat) and <code>com.taobao.taobao</code> (TaoBao).</li></ul><h4 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h4><ul><li><code>es wifi</code>: Enable Wi-Fi.</li><li><code>es -d 20 wifi</code>: Enable Wi-Fi after 20 seconds.</li><li><code>es wifi,cd</code>: Enable Wi-Fi and cellular data.</li><li><code>es wifi;okuf;uf com.tencent.mobileqq</code>: Enable WiFi and execute one-key unfreeze and unfreeze the application with package name <code>com.tencent.mobileqq</code> (QQ).</li></ul><h4 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> ds</h4><ul><li><code>ds wifi</code>: Disable Wi-Fi.</li><li><code>ds cd</code>: Disable cellular data.</li><li><code>ds wifi;okff</code>: Disable Wi-Fi and execute one-key freeze.</li><li><code>ds -d 15 wifi;okff</code>: Delay 15 seconds and then disable Wi-Fi and execute one-key freeze.</li></ul><h4 id="st" tabindex="-1"><a class="header-anchor" href="#st" aria-hidden="true">#</a> st</h4><ul><li><code>st Content</code>: Send one <code>Toast</code> with content <code>Content</code>.</li></ul><h4 id="sn" tabindex="-1"><a class="header-anchor" href="#sn" aria-hidden="true">#</a> sn</h4><ul><li><code>sn Title,Content</code>: Send one notification.</li></ul><h4 id="sp" tabindex="-1"><a class="header-anchor" href="#sp" aria-hidden="true">#</a> sp</h4><ul><li><code>sp com.tencent.mobileqq</code>: Open QQ (package name is <code>com.tencent.mobileqq</code>).</li><li><code>sp com.tencent.mobileqq,com.tencent.mm</code>: Open QQ and WeChat (package name is <code>com.tencent.mobileqq</code> and <code>com.tencent.mm</code>).</li></ul><h4 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h4>',20),L=e("code",null,"su [URI]",-1),S={href:"//www.urischeme.com",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("code",null,"su alipayqr://platformapi/startapp?saId=20000056"),o(": Open the Alipay payment code.")],-1),D=d('<h4 id="lg" tabindex="-1"><a class="header-anchor" href="#lg" aria-hidden="true">#</a> lg</h4><ul><li><code>lg 10086</code>: Output an ERROR level LOG with content 10086.</li></ul><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><ul><li><code>ls</code>: Lock the screen.</li></ul><h2 id="additional-parameters" tabindex="-1"><a class="header-anchor" href="#additional-parameters" aria-hidden="true">#</a> Additional Parameters</h2><h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h3><ul><li>Some triggers do not require additional parameters (if filled in, they will be ignored).</li><li>Some triggers can have additional parameters (optional).</li><li>Some triggers must provide additional parameters that meet the conditions, otherwise they cannot be executed normally.</li></ul><h3 id="parameter-requirements" tabindex="-1"><a class="header-anchor" href="#parameter-requirements" aria-hidden="true">#</a> Parameter Requirements</h3><ul><li><code>打开屏幕时</code> ：目前无附加参数。</li><li><code>关闭屏幕时</code> ：目前无附加参数。</li><li><code>打开应用时</code> ：<em><small><code>7.0及以前版本</code></small><em>必须附加 <code>应用包名</code> ；</em><small><code>自 7.0</code></small><em>可附加 <code>应用包名</code> 、 <code>我的列表</code></em><small><code>(V9.2)</code></small></em>，如无附加，则打开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>离开应用时</code> ：可附加 <code>应用包名</code> 、 <code>我的列表</code> <small><em><code>(V9.2)</code></em></small>，如无附加，则离开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>解冻应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则解冻任意应用程序均执行。</li><li><code>冻结应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则冻结任意应用程序均执行。</li></ul><h3 id="可用参数" tabindex="-1"><a class="header-anchor" href="#可用参数" aria-hidden="true">#</a> 可用参数</h3><ul><li><code>应用包名</code> ：例如 <code>com.tencent.mobileqq</code> 。</li><li><code>我的列表</code> ：例如 <code>@5oiR55qE5YiX6KGo</code> 。</li></ul><h3 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h3><ul><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq</code> ，则会在运行 <code>QQ</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,com.tencent.mm</code> ，则会在运行 <code>QQ</code> 或 <code>微信</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ，则会在运行 <code>QQ</code> 或 <code>存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>当前使用的桌面的包名</code> ，则会在 <strong>返回桌面</strong> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>离开应用时</code> ，附加参数不填写任何内容，则会在 <strong>离开任意应用程序</strong> 时执行预设置的 <code>任务</code> 。</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2>',14);function V(K,P){const c=n("router-link"),l=n("Badge"),t=n("ExternalLinkIcon"),s=n("RouterLink");return h(),m("div",null,[p,e("nav",f,[e("ul",null,[e("li",null,[a(c,{to:"#general-task-commands"},{default:i(()=>[o("General Task Commands")]),_:1}),e("ul",null,[e("li",null,[a(c,{to:"#available-commands"},{default:i(()=>[o("Available Commands")]),_:1})]),e("li",null,[a(c,{to:"#additional-parameters-optional"},{default:i(()=>[o("Additional Parameters(Optional)")]),_:1})]),e("li",null,[a(c,{to:"#internal-variables"},{default:i(()=>[o("Internal Variables")]),_:1})]),e("li",null,[a(c,{to:"#usage-example"},{default:i(()=>[o("Usage Example")]),_:1})])])]),e("li",null,[a(c,{to:"#additional-parameters"},{default:i(()=>[o("Additional Parameters")]),_:1}),e("ul",null,[e("li",null,[a(c,{to:"#tips"},{default:i(()=>[o("Tips")]),_:1})]),e("li",null,[a(c,{to:"#parameter-requirements"},{default:i(()=>[o("Parameter Requirements")]),_:1})]),e("li",null,[a(c,{to:"#可用参数"},{default:i(()=>[o("可用参数")]),_:1})]),e("li",null,[a(c,{to:"#使用实例"},{default:i(()=>[o("使用实例")]),_:1})])])]),e("li",null,[a(c,{to:"#faq"},{default:i(()=>[o("FAQ")]),_:1})])])]),b,_,e("ul",null,[q,e("li",null,[k,o(),a(l,{text:"8.6+",type:"tip"}),o(": Show one notification.")]),g,x,e("li",null,[y,o(),a(l,{text:"7.2+",type:"tip"}),o(": Print an ERROR level LOG. Under normal circumstances, there is no need to use it.")]),e("li",null,[v,o(),a(l,{text:"8.7+",type:"tip"}),o(": Lock screen.")])]),Q,e("ul",null,[e("li",null,[w,o(),a(l,{text:"7.2+",type:"tip"}),o(": Delay execution, in "),z,o(".")])]),E,e("ul",null,[e("li",null,[R,o(),a(l,{text:"7.4+",type:"tip"}),o(": The previous application package name. Only available when the trigger is "),O,o(", "),W,o(". Before formal use, you can use "),F,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")]),e("li",null,[A,o(),a(l,{text:"7.4+",type:"tip"}),o(": The current application package name. Only available when the trigger is "),X,o(", "),C,o(", "),T,o(", and "),U,o(". Before formal use, you can use "),G,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")])]),I,e("ul",null,[e("li",null,[L,o(": Try to open the specified URI (For reference: "),e("a",S,[o("URI Scheme"),a(t)]),o(").")]),B]),D,e("ul",null,[e("li",null,[a(s,{to:"/it-IT/faq/"},{default:i(()=>[o("FAQ")]),_:1})])])])}const N=r(u,[["render",V],["__file","schedules.html.vue"]]);export{N as default};