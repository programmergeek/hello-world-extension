let changeColour = document.getElementById("changeColour")

changeColour.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor
    })
})

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({color}) => {
        document.body.style.backgroundColor = color
    })
}

chrome.storage.sync.get("color", ({color}) => {
    changeColour.style.background = color
})