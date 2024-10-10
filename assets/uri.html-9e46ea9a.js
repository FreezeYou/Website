import{_ as i,r as c,o as r,c as d,b as a,e as s,w as t,d as n,a as o}from"./app-91edffbd.js";const k={},h=a("h1",{id:"通过-uri-冻结解冻应用程序",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#通过-uri-冻结解冻应用程序","aria-hidden":"true"},"#"),n(" 通过 URI 冻结解冻应用程序")],-1),m={class:"table-of-contents"},g=o(`<h2 id="授权范围" tabindex="-1"><a class="header-anchor" href="#授权范围" aria-hidden="true">#</a> 授权范围</h2><ul><li>唤起 <strong>FreezeYou</strong> 的 <strong>冻结/解冻/启动</strong> 对话框（出于安全考虑，首次 <strong>冻结/解冻/启动</strong> 具体操作必须由用户自主完成）。</li></ul><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="嵌入-html" tabindex="-1"><a class="header-anchor" href="#嵌入-html" aria-hidden="true">#</a> 嵌入 HTML</h3><h4 id="请求-冻结-解冻-启动-应用包名" tabindex="-1"><a class="header-anchor" href="#请求-冻结-解冻-启动-应用包名" aria-hidden="true">#</a> 请求 冻结/解冻/启动 [应用包名]</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=[应用包名][&amp;action=[操作]]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 冻结/解冻/启动 [应用包名]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="请求-冻结-解冻-启动-usim卡应用" tabindex="-1"><a class="header-anchor" href="#请求-冻结-解冻-启动-usim卡应用" aria-hidden="true">#</a> 请求 冻结/解冻/启动 USIM卡应用</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=com.android.stk<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 冻结/解冻/启动 USIM卡应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="freezeyou://fuf/?pkgName=com.android.stk">点此尝试 冻结/解冻/启动 USIM卡应用(com.android.stk)</a></p>`,9),f={id:"请求-冻结-解冻-启动-usim卡应用-1",tabindex:"-1"},v=a("a",{class:"header-anchor",href:"#请求-冻结-解冻-启动-usim卡应用-1","aria-hidden":"true"},"#",-1),_=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=com.android.stk&amp;action=fuf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 冻结/解冻/启动 USIM卡应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="freezeyou://fuf/?pkgName=com.android.stk&amp;action=fuf">点此尝试 冻结/解冻/启动 USIM卡应用(com.android.stk)</a></p>`,2),b={id:"请求-解冻-usim卡应用",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#请求-解冻-usim卡应用","aria-hidden":"true"},"#",-1),y=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=com.android.stk&amp;action=unfreeze<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 解冻 USIM卡应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="freezeyou://fuf/?pkgName=com.android.stk&amp;action=unfreeze">点此尝试 解冻 USIM卡应用(com.android.stk)</a></p>`,2),z={id:"请求-冻结-usim卡应用",tabindex:"-1"},I=a("a",{class:"header-anchor",href:"#请求-冻结-usim卡应用","aria-hidden":"true"},"#",-1),q=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=com.android.stk&amp;action=freeze<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 冻结 USIM卡应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="freezeyou://fuf/?pkgName=com.android.stk&amp;action=freeze">点此尝试 冻结 USIM卡应用(com.android.stk)</a></p>`,2),N={id:"请求-解冻并启动-若已解冻则直接启动-usim卡应用",tabindex:"-1"},U=a("a",{class:"header-anchor",href:"#请求-解冻并启动-若已解冻则直接启动-usim卡应用","aria-hidden":"true"},"#",-1),M=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>freezeyou://fuf/?pkgName=com.android.stk&amp;action=unFreezeAndRun<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求 解冻并启动(若已解冻则直接启动) USIM卡应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="freezeyou://fuf/?pkgName=com.android.stk&amp;action=unFreezeAndRun">点此尝试 解冻并启动(若已解冻则直接启动) USIM卡应用(com.android.stk)</a></p><h3 id="应用间" tabindex="-1"><a class="header-anchor" href="#应用间" aria-hidden="true">#</a> 应用间</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Uri</span> webPage <span class="token operator">=</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;freezeyou://fuf/?pkgName=&quot;</span> <span class="token operator">+</span> pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span><span class="token constant">ACTION_VIEW</span><span class="token punctuation">,</span> webPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>intent<span class="token punctuation">.</span><span class="token function">resolveActivity</span><span class="token punctuation">(</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span><span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;无可用程序，是否已安装 FreezeYou 7.2 及以上版本呢？&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token constant">LENGTH_LONG</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sample" tabindex="-1"><a class="header-anchor" href="#sample" aria-hidden="true">#</a> Sample</h2>`,5),S={href:"https://github.com/FreezeYou/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},w=a("h2",{id:"need-help",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),n(" Need Help")],-1);function T(A,L){const e=c("router-link"),p=c("Badge"),l=c("ExternalLinkIcon"),u=c("RouterLink");return r(),d("div",null,[h,a("nav",m,[a("ul",null,[a("li",null,[s(e,{to:"#授权范围"},{default:t(()=>[n("授权范围")]),_:1})]),a("li",null,[s(e,{to:"#如何使用"},{default:t(()=>[n("如何使用")]),_:1}),a("ul",null,[a("li",null,[s(e,{to:"#嵌入-html"},{default:t(()=>[n("嵌入 HTML")]),_:1})]),a("li",null,[s(e,{to:"#应用间"},{default:t(()=>[n("应用间")]),_:1})])])]),a("li",null,[s(e,{to:"#sample"},{default:t(()=>[n("Sample")]),_:1})]),a("li",null,[s(e,{to:"#need-help"},{default:t(()=>[n("Need Help")]),_:1})])])]),g,a("h4",f,[v,n(" 请求 冻结/解冻/启动 USIM卡应用 "),s(p,{text:"8.3+",type:"tip"})]),_,a("h4",b,[x,n(" 请求 解冻 USIM卡应用 "),s(p,{text:"8.3+",type:"tip"})]),y,a("h4",z,[I,n(" 请求 冻结 USIM卡应用 "),s(p,{text:"8.3+",type:"tip"})]),q,a("h4",N,[U,n(" 请求 解冻并启动(若已解冻则直接启动) USIM卡应用 "),s(p,{text:"8.3+",type:"tip"})]),M,a("ul",null,[a("li",null,[a("a",S,[n("FreezeYouApiTest"),s(l)])])]),w,a("ul",null,[a("li",null,[s(u,{to:"/tr-TR/about/contactUs.html"},{default:t(()=>[n("Contact Us")]),_:1})])])])}const R=i(k,[["render",T],["__file","uri.html.vue"]]);export{R as default};
