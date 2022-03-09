# 通过 startActivity 冻结解冻应用程序
[[toc]]

## 授权范围
- 获取已冻结应用列表、进行冻结应用、进行解冻应用。

## 如何使用

### 声明权限
- 需要在`AndroidManifest.xml`中声明权限（按需申请）
  - 获取已冻结应用列表
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS"/>
    ```
  - 进行解冻应用
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS"/>
    ```
  - 进行冻结应用
    ``` xml
    <uses-permission android:name="cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS"/>
    ```

## Sample
- [FreezeYouApiTest](https://github.com/Playhi/FreezeYouApiTest)

## 疑難排解
### ActivityNotFoundException
- 已安装的是老版本FreezeYou或未安装FreezeYou

### SecurityException
- 是否已经在 **Manifest** 中声明了权限呢（`冻结\解冻应用`还需要类似请求敏感权限一样进行 **`requestPermissions`** ）

## Current Limitation
- 需要在安装**FreezeYou**后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）

## Need Help
* [加入QQ群(704086494)](https://jq.qq.com/?_wv=1027&k=l356Aq75)
- [加入QQ群(838379270)](https://jq.qq.com/?_wv=1027&k=5vmxG1F)
