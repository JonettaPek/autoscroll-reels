// On new event,
(() => {
    let currentReel = "";

    function newReelLoaded() {
        console.log("yo");
    }

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, reelId } = obj;
        if (type === "NEW") {
            currentReel = reeId;
            newReelLoaded();
        }
    })
})();