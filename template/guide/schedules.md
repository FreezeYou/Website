# {{@scheduledTask}}
[[toc]]

## {{@generalTaskCommands}}

### {{@availableCommands}}

* {{@okff_colon_oneKeyFreeze}}
* {{@okuf_colon_oneKeyUnfreeze}}
* {{@ff_colon_freeze}}
* {{@uf_colon_unfreeze}}
* {{@es_colon_explain}}
* {{@ds_colon_explain}}
* {{@st_colon_showOneToast}}
* {{@sn_colon_showOneNotification}}
* {{@sp_colon_openSpecifyApplication}}
* {{@su_colon_openSpecifyApplicationByUri}}
* {{@lg_colon_explain}}
* {{@ls_colon_lockScreen}}

### {{@additionalParameters_optional}}

* {{@dashD_colon_explain}}

### {{@internalVariables}}

* {{@ppkgn_colon_explain}}
* {{@cpkgn_colon_explain}}

### {{@usageExample}}

#### okff

* {{@okff_colon_oneKeyFreeze_immediately}}

#### okuf

* {{@okuf_colon_oneKeyUnfreeze_immediately}}
* {{@okuf_colon_delay_10_oneKeyUnfreeze}}

#### ff

* {{@ff_com_tencent_mobileqq_colon_explain}}
* {{@ff_com_tencent_mobileqq_5oiR55qE5YiX6KGo_colon_explain}}
* {{@ff_com_tencent_mobileqq_com_tencent_mm_colon_explain}}
* {{@ff_com_tencent_mobileqq_com_tencent_mm_com_taobao_taobao_colon_explain}}
* {{@ff_delay_3600_com_tencent_mobileqq_colon_explain}}

#### uf

* {{@uf_com_tencent_mobileqq_colon_explain}}
* {{@uf_com_tencent_mobileqq_com_tencent_mm_colon_explain}}
* {{@uf_com_tencent_mobileqq_5oiR55qE5YiX6KGo_colon_explain}}
* {{@uf_com_tencent_mobileqq_com_tencent_mm_com_taobao_taobao_colon_explain}}

#### es

* {{@es_wifi_explain}}
* {{@es_delay_20_wifi_explain}}
* {{@es_wifi_cellularData_explain}}
* {{@es_wifi_okuf_uf_com_tencent_mobileqq_explain}}

#### ds

* {{@ds_wifi_explain}}
* {{@ds_cd_explain}}
* {{@ds_wifi_okff_explain}}
* {{@ds_delay_15_wifi_okff_explain}}

#### st

* {{@st_message_explain}}

#### sn

* {{@sn_title_message_explain}}

#### sp

* {{@sp_com_tencent_mobileqq_explain}}
* {{@sp_com_tencent_mobileqq_com_tencent_mm_explain}}

#### su

* {{@su_uri_explain}}
* {{@su_alipayqr_20000056_explain}}

#### lg

* {{@lg_10086_explain}}

#### ls

* {{@ls_explain}}

## {{@additional_parameters}}

### {{@tips}}

* {{@some_triggers_do_not_require_additional_parameters}}
* {{@some_triggers_can_have_additional_parameters}}
* {{@some_triggers_must_provide_additional_parameters}}

### {{@parameter_requirements}}

* `打开屏幕时` ：目前无附加参数。
* `关闭屏幕时` ：目前无附加参数。
* `打开应用时` ：*<small> `7.0及以前版本` </small>*必须附加 `应用包名` ；*<small> `自 7.0` </small>*可附加 `应用包名` 、 `我的列表`*<small>`(V9.2)`</small>*，如无附加，则打开任意应用程序均执行。*在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。*
* `离开应用时` ：可附加 `应用包名` 、 `我的列表` <small>*`(V9.2)`*</small>，如无附加，则离开任意应用程序均执行。*在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。*
* `解冻应用时` ：可附加 `应用包名` ，如无附加，则解冻任意应用程序均执行。
* `冻结应用时` ：可附加 `应用包名` ，如无附加，则冻结任意应用程序均执行。

### 可用参数

* `应用包名` ：例如 `com.tencent.mobileqq` 。
* `我的列表` ：例如 `@5oiR55qE5YiX6KGo` 。

### 使用实例

* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq` ，则会在运行 `QQ` 时执行预设置的 `任务` 。
* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq,com.tencent.mm` ，则会在运行 `QQ` 或 `微信` 时执行预设置的 `任务` 。
* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq,@5oiR55qE5YiX6KGo` ，则会在运行 `QQ` 或 `存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序` 时执行预设置的 `任务` 。
* 选择 `打开应用时` ，附加参数填写 `当前使用的桌面的包名` ，则会在 **返回桌面** 时执行预设置的 `任务` 。
* 选择 `离开应用时` ，附加参数不填写任何内容，则会在 **离开任意应用程序** 时执行预设置的 `任务` 。

## {{@faq}}
* [{{@faq}}](../faq/)

