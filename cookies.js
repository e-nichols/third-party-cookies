// http://sveinbjorn.org/cookiecheck
function are_cookies_enabled()
{
	var cookieEnabled = (navigator.cookieEnabled) ? true : false;
	var isNavCookieEnabledUndefined = typeof navigator.cookieEnabled === "undefined";
	console.log('cookieEnabled value: ' + cookieEnabled);
	console.log('isNavCookieEnabled undefined? -> ' + isNavCookieEnabledUndefined);
	
	console.log('Attempting to write garbage cookie.');
	document.cookie="testcookie";
	cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	
	console.log('cookieEnabled value after write: ' + cookieEnabled);
        
	var status = cookieEnabled ? 'enabled' : 'disabled';
        alert('Third party cookies are ' + status + '.');
}
