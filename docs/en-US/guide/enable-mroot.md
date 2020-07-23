# Enable NoRoot
Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.

## Risk Warning
* 目前已累计收到两例用户反馈，反应出现启用免ROOT后设备图形锁（图案密码）无端发生变化导致无法解锁的情况，目前仍未查明原因，其中一台设备为 Samsung S7 edge 原厂系统 ，另一台情况不明（疑似同为 Samsung 设备）。因此，如有重要资料请各位在操作前备份，以防意外情况发生导致不必要的麻烦。
* 鉴于这部分 Samsung 设备发生的问题，建议启用前先关闭图形锁、密码锁等类似内容。
* 在启用免ROOT后，冻结应用（尤其是系统应用）前，请注意，某些系统某些情况下在对个别应用执行冻结操作后会导致系统出现一些异常——比如莫名卡顿、无法正常开机等问题。因此，请尽可能的在一定安全限度内进行操作以确保操作安全，避免产生不必要的麻烦。
* 某些设备某些系统在启用免ROOT后会导致系统自带的应用多开、应用分身无法正常使用（我们收集到的数据反应主要集中在 Android 8.0 系统中，非系统应用的第三方应用提供的分身、多开未见受此影响）。

## Required Material
* ADB Tools (Provided below)
* Some Codes (Provided below)
* 系统版本不小于 Android 5.0 且已安装最新版`自冻FreezeYou`的设备（自备）

## File Download
* ADB Tool and Code Pack (.zip format) : [Download link 1 (Source station)](https://freezeyou.playhi.net/attachment/urt.zip) | [Download link 2 (Baidu Net Disk)](https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA)

## Operation Method
* 找到设备系统设置中的`开发者选项`（没有的可以试试多点几下`关于手机`，或搜索`"您的设备型号" + 开发者选项`）
* 开启`开发者选项`中的`Android 调试`或`USB 调试`并将设备与具备 ADB 工具的计算机连接
* 完整解压缩先前下载的压缩包（.zip 格式）
* Linux用户执行解压后的`apply.sh`，Windows 用户执行解压后的`apply.cmd`或`apply`
* 如果`正在尝试启用免ROOT模式......`下方的提示包含`Success:`，应该就成功了。如果没有成功，可以前往[免ROOT疑难解答](../faq/mroot.md)寻找相应的类似情况的解决方案尝试解决。
* Always fail? → [NoRoot Faq](../faq/mroot.md)
* Too complex? → [用 秋之盒 启用 自冻(FreezeYou) 免ROOT模式](https://www.atmb.top/?from=freezeyou)

## Operation Screenshot
![Operation Screenshot](/assets/img/20180207104242.png)

## More Info
* Core Code:  `adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver`
* [AutumnBox](https://www.atmb.top/?from=freezeyou)  now has support quick enable FreezeYou NoRoot mode

## Need Help
* [Join QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=1b94199f20fa607ca03d33a8b53f37203fbf721e84900a7e20d89ba5a6fd3da5)


