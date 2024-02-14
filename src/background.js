chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({ url: "src/pages/index.html" });
});
