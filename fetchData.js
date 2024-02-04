const API_key = "30e95db82ed7dd8753cce0bc9d88ddc3"
const testData = { "coord": { "lon": -97.75, "lat": 30.29 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "base": "stations", "main": { "temp": 294.57, "feels_like": 293.79, "temp_min": 292.8, "temp_max": 296.31, "pressure": 1009, "humidity": 39 }, "visibility": 10000, "wind": { "speed": 2.06, "deg": 0 }, "clouds": { "all": 0 }, "dt": 1706994878, "sys": { "type": 2, "id": 2073627, "country": "US", "sunrise": 1706966448, "sunset": 1707005322 }, "timezone": -21600, "id": 4671654, "name": "Austin", "cod": 200 }

fetch("https://api.openweathermap.org/data/2.5/weather?lat=30.2867677&lon=-97.7525361&appid=30e95db82ed7dd8753cce0bc9d88ddc3&units=imperial")

    .then((data) => data.json())

    .then((jsonData) => {
        console.log(jsonData)
        document.getElementById("text_weather").innerText=jsonData.weather[0].main
        document.getElementById("text_temp").innerText=Math.round(jsonData.main.feels_like)
        document.getElementById("icon").src="https://openweathermap.org/img/wn/" + jsonData.weather[0].icon + ".png"

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "change-image", currentweather:jsonData.weather[0].main }); //set current weather to jsonData.weather[0].main
          });
          
    })

    