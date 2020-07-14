# 计划任务
[[toc]]

## 通用任务命令

### 可用命令

* `okff` ：一键冻结。
* `okuf` ：一键解冻。
* `ff` ：冻结。
* `uf` ：解冻。
* `es` ：启用某设置项<small>*（自6.2版本可用 `wifi` ；自7.1版本可用 `cd` （蜂窝移动数据网络）；自7.3版本可用 `bluetooth` ）*</small>。
* `ds` ：关闭某设置项<small>*（自6.2版本可用 `wifi` ；自7.1版本可用 `cd` （蜂窝移动数据网络）；自7.3版本可用 `bluetooth` ）*</small>。
* `st` ：显示一条提示。
* `sn` <Badge text="8.6+" type="tip"/>：在通知栏显示一条通知。
* `sp` ：打开指定应用。
* `su` ：根据 Uri 打开指定应用。
* `lg` <Badge text="7.2+" type="tip"/>：打印一条 ERROR 级别的 LOG ，一般情况下无使用需求。
* `ls` <Badge text="8.7+" type="tip"/>：锁定屏幕。

### 追加参数

* `-d` <Badge text="7.2+" type="tip"/>：延时执行，单位为 `秒` 。

### 内部变量

* `[ppkgn]` <Badge text="7.4+" type="tip"/>：先前应用程序包名，仅 触发器为 离开应用时、打开应用时 时可使用，正式使用前可在相关任务中，使用 `st [ppkgn]` 了解相关内容，减小意外冻结的可能。
* `[cpkgn]` <Badge text="7.4+" type="tip"/>：当前应用程序包名，仅 触发器为 离开应用时、打开应用时、解冻应用时、冻结应用时 时可使用，正式使用前可在相关任务中，使用 `st [cpkgn]` 了解相关内容，减小意外冻结的可能。

### 使用示例

#### okff

* `okff` ：立即执行一键冻结。

#### okuf

* `okuf` ：立即执行一键解冻。
* `okuf -d 10` ：延后 10秒 执行一键解冻。

#### ff

* `ff com.tencent.mobileqq` ：冻结包名为 `com.tencent.mobileqq` (QQ) 的应用程序。
* `ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo` ：冻结包名为 `com.tencent.mobileqq` (QQ) 和 `存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的` 的应用程序。
* `ff com.tencent.mobileqq,com.tencent.mm` ：冻结包名为 `com.tencent.mobileqq` (QQ) 和 `com.tencent.mm` (微信) 的应用程序。
* `ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao` ：冻结包名为 `com.tencent.mobileqq` (QQ) 和 `com.tencent.mm` (微信) 和 `com.taobao.taobao` (淘宝) 的应用程序。
* `ff -d 3600 com.tencent.mobileqq` ：延后 3600秒 冻结包名为 `com.tencent.mobileqq` (QQ) 的应用程序。

#### uf

* `uf com.tencent.mobileqq` ：解冻包名为 `com.tencent.mobileqq` (QQ) 的应用程序。
* `uf com.tencent.mobileqq,com.tencent.mm` ：解冻包名为 `com.tencent.mobileqq` (QQ) 和 `com.tencent.mm` (微信) 的应用程序。
* `uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo` ：解冻包名为 `com.tencent.mobileqq` (QQ) 和 `存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的` 的应用程序。
* `uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao` ：解冻包名为 `com.tencent.mobileqq` (QQ) 和 `com.tencent.mm` (微信) 和 `com.taobao.taobao` (淘宝) 的应用程序。

#### es

* `es wifi` ：启用 WiFi 。
* `es -d 20 wifi` ：延后 20秒 启用 WiFi 。
* `es wifi,cd` ：启用 WiFi 和 蜂窝移动数据网络 。
* `es wifi;okuf;uf com.tencent.mobileqq` ：启用 WiFi 、执行 一键解冻 并 解冻包名为 `com.tencent.mobileqq` (QQ) 的应用程序。

#### ds

* `ds wifi` ：关闭 WiFi 。
* `ds cd` ：关闭 蜂窝移动数据网络 。
* `ds wifi;okff` ：关闭 WiFi 并执行 一键冻结。
* `ds -d 15 wifi;okff` ：延后 15秒 关闭 WiFi 并 立即执行 一键冻结。

#### st

* `st 这是一条提示` ：显示一条 Toast 提示，内容为`这是一条提示`。

#### sn

* `sn 通知标题,通知内容` ：在通知栏显示一条通知。

#### sp

* `sp com.tencent.mobileqq` ：打开 QQ （包名为 `com.tencent.mobileqq` ）。
* `sp com.tencent.mobileqq,com.tencent.mm` ：打开 QQ 和 微信 （包名为 `com.tencent.mobileqq` 和 `com.tencent.mm` ）。

#### su

* `su [Uri]` ：尝试打开指定的 Uri。（可参考：[各应用 URL Scheme](//www.urischeme.com)）
* `su alipayqr://platformapi/startapp?saId=20000056` ：打开 支付宝 付款码。

#### lg

* `lg 10086` ：输出一条 ERROR 级别的 LOG ，内容为 10086 。

#### ls

* `ls` ：锁定屏幕。

## 触发器附加参数

### 使用前言

* 部分触发器无须附加参数（如果填写会被忽略）。
* 部分触发器可以填写附加参数（非必须）。
* 部分触发器必须提供符合条件的附加参数，否则无法正常执行。

### 参数要求

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

## 疑难解答
* [疑难解答](../faq/)

## 赞助支持

* [支持 自冻FreezeYou 的后续开发](https://freezeyou.playhi.net/sponsorship.html)

