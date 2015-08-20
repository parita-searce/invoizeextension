function sendMsg()
	{	
	 
	
		nmValue = document.getElementById("nm").value;
		console.log(chrome.runtime);
		alert(chrome.runtime.id);
		chrome.runtime.sendMessage("works");
		/*
		window.postMessage(nmValue,"*");
		*/
	}
var go = function() 
{	
	doc = window.parent.document;
	var event = doc.createEvent('Event');
	event.initEvent('fromExtension');
	doc.dispatchEvent(event);
}	