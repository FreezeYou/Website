# {{@enableNoRoot}}
{{@enableNoRootExtra}}

## {{@riskWarning}}
* {{@riskWarning_text_1}}
* {{@riskWarning_text_2}}
* {{@riskWarning_text_3}}
* {{@riskWarning_text_4}}

## {{@requiredMaterial}}
* {{@adbTool_provided}}
* {{@someCode_provided}}
* {{@android5_0_freezeYouInstalled}}

## {{@fileDownload}}
* {{@adbToolAndCodePack_zipFormat_colon}} [{{@downloadLink1_sourceStation}}](https://freezeyou.playhi.net/attachment/urt.zip) | [{{@downloadLink2_baiduPan}}](https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA)

## {{@operationMethod}}
* {{@operationMethod_step_1}}
* {{@operationMethod_step_2}}
* {{@operationMethod_step_3}}
* {{@operationMethod_step_check_before_4}}
* {{@operationMethod_step_4}}
* {{@operationMethod_step_5}}
* {{@operationMethod_alwaysFail}}[{{@noRootFaq}}](../faq/mroot.md)
* {{@operationMethod_tooComplex}}[{{@useAutumnBoxToEnableFreezeYouMRootMode}}](https://www.atmb.top/?from=freezeyou)

## {{@coreCode}}
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

## {{@operationScreenshot}}
![{{@operationScreenshot}}](/assets/img/20180207104242.png)

## {{@moreInfo}}
* [{{@autumnBox}}](https://www.atmb.top/?from=freezeyou) {{@nowHasSupportFastEnableFreezeYouMRootMode}}

## {{@needHelp}}
- [{{@contactUs}}](../about/contactUs.md)


