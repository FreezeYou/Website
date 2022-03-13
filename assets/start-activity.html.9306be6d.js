import{r as i,o as r,c,a,b as n,w as t,F as u,d as e,e as l}from"./app.2bc474b0.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const p={},h=a("h1",{id:"\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F","aria-hidden":"true"},"#"),e(" \u901A\u8FC7 startActivity \u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F")],-1),_={class:"table-of-contents"},m=e("\u6388\u6743\u8303\u56F4"),f=e("\u5982\u4F55\u4F7F\u7528"),x=e("\u58F0\u660E\u6743\u9650"),k=e("\u5F00\u53D1\u6837\u4F8B"),g=e("\u7591\u96BE\u89E3\u7B54"),v=e("ActivityNotFoundException"),b=e("SecurityException"),y=e("\u76EE\u524D\u5C40\u9650"),A=e("\u9700\u8981\u5E2E\u52A9"),q=l(`<h2 id="\u6388\u6743\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743\u8303\u56F4" aria-hidden="true">#</a> \u6388\u6743\u8303\u56F4</h2><ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868\u3001\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528\u3001\u8FDB\u884C\u89E3\u51BB\u5E94\u7528\u3002</li></ul><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><h3 id="\u58F0\u660E\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6743\u9650" aria-hidden="true">#</a> \u58F0\u660E\u6743\u9650</h3><ul><li>\u9700\u8981\u5728<code>AndroidManifest.xml</code>\u4E2D\u58F0\u660E\u6743\u9650\uFF08\u6309\u9700\u7533\u8BF7\uFF09 <ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u8FDB\u884C\u89E3\u51BB\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ul><h2 id="\u5F00\u53D1\u6837\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u6837\u4F8B" aria-hidden="true">#</a> \u5F00\u53D1\u6837\u4F8B</h2>`,6),E={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},F=e("FreezeYouApiTest"),I=l('<h2 id="\u7591\u96BE\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u7591\u96BE\u89E3\u7B54" aria-hidden="true">#</a> \u7591\u96BE\u89E3\u7B54</h2><h3 id="activitynotfoundexception" tabindex="-1"><a class="header-anchor" href="#activitynotfoundexception" aria-hidden="true">#</a> ActivityNotFoundException</h3><ul><li>\u5DF2\u5B89\u88C5\u7684\u662F\u8001\u7248\u672CFreezeYou\u6216\u672A\u5B89\u88C5FreezeYou</li></ul><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>\u662F\u5426\u5DF2\u7ECF\u5728 <strong>Manifest</strong> \u4E2D\u58F0\u660E\u4E86\u6743\u9650\u5462\uFF08<code>\u51BB\u7ED3\\\u89E3\u51BB\u5E94\u7528</code>\u8FD8\u9700\u8981\u7C7B\u4F3C\u8BF7\u6C42\u654F\u611F\u6743\u9650\u4E00\u6837\u8FDB\u884C <strong><code>requestPermissions</code></strong> \uFF09</li></ul><h2 id="\u76EE\u524D\u5C40\u9650" tabindex="-1"><a class="header-anchor" href="#\u76EE\u524D\u5C40\u9650" aria-hidden="true">#</a> \u76EE\u524D\u5C40\u9650</h2><ul><li>\u9700\u8981\u5728\u5B89\u88C5<strong>FreezeYou</strong>\u540E\u518D\u5B89\u88C5\u6216\u66F4\u65B0\uFF08\u8986\u76D6\u5B89\u88C5\uFF09\u4F7F\u7528\u76F8\u5173\u6743\u9650\u7684\u5E94\u7528\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5 Exception \uFF08\u5728 Android Google \u7684\u6587\u6863\u4E2D\u6709\u63D0\u53CA\u9700\u8981\u5728\u8BF7\u6C42\u524D\u5B89\u88C5\uFF09</li></ul><h2 id="\u9700\u8981\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u5E2E\u52A9" aria-hidden="true">#</a> \u9700\u8981\u5E2E\u52A9</h2>',8),L={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},N=e("\u52A0\u5165QQ\u7FA4(704086494)"),z={href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"},P=e("\u52A0\u5165QQ\u7FA4(838379270)");function S(T,B){const s=i("RouterLink"),o=i("ExternalLinkIcon");return r(),c(u,null,[h,a("nav",_,[a("ul",null,[a("li",null,[n(s,{to:"#\u6388\u6743\u8303\u56F4"},{default:t(()=>[m]),_:1})]),a("li",null,[n(s,{to:"#\u5982\u4F55\u4F7F\u7528"},{default:t(()=>[f]),_:1}),a("ul",null,[a("li",null,[n(s,{to:"#\u58F0\u660E\u6743\u9650"},{default:t(()=>[x]),_:1})])])]),a("li",null,[n(s,{to:"#\u5F00\u53D1\u6837\u4F8B"},{default:t(()=>[k]),_:1})]),a("li",null,[n(s,{to:"#\u7591\u96BE\u89E3\u7B54"},{default:t(()=>[g]),_:1}),a("ul",null,[a("li",null,[n(s,{to:"#activitynotfoundexception"},{default:t(()=>[v]),_:1})]),a("li",null,[n(s,{to:"#securityexception"},{default:t(()=>[b]),_:1})])])]),a("li",null,[n(s,{to:"#\u76EE\u524D\u5C40\u9650"},{default:t(()=>[y]),_:1})]),a("li",null,[n(s,{to:"#\u9700\u8981\u5E2E\u52A9"},{default:t(()=>[A]),_:1})])])]),q,a("ul",null,[a("li",null,[a("a",E,[F,n(o)])])]),I,a("ul",null,[a("li",null,[a("a",L,[N,n(o)])])]),a("ul",null,[a("li",null,[a("a",z,[P,n(o)])])])],64)}var w=d(p,[["render",S]]);export{w as default};
