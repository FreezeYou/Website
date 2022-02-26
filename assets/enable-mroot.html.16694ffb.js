import{r,o as d,c as l,a as e,b as t,w as s,F as c,e as a,d as o}from"./app.8b179987.js";import{_ as h}from"./20180207104242.696221d5.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const u={},_=a('<h1 id="enable-noroot" tabindex="-1"><a class="header-anchor" href="#enable-noroot" aria-hidden="true">#</a> Enable NoRoot</h1><p>Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.</p><h2 id="risk-warning" tabindex="-1"><a class="header-anchor" href="#risk-warning" aria-hidden="true">#</a> Risk Warning</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>ADB Tools (Provided below)</li><li>Some Codes (Provided below)</li><li>Device system version Android 5.0+ , and <code>FreezeYou</code><em>(latest version recommended)</em> installed</li></ul><h2 id="file-download" tabindex="-1"><a class="header-anchor" href="#file-download" aria-hidden="true">#</a> File Download</h2>',7),m=o("ADB Tool and Code Pack (.zip format) : "),f={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},b=o("Download link 1 (Source station)"),y=o(" | "),w={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},k=o("Download link 2 (Baidu Net Disk)"),g=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),v=a("<li>\u627E\u5230\u8BBE\u5907\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u7684<code>\u5F00\u53D1\u8005\u9009\u9879</code>\uFF08\u6CA1\u6709\u7684\u53EF\u4EE5\u8BD5\u8BD5\u591A\u70B9\u51E0\u4E0B<code>\u5173\u4E8E\u624B\u673A</code>\uFF0C\u6216\u641C\u7D22<code>&quot;\u60A8\u7684\u8BBE\u5907\u578B\u53F7&quot; + \u5F00\u53D1\u8005\u9009\u9879</code>\uFF09</li><li>\u5F00\u542F<code>\u5F00\u53D1\u8005\u9009\u9879</code>\u4E2D\u7684<code>Android \u8C03\u8BD5</code>\u6216<code>USB \u8C03\u8BD5</code>\u5E76\u5C06\u8BBE\u5907\u4E0E\u5177\u5907 ADB \u5DE5\u5177\u7684\u8BA1\u7B97\u673A\u8FDE\u63A5</li><li>\u5B8C\u6574\u89E3\u538B\u7F29\u5148\u524D\u4E0B\u8F7D\u7684\u538B\u7F29\u5305\uFF08.zip \u683C\u5F0F\uFF09</li><li>Linux\u7528\u6237\u6267\u884C\u89E3\u538B\u540E\u7684<code>apply.sh</code>\uFF0CWindows \u7528\u6237\u6267\u884C\u89E3\u538B\u540E\u7684<code>apply.cmd</code>\u6216<code>apply</code></li>",4),x=o("\u5982\u679C"),z=e("code",null,"\u6B63\u5728\u5C1D\u8BD5\u542F\u7528\u514DROOT\u6A21\u5F0F......",-1),A=o("\u4E0B\u65B9\u7684\u63D0\u793A\u5305\u542B"),R=e("code",null,"Success:",-1),S=o("\uFF0C\u5E94\u8BE5\u5C31\u6210\u529F\u4E86\u3002\u5982\u679C\u6CA1\u6709\u6210\u529F\uFF0C\u53EF\u4EE5\u524D\u5F80"),q=o("\u514DROOT\u7591\u96BE\u89E3\u7B54"),N=o("\u5BFB\u627E\u76F8\u5E94\u7684\u7C7B\u4F3C\u60C5\u51B5\u7684\u89E3\u51B3\u65B9\u6848\u5C1D\u8BD5\u89E3\u51B3\u3002"),B=o("Always fail? \u2192 "),O=o("NoRoot Faq"),T=o("Too complex? \u2192 "),D={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},F=o("Use AutumnBox to enable FreezeYou NoRoot Mode"),C=a('<h2 id="operation-screenshot" tabindex="-1"><a class="header-anchor" href="#operation-screenshot" aria-hidden="true">#</a> Operation Screenshot</h2><p><img src="'+h+'" alt="Operation Screenshot"></p><h2 id="more-info" tabindex="-1"><a class="header-anchor" href="#more-info" aria-hidden="true">#</a> More Info</h2>',3),I=e("li",null,[o("Core Code: "),e("code",null,"adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver")],-1),L={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},M=o("AutumnBox"),U=o(" now has support quick enable FreezeYou NoRoot mode"),E=e("h2",{id:"need-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),o(" Need Help")],-1),V={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},P=o("Join QQ Group");function Y(j,H){const n=r("ExternalLinkIcon"),i=r("RouterLink");return d(),l(c,null,[_,e("ul",null,[e("li",null,[m,e("a",f,[b,t(n)]),y,e("a",w,[k,t(n)])])]),g,e("ul",null,[v,e("li",null,[x,z,A,R,S,t(i,{to:"/uk-UA/faq/mroot.html"},{default:s(()=>[q]),_:1}),N]),e("li",null,[B,t(i,{to:"/uk-UA/faq/mroot.html"},{default:s(()=>[O]),_:1})]),e("li",null,[T,e("a",D,[F,t(n)])])]),C,e("ul",null,[I,e("li",null,[e("a",L,[M,t(n)]),U])]),E,e("ul",null,[e("li",null,[e("a",V,[P,t(n)])])])],64)}var J=p(u,[["render",Y]]);export{J as default};
