const hostname = window.location.hostname;
let domain = hostname.startsWith("www.") ? hostname.substring(4) : hostname;
let loadScript = document.createElement("script");
loadScript.src = "https://www.visitorstatistic.com/js/plausible.outbound-links.js";
loadScript.defer = true;
loadScript.setAttribute("data-domain", domain);
document.head.appendChild(loadScript);