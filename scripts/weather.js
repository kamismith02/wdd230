const apiKey = '74a0ec99bed0ffa4e9a88ae81d66c579';

const city = 'Orem';
const countryCode = 'US';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp);
        const description = capitalizeEachWord(data.weather[0].description);
        const iconCode = data.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

        const weatherDetails = `${temperature}°F - ${description}`;
        document.getElementById('weather-icon').src = iconsrc;

        document.getElementById('weather-details').textContent = weatherDetails;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}