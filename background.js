chrome.runtime.onInstalled.addListener(() => {
  // Create the context menu item when text is selected
  chrome.contextMenus.create({
    id: "primoSearch",
    title: "Search Primo for '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "primoSearch" && info.selectionText) {
    // Construct the Primo search URL with the selected text
    	const searchTerm = encodeURIComponent(info.selectionText.trim());
	const primoUrl = `https://onesearch.library.rice.edu/discovery/search?query=isbn,contains,${searchTerm},AND&tab=Everything&search_scope=MyInst_and_CI&vid=01RICE_INST:RICE&mode=advanced&offset=0`;
    // Open the Primo catalog search in a new tab
    chrome.tabs.create({ url: primoUrl });
  }
});

