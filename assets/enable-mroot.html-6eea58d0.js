import{_ as c}from"./20180207104242-9491a6dd.js";import{_ as h,r as i,o as u,c as p,b as e,d as o,e as a,w as t,a as s}from"./app-91edffbd.js";const m={},f=s('<h1 id="habilitar-noroot" tabindex="-1"><a class="header-anchor" href="#habilitar-noroot" aria-hidden="true">#</a> Habilitar NoRoot</h1><p>Algumas funções precisam que essa permissão especial seja concedida antes que possam ser usadas normalmente, se não forem necessárias, isso pode ser ignorado diretamente.</p><h2 id="aviso-de-risco" tabindex="-1"><a class="header-anchor" href="#aviso-de-risco" aria-hidden="true">#</a> Aviso de risco</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>Ferramentas ADB (fornecidas abaixo)</li><li>Alguns códigos (fornecidos abaixo)</li><li>Versão do sistema do dispositivo Android 5.0+ e <code>FreezeYou</code><em>(última versão recomendada)</em> instalados</li></ul><h2 id="transferencia-do-arquivo" tabindex="-1"><a class="header-anchor" href="#transferencia-do-arquivo" aria-hidden="true">#</a> Transferência do arquivo</h2>',7),_={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),y=s("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>If wants to use <code>profile-owner</code> instead of <code>device-owner</code>, edit the <code>apply.xx</code> file, and replace the line <code>adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code> with <code>adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code>.</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",5),g=e("code",null,"正在尝试启用免ROOT模式......",-1),w=e("code",null,"Success:",-1),x={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"core-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#core-code","aria-hidden":"true"},"#"),o(" Core Code")],-1),R=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),z=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),A=s('<h2 id="captura-de-tela-da-operacao" tabindex="-1"><a class="header-anchor" href="#captura-de-tela-da-operacao" aria-hidden="true">#</a> Captura de tela da operação</h2><p><img src="'+c+'" alt="Captura de tela da operação"></p><h2 id="mais-informacoes" tabindex="-1"><a class="header-anchor" href="#mais-informacoes" aria-hidden="true">#</a> Mais informações</h2>',3),q={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"preciso-de-ajuda",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preciso-de-ajuda","aria-hidden":"true"},"#"),o(" Preciso de ajuda")],-1);function N(C,D){const r=i("ExternalLinkIcon"),n=i("RouterLink"),d=i("CodeGroupItem"),l=i("CodeGroup");return u(),p("div",null,[f,e("ul",null,[e("li",null,[o("Ferramenta ADB e pacote de código (formato .zip): "),e("a",_,[o("Link de transferência 1 (estação de origem)"),a(r)]),o(" | "),e("a",b,[o("Link de transferência 2 (Baidu Net Disk)"),a(r)])])]),v,e("ul",null,[y,e("li",null,[o("If the output below "),g,o(" contains "),w,o(", then most likely we succeeded. If not, we can go to "),a(n,{to:"/pt-BR/faq/mroot.html"},{default:t(()=>[o("NoRoot Faq")]),_:1}),o(" and various search engines to find solutions.")]),e("li",null,[o("Always fail? → "),a(n,{to:"/pt-BR/faq/mroot.html"},{default:t(()=>[o("NoRoot Faq")]),_:1})]),e("li",null,[o("Too complex? → "),e("a",x,[o("Use AutumnBox to enable FreezeYou NoRoot Mode"),a(r)])])]),k,a(l,null,{default:t(()=>[a(d,{title:"set-device-owner",active:""},{default:t(()=>[R]),_:1}),a(d,{title:"set-profile-owner"},{default:t(()=>[z]),_:1})]),_:1}),A,e("ul",null,[e("li",null,[e("a",q,[o("AutumnBox"),a(r)]),o(" agora tem suporte para habilitação rápida do modo FreezeYou NoRoot")])]),B,e("ul",null,[e("li",null,[a(n,{to:"/pt-BR/about/contactUs.html"},{default:t(()=>[o("Contact Us")]),_:1})])])])}const F=h(m,[["render",N],["__file","enable-mroot.html.vue"]]);export{F as default};