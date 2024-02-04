chrome.runtime.onMessage.addListener((message) => {
  document.body.style.backgroundSize = "cover"
    if (message.type === "change-image") {
      document.body.style.backgroundImage = 'url(' + chrome.runtime.getURL("/Images/" + message.currentweather + ".jpg") + ')'
    }
  })