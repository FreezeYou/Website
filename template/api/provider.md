# 通过 Provider 进行冻结解冻以及数据查询等操作
[[toc]]

## 版本要求
- **自冻(FreezeYou)** 版本不小于 **9.0** 。
- 部分需要更高版本（已标注）。

## 授权范围
- 获取当前 __自冻(FreezeYou)__ 的运行模式、获取已冻结应用列表、获取是否可通过 __自冻(FreezeYou)__ 安装应用<Badge text="9.2+" type="tip"/>、进行冻结应用操作、进行解冻应用操作。

## 如何使用

### 声明权限
- 需要在`AndroidManifest.xml`中声明权限（按需申请）
  - 获取当前 __自冻(FreezeYou)__ 的运行模式：
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.QUERY_STATUS" />
    ```
  - 获取应用是否被冻结：
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.QUERY_STATUS" />
    ```
  - 进行解冻应用操作：
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS" />
    ```
  - 进行冻结应用操作：
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS" />
    ```

### 代码示例
- 获取当前运行模式：
  ``` java
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.QUERY"), 
      "QUERY_MODE", null, new Bundle()
  );
  String currentMode = resultBundle.getString("currentMode", "Failed");
  ```

- 获取应用是否被冻结：
  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", packageName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.QUERY"), 
      "QUERY_FREEZE_STATUS", null, willBeSend
  );
  int resultStatusCode = resultBundle.getInt("status", 123456);
  ```

- 进行解冻应用操作：
  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", pkgName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE"), 
      "MODE_AUTO", null, willBeSend
  );
  int resultCode = resultBundle.getInt("result", 123456);
  ```

- 进行冻结应用操作：
  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", pkgName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.FREEZE"), 
      "MODE_AUTO", null, willBeSend
  );
  int resultCode = resultBundle.getInt("result", 123456);
  ```

## 参数要求

| 用途           | Uri                                                       | Method        | Arg   | Extras    |
| ------------- | --------------------------------------------------------- |:-------------:|:-----:| --------- |
| 获取当前运行模式 | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` | `QUERY_MODE` | 不适用 | 空 Bundle |
| 获取应用是否被冻结 | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` | `QUERY_FREEZE_STATUS` | 不适用 | Bundle，键 packageName 必须包含被查询的应用包名 |
| 获取是否可通过**自冻**安装应用<Badge text="9.2+" type="tip"/> | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY)` | `QUERY_IF_CAN_INSTALL_APPLICATIONS_STATUS` | 不适用 | 空 Bundle |
| 进行解冻应用操作 | `Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")` | `MODE_AUTO`或`MODE_ROOT`或`MODE_MROOT` | 不适用 | Bundle，键 packageName 必须包含被解冻的应用包名 |
| 进行冻结应用操作 | `Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")` | `MODE_AUTO`或`MODE_ROOT`或`MODE_MROOT` | 不适用 | Bundle，键 packageName 必须包含被冻结的应用包名 |


## 返回数据
___如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。___

| 返回值 | 获取当前运行模式（键 currentMode ） | 获取应用是否被冻结（键 status ） | 进行解冻应用操作（键 result ） | 进行冻结应用操作（键 result ） | 获取是否可通过自冻安装应用（键 status ） |
| ----- | ------------------------------- | ---------------------------- | --------------------------- | -------------------------- | ----------------------- |
| dpm | DPM（免ROOT）模式（ROOT模式可能可用） | 不适用 | 不适用 | 不适用 | 不适用 |
| root | ROOT模式（DPM模式不可用） | 不适用 | 不适用 | 不适用 | 不适用 |
| unavailable | DPM 与 ROOT 模式均不可用 | 不适用 | 不适用 | 不适用 | 不适用 |
| -4 | 不适用 | 不适用 | ROOT 模式解冻失败 | ROOT 模式冻结失败 | 不适用 |
| -3 | 不适用 | 不适用 | DPM 模式解冻失败 | DPM 模式冻结失败 | 不适用 |
| -2 | 不适用 | Bundle 中 packageName 键值为 null | Bundle 中 packageName 键值为 null | Bundle 中 packageName 键值为 null | 不适用 |
| -1 | 不适用 | 自冻(FreezeYou) 内部错误 | 自冻(FreezeYou) 内部错误 | 自冻(FreezeYou) 内部错误 | 不适用 |
| 0 | 不适用 | 未冻结 | 解冻成功 | 冻结成功 | 不适用 |
| 1 | 不适用 | ROOT 模式冻结 | 不适用 | 不适用 | 不适用 |
| 2 | 不适用 | DPM 模式冻结 | 不适用 | 不适用 | 不适用 |
| 3 | 不适用 | DPM + ROOT 双模式冻结 | 不适用 | 不适用 | 不适用 |
| 998 | 不适用 | 没有找到对应应用 | 没有找到对应应用 | 没有找到对应应用 | 不适用 |
| 999 | 不适用 | 不适用 | 检查发现未冻结，无需解冻 | 检查发现未解冻，无需冻结 | 不适用 |
| 其它 | 不适用 | 不适用 | 不适用 | 不适用 | boolean\[\]{预估功能可用,安装通道可用,有ROOT权限,有DPM权限} |

## {{@developmentSample}}
- [FreezeYouApiTest](https://github.com/Playhi/FreezeYouApiTest)

## {{@faq}}
### SecurityException
  - 是否已经在 **Manifest** 中声明了权限呢（`冻结\解冻应用`还需要类似请求敏感权限一样进行 **`requestPermissions`** ）。

## {{@currentLimitation}}
- 需要在安装**自冻 FreezeYou**后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）。

## {{@needHelp}}
- [{{@joinQQGroup}}(838379270)](https://jq.qq.com/?_wv=1027&k=5vmxG1F)
