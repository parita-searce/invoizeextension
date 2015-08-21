
var iframe = document.createElement("iframe");
iframe.setAttribute("id","myExt");
iframe.setAttribute("src", "http://localhost/ext/angular_ext/index.html");
iframe.setAttribute("style", "border:none; z-index:50; width:300px; display:block; position:absolute; top:0; right:0px; height:100%");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
document.body.appendChild(iframe);


console.log("content script");
//console.log(chrome.debugger);

console.log(window);

/*
function sendQuery(query) {
  chrome.runtime.sendMessage({action: 'search', query: query}, function (html) {
	console.log("from content script");
	console.log(html);
    // do what you want with the rendered HTML string
  });
}*/
