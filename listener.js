chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null, function(tab) { //<-- "tab" has all the information
    chrome.tabs.create({
      url: "http://tamponapp.com/?p="+tab.title+" "+tab.url
    });
  });
});