import{_ as c}from"./20180207104242-9491a6dd.js";import{_ as h,r as i,o as u,c as p,b as e,d as o,e as t,w as a,a as s}from"./app-91edffbd.js";const f={},m=s('<h1 id="enable-noroot" tabindex="-1"><a class="header-anchor" href="#enable-noroot" aria-hidden="true">#</a> Enable NoRoot</h1><p>Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.</p><h2 id="risk-warning" tabindex="-1"><a class="header-anchor" href="#risk-warning" aria-hidden="true">#</a> Risk Warning</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>ADB Tools (Provided below)</li><li>Some Codes (Provided below)</li><li>Device system version Android 5.0+ , and <code>FreezeYou</code><em>(latest version recommended)</em> installed</li></ul><h2 id="file-download" tabindex="-1"><a class="header-anchor" href="#file-download" aria-hidden="true">#</a> File Download</h2>',7),b={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},_={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),y=s("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>If wants to use <code>profile-owner</code> instead of <code>device-owner</code>, edit the <code>apply.xx</code> file, and replace the line <code>adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code> with <code>adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code>.</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",5),v=e("code",null,"正在尝试启用免ROOT模式......",-1),g=e("code",null,"Success:",-1),k={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"core-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#core-code","aria-hidden":"true"},"#"),o(" Core Code")],-1),z=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),R=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),A=s('<h2 id="operation-screenshot" tabindex="-1"><a class="header-anchor" href="#operation-screenshot" aria-hidden="true">#</a> Operation Screenshot</h2><p><img src="'+c+'" alt="Operation Screenshot"></p><h2 id="more-info" tabindex="-1"><a class="header-anchor" href="#more-info" aria-hidden="true">#</a> More Info</h2>',3),D={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"need-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),o(" Need Help")],-1);function S(I,T){const n=i("ExternalLinkIcon"),r=i("RouterLink"),l=i("CodeGroupItem"),d=i("CodeGroup");return u(),p("div",null,[m,e("ul",null,[e("li",null,[o("ADB Tool and Code Pack (.zip format) : "),e("a",b,[o("Download link 1 (Source station)"),t(n)]),o(" | "),e("a",_,[o("Download link 2 (Baidu Net Disk)"),t(n)])])]),w,e("ul",null,[y,e("li",null,[o("If the output below "),v,o(" contains "),g,o(", then most likely we succeeded. If not, we can go to "),t(r,{to:"/it-IT/faq/mroot.html"},{default:a(()=>[o("NoRoot Faq")]),_:1}),o(" and various search engines to find solutions.")]),e("li",null,[o("Always fail? → "),t(r,{to:"/it-IT/faq/mroot.html"},{default:a(()=>[o("NoRoot Faq")]),_:1})]),e("li",null,[o("Too complex? → "),e("a",k,[o("Use AutumnBox to enable FreezeYou NoRoot Mode"),t(n)])])]),x,t(d,null,{default:a(()=>[t(l,{title:"set-device-owner",active:""},{default:a(()=>[z]),_:1}),t(l,{title:"set-profile-owner"},{default:a(()=>[R]),_:1})]),_:1}),A,e("ul",null,[e("li",null,[e("a",D,[o("AutumnBox"),t(n)]),o(" now has support quick enable FreezeYou NoRoot mode")])]),N,e("ul",null,[e("li",null,[t(r,{to:"/it-IT/about/contactUs.html"},{default:a(()=>[o("Contact Us")]),_:1})])])])}const q=h(f,[["render",S],["__file","enable-mroot.html.vue"]]);export{q as default};
