<script>
Node.prototype.empty = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
}

  function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function createABtest() {
    
    if(window.location.href.indexOf("camp=hydro") > -1) {
        var pageVersion = 1;
    }
    else if(window.location.href.indexOf("camp=kolano") > -1) {
        var pageVersion = 2;
    }
    else if(window.location.href.indexOf("camp=biodro") > -1) {
        var pageVersion = 3;
    }
    else if(window.location.href.indexOf("camp=bark") > -1) {
        var pageVersion = 4;
    }
    else if(window.location.href.indexOf("camp=pieta") > -1) {
        var pageVersion = 5;
    }
    else if(window.location.href.indexOf("camp=kregoslup") > -1) {
        var pageVersion = 6;
    }
    else {
        var pageVersion = 0;
    }
	
    createCookie(prefix + '-cookie', variants[pageVersion], 14);
    if (variants[pageVersion] != "0") {
        var newcookie = variants[pageVersion].split('.');
        var changeID = newcookie[0];
        var variantID = newcookie[1];

        changes[changeID]['variants'][variantID].execute();
        sendDimension(changeID, variantID);
    } else {
        sendDimension(0)
    }

};
function sendDimension(changeID, variantID) {
    if (readCookie('_ga')) {
        if (changeID != 0) {
            dataLayer.push({ 'event':'abTest', 'eventCategory': 'ab-test', 'eventAction': prefix + '-' + changeID + '-' + variantID, 'eventLabel': prefix + '-' + changeID + '-' + variantID, 'eventNonInteraction': 1 });
        } else {
            dataLayer.push({ 'event':'abTest', 'eventCategory': 'ab-test', 'eventAction': prefix + '-0-0', 'eventLabel': prefix + '-0-0', 'eventNonInteraction': 1 });
        }
    }
}
function checkCookie(name) {
    ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(name) > -1) return true;
    }
    return false;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}

var prefix = 'tel';

var phones = [
    "22 150 20 72",
    "22 150 20 73",
    "22 150 20 74",
    "22 150 20 75",
    "22 150 20 76",
    "22 150 20 77"
];

function changePhoneNumber(phone) {
    return function() {
        var classes = ["phone-measure", "phone-number", "link-phone", "btn desktop"];
        for (var j = 0; j < classes.length; j++) {
            var phoneNumbers = document.getElementsByClassName(classes[j]);
            for(var i = 0; i < phoneNumbers.length; i++) {
                phoneNumbers[i].href = "tel:+" + phone.replace(/ /g, "");
                phoneNumbers[i].innerHTML = phone;
            }
        }
    }
}


var changes = {
    1: { variants: { 1: { execute: changePhoneNumber(phones[0]) } } },
    2: { variants: { 1: { execute: changePhoneNumber(phones[1]) } } },
    3: { variants: { 1: { execute: changePhoneNumber(phones[2]) } } },
    4: { variants: { 1: { execute: changePhoneNumber(phones[3]) } } },
    5: { variants: { 1: { execute: changePhoneNumber(phones[4]) } } },
    6: { variants: { 1: { execute: changePhoneNumber(phones[5]) } } }
};

var variants = ["0"];
for (var j in changes) {
    for (var x in changes[j]['variants']) {
        variants.push(j + '.' + x);
    }
}

if (readCookie(prefix + '-cookie')) {
    if (variants.indexOf(readCookie(prefix + '-cookie')) != -1) {
        var currentCookie = readCookie(prefix + '-cookie').split('.');
        var currentChangeID = currentCookie[0];
        var currentVariantID = 0;
        if (currentChangeID != 0) {
            currentVariantID = currentCookie[1];
            changes[currentChangeID]['variants'][currentVariantID].execute();
        }
        sendDimension(currentChangeID, currentVariantID);
    } else {
        eraseCookie(prefix + '-cookie');
        createABtest();
    }
} else {
    createABtest();
}
</script>