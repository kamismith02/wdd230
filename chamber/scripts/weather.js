fetch('https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
    .then(response => response.json())
    .then(data => {
        const currentTemperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        // Display current temperature and weather description on your website
        document.getElementById('currentTemperature').textContent = currentTemperature + "°F";
        document.getElementById('weatherDescription').textContent = weatherDescription;
    })
    .catch(error => console.error('Error fetching weather data:', error));

// Fetch three-day forecast data
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Tooele&appid=74a0ec99bed0ffa4e9a88ae81d66c579&units=imperial')
    .then(response => response.json())
    .then(data => {
        // Assuming data contains forecast information in the required format
        // Display three-day temperature forecast on your website
        const forecast = data.list.slice(0, 8 * 3); // Assuming data is provided for every 3 hours
        forecast.forEach((item, index) => {
            const date = new Date(item.dt * 1000); // Convert Unix timestamp to JavaScript Date object
            const temperature = item.main.temp;
            // Display temperature and date for each forecast item
            document.getElementById(`day${index + 1}`).textContent = date.toDateString();
            document.getElementById(`temperature${index + 1}`).textContent = temperature + "°F";
        });
    })
    .catch(error => console.error('Error fetching forecast data:', error));