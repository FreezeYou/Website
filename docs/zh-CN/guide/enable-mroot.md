# 启用免ROOT
部分功能需要授予该特殊权限才可正常使用，如无需要则可直接跳过。

## 风险提示
* 目前已累计收到两例用户反馈，反应出现启用免ROOT后设备图形锁（图案密码）无端发生变化导致无法解锁的情况，目前仍未查明原因，其中一台设备为 Samsung S7 edge 原厂系统 ，另一台情况不明（疑似同为 Samsung 设备）。因此，如有重要资料请各位在操作前备份，以防意外情况发生导致不必要的麻烦。
* 鉴于这部分 Samsung 设备发生的问题，建议启用前先关闭图形锁、密码锁等类似内容。
* 在启用免ROOT后，冻结应用（尤其是系统应用）前，请注意，某些系统某些情况下在对个别应用执行冻结操作后会导致系统出现一些异常——比如莫名卡顿、无法正常开机等问题。因此，请尽可能的在一定安全限度内进行操作以确保操作安全，避免产生不必要的麻烦。
* 某些设备某些系统在启用免ROOT后会导致系统自带的应用多开、应用分身无法正常使用（我们收集到的数据反应主要集中在 Android 8.0 系统中，非系统应用的第三方应用提供的分身、多开未见受此影响）。

## 所需材料
* ADB工具（下方提供）
* 一些代码（下方提供）
* 系统版本不小于 Android 5.0 且已安装最新版`自冻FreezeYou`的设备（自备）

## 资料下载
* ADB 工具与代码包（.zip 格式）： [下载地址1(源站)](https://freezeyou.playhi.net/attachment/urt.zip) | [下载地址2(百度网盘)](https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA)

## 操作方法
* 找到设备系统设置中的`开发者选项`（没有的可以试试多点几下`关于手机`，或搜索`"您的设备型号" + 开发者选项`）
* 开启`开发者选项`中的`Android 调试`或`USB 调试`并将设备与具备 ADB 工具的计算机连接
* 完整解压缩先前下载的压缩包（.zip 格式）
* If wants to use `profile-owner` instead of `device-owner`, edit the `apply.xx` file, and replace the line `adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver` with `adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver`.
* Linux用户执行解压后的`apply.sh`，Windows 用户执行解压后的`apply.cmd`或`apply`
* 如果`正在尝试启用免ROOT模式......`下方的提示包含`Success:`，应该就成功了。如果没有成功，可以前往[免ROOT疑难解答](../faq/mroot.md)寻找相应的类似情况的解决方案尝试解决。
* 总是失败？ → [免ROOT疑难解答](../faq/mroot.md)
* 太过复杂？ → [用 秋之盒 启用 自冻(FreezeYou) 免ROOT模式](https://www.atmb.top/?from=freezeyou)

## Core Code
<CodeGroup>
  <CodeGroupItem title="set-device-owner" active>

```shell bash:no-line-numbers
adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
```

  </CodeGroupItem>

  <CodeGroupItem title="set-profile-owner">

```shell bash:no-line-numbers
adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
```

  </CodeGroupItem>
</CodeGroup>

## 操作截图
![操作截图](/assets/img/20180207104242.png)

## 更多资料
* [秋之盒](https://www.atmb.top/?from=freezeyou) 现已支持便捷启用 自冻(FreezeYou) 免ROOT模式。

## 需要帮助
- [联系我们](../about/contactUs.md)


