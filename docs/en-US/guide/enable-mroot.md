# Enable NoRoot
Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.

## Risk Warning
* So far, we have received two cases of user feedback. It is reported that the device's graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.
* In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.
* Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.
* On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).

## Required Material
* ADB Tools (Provided below)
* Some Codes (Provided below)
* Device system version Android 5.0+ , and `FreezeYou`_(latest version recommended)_ installed

## File Download
* ADB Tool and Code Pack (.zip format) : [Download link 1 (Source station)](https://freezeyou.playhi.net/attachment/urt.zip) | [Download link 2 (Baidu Net Disk)](https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA)

## Operation Method
* 找到设备系统设置中的`开发者选项`（没有的可以试试多点几下`关于手机`，或搜索`"您的设备型号" + 开发者选项`）
* 开启`开发者选项`中的`Android 调试`或`USB 调试`并将设备与具备 ADB 工具的计算机连接
* 完整解压缩先前下载的压缩包（.zip 格式）
* Linux用户执行解压后的`apply.sh`，Windows 用户执行解压后的`apply.cmd`或`apply`
* 如果`正在尝试启用免ROOT模式......`下方的提示包含`Success:`，应该就成功了。如果没有成功，可以前往[免ROOT疑难解答](../faq/mroot.md)寻找相应的类似情况的解决方案尝试解决。
* Always fail? → [NoRoot Faq](../faq/mroot.md)
* Too complex? → [Use AutumnBox to enable FreezeYou NoRoot Mode](https://www.atmb.top/?from=freezeyou)

## Operation Screenshot
![Operation Screenshot](/assets/img/20180207104242.png)

## More Info
* Core Code:  `adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver`
* [AutumnBox](https://www.atmb.top/?from=freezeyou)  now has support quick enable FreezeYou NoRoot mode

## Need Help
* [Join QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=1b94199f20fa607ca03d33a8b53f37203fbf721e84900a7e20d89ba5a6fd3da5)


