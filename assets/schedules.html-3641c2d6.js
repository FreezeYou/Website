import{_ as h,r as t,o as r,c as u,b as e,e as c,w as d,d as o,a as n}from"./app-051e4104.js";const m={},f=e("h1",{id:"запланированные-задания",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#запланированные-задания","aria-hidden":"true"},"#"),o(" Запланированные задания")],-1),_={class:"table-of-contents"},b=e("h2",{id:"общие-команды-задач",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#общие-команды-задач","aria-hidden":"true"},"#"),o(" Общие команды задач")],-1),q=e("h3",{id:"доступные-команды",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#доступные-команды","aria-hidden":"true"},"#"),o(" Доступные команды")],-1),p=n("<li><code>okff</code> : OneKEY заморозка.</li><li><code>okuf</code> : OneKEY разморозка.</li><li><code>ff</code> : Заморозка.</li><li><code>uf</code> : Разморозка.</li><li><code>es</code> : включить один элемент настройки <small><em>(<code>wifi</code> доступен с версии 6.2, <code>cd</code> (мобильные данные) доступно с версии 7.1, <code>bluetooth</code> доступно с версии 7.3)</em></small>.</li><li><code>ds</code> : выключить один элемент настройки <small><em>(<code>wifi</code> доступен с версии 6.2, <code>cd</code> (мобильные данные) доступно с версии 7.1, <code>bluetooth</code> доступно с версии 7.3)</em></small>.</li><li><code>st</code> : Показать один тост.</li>",7),x=e("code",null,"sn",-1),k=e("li",null,[e("code",null,"sp"),o(" : Открыть указанное приложение.")],-1),Q=e("li",null,[e("code",null,"su"),o(" : Открыть указанное приложение по URI.")],-1),g=e("code",null,"lg",-1),w=e("code",null,"ls",-1),X=e("h3",{id:"дополнительные-параметры-необязательно",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#дополнительные-параметры-необязательно","aria-hidden":"true"},"#"),o(" Дополнительные параметры (необязательно)")],-1),R=e("code",null,"-d",-1),y=e("code",null,"секундах",-1),E=e("h3",{id:"внутренние-переменные",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#внутренние-переменные","aria-hidden":"true"},"#"),o(" Внутренние переменные")],-1),W=e("code",null,"[ppkgn]",-1),v=e("code",null,"When Leave Applications",-1),K=e("code",null,"When Open Applications",-1),Y=e("code",null,"st [ppkgn]",-1),F=e("code",null,"[cpkgn]",-1),G=e("code",null,"When Leave Applications",-1),L=e("code",null,"When Open Applications",-1),O=e("code",null,"When Unfreeze Applications",-1),A=e("code",null,"When Freeze Applications",-1),B=e("code",null,"st [cpkgn]",-1),U=n('<h3 id="примеры-использования" tabindex="-1"><a class="header-anchor" href="#примеры-использования" aria-hidden="true">#</a> Примеры использования</h3><h4 id="okff" tabindex="-1"><a class="header-anchor" href="#okff" aria-hidden="true">#</a> okff</h4><ul><li><code>okff</code> ：立即执行一键冻结。</li></ul><h4 id="okuf" tabindex="-1"><a class="header-anchor" href="#okuf" aria-hidden="true">#</a> okuf</h4><ul><li><code>okuf</code> ：立即执行一键解冻。</li><li><code>okuf -d 10</code> ：延后 10秒 执行一键解冻。</li></ul><h4 id="ff" tabindex="-1"><a class="header-anchor" href="#ff" aria-hidden="true">#</a> ff</h4><ul><li><code>ff com.tencent.mobileqq</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li><li><code>ff -d 3600 com.tencent.mobileqq</code> ：延后 3600秒 冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="uf" tabindex="-1"><a class="header-anchor" href="#uf" aria-hidden="true">#</a> uf</h4><ul><li><code>uf com.tencent.mobileqq</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li></ul><h4 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h4><ul><li><code>es wifi</code> ：启用 WiFi 。</li><li><code>es -d 20 wifi</code> ：延后 20秒 启用 WiFi 。</li><li><code>es wifi,cd</code> ：启用 WiFi 和 蜂窝移动数据网络 。</li><li><code>es wifi;okuf;uf com.tencent.mobileqq</code> ：启用 WiFi 、执行 一键解冻 并 解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> ds</h4><ul><li><code>ds wifi</code> ：关闭 WiFi 。</li><li><code>ds cd</code> ：关闭 蜂窝移动数据网络 。</li><li><code>ds wifi;okff</code> ：关闭 WiFi 并执行 一键冻结。</li><li><code>ds -d 15 wifi;okff</code> ：延后 15秒 关闭 WiFi 并 立即执行 一键冻结。</li></ul><h4 id="st" tabindex="-1"><a class="header-anchor" href="#st" aria-hidden="true">#</a> st</h4><ul><li><code>st 这是一条提示</code> ：显示一条 Toast 提示，内容为<code>这是一条提示</code>。</li></ul><h4 id="sn" tabindex="-1"><a class="header-anchor" href="#sn" aria-hidden="true">#</a> sn</h4><ul><li><code>sn 通知标题,通知内容</code> ：在通知栏显示一条通知。</li></ul><h4 id="sp" tabindex="-1"><a class="header-anchor" href="#sp" aria-hidden="true">#</a> sp</h4><ul><li><code>sp com.tencent.mobileqq</code> ：打开 QQ （包名为 <code>com.tencent.mobileqq</code> ）。</li><li><code>sp com.tencent.mobileqq,com.tencent.mm</code> ：打开 QQ 和 微信 （包名为 <code>com.tencent.mobileqq</code> 和 <code>com.tencent.mm</code> ）。</li></ul><h4 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h4>',20),V=e("code",null,"su [Uri]",-1),I={href:"//www.urischeme.com",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,[e("code",null,"su alipayqr://platformapi/startapp?saId=20000056"),o(" ：打开 支付宝 付款码。")],-1),T=n('<h4 id="lg" tabindex="-1"><a class="header-anchor" href="#lg" aria-hidden="true">#</a> lg</h4><ul><li><code>lg 10086</code> ：输出一条 ERROR 级别的 LOG ，内容为 10086 。</li></ul><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><ul><li><code>ls</code> ：锁定屏幕。</li></ul><h2 id="触发器附加参数" tabindex="-1"><a class="header-anchor" href="#触发器附加参数" aria-hidden="true">#</a> 触发器附加参数</h2><h3 id="使用前言" tabindex="-1"><a class="header-anchor" href="#使用前言" aria-hidden="true">#</a> 使用前言</h3><ul><li>部分触发器无须附加参数（如果填写会被忽略）。</li><li>部分触发器可以填写附加参数（非必须）。</li><li>部分触发器必须提供符合条件的附加参数，否则无法正常执行。</li></ul><h3 id="参数要求" tabindex="-1"><a class="header-anchor" href="#参数要求" aria-hidden="true">#</a> 参数要求</h3><ul><li><code>打开屏幕时</code> ：目前无附加参数。</li><li><code>关闭屏幕时</code> ：目前无附加参数。</li><li><code>打开应用时</code> ：<em><small><code>7.0及以前版本</code></small><em>必须附加 <code>应用包名</code> ；</em><small><code>自 7.0</code></small><em>可附加 <code>应用包名</code> 、 <code>我的列表</code></em><small><code>(V9.2)</code></small></em>，如无附加，则打开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>离开应用时</code> ：可附加 <code>应用包名</code> 、 <code>我的列表</code> <small><em><code>(V9.2)</code></em></small>，如无附加，则离开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>解冻应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则解冻任意应用程序均执行。</li><li><code>冻结应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则冻结任意应用程序均执行。</li></ul><h3 id="可用参数" tabindex="-1"><a class="header-anchor" href="#可用参数" aria-hidden="true">#</a> 可用参数</h3><ul><li><code>应用包名</code> ：例如 <code>com.tencent.mobileqq</code> 。</li><li><code>我的列表</code> ：例如 <code>@5oiR55qE5YiX6KGo</code> 。</li></ul><h3 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h3><ul><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq</code> ，则会在运行 <code>QQ</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,com.tencent.mm</code> ，则会在运行 <code>QQ</code> 或 <code>微信</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ，则会在运行 <code>QQ</code> 或 <code>存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>当前使用的桌面的包名</code> ，则会在 <strong>返回桌面</strong> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>离开应用时</code> ，附加参数不填写任何内容，则会在 <strong>离开任意应用程序</strong> 时执行预设置的 <code>任务</code> 。</li></ul><h2 id="чаво" tabindex="-1"><a class="header-anchor" href="#чаво" aria-hidden="true">#</a> ЧАВО</h2>',14);function z(C,S){const l=t("router-link"),i=t("Badge"),a=t("ExternalLinkIcon"),s=t("RouterLink");return r(),u("div",null,[f,e("nav",_,[e("ul",null,[e("li",null,[c(l,{to:"#общие-команды-задач"},{default:d(()=>[o("Общие команды задач")]),_:1}),e("ul",null,[e("li",null,[c(l,{to:"#доступные-команды"},{default:d(()=>[o("Доступные команды")]),_:1})]),e("li",null,[c(l,{to:"#дополнительные-параметры-необязательно"},{default:d(()=>[o("Дополнительные параметры (необязательно)")]),_:1})]),e("li",null,[c(l,{to:"#внутренние-переменные"},{default:d(()=>[o("Внутренние переменные")]),_:1})]),e("li",null,[c(l,{to:"#примеры-использования"},{default:d(()=>[o("Примеры использования")]),_:1})])])]),e("li",null,[c(l,{to:"#触发器附加参数"},{default:d(()=>[o("触发器附加参数")]),_:1}),e("ul",null,[e("li",null,[c(l,{to:"#使用前言"},{default:d(()=>[o("使用前言")]),_:1})]),e("li",null,[c(l,{to:"#参数要求"},{default:d(()=>[o("参数要求")]),_:1})]),e("li",null,[c(l,{to:"#可用参数"},{default:d(()=>[o("可用参数")]),_:1})]),e("li",null,[c(l,{to:"#使用实例"},{default:d(()=>[o("使用实例")]),_:1})])])]),e("li",null,[c(l,{to:"#чаво"},{default:d(()=>[o("ЧАВО")]),_:1})])])]),b,q,e("ul",null,[p,e("li",null,[x,o(),c(i,{text:"8.6+",type:"tip"}),o(": Показать одно уведомление.")]),k,Q,e("li",null,[g,o(),c(i,{text:"7.2+",type:"tip"}),o(": Распечатать ЖУРНАЛ уровня ОШИБКИ. В обычных условиях в его использовании нет необходимости.")]),e("li",null,[w,o(),c(i,{text:"8.7+",type:"tip"}),o(": блокировка экрана.")])]),X,e("ul",null,[e("li",null,[R,o(),c(i,{text:"7.2+",type:"tip"}),o(": задержка выполения в "),y,o(".")])]),E,e("ul",null,[e("li",null,[W,o(),c(i,{text:"7.4+",type:"tip"}),o(": The previous application package name. Only available when the trigger is "),v,o(", "),K,o(". Before formal use, you can use "),Y,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")]),e("li",null,[F,o(),c(i,{text:"7.4+",type:"tip"}),o(": The current application package name. Only available when the trigger is "),G,o(", "),L,o(", "),O,o(", and "),A,o(". Before formal use, you can use "),B,o(" in related tasks to learn about the relevant content to reduce the possibility of accidents.")])]),U,e("ul",null,[e("li",null,[V,o(" ：尝试打开指定的 Uri。（可参考："),e("a",I,[o("各应用 URL Scheme"),c(a)]),o("）")]),N]),T,e("ul",null,[e("li",null,[c(s,{to:"/ru-UA/faq/"},{default:d(()=>[o("ЧАВО")]),_:1})])])])}const D=h(m,[["render",z],["__file","schedules.html.vue"]]);export{D as default};
