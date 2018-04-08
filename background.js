function onClicked (tab) {
  var input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = "¯\\_(ツ)_/¯";
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  chrome.browserAction.setIcon({path:"icon_green.png"});
  setTimeout(resetIcon, 2530);
}

function resetIcon() {
  chrome.browserAction.setIcon({ path: 'icon.png' });
}

chrome.browserAction.onClicked.addListener(onClicked);