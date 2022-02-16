# NoRoot - FAQ
[[toc]]

## Hint
- 如果想要启用免ROOT，但在来到这里之前还没有尝试过启用免ROOT，建议先前往[Habilitar NoRoot](../guide/enable-mroot.html)。

## adb server version doesn't match this client
- **(仅限使用Windows系统的用户)** 把解压后得到的adb文件，删去占用空间较大的那个(约2544KB)，再试试？
- 是否有PC端手机助手类软件占用了相关端口呢？可以先退出相关助手类软件（结束其PC端后台，含衍生内容）。

## error: device unauthorized
- 请在被操作设备上点击确认允许操作。

## java.lang.IllegalStateException: ... there are already several accounts ... (“正在尝试启用免ROOT模式……”)
- 请检查您系统设置中账户中的账户是否全部删除了(需要全部删除，免ROOT启用后，可以再手动加回去)(实在删不掉的账户，可以试试断开网络连接以后删除，还不行的话可以试试先备份相关的应用数据以后卸载相关应用，成功后再恢复备份)，如果不清楚是哪个应用程序的账户没有清除干净，请在`“正在尝试启用免ROOT模式……”`上方，寻找`“当前设备账户信息：”`在`Accounts`组中，检查`type=`这一项，`=`后面的是应用程序包名，然后在 **自冻 FreezeYou** 列表中寻找该包名对应的程序即可获知账户来自哪个应用程序。
- 也可以尝试重启至<b>安全模式</b>（调出关机界面后，长按显示的“关机”按钮），再次尝试进行激活。

## java.lang.IllegalStateException: ... there are already several users ... (“正在尝试启用免ROOT模式……”)
- 请检查您系统设置中可见的其他用户是否已经删除了、分身应用是否已经关闭了(部分分身的实现利用的是 Android 自带的多用户功能，会影响免ROOT的启用)，如果还是失败，可以尝试 `adb shell pm remove-user [USER_ID]` <Badge text="该操作可能导致系统自带的分身功能无法正常使用" type="error"/>。

## java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE\_DEVICE\_ADMINS
- 在 `USB调试` 下方 还有一个 `USB调试(安全设置)`，也需要打开，如果提示登录小米账号，请避免勾选 同步 项。[MIUI公告](https://www.miui.com/thread-5711795-1-1.html)

## 好麻烦，有没有简单点的
- [使用 AutumnBox 启用 自冻FreezeYou 免ROOT模式](https://www.atmb.top/?from=freezeyou)

## 激活以后，USB 调试之类的可以关掉吗？
- 正常情况下是可以的（目前还没有收到关闭后失效或无法关闭的情况），同时为了安全考虑，也建议激活完成后`关闭 USB 调试`。

## 启用以后能否卸载？
- 可以卸载，但可能需要先到 `更多设置` → `危险区` 点击 `解除免ROOT`，然后正常卸载即可。

## More Faq
* [FAQ](../faq/)

## Need More Help
- [Join QQ Group(704086494)](https://jq.qq.com/?_wv=1027&k=5RJffet)
