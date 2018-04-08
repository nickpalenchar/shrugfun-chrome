function onClicked (tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];

    var input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = "¯\\_(ツ)_/¯";
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    //alert('done');
    document.body.removeChild(input);
    chrome.browserAction.setIcon({path:"icon_green.png"});

    setTimeout(resetIcon, 3000);
  });
}

function resetIcon() {
  chrome.browserAction.setIcon({ path: 'icon.png' });
}

chrome.browserAction.onClicked.addListener(onClicked);