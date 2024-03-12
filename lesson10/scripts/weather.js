const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=74a0ec99bed0ffa4e9a88ae81d66c579';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); //
            displayResults(data);
        } else {
            throw Error(await resonse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`; // Format temperature to show zero decimal points
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    const desc = capitalizeEachWord(data.weather[0].description); // Capitalize each word of the weather description
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// Function to capitalize each word of a string
function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}