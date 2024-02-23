window.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const windChillElement = document.getElementById('windChill');

    calculateButton.addEventListener('click', () => {
        const temperatureInput = document.getElementById('temperatureInput');
        const windSpeedInput = document.getElementById('windSpeedInput');

        const temperature = parseFloat(temperatureInput.value);
        const windSpeed = parseFloat(windSpeedInput.value);

        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = windChill.toFixed(2) + '°F';
        } else {
            windChillElement.textContent = 'N/A';
        }
    });
});

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}