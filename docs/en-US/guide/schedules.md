# Scheduled Task
[[toc]]

## General Task Commands

### Available Commands

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

* `okff` :Execute one-key freeze immediately.

#### okuf

* `okuf` :Execute one-key defrost immediately.
* `okuf -d 10` :Delay 10 seconds to perform one-key defrost.

#### ff

* `ff com.tencent.mobileqq` : Freeze the application with package name `com.tencent.mobileqq` (QQ).
* `ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo` :Freeze applications with package name and selected alias `5oiR55qE5YiX6KGo`.
* `ff com.tencent.mobileqq,com.tencent.mm` :Freeze apps with package names `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat).
* `ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao` :Freeze apps with package names `com.tencent.mobileqq` (QQ)and `com.tencent.mm` (WeChat) and `com.taobao.taobao` (TaoBao).
* `ff -d 3600 com.tencent.mobileqq` : Delay 3600 seconds to freeze app with package name `com.tencent.mobileqq` (QQ)e.

#### uf

* `uf com.tencent.mobileqq` :Unfreeze app with package name `com.tencent.mobileqq` (QQ).
* `uf com.tencent.mobileqq,com.tencent.mm` :Unfreeze app with package names `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat).
* `uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo` :Unfreeze app `com.tencent.mobileqq` (QQ) and selected alias `5oiR55qE5YiX6KGo`.
* `uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao` :Unfreeze apps with package names `com.tencent.mobileqq` (QQ) and `com.tencent.mm` (WeChat) and `com.taobao.taobao` (TaoBao).

#### es

* `es wifi` :Enable WiFi .
* `es -d 20 wifi` : Enable WiFi after 20 seconds.
* `es wifi,cd` : Enable WiFi and and cellular data networks.
* `es wifi;okuf;uf com.tencent.mobileqq` :Enable WiFi and execute onclick-Unfreeze of app with package name `com.tencent.mobileqq` (QQ).

#### ds

* `ds wifi` : Turn off WiFi .
* `ds cd` : Turn off and cellular data networks .
* `ds wifi;okff` : Turn off WiFi and execute oneclick-freeze.
* `ds -d 15 wifi;okff` : Delay 15 seconds to turn off Wifi and immediately freeze with one click.

#### st

* `st This is a tip` : Display a Toast prompt with the content `This is a tip`

#### sn

* `sn Notification title, Notification content` :    Display a notification in the notification bar.

#### sp

* `sp com.tencent.mobileqq` : Open QQ (package name is `com.tencent.mobileqq` ）.
* `sp com.tencent.mobileqq,com.tencent.mm` :Open QQ and WeChat (package name is `com.tencent.mobileqq` and `com.tencent.mm` ）.

#### su

* `su [Uri]` : Try to open the specified Uri （For reference:[URL Scheme of each application](//www.urischeme.com)）.
* `su alipayqr://platformapi/startapp?saId=20000056` : Open the Alipay payment code.

#### lg

* `lg 10086` : Output an ERROR level LOG with content 10086.

#### ls

* `ls` :Lock the screen.

## Trigger additional parameters

### Preface

* Some triggers do not require additional parameters (if filled in, they will be ignored).
* Some triggers can have additional parameters (optional).
* Some triggers must provide additional parameters that meet the conditions, otherwise they cannot be executed normally.

### Parameter requirements

* `打开屏幕时` :目前无附加参数.
* ` 屏幕时` :目前无附加参数.
* `打开应用时` :*<small> `7.0及以前版本` </small>*必须附加 `应用包名` ；*<small> `自 7.0` </small>*可附加 `应用包名` 、 `我的列表`*<small>`(V9.2)`</small>*，如无附加，则打开任意应用程序均执行.*在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务.*
* `离开应用时` :可附加 `应用包名` 、 `我的列表` <small>*`(V9.2)`*</small>，如无附加，则离开任意应用程序均执行.*在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务.*
* `解冻应用时` :可附加 `应用包名` ，如无附加，则解冻任意应用程序均执行.
* `冻结应用时` :可附加 `应用包名` ，如无附加，则冻结任意应用程序均执行.

### 可用参数

* `应用包名` :例如 `com.tencent.mobileqq` .
* `我的列表` :例如 `@5oiR55qE5YiX6KGo` .

### 使用实例

* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq` ，则会在运行 `QQ` 时执行预设置的 `任务` .
* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq,com.tencent.mm` ，则会在运行 `QQ` 或 `WeChat` 时执行预设置的 `任务` .
* 选择 `打开应用时` ，附加参数填写 `com.tencent.mobileqq,@5oiR55qE5YiX6KGo` ，则会在运行 `QQ` 或 `存在于别名为 5oiR55qE5YiX6KGo 的列表中package name` 时执行预设置的 `任务` .
* 选择 `打开应用时` ，附加参数填写 `当前使用的桌面的包名` ，则会在 **返回桌面** 时执行预设置的 `任务` .
* 选择 `离开应用时` ，附加参数不填写任何内容，则会在 **离开任意应用程序** 时执行预设置的 `任务` .

## FAQ
* [FAQ](../faq/)

