# 通过 Provider 进行冻结解冻以及数据查询等操作

[[toc]]

## 版本要求

- **自冻(FreezeYou)** 版本不小于 **9.0** 。
- 部分需要更高版本（已标注）。

## 授权范围

- 获取当前 __自冻(FreezeYou)__ 的运行模式、获取已冻结应用列表、获取是否可通过 __自冻(FreezeYou)__ 安装应用<Badge text="9.2+" type="tip"/>
  、进行冻结应用操作、进行解冻应用操作。

## 声明权限

按需在 `AndroidManifest.xml` 中声明权限，并适时请求授予权限。

### 普通权限

无需额外请求授予权限。

#### 查询各项状态数据

包括`获取应用是否被冻结`、`获取当前运行模式`。

``` xml
<uses-permission android:name="cf.playhi.freezeyou.permission.QUERY_STATUS" />
```

### 危险权限

需要适时额外请求授予权限。

#### 进行解冻应用操作

``` xml
<uses-permission android:name="cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS" />
```

#### 进行冻结应用操作

``` xml
<uses-permission android:name="cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS" />
```

## 代码示例

### 获取当前运行模式

  ``` java
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.QUERY"), 
      "QUERY_MODE", null, new Bundle()
  );
  String currentMode = resultBundle.getString("currentMode", "Failed");
  ```

### 获取应用是否被冻结

  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", packageName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.QUERY"), 
      "QUERY_FREEZE_STATUS", null, willBeSend
  );
  int resultStatusCode = resultBundle.getInt("status", 123456);
  ```

### 进行解冻应用操作

  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", pkgName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE"), 
      "MODE_AUTO", null, willBeSend
  );
  int resultCode = resultBundle.getInt("result", 123456);
  ```

### 进行冻结应用操作

  ``` java
  Bundle willBeSend = new Bundle();
  willBeSend.putString("packageName", pkgName);
  Bundle resultBundle = getContentResolver().call(
      Uri.parse("content://cf.playhi.freezeyou.export.FREEZE"), 
      "MODE_AUTO", null, willBeSend
  );
  int resultCode = resultBundle.getInt("result", 123456);
  ```

## 参数细节

### 获取当前运行模式

#### 请求

| 参数     | 值                                                         |
|:-------|:----------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` |
| Method | `QUERY_MODE`                                              |
| Extras | 空 `Bundle`                                                |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `currentMode`，类型为 `String`。

| 取得值         | 意义                       |
|:------------|:-------------------------|
| dpm         | DPM（免ROOT）模式（ROOT模式可能可用） |
| root        | ROOT模式（DPM模式不可用）         |
| unavailable | DPM 与 ROOT 模式均不可用        |

### 获取当前运行模式 V2<Badge text="10.11+" type="tip"/>

#### 请求

| 参数     | 值                                                         |
|:-------|:----------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` |
| Method | `QUERY_MODE_V2`                                           |
| Extras | 空 `Bundle`                                                |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `currentMode`，类型为 `String`。

| 取得值                                                | 意义                                    |
|:---------------------------------------------------|:--------------------------------------|
| MODE_DPM                                           | 当前运行于 `DPM 模式`                        |
| MODE_ROOT_DISABLE_ENABLE                           | 当前运行于 `ROOT DISABLE 模式`               |
| MODE_ROOT_HIDE_UNHIDE                              | 当前运行于 `ROOT HIDE 模式`                  |
| MODE_LEGACY_AUTO                                   | 当前运行于 `遗留的 DPM 与 ROOT DISABLE 自动选择模式` |
| MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED          | 当前运行于 `系统应用 DISABLE_UNTIL_USED 模式`    |
| MODE_SYSTEM_APP_ENABLE_DISABLE_USER                | 当前运行于 `系统应用 DISABLE_USER 模式`          |
| MODE_SYSTEM_APP_ENABLE_DISABLE                     | 当前运行于 `系统应用 DISABLE 模式`               |
| MODE_PROFILE_OWNER<Badge text="11.3+" type="tip"/> | 当前运行于 `配置文件所有者（Profile Owner）模式`      |
| MODE_UNKNOWN                                       | 当前运行于 `未知模式`                          |

### 获取应用是否被冻结

#### 请求

| 参数     | 值                                                         |
|:-------|:----------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` |
| Method | `QUERY_FREEZE_STATUS`                                     |
| Extras | `Bundle`，键 `packageName` 必须包含被查询的应用包名                     |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `status`，类型为 `int`。

| 取得值 | 意义                                    |
|:----|:--------------------------------------|
| -2  | `Bundle` 中的键 `packageName` 的值为 `null` |
| -1  | **自冻** 内部错误                           |
| 0   | 未冻结                                   |
| 1   | ROOT 模式冻结                             |
| 2   | DPM 模式冻结                              |
| 3   | DPM + ROOT 双模式冻结                      |
| 998 | 没有找到对应应用                              |

### 进行解冻应用操作

#### 请求

| 参数     | 值                                                            |
|:-------|:-------------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")` |
| Method | `MODE_AUTO` 或 `MODE_ROOT` 或 `MODE_MROOT`                     |
| Extras | `Bundle`，键 `packageName` 必须包含被解冻的应用包名                        |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `result`，类型为 `int`。

| 取得值 | 意义                                    |
|:----|:--------------------------------------|
| -4  | ROOT 模式解冻失败                           |
| -3  | DPM 模式解冻失败                            |
| -2  | `Bundle` 中的键 `packageName` 的值为 `null` |
| -1  | **自冻** 内部错误                           |
| 0   | 解冻成功                                  |
| 998 | 没有找到对应应用                              |
| 999 | 检查发现未冻结，无需解冻                          |

### 进行解冻应用操作 V2<Badge text="10.11+" type="tip"/>

#### 请求

| 参数     | 值                                                                                                                                                                                                                                                        |
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")`                                                                                                                                                                                             |
| Method | `MODE_DPM`、`MODE_ROOT_DISABLE_ENABLE`、`MODE_ROOT_HIDE_UNHIDE`、`MODE_LEGACY_AUTO`、`MODE_SYSTEM_APP_ENABLE_DISABLE`、`MODE_SYSTEM_APP_ENABLE_DISABLE_USER`、`MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED`、`MODE_PROFILE_OWNER`<Badge text="11.3+" type="tip"/> |
| Extras | `Bundle`，键 `packageName` 必须包含被解冻的应用包名                                                                                                                                                                                                                    |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `result`，类型为 `int`。

| 取得值 | 意义                                    |
|:----|:--------------------------------------|
| -10 | 配置文件所有者（Profile Owner）模式系统内部错误        |
| -9  | 不是配置文件所有者（Profile Owner）              |
| -8  | 不是系统应用                                |
| -7  | 没有该冻结解冻模式                             |
| -6  | 无 DPM 权限                              |
| -5  | DPM 模式系统内部错误                          |
| -4  | 无 ROOT 权限                             |
| -3  | 设备 Android 版本过低，不支持该 `Method`         |
| -2  | `Bundle` 中的键 `packageName` 的值为 `null` |
| -1  | **自冻** 内部错误                           |
| 0   | 解冻成功                                  |
| 1   | 没有发生异常，一般情况下为成功                       |

### 进行冻结应用操作

#### 请求

| 参数     | 值                                                          |
|:-------|:-----------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")` |
| Method | `MODE_AUTO` 或 `MODE_ROOT` 或 `MODE_MROOT`                   |
| Extras | `Bundle`，键 `packageName` 必须包含被解冻的应用包名                      |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `result`，类型为 `int`。

| 取得值 | 意义                                    |
|:----|:--------------------------------------|
| -2  | `Bundle` 中的键 `packageName` 的值为 `null` |
| -1  | **自冻** 内部错误                           |
| 0   | 冻结成功                                  |
| 998 | 没有找到对应应用                              |
| 999 | 检查发现未解冻，无需冻结                          |

### 进行冻结应用操作 V2<Badge text="10.11+" type="tip"/>

#### 请求

| 参数     | 值                                                                                                                                                                                                                                                        |
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")`                                                                                                                                                                                               |
| Method | `MODE_DPM`、`MODE_ROOT_DISABLE_ENABLE`、`MODE_ROOT_HIDE_UNHIDE`、`MODE_LEGACY_AUTO`、`MODE_SYSTEM_APP_ENABLE_DISABLE`、`MODE_SYSTEM_APP_ENABLE_DISABLE_USER`、`MODE_SYSTEM_APP_ENABLE_DISABLE_UNTIL_USED`、`MODE_PROFILE_OWNER`<Badge text="11.3+" type="tip"/> |
| Extras | `Bundle`，键 `packageName` 必须包含被解冻的应用包名                                                                                                                                                                                                                    |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `result`，类型为 `int`。

| 取得值 | 意义                                    |
|:----|:--------------------------------------|
| -10 | 配置文件所有者（Profile Owner）模式系统内部错误        |
| -9  | 不是配置文件所有者（Profile Owner）              |
| -8  | 不是系统应用                                |
| -7  | 没有该冻结解冻模式                             |
| -6  | 无 DPM 权限                              |
| -5  | DPM 模式系统内部错误                          |
| -4  | 无 ROOT 权限                             |
| -3  | 设备 Android 版本过低，不支持该 `Method`         |
| -2  | `Bundle` 中的键 `packageName` 的值为 `null` |
| -1  | **自冻** 内部错误                           |
| 0   | 冻结成功                                  |
| 1   | 没有发生异常，一般情况下为成功                       |

### 获取是否可通过**自冻**安装应用<Badge text="9.2+" type="tip"/>

#### 请求

| 参数     | 值                                                         |
|:-------|:----------------------------------------------------------|
| Uri    | `Uri.parse("content://cf.playhi.freezeyou.export.QUERY")` |
| Method | `QUERY_IF_CAN_INSTALL_APPLICATIONS_STATUS`                |
| Extras | 空 `Bundle`                                                |

#### 返回

如果对应键值为 `null`，则检查请求时的 `Method` 以及 `Extras` 是否为 `null` 。  
数据存于 `Bundle` 中的键 `status`，类型为 `boolean 数组`。

| 取得值        | 意义                                           |
|:-----------|:---------------------------------------------|
| boolean 数组 | boolean\[\]{预估功能可用, 安装通道可用, 有ROOT权限, 有DPM权限} |

## {{@developmentSample}}

- [FreezeYouApiTest](https://github.com/Playhi/FreezeYouApiTest)

## {{@faq}}

### SecurityException

- 是否已经在 **Manifest** 中声明了权限呢（`冻结\解冻应用`还需要类似请求敏感权限一样进行 **`requestPermissions`** ）。

### Failed to find provider info for ...

- 自 Android 11 (API 30)，包可见性已发生变更。
- 详见 [Package visibility in Android 11](https://developer.android.com/about/versions/11/privacy/package-visibility) 。

``` xml
<manifest>
    ...
    <queries>
        <provider
            android:authorities="cf.playhi.freezeyou.export.ExampleAuthority"
            android:exported="false" />
    </queries>
    ...
</manifest>
```

## {{@currentLimitation}}

- 需要在安装**自冻 FreezeYou**后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）。

## {{@needHelp}}

- [{{@contactUs}}](../about/contactUs.md)
