(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{455:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过-provider-进行冻结解冻以及数据查询等操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-provider-进行冻结解冻以及数据查询等操作"}},[t._v("#")]),t._v(" 通过 Provider 进行冻结解冻以及数据查询等操作")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#版本要求"}},[t._v("版本要求")])]),s("li",[s("a",{attrs:{href:"#授权范围"}},[t._v("授权范围")])]),s("li",[s("a",{attrs:{href:"#如何使用"}},[t._v("如何使用")]),s("ul",[s("li",[s("a",{attrs:{href:"#声明权限"}},[t._v("声明权限")])]),s("li",[s("a",{attrs:{href:"#代码示例"}},[t._v("代码示例")])])])]),s("li",[s("a",{attrs:{href:"#参数要求"}},[t._v("参数要求")])]),s("li",[s("a",{attrs:{href:"#返回数据"}},[t._v("返回数据")])]),s("li",[s("a",{attrs:{href:"#开发样例"}},[t._v("开发样例")])]),s("li",[s("a",{attrs:{href:"#常见问题"}},[t._v("常见问题")]),s("ul",[s("li",[s("a",{attrs:{href:"#securityexception"}},[t._v("SecurityException")])])])]),s("li",[s("a",{attrs:{href:"#目前局限"}},[t._v("目前局限")])]),s("li",[s("a",{attrs:{href:"#需要帮助"}},[t._v("需要帮助")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("自冻(FreezeYou)")]),t._v(" 版本不小于 "),s("strong",[t._v("9.0")]),t._v(" 。")]),t._v(" "),s("li",[t._v("部分需要更高版本（已标注）。")])]),t._v(" "),s("h2",{attrs:{id:"授权范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权范围"}},[t._v("#")]),t._v(" 授权范围")]),t._v(" "),s("ul",[s("li",[t._v("获取当前 "),s("strong",[t._v("自冻(FreezeYou)")]),t._v(" 的运行模式、获取已冻结应用列表、获取是否可通过 "),s("strong",[t._v("自冻(FreezeYou)")]),t._v(" 安装应用"),s("Badge",{attrs:{text:"9.2+",type:"tip"}}),t._v("、进行冻结应用操作、进行解冻应用操作。")],1)]),t._v(" "),s("h2",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),s("h3",{attrs:{id:"声明权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明权限"}},[t._v("#")]),t._v(" 声明权限")]),t._v(" "),s("ul",[s("li",[t._v("需要在"),s("code",[t._v("AndroidManifest.xml")]),t._v("中声明权限（按需申请）\n"),s("ul",[s("li",[t._v("获取当前 "),s("strong",[t._v("自冻(FreezeYou)")]),t._v(" 的运行模式："),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.QUERY_STATUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("获取应用是否被冻结："),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.QUERY_STATUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("进行解冻应用操作："),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("进行冻结应用操作："),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])])])]),t._v(" "),s("h3",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("获取当前运行模式：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" resultBundle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content://cf.playhi.freezeyou.export.QUERY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QUERY_MODE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" currentMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultBundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currentMode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("获取应用是否被冻结：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" willBeSend "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwillBeSend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packageName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" packageName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" resultBundle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content://cf.playhi.freezeyou.export.QUERY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QUERY_FREEZE_STATUS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" willBeSend\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" resultStatusCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultBundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("进行解冻应用操作：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" willBeSend "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwillBeSend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packageName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkgName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" resultBundle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content://cf.playhi.freezeyou.export.UNFREEZE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MODE_AUTO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" willBeSend\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" resultCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultBundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("进行冻结应用操作：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" willBeSend "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwillBeSend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packageName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkgName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" resultBundle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content://cf.playhi.freezeyou.export.FREEZE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MODE_AUTO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" willBeSend\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" resultCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultBundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"参数要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数要求"}},[t._v("#")]),t._v(" 参数要求")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("用途")]),t._v(" "),s("th",[t._v("Uri")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Method")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Arg")]),t._v(" "),s("th",[t._v("Extras")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("获取当前运行模式")]),t._v(" "),s("td",[s("code",[t._v('Uri.parse("content://cf.playhi.freezeyou.export.QUERY")')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("QUERY_MODE")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",[t._v("空 Bundle")])]),t._v(" "),s("tr",[s("td",[t._v("获取应用是否被冻结")]),t._v(" "),s("td",[s("code",[t._v('Uri.parse("content://cf.playhi.freezeyou.export.QUERY")')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("QUERY_FREEZE_STATUS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",[t._v("Bundle，键 packageName 必须包含被查询的应用包名")])]),t._v(" "),s("tr",[s("td",[t._v("获取是否可通过"),s("strong",[t._v("自冻")]),t._v("安装应用"),s("Badge",{attrs:{text:"9.2+",type:"tip"}})],1),t._v(" "),s("td",[s("code",[t._v('Uri.parse("content://cf.playhi.freezeyou.export.QUERY)')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("QUERY_IF_CAN_INSTALL_APPLICATIONS_STATUS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",[t._v("空 Bundle")])]),t._v(" "),s("tr",[s("td",[t._v("进行解冻应用操作")]),t._v(" "),s("td",[s("code",[t._v('Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("MODE_AUTO")]),t._v("或"),s("code",[t._v("MODE_ROOT")]),t._v("或"),s("code",[t._v("MODE_MROOT")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",[t._v("Bundle，键 packageName 必须包含被解冻的应用包名")])]),t._v(" "),s("tr",[s("td",[t._v("进行冻结应用操作")]),t._v(" "),s("td",[s("code",[t._v('Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")')])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("MODE_AUTO")]),t._v("或"),s("code",[t._v("MODE_ROOT")]),t._v("或"),s("code",[t._v("MODE_MROOT")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不适用")]),t._v(" "),s("td",[t._v("Bundle，键 packageName 必须包含被冻结的应用包名")])])])]),t._v(" "),s("h2",{attrs:{id:"返回数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数据"}},[t._v("#")]),t._v(" 返回数据")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("如果对应键值为 "),s("code",[t._v("null")]),t._v("，则检查请求时的 "),s("code",[t._v("Method")]),t._v(" 以及 "),s("code",[t._v("Extras")]),t._v(" 是否为 "),s("code",[t._v("null")]),t._v(" 。")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("获取当前运行模式（键 currentMode ）")]),t._v(" "),s("th",[t._v("获取应用是否被冻结（键 status ）")]),t._v(" "),s("th",[t._v("进行解冻应用操作（键 result ）")]),t._v(" "),s("th",[t._v("进行冻结应用操作（键 result ）")]),t._v(" "),s("th",[t._v("获取是否可通过自冻安装应用（键 status ）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("dpm")]),t._v(" "),s("td",[t._v("DPM（免ROOT）模式（ROOT模式可能可用）")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("ROOT模式（DPM模式不可用）")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("unavailable")]),t._v(" "),s("td",[t._v("DPM 与 ROOT 模式均不可用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("-4")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("ROOT 模式解冻失败")]),t._v(" "),s("td",[t._v("ROOT 模式冻结失败")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("-3")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("DPM 模式解冻失败")]),t._v(" "),s("td",[t._v("DPM 模式冻结失败")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("-2")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("Bundle 中 packageName 键值为 null")]),t._v(" "),s("td",[t._v("Bundle 中 packageName 键值为 null")]),t._v(" "),s("td",[t._v("Bundle 中 packageName 键值为 null")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("-1")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("自冻(FreezeYou) 内部错误")]),t._v(" "),s("td",[t._v("自冻(FreezeYou) 内部错误")]),t._v(" "),s("td",[t._v("自冻(FreezeYou) 内部错误")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("未冻结")]),t._v(" "),s("td",[t._v("解冻成功")]),t._v(" "),s("td",[t._v("冻结成功")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("ROOT 模式冻结")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("DPM 模式冻结")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("DPM + ROOT 双模式冻结")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("998")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("没有找到对应应用")]),t._v(" "),s("td",[t._v("没有找到对应应用")]),t._v(" "),s("td",[t._v("没有找到对应应用")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("999")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("检查发现未冻结，无需解冻")]),t._v(" "),s("td",[t._v("检查发现未解冻，无需冻结")]),t._v(" "),s("td",[t._v("不适用")])]),t._v(" "),s("tr",[s("td",[t._v("其它")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("不适用")]),t._v(" "),s("td",[t._v("boolean[]{预估功能可用,安装通道可用,有ROOT权限,有DPM权限}")])])])]),t._v(" "),s("h2",{attrs:{id:"开发样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发样例"}},[t._v("#")]),t._v(" 开发样例")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreezeYouApiTest"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h3",{attrs:{id:"securityexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#securityexception"}},[t._v("#")]),t._v(" SecurityException")]),t._v(" "),s("ul",[s("li",[t._v("是否已经在 "),s("strong",[t._v("Manifest")]),t._v(" 中声明了权限呢（"),s("code",[t._v("冻结\\解冻应用")]),t._v("还需要类似请求敏感权限一样进行 "),s("strong",[s("code",[t._v("requestPermissions")])]),t._v(" ）。")])]),t._v(" "),s("h2",{attrs:{id:"目前局限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目前局限"}},[t._v("#")]),t._v(" 目前局限")]),t._v(" "),s("ul",[s("li",[t._v("需要在安装"),s("strong",[t._v("自冻 FreezeYou")]),t._v("后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）。")])]),t._v(" "),s("h2",{attrs:{id:"需要帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要帮助"}},[t._v("#")]),t._v(" 需要帮助")]),t._v(" "),s("ul",[s("li",[t._v("可 "),s("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"}},[t._v("加入 QQ 群：838379270"),s("OutboundLink")],1),t._v(" 寻求帮助。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);