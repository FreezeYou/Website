import{_ as r,r as o,o as p,c as u,b as t,e as n,w as a,d as e,a as d}from"./app-91edffbd.js";const h={},f=t("h1",{id:"通过-provider-进行冻结解冻以及数据查询等操作",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#通过-provider-进行冻结解冻以及数据查询等操作","aria-hidden":"true"},"#"),e(" 通过 Provider 进行冻结解冻以及数据查询等操作")],-1),g={class:"table-of-contents"},x=t("h2",{id:"版本要求",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#版本要求","aria-hidden":"true"},"#"),e(" 版本要求")],-1),_=t("ul",null,[t("li",null,[t("strong",null,"自冻(FreezeYou)"),e(" 版本不小于 "),t("strong",null,"9.0"),e(" 。")]),t("li",null,"部分需要更高版本（已标注）。")],-1),y=t("h2",{id:"授权范围",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#授权范围","aria-hidden":"true"},"#"),e(" 授权范围")],-1),k=t("strong",null,"自冻(FreezeYou)",-1),b=t("strong",null,"自冻(FreezeYou)",-1),E=d(`<h2 id="声明权限" tabindex="-1"><a class="header-anchor" href="#声明权限" aria-hidden="true">#</a> 声明权限</h2><p>按需在 <code>AndroidManifest.xml</code> 中声明权限，并适时请求授予权限。</p><h3 id="普通权限" tabindex="-1"><a class="header-anchor" href="#普通权限" aria-hidden="true">#</a> 普通权限</h3><p>无需额外请求授予权限。</p><h4 id="查询各项状态数据" tabindex="-1"><a class="header-anchor" href="#查询各项状态数据" aria-hidden="true">#</a> 查询各项状态数据</h4><p>包括<code>获取应用是否被冻结</code>、<code>获取当前运行模式</code>。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.QUERY_STATUS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="危险权限" tabindex="-1"><a class="header-anchor" href="#危险权限" aria-hidden="true">#</a> 危险权限</h3><p>需要适时额外请求授予权限。</p><h4 id="进行解冻应用操作" tabindex="-1"><a class="header-anchor" href="#进行解冻应用操作" aria-hidden="true">#</a> 进行解冻应用操作</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="进行冻结应用操作" tabindex="-1"><a class="header-anchor" href="#进行冻结应用操作" aria-hidden="true">#</a> 进行冻结应用操作</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><h3 id="获取当前运行模式" tabindex="-1"><a class="header-anchor" href="#获取当前运行模式" aria-hidden="true">#</a> 获取当前运行模式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.QUERY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;QUERY_MODE&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> currentMode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;currentMode&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取应用是否被冻结" tabindex="-1"><a class="header-anchor" href="#获取应用是否被冻结" aria-hidden="true">#</a> 获取应用是否被冻结</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
willBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> packageName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.QUERY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;QUERY_FREEZE_STATUS&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> resultStatusCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进行解冻应用操作-1" tabindex="-1"><a class="header-anchor" href="#进行解冻应用操作-1" aria-hidden="true">#</a> 进行解冻应用操作</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
willBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.UNFREEZE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;MODE_AUTO&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> resultCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进行冻结应用操作-1" tabindex="-1"><a class="header-anchor" href="#进行冻结应用操作-1" aria-hidden="true">#</a> 进行冻结应用操作</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
willBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.FREEZE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;MODE_AUTO&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> resultCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数细节" tabindex="-1"><a class="header-anchor" href="#参数细节" aria-hidden="true">#</a> 参数细节</h2><h3 id="获取当前运行模式-1" tabindex="-1"><a class="header-anchor" href="#获取当前运行模式-1" aria-hidden="true">#</a> 获取当前运行模式</h3><h4 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.QUERY&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>QUERY_MODE</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;">空 <code>Bundle</code></td></tr></tbody></table><h4 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>currentMode</code>，类型为 <code>String</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">dpm</td><td style="text-align:left;">DPM（免ROOT）模式（ROOT模式可能可用）</td></tr><tr><td style="text-align:left;">root</td><td style="text-align:left;">ROOT模式（DPM模式不可用）</td></tr><tr><td style="text-align:left;">unavailable</td><td style="text-align:left;">DPM 与 ROOT 模式均不可用</td></tr></tbody></table>`,29),v={id:"获取当前运行模式-v2",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#获取当前运行模式-v2","aria-hidden":"true"},"#",-1),O=d('<h4 id="请求-1" tabindex="-1"><a class="header-anchor" href="#请求-1" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.QUERY&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>QUERY_MODE_V2</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;">空 <code>Bundle</code></td></tr></tbody></table><h4 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>currentMode</code>，类型为 <code>String</code>。</p>',4),M=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"取得值"),t("th",{style:{"text-align":"left"}},"意义")])],-1),B=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_DPM"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"DPM 模式")])],-1),D=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_ROOT_DISABLE_ENABLE"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"ROOT DISABLE 模式")])],-1),S=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_ROOT_HIDE_UNHIDE"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"ROOT HIDE 模式")])],-1),A=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_LEGACY_AUTO"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"遗留的 DPM 与 ROOT DISABLE 自动选择模式")])],-1),U=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"系统应用 DISABLE_UNTIL_USED 模式")])],-1),q=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_SYSTEM_APP_ENABLE_DISABLE_USER"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"系统应用 DISABLE_USER 模式")])],-1),R=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_SYSTEM_APP_ENABLE_DISABLE"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"系统应用 DISABLE 模式")])],-1),T={style:{"text-align":"left"}},N=t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"配置文件所有者（Profile Owner）模式")],-1),P=t("tr",null,[t("td",{style:{"text-align":"left"}},"MODE_UNKNOWN"),t("td",{style:{"text-align":"left"}},[e("当前运行于 "),t("code",null,"未知模式")])],-1),L=d('<h3 id="获取应用是否被冻结-1" tabindex="-1"><a class="header-anchor" href="#获取应用是否被冻结-1" aria-hidden="true">#</a> 获取应用是否被冻结</h3><h4 id="请求-2" tabindex="-1"><a class="header-anchor" href="#请求-2" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.QUERY&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>QUERY_FREEZE_STATUS</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;"><code>Bundle</code>，键 <code>packageName</code> 必须包含被查询的应用包名</td></tr></tbody></table><h4 id="返回-2" tabindex="-1"><a class="header-anchor" href="#返回-2" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>status</code>，类型为 <code>int</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>Bundle</code> 中的键 <code>packageName</code> 的值为 <code>null</code></td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><strong>自冻</strong> 内部错误</td></tr><tr><td style="text-align:left;">0</td><td style="text-align:left;">未冻结</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">ROOT 模式冻结</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">DPM 模式冻结</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">DPM + ROOT 双模式冻结</td></tr><tr><td style="text-align:left;">998</td><td style="text-align:left;">没有找到对应应用</td></tr></tbody></table><h3 id="进行解冻应用操作-2" tabindex="-1"><a class="header-anchor" href="#进行解冻应用操作-2" aria-hidden="true">#</a> 进行解冻应用操作</h3><h4 id="请求-3" tabindex="-1"><a class="header-anchor" href="#请求-3" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.UNFREEZE&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>MODE_AUTO</code> 或 <code>MODE_ROOT</code> 或 <code>MODE_MROOT</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;"><code>Bundle</code>，键 <code>packageName</code> 必须包含被解冻的应用包名</td></tr></tbody></table><h4 id="返回-3" tabindex="-1"><a class="header-anchor" href="#返回-3" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>result</code>，类型为 <code>int</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">-4</td><td style="text-align:left;">ROOT 模式解冻失败</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;">DPM 模式解冻失败</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>Bundle</code> 中的键 <code>packageName</code> 的值为 <code>null</code></td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><strong>自冻</strong> 内部错误</td></tr><tr><td style="text-align:left;">0</td><td style="text-align:left;">解冻成功</td></tr><tr><td style="text-align:left;">998</td><td style="text-align:left;">没有找到对应应用</td></tr><tr><td style="text-align:left;">999</td><td style="text-align:left;">检查发现未冻结，无需解冻</td></tr></tbody></table>',12),I={id:"进行解冻应用操作-v2",tabindex:"-1"},w=t("a",{class:"header-anchor",href:"#进行解冻应用操作-v2","aria-hidden":"true"},"#",-1),Y=t("h4",{id:"请求-4",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#请求-4","aria-hidden":"true"},"#"),e(" 请求")],-1),z=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数"),t("th",{style:{"text-align":"left"}},"值")])],-1),F=t("tr",null,[t("td",{style:{"text-align":"left"}},"Uri"),t("td",{style:{"text-align":"left"}},[t("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")')])],-1),C=t("td",{style:{"text-align":"left"}},"Method",-1),Q={style:{"text-align":"left"}},j=t("code",null,"MODE_DPM",-1),V=t("code",null,"MODE_ROOT_DISABLE_ENABLE",-1),Z=t("code",null,"MODE_ROOT_HIDE_UNHIDE",-1),H=t("code",null,"MODE_LEGACY_AUTO",-1),G=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE",-1),W=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE_USER",-1),K=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED",-1),J=t("code",null,"MODE_PROFILE_OWNER",-1),X=t("tr",null,[t("td",{style:{"text-align":"left"}},"Extras"),t("td",{style:{"text-align":"left"}},[t("code",null,"Bundle"),e("，键 "),t("code",null,"packageName"),e(" 必须包含被解冻的应用包名")])],-1),$=d('<h4 id="返回-4" tabindex="-1"><a class="header-anchor" href="#返回-4" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>result</code>，类型为 <code>int</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">-10</td><td style="text-align:left;">配置文件所有者（Profile Owner）模式系统内部错误</td></tr><tr><td style="text-align:left;">-9</td><td style="text-align:left;">不是配置文件所有者（Profile Owner）</td></tr><tr><td style="text-align:left;">-8</td><td style="text-align:left;">不是系统应用</td></tr><tr><td style="text-align:left;">-7</td><td style="text-align:left;">没有该冻结解冻模式</td></tr><tr><td style="text-align:left;">-6</td><td style="text-align:left;">无 DPM 权限</td></tr><tr><td style="text-align:left;">-5</td><td style="text-align:left;">DPM 模式系统内部错误</td></tr><tr><td style="text-align:left;">-4</td><td style="text-align:left;">无 ROOT 权限</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;">设备 Android 版本过低，不支持该 <code>Method</code></td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>Bundle</code> 中的键 <code>packageName</code> 的值为 <code>null</code></td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><strong>自冻</strong> 内部错误</td></tr><tr><td style="text-align:left;">0</td><td style="text-align:left;">解冻成功</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">没有发生异常，一般情况下为成功</td></tr></tbody></table><h3 id="进行冻结应用操作-2" tabindex="-1"><a class="header-anchor" href="#进行冻结应用操作-2" aria-hidden="true">#</a> 进行冻结应用操作</h3><h4 id="请求-5" tabindex="-1"><a class="header-anchor" href="#请求-5" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.FREEZE&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>MODE_AUTO</code> 或 <code>MODE_ROOT</code> 或 <code>MODE_MROOT</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;"><code>Bundle</code>，键 <code>packageName</code> 必须包含被解冻的应用包名</td></tr></tbody></table><h4 id="返回-5" tabindex="-1"><a class="header-anchor" href="#返回-5" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>result</code>，类型为 <code>int</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>Bundle</code> 中的键 <code>packageName</code> 的值为 <code>null</code></td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><strong>自冻</strong> 内部错误</td></tr><tr><td style="text-align:left;">0</td><td style="text-align:left;">冻结成功</td></tr><tr><td style="text-align:left;">998</td><td style="text-align:left;">没有找到对应应用</td></tr><tr><td style="text-align:left;">999</td><td style="text-align:left;">检查发现未解冻，无需冻结</td></tr></tbody></table>',9),tt={id:"进行冻结应用操作-v2",tabindex:"-1"},et=t("a",{class:"header-anchor",href:"#进行冻结应用操作-v2","aria-hidden":"true"},"#",-1),nt=t("h4",{id:"请求-6",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#请求-6","aria-hidden":"true"},"#"),e(" 请求")],-1),at=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数"),t("th",{style:{"text-align":"left"}},"值")])],-1),st=t("tr",null,[t("td",{style:{"text-align":"left"}},"Uri"),t("td",{style:{"text-align":"left"}},[t("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")')])],-1),lt=t("td",{style:{"text-align":"left"}},"Method",-1),dt={style:{"text-align":"left"}},ot=t("code",null,"MODE_DPM",-1),it=t("code",null,"MODE_ROOT_DISABLE_ENABLE",-1),ct=t("code",null,"MODE_ROOT_HIDE_UNHIDE",-1),rt=t("code",null,"MODE_LEGACY_AUTO",-1),pt=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE",-1),ut=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE_USER",-1),ht=t("code",null,"MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED",-1),ft=t("code",null,"MODE_PROFILE_OWNER",-1),gt=t("tr",null,[t("td",{style:{"text-align":"left"}},"Extras"),t("td",{style:{"text-align":"left"}},[t("code",null,"Bundle"),e("，键 "),t("code",null,"packageName"),e(" 必须包含被解冻的应用包名")])],-1),xt=d('<h4 id="返回-6" tabindex="-1"><a class="header-anchor" href="#返回-6" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>result</code>，类型为 <code>int</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">-10</td><td style="text-align:left;">配置文件所有者（Profile Owner）模式系统内部错误</td></tr><tr><td style="text-align:left;">-9</td><td style="text-align:left;">不是配置文件所有者（Profile Owner）</td></tr><tr><td style="text-align:left;">-8</td><td style="text-align:left;">不是系统应用</td></tr><tr><td style="text-align:left;">-7</td><td style="text-align:left;">没有该冻结解冻模式</td></tr><tr><td style="text-align:left;">-6</td><td style="text-align:left;">无 DPM 权限</td></tr><tr><td style="text-align:left;">-5</td><td style="text-align:left;">DPM 模式系统内部错误</td></tr><tr><td style="text-align:left;">-4</td><td style="text-align:left;">无 ROOT 权限</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;">设备 Android 版本过低，不支持该 <code>Method</code></td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>Bundle</code> 中的键 <code>packageName</code> 的值为 <code>null</code></td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><strong>自冻</strong> 内部错误</td></tr><tr><td style="text-align:left;">0</td><td style="text-align:left;">冻结成功</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">没有发生异常，一般情况下为成功</td></tr></tbody></table>',3),_t={id:"获取是否可通过自冻安装应用",tabindex:"-1"},yt=t("a",{class:"header-anchor",href:"#获取是否可通过自冻安装应用","aria-hidden":"true"},"#",-1),kt=t("strong",null,"自冻",-1),bt=d('<h4 id="请求-7" tabindex="-1"><a class="header-anchor" href="#请求-7" aria-hidden="true">#</a> 请求</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Uri</td><td style="text-align:left;"><code>Uri.parse(&quot;content://cf.playhi.freezeyou.export.QUERY&quot;)</code></td></tr><tr><td style="text-align:left;">Method</td><td style="text-align:left;"><code>QUERY_IF_CAN_INSTALL_APPLICATIONS_STATUS</code></td></tr><tr><td style="text-align:left;">Extras</td><td style="text-align:left;">空 <code>Bundle</code></td></tr></tbody></table><h4 id="返回-7" tabindex="-1"><a class="header-anchor" href="#返回-7" aria-hidden="true">#</a> 返回</h4><p>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。<br> 数据存于 <code>Bundle</code> 中的键 <code>status</code>，类型为 <code>boolean 数组</code>。</p><table><thead><tr><th style="text-align:left;">取得值</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:left;">boolean 数组</td><td style="text-align:left;">boolean[]{预估功能可用, 安装通道可用, 有ROOT权限, 有DPM权限}</td></tr></tbody></table><h2 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры" aria-hidden="true">#</a> Примеры</h2>',6),Et={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},vt=d('<h2 id="чаво" tabindex="-1"><a class="header-anchor" href="#чаво" aria-hidden="true">#</a> ЧАВО</h2><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>是否已经在 <strong>Manifest</strong> 中声明了权限呢（<code>冻结\\解冻应用</code>还需要类似请求敏感权限一样进行 <strong><code>requestPermissions</code></strong> ）。</li></ul><h3 id="failed-to-find-provider-info-for" tabindex="-1"><a class="header-anchor" href="#failed-to-find-provider-info-for" aria-hidden="true">#</a> Failed to find provider info for ...</h3>',4),mt=t("li",null,"自 Android 11 (API 30)，包可见性已发生变更。",-1),Ot={href:"https://developer.android.com/about/versions/11/privacy/package-visibility",target:"_blank",rel:"noopener noreferrer"},Mt=d(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>queries</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>provider</span>
            <span class="token attr-name"><span class="token namespace">android:</span>authorities</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.export.ExampleAuthority<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>exported</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>queries</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="текущие-ограничения" tabindex="-1"><a class="header-anchor" href="#текущие-ограничения" aria-hidden="true">#</a> Текущие ограничения</h2><ul><li>需要在安装<strong>自冻 FreezeYou</strong>后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）。</li></ul><h2 id="нужна-помощь" tabindex="-1"><a class="header-anchor" href="#нужна-помощь" aria-hidden="true">#</a> Нужна помощь?</h2>`,4);function Bt(Dt,St){const s=o("router-link"),l=o("Badge"),i=o("ExternalLinkIcon"),c=o("RouterLink");return p(),u("div",null,[f,t("nav",g,[t("ul",null,[t("li",null,[n(s,{to:"#版本要求"},{default:a(()=>[e("版本要求")]),_:1})]),t("li",null,[n(s,{to:"#授权范围"},{default:a(()=>[e("授权范围")]),_:1})]),t("li",null,[n(s,{to:"#声明权限"},{default:a(()=>[e("声明权限")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#普通权限"},{default:a(()=>[e("普通权限")]),_:1})]),t("li",null,[n(s,{to:"#危险权限"},{default:a(()=>[e("危险权限")]),_:1})])])]),t("li",null,[n(s,{to:"#代码示例"},{default:a(()=>[e("代码示例")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#获取当前运行模式"},{default:a(()=>[e("获取当前运行模式")]),_:1})]),t("li",null,[n(s,{to:"#获取应用是否被冻结"},{default:a(()=>[e("获取应用是否被冻结")]),_:1})]),t("li",null,[n(s,{to:"#进行解冻应用操作-1"},{default:a(()=>[e("进行解冻应用操作")]),_:1})]),t("li",null,[n(s,{to:"#进行冻结应用操作-1"},{default:a(()=>[e("进行冻结应用操作")]),_:1})])])]),t("li",null,[n(s,{to:"#参数细节"},{default:a(()=>[e("参数细节")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#获取当前运行模式-1"},{default:a(()=>[e("获取当前运行模式")]),_:1})]),t("li",null,[n(s,{to:"#获取当前运行模式-v2"},{default:a(()=>[e("获取当前运行模式 V2"),n(l,{text:"10.11+",type:"tip"})]),_:1})]),t("li",null,[n(s,{to:"#获取应用是否被冻结-1"},{default:a(()=>[e("获取应用是否被冻结")]),_:1})]),t("li",null,[n(s,{to:"#进行解冻应用操作-2"},{default:a(()=>[e("进行解冻应用操作")]),_:1})]),t("li",null,[n(s,{to:"#进行解冻应用操作-v2"},{default:a(()=>[e("进行解冻应用操作 V2"),n(l,{text:"10.11+",type:"tip"})]),_:1})]),t("li",null,[n(s,{to:"#进行冻结应用操作-2"},{default:a(()=>[e("进行冻结应用操作")]),_:1})]),t("li",null,[n(s,{to:"#进行冻结应用操作-v2"},{default:a(()=>[e("进行冻结应用操作 V2"),n(l,{text:"10.11+",type:"tip"})]),_:1})]),t("li",null,[n(s,{to:"#获取是否可通过自冻安装应用"},{default:a(()=>[e("获取是否可通过自冻安装应用"),n(l,{text:"9.2+",type:"tip"})]),_:1})])])]),t("li",null,[n(s,{to:"#примеры"},{default:a(()=>[e("Примеры")]),_:1})]),t("li",null,[n(s,{to:"#чаво"},{default:a(()=>[e("ЧАВО")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#securityexception"},{default:a(()=>[e("SecurityException")]),_:1})]),t("li",null,[n(s,{to:"#failed-to-find-provider-info-for"},{default:a(()=>[e("Failed to find provider info for ...")]),_:1})])])]),t("li",null,[n(s,{to:"#текущие-ограничения"},{default:a(()=>[e("Текущие ограничения")]),_:1})]),t("li",null,[n(s,{to:"#нужна-помощь"},{default:a(()=>[e("Нужна помощь?")]),_:1})])])]),x,_,y,t("ul",null,[t("li",null,[e("获取当前 "),k,e(" 的运行模式、获取已冻结应用列表、获取是否可通过 "),b,e(" 安装应用"),n(l,{text:"9.2+",type:"tip"}),e(" 、进行冻结应用操作、进行解冻应用操作。")])]),E,t("h3",v,[m,e(" 获取当前运行模式 V2"),n(l,{text:"10.11+",type:"tip"})]),O,t("table",null,[M,t("tbody",null,[B,D,S,A,U,q,R,t("tr",null,[t("td",T,[e("MODE_PROFILE_OWNER"),n(l,{text:"11.3+",type:"tip"})]),N]),P])]),L,t("h3",I,[w,e(" 进行解冻应用操作 V2"),n(l,{text:"10.11+",type:"tip"})]),Y,t("table",null,[z,t("tbody",null,[F,t("tr",null,[C,t("td",Q,[j,e("、"),V,e("、"),Z,e("、"),H,e("、"),G,e("、"),W,e("、"),K,e("、"),J,n(l,{text:"11.3+",type:"tip"})])]),X])]),$,t("h3",tt,[et,e(" 进行冻结应用操作 V2"),n(l,{text:"10.11+",type:"tip"})]),nt,t("table",null,[at,t("tbody",null,[st,t("tr",null,[lt,t("td",dt,[ot,e("、"),it,e("、"),ct,e("、"),rt,e("、"),pt,e("、"),ut,e("、"),ht,e("、"),ft,n(l,{text:"11.3+",type:"tip"})])]),gt])]),xt,t("h3",_t,[yt,e(" 获取是否可通过"),kt,e("安装应用"),n(l,{text:"9.2+",type:"tip"})]),bt,t("ul",null,[t("li",null,[t("a",Et,[e("FreezeYouApiTest"),n(i)])])]),vt,t("ul",null,[mt,t("li",null,[e("详见 "),t("a",Ot,[e("Package visibility in Android 11"),n(i)]),e(" 。")])]),Mt,t("ul",null,[t("li",null,[n(c,{to:"/ru-RU/about/contactUs.html"},{default:a(()=>[e("Связаться с нами")]),_:1})])])])}const Ut=r(h,[["render",Bt],["__file","provider.html.vue"]]);export{Ut as default};
