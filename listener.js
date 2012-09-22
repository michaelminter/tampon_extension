chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null, function(tab) {
    return_url(tab.url, function(e) {
      chrome.tabs.create({
        url: "http://tamponapp.com/?p="+tab.title+" "+e
      });
    });
  });
});

function return_url(url, callback) {
  if (url.length > 20) {
    $.ajax({
      type: 'POST',
      url: 'http://fracture.it',
      data: { url: url },
      dataType: 'JSON'
    }).done(function(e) {
      callback(e.fractured_url);
    });
  } else {
   callback(url);
  }
}
