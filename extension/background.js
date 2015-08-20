/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

iframes = document.getElementsByTagName("iframe");
for (iframe in iframes){
    console.log(iframes[iframe].src);
}
console.log("In another Script");

*/

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {    
	console.log("Message = "+message)
	console.log("sender = "+sender)
	alert("message received "+message);
	
	sendResponse({farewell: "goodbye"});
});



/*
chrome.windows.create({
    type : 'popup',
    url : "http://localhost/extension/page.html",
    type: "popup"
}, function(newWindow) {

});
*/