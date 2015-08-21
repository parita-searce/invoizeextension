/*
chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "index.html",
    function(panel) {
      // code invoked on panel creation
    }
);

chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
		sidebar.setPage("index.html");
});
*/
chrome.devtools.network.onRequestFinished.addListener(
function(request)
{
	request.getContent(
	function(content, encoding) 
	{
		console.log(content);}
	);
}
);