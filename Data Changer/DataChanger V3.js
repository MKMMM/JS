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
    document.cookie = name + "=" + value + expires + "; path=/; domain=.crsclinic.pl";
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
function getCampValueFromURL() {
    var camps = {
        "camp=hydro": 1,
        "camp=kolano": 2,
        "camp=biodro": 3,
        "camp=bark": 4,
        "camp=pieta": 5,
        "camp=kregoslup": 6
    };

    for (var camp in camps) {
        if (window.location.href.indexOf(camp) > -1) {
			console.log(camps[camp]);
            return camps[camp];
        }
    }
	
	// Check for the 'tel-cookie'
    var cookieValue = readCookie(prefix + '-cookie');
    if (cookieValue && variants.indexOf(cookieValue) !== -1) {
		console.log("Cookie!");
        return parseInt(cookieValue.split('.')[0]);

    }

	// Return 0 if no camp and no valid cookie value
	console.log("No camp no cookie");
    return 0;
}

function createABtest() {
    var existingCookieValue = readCookie(prefix + '-cookie');
    if (existingCookieValue) {
        return; // If a cookie already exists, don't do anything.
    }

    var pageVersion = getCampValueFromURL();
    
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
}

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
        var classes = ["link-phone", "btn desktop", "btn mobile", "number"];
        for (var j = 0; j < classes.length; j++) {
            var phoneNumbers = document.getElementsByClassName(classes[j]);
            for(var i = 0; i < phoneNumbers.length; i++) {
                var shouldChange = true;
                
                // For 'number' class, only change if it's a child of 'phone-wrap-link'
                if(classes[j] === "number" && phoneNumbers[i].parentNode.className !== "phone-wrap-link") {
                    shouldChange = false;
                }

                if(shouldChange) {
                    var textNodeFound = false;
                    for(var k = 0; k < phoneNumbers[i].childNodes.length; k++) {
                        var node = phoneNumbers[i].childNodes[k];
                        if(node.nodeType == 3) { // Check if it's a text node
                            node.nodeValue = phone; // replace it.
                            textNodeFound = true;
                            break; 
                        }
                    }
                    if(!textNodeFound) {
                        phoneNumbers[i].appendChild(document.createTextNode(phone));
                    }

                    // Directly set href if the current element is an anchor tag
                    if(phoneNumbers[i].tagName === 'A') {
                        phoneNumbers[i].setAttribute('href', "tel:+" + phone.replace(/ /g, ""));
                    }
                    // If the element is inside an anchor tag, update the href of the anchor tag
                    else if(phoneNumbers[i].parentNode.tagName === 'A') {
                        phoneNumbers[i].parentNode.setAttribute('href', "tel:+" + phone.replace(/ /g, ""));
                    }

                    // Remove the next text node if the class is 'number'
                    if(classes[j] === "number" && phoneNumbers[i].nextSibling && phoneNumbers[i].nextSibling.nodeType === 3) {
                        phoneNumbers[i].parentNode.removeChild(phoneNumbers[i].nextSibling);
                    }
                }
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

var currentCookieValue = readCookie(prefix + '-cookie');

if (currentCookieValue) {
    // If there's an existing cookie:
	console.log("Cookie exists");
    var currentCookie = currentCookieValue.split('.');
    var currentChangeID = currentCookie[0];
    var currentVariantID = currentCookie[1];
    if (currentChangeID !== "0") {
        changes[currentChangeID]['variants'][currentVariantID].execute();
    }
    sendDimension(currentChangeID, currentVariantID);
} else if (window.location.href.indexOf("camp=") > -1) {
    // If there's no existing cookie, but there's a 'camp' parameter in the URL:
	console.log("No cookie camp present");
    createABtest();
}

</script>