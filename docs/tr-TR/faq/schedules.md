# Scheduled Task - FAQ
[[toc]]

## It seems that the scheduled task is not working
* Is `FreezeYou` the latest version?
* Has `FreezeYou` been added to the allow-to-run list of the system? For example, allow running in the background, ignoring battery optimizations.
* Are spaces missing in tasks? 
* Are there extra spaces in the task?
* Commas should be `,`, not `，`.
* Pay attention to capitalization!

## Why the actual execution is sometimes a little later
* Since Android 6.0, Google introduced one new power-save mode, which organizes some tasks of applications to perform together in order to reduce power consumption, which will cause some tasks to be delayed.
* Since these applications usually wake up the system frequently or even continuously, the scheduled tasks of `FreezeYou` can generally be executed on time when the applications are running.

## Manually entering the package name is so troublesome
* In **Application List**, click the corresponding application (by default, **Click Function** is set to **Choose Action**), the interface for selecting the operation will appear, which has the function of **Copy Package Name**.
* In **Application List**, in the multi-selection mode (long press), you can select **Copy After Being Formatted** in the menu, and then paste the content to the place where you need to enter.<Badge text="6.7+" type="tip" vertical="top"/>

## Wi-Fi not turned on as planned
* 在确认任务命令编写正确并且应用已被加入后台运行白名单后，若仍没有按照计划执行，请检查是否开启了飞行模式，在部分设备上飞行模式已开启的情况下，普通软件是无法自行打开WiFi的，关闭飞行模式即可。

## Cellular data not turned on as planned
* 蜂窝移动数据网络 的开启目前仅支持在 `Android 4.4 及以下` 或 `具有 ROOT 权限` 或 `自冻FreezeYou 已被安装为高权限系统应用` 的设备上使用。
* Check if the `Enable or Disable Cellular Data` permission is granted.

## How to get the alias of my customization
* Go to `Settings` - `Manage space` - `Manage my customization`, click the appropriate item, then click **Copy Alias**.

## More Faq
* [FAQ](../faq/)

## Need More Help
- [Join QQ Group(704086494)](https://jq.qq.com/?_wv=1027&k=5RJffet)

