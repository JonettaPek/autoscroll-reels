// Checks that a youtube shorts is loaded every time the web page refreshes
// and, if so, sends the content page a new event with the reel id 
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("youtube.com/shorts")) {
        const queryParameter = JSON.stringify(tab.url.split("?"));
        const urlParameter = new URLSearchParams(queryParameter);
        console.log(urlParameter);
        browser.tabs.sendMessage(tabId, {
            type: "NEW",
            reelId: urlParameter.get("v"),
        });
    }
});
