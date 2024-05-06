// Function to calculate wind chill
function calculateWindChill(temperatureCelsius, windSpeedKmPerHour) {
    if (temperatureCelsius <= 10) {
        const windChill = Math.round((13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmPerHour, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmPerHour, 0.16)) * 100) / 100;
        return windChill.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}
// Get temperature and wind element and extract numbers
const temperature = parseInt(document.querySelector('#temperature').textContent);
const windSpeed = parseInt(document.querySelector('#wind').textContent)
// Calculate wind chill
var windChill = calculateWindChill(temperature, windSpeed);
// Update wind chill information in the data section
document.querySelector('#weather .wind-chill').textContent = windChill;


// Update the current year
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();
// Display the last modified date
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last modified: " + document.lastModified;






