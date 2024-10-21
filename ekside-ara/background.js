chrome.contextMenus.create({
  id: "eksiAra",
  title: "Ekşi Sözlük'te Ara: '%s'",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "eksiAra") {
    const query = info.selectionText.trim();
    if (query) {
      const url = `https://eksisozluk.com/?q=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: url });
    }
  }
});
