import{_ as r,r as a,o as h,c as u,b as e,e as c,w as l,d as o,a as n}from"./app-051e4104.js";const m={},f=e("h1",{id:"scheduled-task",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task","aria-hidden":"true"},"#"),o(" Scheduled Task")],-1),_={class:"table-of-contents"},b=e("h2",{id:"general-task-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#general-task-commands","aria-hidden":"true"},"#"),o(" General Task Commands")],-1),p=e("h3",{id:"available-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-commands","aria-hidden":"true"},"#"),o(" Available Commands")],-1),q=n("<li><code>okff</code> : One key freeze.</li><li><code>okuf</code> : One key unfreeze.</li><li><code>ff</code> : Freeze.</li><li><code>uf</code> : Unfreeze.</li><li><code>es</code> : Enable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>ds</code> : Disable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>st</code> : Show one toast.</li>",7),x=e("code",null,"sn",-1),k=e("li",null,[e("code",null,"sp"),o(" : Open the specified application.")],-1),Q=e("li",null,[e("code",null,"su"),o(" : Open the specified application by URI.")],-1),g=e("code",null,"lg",-1),v=e("code",null,"ls",-1),w=e("h3",{id:"additional-parameters-optional",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-parameters-optional","aria-hidden":"true"},"#"),o(" Additional Parameters(Optional)")],-1),R=e("code",null,"-d",-1),y=e("code",null,"seconds",-1),E=e("h3",{id:"internal-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal-variables","aria-hidden":"true"},"#"),o(" Internal Variables")],-1),X=e("code",null,"[ppkgn]",-1),O=e("code",null,"When Leave Applications",-1),A=e("code",null,"When Open Applications",-1),W=e("code",null,"st [ppkgn]",-1),F=e("code",null,"[cpkgn]",-1),G=e("code",null,"When Leave Applications",-1),L=e("code",null,"When Open Applications",-1),U=e("code",null,"When Unfreeze Applications",-1),T=e("code",null,"When Freeze Applications",-1),V=e("code",null,"st [cpkgn]",-1),B=n('<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><h4 id="okff" tabindex="-1"><a class="header-anchor" href="#okff" aria-hidden="true">#</a> okff</h4><ul><li><code>okff</code> ：立即执行一键冻结。</li></ul><h4 id="okuf" tabindex="-1"><a class="header-anchor" href="#okuf" aria-hidden="true">#</a> okuf</h4><ul><li><code>okuf</code> ：立即执行一键解冻。</li><li><code>okuf -d 10</code> ：延后 10秒 执行一键解冻。</li></ul><h4 id="ff" tabindex="-1"><a class="header-anchor" href="#ff" aria-hidden="true">#</a> ff</h4><ul><li><code>ff com.tencent.mobileqq</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li><li><code>ff -d 3600 com.tencent.mobileqq</code> ：延后 3600秒 冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="uf" tabindex="-1"><a class="header-anchor" href="#uf" aria-hidden="true">#</a> uf</h4><ul><li><code>uf com.tencent.mobileqq</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li></ul><h4 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h4><ul><li><code>es wifi</code> ：启用 WiFi 。</li><li><code>es -d 20 wifi</code> ：延后 20秒 启用 WiFi 。</li><li><code>es wifi,cd</code> ：启用 WiFi 和 蜂窝移动数据网络 。</li><li><code>es wifi;okuf;uf com.tencent.mobileqq</code> ：启用 WiFi 、执行 一键解冻 并 解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> ds</h4><ul><li><code>ds wifi</code> ：关闭 WiFi 。</li><li><code>ds cd</code> ：关闭 蜂窝移动数据网络 。</li><li><code>ds wifi;okff</code> ：关闭 WiFi 并执行 一键冻结。</li><li><code>ds -d 15 wifi;okff</code> ：延后 15秒 关闭 WiFi 并 立即执行 一键冻结。</li></ul><h4 id="st" tabindex="-1"><a class="header-anchor" href="#st" aria-hidden="true">#</a> st</h4><ul><li><code>st 这是一条提示</code> ：显示一条 Toast 提示，内容为<code>这是一条提示</code>。</li></ul><h4 id="sn" tabindex="-1"><a class="header-anchor" href="#sn" aria-hidden="true">#</a> sn</h4><ul><li><code>sn 通知标题,通知内容</code> ：在通知栏显示一条通知。</li></ul><h4 id="sp" tabindex="-1"><a class="header-anchor" href="#sp" aria-hidden="true">#</a> sp</h4><ul><li><code>sp com.tencent.mobileqq</code> ：打开 QQ （包名为 <code>com.tencent.mobileqq</code> ）。</li><li><code>sp com.tencent.mobileqq,com.tencent.mm</code> ：打开 QQ 和 微信 （包名为 <code>com.tencent.mobileqq</code> 和 <code>com.tencent.mm</code> ）。</li></ul><h4 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h4>',20),K=e("code",null,"su [Uri]",-1),Y={href:"//www.urischeme.com",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,[e("code",null,"su alipayqr://platformapi/startapp?saId=20000056"),o(" ：打开 支付宝 付款码。")],-1),C=n('<h4 id="lg" tabindex="-1"><a class="header-anchor" href="#lg" aria-hidden="true">#</a> lg</h4><ul><li><code>lg 10086</code> ：输出一条 ERROR 级别的 LOG ，内容为 10086 。</li></ul><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><ul><li><code>ls</code> ：锁定屏幕。</li></ul><h2 id="触发器附加参数" tabindex="-1"><a class="header-anchor" href="#触发器附加参数" aria-hidden="true">#</a> 触发器附加参数</h2><h3 id="使用前言" tabindex="-1"><a class="header-anchor" href="#使用前言" aria-hidden="true">#</a> 使用前言</h3><ul><li>部分触发器无须附加参数（如果填写会被忽略）。</li><li>部分触发器可以填写附加参数（非必须）。</li><li>部分触发器必须提供符合条件的附加参数，否则无法正常执行。</li></ul><h3 id="参数要求" tabindex="-1"><a class="header-anchor" href="#参数要求" aria-hidden="true">#</a> 参数要求</h3><ul><li><code>打开屏幕时</code> ：目前无附加参数。</li><li><code>关闭屏幕时</code> ：目前无附加参数。</li><li><code>打开应用时</code> ：<em><small><code>7.0及以前版本</code></small><em>必须附加 <code>应用包名</code> ；</em><small><code>自 7.0</code></small><em>可附加 <code>应用包名</code> 、 <code>我的列表</code></em><small><code>(V9.2)</code></small></em>，如无附加，则打开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>离开应用时</code> ：可附加 <code>应用包名</code> 、 <code>我的列表</code> <small><em><code>(V9.2)</code></em></small>，如无附加，则离开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>解冻应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则解冻任意应用程序均执行。</li><li><code>冻结应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则冻结任意应用程序均执行。</li></ul><h3 id="可用参数" tabindex="-1"><a class="header-anchor" href="#可用参数" aria-hidden="true">#</a> 可用参数</h3><ul><li><code>应用包名</code> ：例如 <code>com.tencent.mobileqq</code> 。</li><li><code>我的列表</code> ：例如 <code>@5oiR55qE5YiX6KGo</code> 。</li></ul><h3 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h3><ul><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq</code> ，则会在运行 <code>QQ</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,com.tencent.mm</code> ，则会在运行 <code>QQ</code> 或 <code>微信</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ，则会在运行 <code>QQ</code> 或 <code>存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>当前使用的桌面的包名</code> ，则会在 <strong>返回桌面</strong> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>离开应用时</code> ，附加参数不填写任何内容，则会在 <strong>离开任意应用程序</strong> 时执行预设置的 <code>任务</code> 。</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2>',14);function I(S,N){const d=a("router-link"),i=a("Badge"),t=a("ExternalLinkIcon"),s=a("RouterLink");return h(),u("div",null,[f,e("nav",_,[e("ul",null,[e("li",null,[c(d,{to:"#general-task-commands"},{default:l(()=>[o("General Task Commands")]),_:1}),e("ul",null,[e("li",null,[c(d,{to:"#available-commands"},{default:l(()=>[o("Available Commands")]),_:1})]),e("li",null,[c(d,{to:"#additional-parameters-optional"},{default:l(()=>[o("Additional Parameters(Optional)")]),_:1})]),e("li",null,[c(d,{to:"#internal-variables"},{default:l(()=>[o("Internal Variables")]),_:1})]),e("li",null,[c(d,{to:"#usage-example"},{default:l(()=>[o("Usage Example")]),_:1})])])]),e("li",null,[c(d,{to:"#触发器附加参数"},{default:l(()=>[o("触发器附加参数")]),_:1}),e("ul",null,[e("li",null,[c(d,{to:"#使用前言"},{default:l(()=>[o("使用前言")]),_:1})]),e("li",null,[c(d,{to:"#参数要求"},{default:l(()=>[o("参数要求")]),_:1})]),e("li",null,[c(d,{to:"#可用参数"},{default:l(()=>[o("可用参数")]),_:1})]),e("li",null,[c(d,{to:"#使用实例"},{default:l(()=>[o("使用实例")]),_:1})])])]),e("li",null,[c(d,{to:"#faq"},{default:l(()=>[o("FAQ")]),_:1})])])]),b,p,e("ul",null,[q,e("li",null,[x,o(),c(i,{text:"8.6+",type:"tip"}),o(": Show one notification.")]),k,Q,e("li",null,[g,o(),c(i,{text:"7.2+",type:"tip"}),o(": Print an ERROR level LOG. Under normal circumstances, there is no need to use it.")]),e("li",null,[v,o(),c(i,{text:"8.7+",type:"tip"}),o(": Lock screen.")])]),w,e("ul",null,[e("li",null,[R,o(),c(i,{text:"7.2+",type:"tip"}),o(": Delay execution, in "),y,o(".")])]),E,e("ul",null,[e("li",null,[X,o(),c(i,{text:"7.4+",type:"tip"}),o(": The previous application package name. Only available when the trigger is "),O,o(", "),A,o(". Before formal use, you can use "),W,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")]),e("li",null,[F,o(),c(i,{text:"7.4+",type:"tip"}),o(": The current application package name. Only available when the trigger is "),G,o(", "),L,o(", "),U,o(", and "),T,o(". Before formal use, you can use "),V,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")])]),B,e("ul",null,[e("li",null,[K,o(" ：尝试打开指定的 Uri。（可参考："),e("a",Y,[o("各应用 URL Scheme"),c(t)]),o("）")]),z]),C,e("ul",null,[e("li",null,[c(s,{to:"/tr-TR/faq/"},{default:l(()=>[o("FAQ")]),_:1})])])])}const D=r(m,[["render",I],["__file","schedules.html.vue"]]);export{D as default};
