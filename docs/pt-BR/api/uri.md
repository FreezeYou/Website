# 通过 URI 冻结解冻应用程序
[[toc]]

## 授权范围
- 唤起 **FreezeYou** 的 **冻结/解冻/启动** 对话框（出于安全考虑，首次 **冻结/解冻/启动** 具体操作必须由用户自主完成）。

## 如何使用

### 嵌入 HTML
#### 请求 冻结/解冻/启动 [应用包名]
``` html
<a href="freezeyou://fuf/?pkgName=[应用包名][&action=[操作]]">请求 冻结/解冻/启动 [应用包名]</a>
```

#### 请求 冻结/解冻/启动 USIM卡应用
``` html
<a href="freezeyou://fuf/?pkgName=com.android.stk">请求 冻结/解冻/启动 USIM卡应用</a>
```
[点此尝试 冻结/解冻/启动 USIM卡应用(com.android.stk)](freezeyou://fuf/?pkgName=com.android.stk)

#### 请求 冻结/解冻/启动 USIM卡应用 <Badge text="8.3+" type="tip"/>
``` html
<a href="freezeyou://fuf/?pkgName=com.android.stk&action=fuf">请求 冻结/解冻/启动 USIM卡应用</a>
```
[点此尝试 冻结/解冻/启动 USIM卡应用(com.android.stk)](freezeyou://fuf/?pkgName=com.android.stk&action=fuf)

#### 请求 解冻 USIM卡应用 <Badge text="8.3+" type="tip"/>
``` html
<a href="freezeyou://fuf/?pkgName=com.android.stk&action=unfreeze">请求 解冻 USIM卡应用</a>
```
[点此尝试 解冻 USIM卡应用(com.android.stk)](freezeyou://fuf/?pkgName=com.android.stk&action=unfreeze)

#### 请求 冻结 USIM卡应用 <Badge text="8.3+" type="tip"/>
``` html
<a href="freezeyou://fuf/?pkgName=com.android.stk&action=freeze">请求 冻结 USIM卡应用</a>
```
[点此尝试 冻结 USIM卡应用(com.android.stk)](freezeyou://fuf/?pkgName=com.android.stk&action=freeze)

#### 请求 解冻并启动(若已解冻则直接启动) USIM卡应用 <Badge text="8.3+" type="tip"/>
``` html
<a href="freezeyou://fuf/?pkgName=com.android.stk&action=unFreezeAndRun">请求 解冻并启动(若已解冻则直接启动) USIM卡应用</a>
```
[点此尝试 解冻并启动(若已解冻则直接启动) USIM卡应用(com.android.stk)](freezeyou://fuf/?pkgName=com.android.stk&action=unFreezeAndRun)


### 应用间
``` java
Uri webPage = Uri.parse("freezeyou://fuf/?pkgName=" + pkgName);
Intent intent = new Intent(Intent.ACTION_VIEW, webPage);
if (intent.resolveActivity(getPackageManager()) != null) {
   startActivity(intent);
} else {
   Toast.makeText(MainActivity.this, "无可用程序，是否已安装 FreezeYou 7.2 及以上版本呢？", Toast.LENGTH_LONG).show();
}
```

## Sample
- [FreezeYouApiTest](https://github.com/FreezeYou/FreezeYouApiTest)

## Preciso de ajuda
* [Join QQ Group(704086494)](https://jq.qq.com/?_wv=1027&k=l356Aq75)
- [Join QQ Group(838379270)](https://jq.qq.com/?_wv=1027&k=5vmxG1F)
