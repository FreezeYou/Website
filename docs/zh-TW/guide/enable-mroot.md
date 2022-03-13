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
* Go to the `Developer options` (if not seen, we can try to click the `About phone` several times, or search for `"your device model" + Developer options`).
* Enable `USB debugging` and connect the device with a computer with ADB tools.
* Fully unzip the previously downloaded archive (.zip format). 
* Linux users run `apply.sh`, and Windows users run `apply.cmd` or `apply`.
* If the output below `正在尝试启用免ROOT模式......` contains `Success:`, then most likely we succeeded. If not, we can go to [NoRoot Faq](../faq/mroot.md) and various search engines to find solutions.
* Always fail? → [NoRoot Faq](../faq/mroot.md)
* Too complex? → [Use AutumnBox to enable FreezeYou NoRoot Mode](https://www.atmb.top/?from=freezeyou)

## Operation Screenshot
![Operation Screenshot](/assets/img/20180207104242.png)

## More Info
* Core Code:  `adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver`
* [秋之盒](https://www.atmb.top/?from=freezeyou)  now has support quick enable FreezeYou NoRoot mode

## Need Help
* [加入QQ群](https://jq.qq.com/?_wv=1027&k=l356Aq75)


