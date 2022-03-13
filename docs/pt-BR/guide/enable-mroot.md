# Habilitar NoRoot
Algumas funções precisam que essa permissão especial seja concedida antes que possam ser usadas normalmente, se não forem necessárias, isso pode ser ignorado diretamente.

## Aviso de risco
* So far, we have received two cases of user feedback. It is reported that the device's graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.
* In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.
* Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.
* On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).

## Required Material
* Ferramentas ADB (fornecidas abaixo)
* Alguns códigos (fornecidos abaixo)
* Versão do sistema do dispositivo Android 5.0+ e `FreezeYou`_(última versão recomendada)_ instalados

## Transferência do arquivo
* Ferramenta ADB e pacote de código (formato .zip): [Link de transferência 1 (estação de origem)](https://freezeyou.playhi.net/attachment/urt.zip) | [Link de transferência 2 (Baidu Net Disk)](https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA)

## Operation Method
* Go to the `Developer options` (if not seen, we can try to click the `About phone` several times, or search for `"your device model" + Developer options`).
* Enable `USB debugging` and connect the device with a computer with ADB tools.
* Fully unzip the previously downloaded archive (.zip format). 
* Linux users run `apply.sh`, and Windows users run `apply.cmd` or `apply`.
* If the output below `正在尝试启用免ROOT模式......` contains `Success:`, then most likely we succeeded. If not, we can go to [NoRoot Faq](../faq/mroot.md) and various search engines to find solutions.
* Always fail? → [NoRoot Faq](../faq/mroot.md)
* Too complex? → [Use AutumnBox to enable FreezeYou NoRoot Mode](https://www.atmb.top/?from=freezeyou)

## Captura de tela da operação
![Captura de tela da operação](/assets/img/20180207104242.png)

## Mais informações
* Código principal: `adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver`
* [AutumnBox](https://www.atmb.top/?from=freezeyou) agora tem suporte para habilitação rápida do modo FreezeYou NoRoot

## Preciso de ajuda
* [Join QQ Group](https://jq.qq.com/?_wv=1027&k=l356Aq75)


