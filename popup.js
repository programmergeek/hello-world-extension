let changeColour = document.getElementById("changeColour")

chrome.storage.sync.get("color", ({color}) => {
    changeColour.style.background = color
})