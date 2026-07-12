var input = document.getElementById("city-input");
var searchBtn = document.getElementById("search-btn");
var result = document.getElementById("result");

// This object converts weather codes (numbers) into simple text
// (Open-Meteo gives weather as a code number, not words)
var weatherCodes = {
  0: "Clear sky",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  95: "Thunderstorm"
};

// Step 1: Get latitude and longitude for the city the user typed
function getWeather() {
  var city = input.value;

  if (city === "") {
    alert("Please type a city name!");
    return;
  }

  // Show a loading message while we wait for data
  result.innerHTML = "<p>Loading...</p>";

  // This API turns a place name into latitude/longitude.
  // We use Nominatim (OpenStreetMap) here instead of Open-Meteo's geocoder
  // because it knows about small areas/neighborhoods too, not just big cities.
  var geoUrl = "https://nominatim.openstreetmap.org/search?format=json&q=" + city;

  fetch(geoUrl)
    .then(function (response) {
      return response.json(); // turn the response into a JS object
    })
    .then(function (geoData) {

      // If no place was found, geoData will be an empty array
      if (geoData.length === 0) {
        result.innerHTML = "<p class='error-msg'>Place not found. Try a different spelling or a nearby bigger area.</p>";
        return;
      }

      // Get the first matching place's details
      var place = geoData[0];
      var lat = place.lat;
      var lon = place.lon;
      var name = place.display_name; // Nominatim gives one full address string

      // Step 2: Now get the weather using the latitude and longitude
      getWeatherByCoords(lat, lon, name);
    })
    .catch(function (error) {
      result.innerHTML = "<p class='error-msg'>Something went wrong. Try again.</p>";
    });
}

// Step 2: Fetch the actual weather data
function getWeatherByCoords(lat, lon, name) {

  var weatherUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
    "&longitude=" + lon +
    "&current_weather=true";

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showWeather(data, name);
    })
    .catch(function (error) {
      result.innerHTML = "<p class='error-msg'>Could not load weather. Try again.</p>";
    });
}

// Step 3: Display the weather on the page
function showWeather(data, name) {
  var temp = data.current_weather.temperature;
  var wind = data.current_weather.windspeed;
  var code = data.current_weather.weathercode;

  // Look up the text description, or show "Unknown" if not found
  var description = weatherCodes[code];
  if (description === undefined) {
    description = "Unknown";
  }

  result.innerHTML =
    "<div class='city-name'>" + name + "</div>" +
    "<div class='temp'>" + temp + "°C</div>" +
    "<div class='details'>" + description + "</div>" +
    "<div class='details'>Wind speed: " + wind + " km/h</div>";
}

// When the Search button is clicked, run getWeather()
searchBtn.onclick = getWeather;