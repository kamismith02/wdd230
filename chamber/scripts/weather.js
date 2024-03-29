fetch('https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
    .then(response => response.json())
    .then(data => {
        const currentTemperature = Math.round(data.main.temp);
        const weatherDescription = capitalizeEachWord(data.weather[0].description);
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Construct the weather icon URL

        document.getElementById('currentTemperature').textContent = currentTemperature + "°F";
        document.getElementById('weatherDescription').textContent = weatherDescription;

        const weatherIconImg = document.createElement('img');
        weatherIconImg.src = weatherIcon;
        weatherIconImg.alt = weatherDescription;

        const weatherInfoDiv = document.getElementById('weatherInfo');
        weatherInfoDiv.insertBefore(weatherIconImg, weatherInfoDiv.childNodes[0]);
    })
    .catch(error => console.error('Error fetching weather data:', error));

// Fetch three-day forecast data
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Tooele&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const forecast = data.list.slice(0, 8 * 3);
        let forecastData = [];
        for (let i = 0; i < forecast.length; i += 8) {
            const item = forecast[i];
            const date = new Date(item.dt * 1000);
            const temperature = Math.round(item.main.temp);
            forecastData.push({ date, temperature });
        }
        forecastData.forEach((item, index) => {
            document.getElementById(`day${index + 1}`).textContent = item.date.toDateString();
            document.getElementById(`temperature${index + 1}`).textContent = item.temperature + "°F";
        });
    })
    .catch(error => console.error('Error fetching forecast data:', error));

function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}