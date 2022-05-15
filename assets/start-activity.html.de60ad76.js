import{_ as c,r as i,o as r,c as u,b as a,d as n,w as s,F as d,e,a as o}from"./app.c6aa898b.js";const p={},h=a("h1",{id:"\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F","aria-hidden":"true"},"#"),e(" \u901A\u8FC7 startActivity \u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F")],-1),_={class:"table-of-contents"},m=e("\u6388\u6743\u8303\u56F4"),f=e("\u5982\u4F55\u4F7F\u7528"),x=e("\u58F0\u660E\u6743\u9650"),k=e("\u041F\u0440\u0438\u043C\u0435\u0440\u044B"),v=e("\u0427\u0410\u0412\u041E"),g=e("ActivityNotFoundException"),b=e("SecurityException"),y=e("\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"),A=e("\u041D\u0443\u0436\u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C?"),E=o(`<h2 id="\u6388\u6743\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743\u8303\u56F4" aria-hidden="true">#</a> \u6388\u6743\u8303\u56F4</h2><ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868\u3001\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528\u3001\u8FDB\u884C\u89E3\u51BB\u5E94\u7528\u3002</li></ul><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><h3 id="\u58F0\u660E\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6743\u9650" aria-hidden="true">#</a> \u58F0\u660E\u6743\u9650</h3><ul><li>\u9700\u8981\u5728<code>AndroidManifest.xml</code>\u4E2D\u58F0\u660E\u6743\u9650\uFF08\u6309\u9700\u7533\u8BF7\uFF09 <ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u8FDB\u884C\u89E3\u51BB\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u043F\u0440\u0438\u043C\u0435\u0440\u044B" tabindex="-1"><a class="header-anchor" href="#\u043F\u0440\u0438\u043C\u0435\u0440\u044B" aria-hidden="true">#</a> \u041F\u0440\u0438\u043C\u0435\u0440\u044B</h2>`,6),q={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},I=e("FreezeYouApiTest"),L=o('<h2 id="\u0447\u0430\u0432\u043E" tabindex="-1"><a class="header-anchor" href="#\u0447\u0430\u0432\u043E" aria-hidden="true">#</a> \u0427\u0410\u0412\u041E</h2><h3 id="activitynotfoundexception" tabindex="-1"><a class="header-anchor" href="#activitynotfoundexception" aria-hidden="true">#</a> ActivityNotFoundException</h3><ul><li>\u5DF2\u5B89\u88C5\u7684\u662F\u8001\u7248\u672CFreezeYou\u6216\u672A\u5B89\u88C5FreezeYou</li></ul><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>\u662F\u5426\u5DF2\u7ECF\u5728 <strong>Manifest</strong> \u4E2D\u58F0\u660E\u4E86\u6743\u9650\u5462\uFF08<code>\u51BB\u7ED3\\\u89E3\u51BB\u5E94\u7528</code>\u8FD8\u9700\u8981\u7C7B\u4F3C\u8BF7\u6C42\u654F\u611F\u6743\u9650\u4E00\u6837\u8FDB\u884C <strong><code>requestPermissions</code></strong> \uFF09</li></ul><h2 id="\u0442\u0435\u043A\u0443\u0449\u0438\u0435-\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F" tabindex="-1"><a class="header-anchor" href="#\u0442\u0435\u043A\u0443\u0449\u0438\u0435-\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F" aria-hidden="true">#</a> \u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F</h2><ul><li>\u9700\u8981\u5728\u5B89\u88C5<strong>FreezeYou</strong>\u540E\u518D\u5B89\u88C5\u6216\u66F4\u65B0\uFF08\u8986\u76D6\u5B89\u88C5\uFF09\u4F7F\u7528\u76F8\u5173\u6743\u9650\u7684\u5E94\u7528\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5 Exception \uFF08\u5728 Android Google \u7684\u6587\u6863\u4E2D\u6709\u63D0\u53CA\u9700\u8981\u5728\u8BF7\u6C42\u524D\u5B89\u88C5\uFF09</li></ul><h2 id="\u043D\u0443\u0436\u043D\u0430-\u043F\u043E\u043C\u043E\u0449\u044C" tabindex="-1"><a class="header-anchor" href="#\u043D\u0443\u0436\u043D\u0430-\u043F\u043E\u043C\u043E\u0449\u044C" aria-hidden="true">#</a> \u041D\u0443\u0436\u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C?</h2>',8),N=e("\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438");function F(z,P){const t=i("RouterLink"),l=i("ExternalLinkIcon");return r(),u(d,null,[h,a("nav",_,[a("ul",null,[a("li",null,[n(t,{to:"#\u6388\u6743\u8303\u56F4"},{default:s(()=>[m]),_:1})]),a("li",null,[n(t,{to:"#\u5982\u4F55\u4F7F\u7528"},{default:s(()=>[f]),_:1}),a("ul",null,[a("li",null,[n(t,{to:"#\u58F0\u660E\u6743\u9650"},{default:s(()=>[x]),_:1})])])]),a("li",null,[n(t,{to:"#\u043F\u0440\u0438\u043C\u0435\u0440\u044B"},{default:s(()=>[k]),_:1})]),a("li",null,[n(t,{to:"#\u0447\u0430\u0432\u043E"},{default:s(()=>[v]),_:1}),a("ul",null,[a("li",null,[n(t,{to:"#activitynotfoundexception"},{default:s(()=>[g]),_:1})]),a("li",null,[n(t,{to:"#securityexception"},{default:s(()=>[b]),_:1})])])]),a("li",null,[n(t,{to:"#\u0442\u0435\u043A\u0443\u0449\u0438\u0435-\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"},{default:s(()=>[y]),_:1})]),a("li",null,[n(t,{to:"#\u043D\u0443\u0436\u043D\u0430-\u043F\u043E\u043C\u043E\u0449\u044C"},{default:s(()=>[A]),_:1})])])]),E,a("ul",null,[a("li",null,[a("a",q,[I,n(l)])])]),L,a("ul",null,[a("li",null,[n(t,{to:"/ru-RU/about/contactUs.html"},{default:s(()=>[N]),_:1})])])],64)}var T=c(p,[["render",F],["__file","start-activity.html.vue"]]);export{T as default};
