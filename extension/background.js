chrome.downloads.onCreated.addListener(function(downloadItem) {
  if (downloadItem.mime && downloadItem.mime.startsWith("image/")) {
    chrome.action.openPopup();
  }
});