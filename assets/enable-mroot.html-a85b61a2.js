import{_ as s}from"./20180207104242-9491a6dd.js";import{_ as h,r as d,o as u,c as _,b as e,d as o,e as a,w as t,a as n}from"./app-ed572c69.js";const p={},f=n('<h1 id="启用免root" tabindex="-1"><a class="header-anchor" href="#启用免root" aria-hidden="true">#</a> 启用免ROOT</h1><p>部分功能需要授予该特殊权限才可正常使用，如无需要则可直接跳过。</p><h2 id="风险提示" tabindex="-1"><a class="header-anchor" href="#风险提示" aria-hidden="true">#</a> 风险提示</h2><ul><li>目前已累计收到两例用户反馈，反应出现启用免ROOT后设备图形锁（图案密码）无端发生变化导致无法解锁的情况，目前仍未查明原因，其中一台设备为 Samsung S7 edge 原厂系统 ，另一台情况不明（疑似同为 Samsung 设备）。因此，如有重要资料请各位在操作前备份，以防意外情况发生导致不必要的麻烦。</li><li>鉴于这部分 Samsung 设备发生的问题，建议启用前先关闭图形锁、密码锁等类似内容。</li><li>在启用免ROOT后，冻结应用（尤其是系统应用）前，请注意，某些系统某些情况下在对个别应用执行冻结操作后会导致系统出现一些异常——比如莫名卡顿、无法正常开机等问题。因此，请尽可能的在一定安全限度内进行操作以确保操作安全，避免产生不必要的麻烦。</li><li>某些设备某些系统在启用免ROOT后会导致系统自带的应用多开、应用分身无法正常使用（我们收集到的数据反应主要集中在 Android 8.0 系统中，非系统应用的第三方应用提供的分身、多开未见受此影响）。</li></ul><h2 id="所需材料" tabindex="-1"><a class="header-anchor" href="#所需材料" aria-hidden="true">#</a> 所需材料</h2><ul><li>ADB工具（下方提供）</li><li>一些代码（下方提供）</li><li>系统版本不小于 Android 5.0 且已安装最新版<code>自冻FreezeYou</code>的设备（自备）</li></ul><h2 id="资料下载" tabindex="-1"><a class="header-anchor" href="#资料下载" aria-hidden="true">#</a> 资料下载</h2>',7),m={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"操作方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#操作方法","aria-hidden":"true"},"#"),o(" 操作方法")],-1),O=n("<li>找到设备系统设置中的<code>开发者选项</code>（没有的可以试试多点几下<code>关于手机</code>，或搜索<code>&quot;您的设备型号&quot; + 开发者选项</code>）</li><li>开启<code>开发者选项</code>中的<code>Android 调试</code>或<code>USB 调试</code>并将设备与具备 ADB 工具的计算机连接</li><li>完整解压缩先前下载的压缩包（.zip 格式）</li><li>如果想使用 <code>profile-owners</code> 而不是 <code>device-owners</code>，编辑<code>apply.xx</code> 文件，并使用 <code>adb shell dpm set-profile-owners cf.playhi.freezeyou/.DeviceAdminReceiver</code> 替换 <code>adb shell dpm set-device-owners</code> 这一行。</li><li>Linux用户执行解压后的<code>apply.sh</code>，Windows 用户执行解压后的<code>apply.cmd</code>或<code>apply</code></li>",5),g=e("code",null,"正在尝试启用免ROOT模式......",-1),w=e("code",null,"Success:",-1),v={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"核心代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#核心代码","aria-hidden":"true"},"#"),o(" 核心代码")],-1),R=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),y=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),k=n('<h2 id="操作截图" tabindex="-1"><a class="header-anchor" href="#操作截图" aria-hidden="true">#</a> 操作截图</h2><p><img src="'+s+'" alt="操作截图"></p><h2 id="更多资料" tabindex="-1"><a class="header-anchor" href="#更多资料" aria-hidden="true">#</a> 更多资料</h2>',3),A={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"需要帮助",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需要帮助","aria-hidden":"true"},"#"),o(" 需要帮助")],-1);function C(N,B){const r=d("ExternalLinkIcon"),l=d("RouterLink"),i=d("CodeGroupItem"),c=d("CodeGroup");return u(),_("div",null,[f,e("ul",null,[e("li",null,[o("ADB 工具与代码包（.zip 格式）： "),e("a",m,[o("下载地址1(源站)"),a(r)]),o(" | "),e("a",b,[o("下载地址2(百度网盘)"),a(r)])])]),x,e("ul",null,[O,e("li",null,[o("如果"),g,o("下方的提示包含"),w,o("，应该就成功了。如果没有成功，可以前往"),a(l,{to:"/zh-CN/faq/mroot.html"},{default:t(()=>[o("免ROOT疑难解答")]),_:1}),o("寻找相应的类似情况的解决方案尝试解决。")]),e("li",null,[o("总是失败？ → "),a(l,{to:"/zh-CN/faq/mroot.html"},{default:t(()=>[o("免ROOT疑难解答")]),_:1})]),e("li",null,[o("太过复杂？ → "),e("a",v,[o("用 秋之盒 启用 自冻(FreezeYou) 免ROOT模式"),a(r)])])]),z,a(c,null,{default:t(()=>[a(i,{title:"set-device-owner",active:""},{default:t(()=>[R]),_:1}),a(i,{title:"set-profile-owner"},{default:t(()=>[y]),_:1})]),_:1}),k,e("ul",null,[e("li",null,[e("a",A,[o("秋之盒"),a(r)]),o(" 现已支持便捷启用 自冻(FreezeYou) 免ROOT模式。")])]),T,e("ul",null,[e("li",null,[a(l,{to:"/zh-CN/about/contactUs.html"},{default:t(()=>[o("联系我们")]),_:1})])])])}const L=h(p,[["render",C],["__file","enable-mroot.html.vue"]]);export{L as default};