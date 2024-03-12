const apiKey = '74a0ec99bed0ffa4e9a88ae81d66c579';

// City and country code (you can change these)
const city = 'Orem';
const countryCode = 'US';

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;

// Fetch weather data from OpenWeatherMap API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Extract required weather information
        const temperature = data.main.temp;
        const description = capitalizeEachWord(data.weather[0].description);
        const iconCode = data.weather[0].icon;

        // Construct the weather details string
        const weatherDetails = `${temperature}°F - ${description}`;

        // Update DOM elements with weather information
        document.getElementById('weather-details').textContent = weatherDetails;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}.png`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}