// http://sveinbjorn.org/cookiecheck
function are_cookies_enabled()
{
	var cookieEnabled = (navigator.cookieEnabled) ? true : false;

	if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
	{ 
		document.cookie="testcookie";
		cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	}
        var status = cookieEnabled ? 'enabled' : 'disabled';
        alert('Third party cookies are ' + status + '.');
	// return (cookieEnabled);
}
