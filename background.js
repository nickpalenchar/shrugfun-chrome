function onClicked (tab) {
  var input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = "¯\\_(ツ)_/¯";
  document.body.appendChild(input);
  input.select();
  var copyResult = document.execCommand('Copy');
  document.body.removeChild(input);

  if (!copyResult) {
    chrome.browserAction.setIcon({path:"icon_error.png"});
    return setTimeout(resetIcon, 10000);
  }

  chrome.browserAction.setIcon({path:"icon_green.png"});
  setTimeout(resetIcon, 5000);
}

function resetIcon() {
  chrome.browserAction.setIcon({path:"icon.png"})
}

chrome.browserAction.onClicked.addListener(onClicked);