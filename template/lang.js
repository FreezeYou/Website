const availableLangs = /*{{@locales_availableLangs}}*/;

function checkAndAddSlash(target) {
    if (target.length >= 5 && target.substring(target.length - 5, target.length) === ".html") {
        return target;
    }
    return target.charAt(target.length - 1) === '/' ? target : target + "/";
}

function forwardTo(definedLanguage) {
    const langs = navigator.languages;
    let hash = window.location.hash;
    if (location.pathname !== '/') return;
    if (hash.length >= 2 && hash.substring(0, 2) === "#/") {
        hash = hash.substring(1);
    } else {
        hash = "";
    }
    if (definedLanguage == null) {
        for (const lang of langs) {
            if (availableLangs.indexOf(lang) !== -1) {
                window.location = checkAndAddSlash(lang + hash);
                break;
            }
        }
    } else {
        window.location = checkAndAddSlash(definedLanguage + hash);
    }
}

forwardTo(null);
