function calculateWindChill(temperature, windSpeed) {
    // Constants for wind chill calculation
    const c1 = 35.74;
    const c2 = 0.6215;
    const c3 = 35.75;
    const c4 = 0.4275;

    // Check if temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill
        const windChill = c1 + (c2 * temperature) - (c3 * Math.pow(windSpeed, 0.16)) + (c4 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1) + "°F"; // Return wind chill rounded to 1 decimal place
    } else {
        return "N/A";
    }
}

// Function to update the wind chill display on the webpage
function updateWindChillDisplay() {
    // Get temperature and wind speed from the weather section
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');

    // Parse temperature and wind speed values
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Update wind chill display on the webpage
    const windChillElement = document.getElementById('windChill');
    windChillElement.textContent = windChill;
}

window.onload = updateWindChillDisplay;