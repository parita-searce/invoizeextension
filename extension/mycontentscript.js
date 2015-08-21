var iframe = document.createElement("iframe");
iframe.setAttribute("id","myExt");
iframe.setAttribute("src", "http://localhost/ext/extension/index.html");
iframe.setAttribute("style", "border:none; z-index:50; width:300px; display:block; position:absolute; top:0; right:0px; height:100%");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
document.body.appendChild(iframe);

/*
var newdiv = document.createElement("div");
newdiv.innerHTML='<object style="height:100%" type="text/html" data="http://localhost/ext/extension/index.html" ></object>';
newdiv.setAttribute("style", "border:none; width:300px; display:block; position:absolute; top:0; right:0px; height:100%");
document.body.appendChild(newdiv);
*/

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



function receiveMessage(event)
{	
	
	AnswerEvt = document.createElement("MyExtensionAnswer");
	AnswerEvt.setAttribute("Part1", "answers this.");

	document.documentElement.appendChild(AnswerEvt);

	var event = document.createEvent("HTMLEvents");
	event.initEvent("MyAnswerEvent", true, false);
	AnswerEvt.dispatchEvent(event);

}
document.addEventListener("fromExtension", receiveMessage, false, true);




var something = {
	listen_request: function(callback) 
	{ 
	// analogue of chrome.extension.onRequest.addListener
		document.addEventListener("something-query", function(event) {
			var node = event.target;
			if (!node || node.nodeType != Node.TEXT_NODE)
				return;

			var doc = node.ownerDocument;
			
			console.log("from extension");
			console.log(JSON.parse(node.nodeValue));
						
			callback(JSON.parse(node.nodeValue), doc, function(response) {
			
				node.nodeValue = JSON.stringify(response);
				var event = doc.createEvent("HTMLEvents");
				event.initEvent("something-response", true, false);
				return node.dispatchEvent(event);
			});
		}, false, true);
	},
 
	callback: function(request, sender, callback) {
		if (request.foo) {
		
			return setTimeout(function() {
				callback({bar: 2});
			}, 1000);
		} 
 
		if (request.employees) {		
			
			return callback({success: true});
			
		}

		return callback(null);
	}
}

something.listen_request(something.callback);









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