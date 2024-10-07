# 計劃任務
[[toc]]

## General Task Commands

### 可用指令

* `okff` : One key freeze.
* `okuf` : One key unfreeze.
* `ff` : Freeze.
* `uf` : Unfreeze.
* `es` : Enable one setting item <small>*(`wifi` is available since version 6.2, `cd` (cellular data) is available since version 7.1, `bluetooth` is available since version 7.3)*</small>.
* `ds` : Disable one setting item <small>*(`wifi` is available since version 6.2, `cd` (cellular data) is available since version 7.1, `bluetooth` is available since version 7.3)*</small>.
* `st` : Show one toast.
* `sn` <Badge text="8.6+" type="tip"/>: Show one notification.
* `sp` : Open the specified application.
* `su` : Open the specified application by URI.
* `lg` <Badge text="7.2+" type="tip"/>: Print an ERROR level LOG. Under normal circumstances, there is no need to use it.
* `ls` <Badge text="8.7+" type="tip"/>: Lock screen.

### Additional Parameters(Optional)

* `-d` <Badge text="7.2+" type="tip"/>: Delay execution, in `seconds`.

### Internal Variables

* `[ppkgn]` <Badge text="7.4+" type="tip"/>: The previous application package name. Only available when the trigger is `When Leave Applications`, `When Open Applications`. Before formal use, you can use `st [ppkgn]` in related tasks to learn about the relevant content to reduce the possibility of accidents.
* `[cpkgn]` <Badge text="7.4+" type="tip"/>: The current application package name. Only available when the trigger is `When Leave Applications`, `When Open Applications`, `When Unfreeze Applications`, and `When Freeze Applications`. Before formal use, you can use `st [cpkgn]` in related tasks to learn about the relevant content to reduce the possibility of accidents.

### Usage Example

#### okff

* `okff`: Execute one-key freeze immediately.

#### okuf

* `okuf`: Execute one-key unfreeze immediately.
* `okuf -d 10`: Delay 10 seconds to perform one-key unfreeze.

#### ff

* `ff com.tencent.mobileqq`: Freeze the application with package name `com.tencent.mobileqq` (QQ).
* `ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo`: Freeze the application with package name `com.tencent.mobileqq` (QQ) and package names in alias `5oiR55qE5YiX6KGo`(My customization).
* `ff com.tencent.mobileqq,com.tencent.mm`: Freeze the application with package name `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat).
* `ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao`: Freeze the application with package name `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat) and `com.taobao.taobao` (TaoBao).
* `ff -d 3600 com.tencent.mobileqq`: Delay 3600 seconds to freeze app with package name `com.tencent.mobileqq` (QQ).

#### uf

* `uf com.tencent.mobileqq`: Unfreeze the application with package name `com.tencent.mobileqq` (QQ).
* `uf com.tencent.mobileqq,com.tencent.mm`: Unfreeze the application with package name `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat).
* `uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo`: Unfreeze the application with package name `com.tencent.mobileqq` (QQ) and package names in alias `5oiR55qE5YiX6KGo`(My customization).
* `uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao`: Unfreeze the application with package name `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat) and `com.taobao.taobao` (TaoBao).

#### es

* `es wifi`: Enable Wi-Fi.
* `es -d 20 wifi`: Enable Wi-Fi after 20 seconds.
* `es wifi,cd`: Enable Wi-Fi and cellular data.
* `es wifi;okuf;uf com.tencent.mobileqq`: Enable WiFi and execute one-key unfreeze and unfreeze the application with package name `com.tencent.mobileqq` (QQ).

#### ds

* `ds wifi`: Disable Wi-Fi.
* `ds cd`: Disable cellular data.
* `ds wifi;okff`: Disable Wi-Fi and execute one-key freeze.
* `ds -d 15 wifi;okff`: Delay 15 seconds and then disable Wi-Fi and execute one-key freeze.

#### st

* `st Content`: Send one `Toast` with content `Content`.

#### sn

* `sn Title,Content`: Send one notification.

#### sp

* `sp com.tencent.mobileqq`: Open QQ (package name is `com.tencent.mobileqq`).
* `sp com.tencent.mobileqq,com.tencent.mm`: Open QQ and WeChat (package name is `com.tencent.mobileqq` and `com.tencent.mm`).

#### su

* `su [URI]`: Try to open the specified URI (For reference: [URI Scheme](//www.urischeme.com)).
* `su alipayqr://platformapi/startapp?saId=20000056`: Open the Alipay payment code.

#### lg

* `lg 10086`: Output an ERROR level LOG with content 10086.

#### ls

* `ls`: Lock the screen.

## Additional Parameters

### Tips

* Some triggers do not require additional parameters (if filled in, they will be ignored).
* Some triggers can have additional parameters (optional).
* Some triggers must provide additional parameters that meet the conditions, otherwise they cannot be executed normally.

### Parameter Requirements

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

## 疑難排解
* [疑難排解](../faq/)

