
var newdiv = document.createElement("div");
newdiv.innerHTML='<object type="text/html" data="http://localhost/extension/index.html" ></object>';
newdiv.setAttribute("style", "border:none; width:300px; display:block; position:absolute; top:0; right:0px; height:100%");
document.body.appendChild(newdiv);


/*
var iframe = document.createElement("iframe");
iframe.setAttribute("src", "http://localhost/extension/index.html");
iframe.setAttribute("style", "border:none; width:300px; display:block; position:absolute; top:0; right:0px; height:100%");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
document.body.appendChild(iframe);
*/




/*
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response);
});*/


document.addEventListener("hello", function(data) {
    chrome.runtime.sendMessage("test"+data, 
	function(response) {
	  console.log(response.farewell);
	  
	});
});



var myExtension = 
{
  myListener: function(evt) 
  {
    alert("Received from web page: " + 
           evt.target.getAttribute("attribute1") + " - " + 
           evt.target.getAttribute("attribute2"));

		   
	/* the extension answers the page*/
    evt.target.setAttribute("attribute3", "The extension");   
	
    var doc = evt.target.ownerDocument; 
	var AnswerEvt = doc.createElement("MyExtensionAnswer");
		AnswerEvt.setAttribute("Part1", "answers this.");

		doc.documentElement.appendChild(AnswerEvt);

		var event = doc.createEvent("HTMLEvents");
		event.initEvent("MyAnswerEvent", true, false);
		AnswerEvt.dispatchEvent(event);
    
  }
}

document.addEventListener("MyExtensionEvent", function(e) { myExtension.myListener(e); }, false, true);

/*

var myPort = chrome.extension.connect();

myPort.onMessage.addListener(function(data) {
    console.log( 'got a message' );
    if( data.message == 'doaction' )
    {
		var AnswerEvt = document.createElement("MyExtensionAnswer");
		AnswerEvt.setAttribute("Part1", "answers this.");

		document.documentElement.appendChild(AnswerEvt);

		var event = document.createEvent("HTMLEvents");
		event.initEvent("MyAnswerEvent", true, false);
		AnswerEvt.dispatchEvent(event);        
    } // end if
});

*/

document.addEventListener("fromExtension", receiveMessage, false, true);
function receiveMessage(event)
{	
	
	AnswerEvt = document.createElement("MyExtensionAnswer");
	AnswerEvt.setAttribute("Part1", "answers this.");

	document.documentElement.appendChild(AnswerEvt);

	var event = document.createEvent("HTMLEvents");
	event.initEvent("MyAnswerEvent", true, false);
	AnswerEvt.dispatchEvent(event);

}
