fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
    .then(response => response.json())
    .then(data => {
        const currentTemperature = Math.round(data.main.temp);
        const weatherDescription = capitalizeEachWord(data.weather[0].description);
        const weatherHumidity = Math.round(data.main.humidity);
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Construct the weather icon URL

        document.getElementById('currentTemperature').textContent = currentTemperature + "°F";
        document.getElementById('weatherDescription').textContent = weatherDescription;
        document.getElementById('weatherHumidity').textContent = weatherHumidity + "%";

        // Append the weather icon under the current weather description
        const weatherIconImg = document.createElement('img');
        weatherIconImg.src = weatherIcon;
        weatherIconImg.alt = weatherDescription;

        document.getElementById('weatherInfo').appendChild(weatherIconImg);

        // Display the high temperature for the current day in the banner
        const tempMax = Math.round(data.main.temp_max);
        document.getElementById('temp-max').textContent = tempMax + "°F";

        // Fetch and display tomorrow's forecasted temperature at 3:00 PM
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
            .then(response => response.json())
            .then(data => {
                const tomorrowForecast = data.list.find(item => {
                    const dateTime = new Date(item.dt * 1000);
                    return dateTime.getDate() === (new Date().getDate() + 1) && dateTime.getHours() === 15; // 3 PM
                });

                if (tomorrowForecast) {
                    const temperature = Math.round(tomorrowForecast.main.temp);
                    document.getElementById('tomorrowForecast').textContent = temperature + "°F";
                } else {
                    document.getElementById('tomorrowForecast').textContent = "Forecast not available";
                }
            })
            .catch(error => console.error('Error fetching forecast data:', error));
    })
    .catch(error => console.error('Error fetching weather data:', error));

// Function to capitalize each word in a string
function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
