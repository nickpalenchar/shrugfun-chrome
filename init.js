function onMessage(request, sender, sendResponse) {
  alert('hi');
}

chrome.runtime.onMessage.addListener(onMessage);