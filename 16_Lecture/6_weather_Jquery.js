$(document).ready(function () {

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

    // Search Button Click
    $("#search-btn").click(function () {
        getWeather();
    });

    function getWeather() {

        var city = $("#city-input").val().trim();

        if (city === "") {
            alert("Please type a city name!");
            return;
        }

        $("#result").html("<p>Loading...</p>");

        var geoUrl =
            "https://nominatim.openstreetmap.org/search?format=json&q=" + city;

        $.getJSON(geoUrl)

            .done(function (geoData) {

                if (geoData.length === 0) {

                    $("#result").html(
                        "<p class='error-msg'>Place not found. Try another city.</p>"
                    );

                    return;
                }

                var place = geoData[0];

                var lat = place.lat;
                var lon = place.lon;
                var name = place.display_name;

                getWeatherByCoords(lat, lon, name);

            })

            .fail(function () {

                $("#result").html(
                    "<p class='error-msg'>Something went wrong.</p>"
                );

            });

    }

    function getWeatherByCoords(lat, lon, name) {

        var weatherUrl =
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            lat +
            "&longitude=" +
            lon +
            "&current_weather=true";

        $.getJSON(weatherUrl)

            .done(function (data) {

                showWeather(data, name);

            })

            .fail(function () {

                $("#result").html(
                    "<p class='error-msg'>Could not load weather.</p>"
                );

            });

    }

    function showWeather(data, name) {

        var temp = data.current_weather.temperature;
        var wind = data.current_weather.windspeed;
        var code = data.current_weather.weathercode;

        var description = weatherCodes[code] || "Unknown";

        $("#result").html(
            "<div class='city-name'>" + name + "</div>" +
            "<div class='temp'>" + temp + "°C</div>" +
            "<div class='details'>" + description + "</div>" +
            "<div class='details'>Wind Speed: " + wind + " km/h</div>"
        );

    }

});