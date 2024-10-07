import{_ as c,r as n,o as h,c as u,b as e,e as r,w as t,d as a,a as s}from"./app-fd192d5b.js";const _={},v=e("h1",{id:"免root-疑难解答",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#免root-疑难解答","aria-hidden":"true"},"#"),a(" 免ROOT - 疑难解答")],-1),p={class:"table-of-contents"},f=e("h2",{id:"提示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提示","aria-hidden":"true"},"#"),a(" 提示")],-1),m=s('<h2 id="adb-server-version-doesn-t-match-this-client" tabindex="-1"><a class="header-anchor" href="#adb-server-version-doesn-t-match-this-client" aria-hidden="true">#</a> adb server version doesn&#39;t match this client</h2><ul><li><strong>(仅限使用Windows系统的用户)</strong> 把解压后得到的adb文件，删去占用空间较大的那个(约2544KB)，再试试？</li><li>是否有PC端手机助手类软件占用了相关端口呢？可以先退出相关助手类软件（结束其PC端后台，含衍生内容）。</li></ul><h2 id="error-device-unauthorized" tabindex="-1"><a class="header-anchor" href="#error-device-unauthorized" aria-hidden="true">#</a> error: device unauthorized</h2><ul><li>请在被操作设备上点击确认允许操作。</li></ul><h2 id="java-lang-illegalstateexception-there-are-already-several-accounts" tabindex="-1"><a class="header-anchor" href="#java-lang-illegalstateexception-there-are-already-several-accounts" aria-hidden="true">#</a> java.lang.IllegalStateException: ... there are already several accounts ...</h2><ul><li>请检查您系统设置中账户中的账户是否全部删除了(需要全部删除，免ROOT启用后，可以再手动加回去)(实在删不掉的账户，可以试试断开网络连接以后删除，还不行的话可以试试先备份相关的应用数据以后卸载相关应用，成功后再恢复备份)，如果不清楚是哪个应用程序的账户没有清除干净，请在<code>“正在尝试启用免ROOT模式……”</code>上方，寻找<code>“当前设备账户信息：”</code>在<code>Accounts</code>组中，检查<code>type=</code>这一项，<code>=</code>后面的是应用程序包名，然后在 <strong>自冻 FreezeYou</strong> 列表中寻找该包名对应的程序即可获知账户来自哪个应用程序。</li><li>也可以尝试重启至<b>安全模式</b>（调出关机界面后，长按显示的“关机”按钮），再次尝试进行激活。</li></ul><h2 id="java-lang-illegalstateexception-there-are-already-several-users" tabindex="-1"><a class="header-anchor" href="#java-lang-illegalstateexception-there-are-already-several-users" aria-hidden="true">#</a> java.lang.IllegalStateException: ... there are already several users ...</h2>',7),g=e("code",null,"adb shell pm remove-user [USER_ID]",-1),x=e("h2",{id:"java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins","aria-hidden":"true"},"#"),a(" java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS")],-1),b=e("code",null,"USB调试",-1),y=e("code",null,"USB调试(安全设置)",-1),O={href:"https://www.miui.com/thread-5711795-1-1.html",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"好麻烦-有没有简单点的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#好麻烦-有没有简单点的","aria-hidden":"true"},"#"),a(" 好麻烦，有没有简单点的")],-1),j={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},S=s('<h2 id="激活以后-usb-调试之类的可以关掉吗" tabindex="-1"><a class="header-anchor" href="#激活以后-usb-调试之类的可以关掉吗" aria-hidden="true">#</a> 激活以后，USB 调试之类的可以关掉吗？</h2><ul><li>正常情况下是可以的（目前还没有收到关闭后失效或无法关闭的情况），同时为了安全考虑，也建议激活完成后<code>关闭 USB 调试</code>。</li></ul><h2 id="启用以后能否卸载" tabindex="-1"><a class="header-anchor" href="#启用以后能否卸载" aria-hidden="true">#</a> 启用以后能否卸载？</h2><ul><li>可以卸载，但可能需要先到 <code>更多设置</code> → <code>危险区</code> 点击 <code>解除免ROOT</code>，然后正常卸载即可。</li></ul><h2 id="更多疑难解答" tabindex="-1"><a class="header-anchor" href="#更多疑难解答" aria-hidden="true">#</a> 更多疑难解答</h2>',5),I=e("h2",{id:"需要更多帮助",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需要更多帮助","aria-hidden":"true"},"#"),a(" 需要更多帮助")],-1);function N(R,z){const l=n("router-link"),o=n("RouterLink"),d=n("Badge"),i=n("ExternalLinkIcon");return h(),u("div",null,[v,e("nav",p,[e("ul",null,[e("li",null,[r(l,{to:"#提示"},{default:t(()=>[a("提示")]),_:1})]),e("li",null,[r(l,{to:"#adb-server-version-doesn-t-match-this-client"},{default:t(()=>[a("adb server version doesn't match this client")]),_:1})]),e("li",null,[r(l,{to:"#error-device-unauthorized"},{default:t(()=>[a("error: device unauthorized")]),_:1})]),e("li",null,[r(l,{to:"#java-lang-illegalstateexception-there-are-already-several-accounts"},{default:t(()=>[a("java.lang.IllegalStateException: ... there are already several accounts ...")]),_:1})]),e("li",null,[r(l,{to:"#java-lang-illegalstateexception-there-are-already-several-users"},{default:t(()=>[a("java.lang.IllegalStateException: ... there are already several users ...")]),_:1})]),e("li",null,[r(l,{to:"#java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins"},{default:t(()=>[a("java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS")]),_:1})]),e("li",null,[r(l,{to:"#好麻烦-有没有简单点的"},{default:t(()=>[a("好麻烦，有没有简单点的")]),_:1})]),e("li",null,[r(l,{to:"#激活以后-usb-调试之类的可以关掉吗"},{default:t(()=>[a("激活以后，USB 调试之类的可以关掉吗？")]),_:1})]),e("li",null,[r(l,{to:"#启用以后能否卸载"},{default:t(()=>[a("启用以后能否卸载？")]),_:1})]),e("li",null,[r(l,{to:"#更多疑难解答"},{default:t(()=>[a("更多疑难解答")]),_:1})]),e("li",null,[r(l,{to:"#需要更多帮助"},{default:t(()=>[a("需要更多帮助")]),_:1})])])]),f,e("ul",null,[e("li",null,[a("如果想要启用免ROOT，但在来到这里之前还没有尝试过启用免ROOT，建议先前往"),r(o,{to:"/zh-CN/guide/enable-mroot.html"},{default:t(()=>[a("启用免ROOT")]),_:1}),a("。")])]),m,e("ul",null,[e("li",null,[a("请检查您系统设置中可见的其他用户是否已经删除了、分身应用是否已经关闭了(部分分身的实现利用的是 Android 自带的多用户功能，会影响免ROOT的启用)，如果还是失败，可以尝试 "),g,a(),r(d,{text:"该操作可能导致系统自带的分身功能无法正常使用",type:"error"}),a("。")])]),x,e("ul",null,[e("li",null,[a("在 "),b,a(" 下方 还有一个 "),y,a("，也需要打开，如果提示登录小米账号，请避免勾选 同步 项。"),e("a",O,[a("MIUI公告"),r(i)])])]),E,e("ul",null,[e("li",null,[e("a",j,[a("用 秋之盒 启用 自冻(FreezeYou) 免ROOT模式"),r(i)])])]),S,e("ul",null,[e("li",null,[r(o,{to:"/zh-CN/faq/"},{default:t(()=>[a("疑难解答")]),_:1})])]),I,e("ul",null,[e("li",null,[r(o,{to:"/zh-CN/about/contactUs.html"},{default:t(()=>[a("联系我们")]),_:1})])])])}const k=c(_,[["render",N],["__file","mroot.html.vue"]]);export{k as default};
