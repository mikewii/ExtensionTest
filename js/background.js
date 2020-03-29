if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}

var cmenu = {
	"title": "Context Menu Test",
	"contexts": ['selection'],
	"onclick": fun
}
chrome.contextMenus.create(cmenu);

function fun(info, text){
	getCookies("http://www.google.com", "CONSENT", function(id) {
    alert(id);
});
}

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

//usage:
