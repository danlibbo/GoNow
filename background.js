chrome.commands.onCommand.addListener((command) => {
  if (command === "open-url") {
    chrome.tabs.create({ url: 'chrome://newtab' });
  }
});