---
home: true
navbar: false
heroText: Welcome!
tagline: Please choose your language first. :D
footer: Copyright © 2017-2022 The FreezeYou Team.
---
* [English (US)](/en-US/)
* [В процессе](/ru-RU/)
* [В процессе](/ru-UA/)
* [中文（中国大陆）](/zh-CN/)
* [中文（中國臺灣）](/zh-TW/)


<script>
const availableLangs = ['en-US', 'ru-RU', 'ru-UA', 'zh-CN', 'zh-TW'];
let hash = window.location.hash;
const langs = navigator.languages;
if (hash !== "" && hash.substring(0, 2) === "#/" && langs != null) {
    hash = hash.substring(1);
    for (const lang of langs) {
        if (availableLangs.indexOf(lang) !== -1) {
            window.location = lang + hash;
            break;
        }
    }
}
</script>
