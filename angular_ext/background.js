/*
console.log(chrome.webRequest);
console.log(chrome.debugger);
*/


chrome.webRequest.onCompleted.addListener(
function(details) 
{
  console.log(details);
}
,{urls: [ "http://localhost/ext/*",	"https://mail.google.com/mail/*", "https://www.google.co.in/*"]},['responseHeaders']);


/*

var currentTab;
var version = "1.0";

chrome.tabs.query( //get current Tab
    {
        url:[""http://localhost/ext/*",	"https://mail.google.com/mail/*", "https://www.google.co.in/*""]
    },
     function(tabArray) {
        currentTab = tabArray[0];
        chrome.debugger.attach({ //debug at current tab
            tabId: currentTab.id
        }, version, onAttach.bind(null, currentTab.id));
    }
)


function onAttach(tabId) {

    chrome.debugger.sendCommand({ //first enable the Network
        tabId: tabId
    }, "Network.enable");

    chrome.debugger.onEvent.addListener(allEventHandler);

}


function allEventHandler(debuggeeId, message, params) {

    if (currentTab.id != debuggeeId.tabId) {
        return;
    }

    if (message == "Network.responseReceived") { //response return 
        chrome.debugger.sendCommand({
            tabId: debuggeeId.tabId
        }, "Network.getResponseBody", {
            "requestId": params.requestId
        }, function(response) {
            // you get the response body here!
            // you can close the debugger tips by:
            chrome.debugger.detach(debuggeeId);
        });
    }

}
*/

/*

function Background() {
  // load angular module
  var $injector = angular.injector(['ng', 'demo']);
  
  // get handle of compile modules
  this.$compile = $injector.get('$compile');
  this.$templateCache = $injector.get('$templateCache');
  
  // get handle of our services
  this.api = $injector.get('api');
  this.config = $injector.get('config');
}


Background.prototype.registerMessageListener = function () {
  chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    // request to login
	console.log("background");
    switch (request.action) {
      case 'search':
        return $this.handleSearchRequest(request.query, sendResponse);
    }
    
    return true;
});
}
*/
