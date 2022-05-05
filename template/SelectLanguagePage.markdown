---
home: true
navbar: false
heroText: Welcome!
tagline: Please choose your language first. :D
footer: Copyright © 2017-2022 The FreezeYou Team.
---
<!--{{@locales_generated_content}}-->

<component :is="'script'" type="text/javascript">
    const availableLangs = /*{{@locales_availableLangs}}*/;
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
</component>
