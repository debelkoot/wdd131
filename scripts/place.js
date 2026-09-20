// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static temperature (°C) and wind speed (km/h) matching HTML content
const temp = 9;
const windSpeed = 12;

/**
 * Calculates Wind Chill factor (°C) in one line of code
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 */
const calculateWindChill = (t, s) => 
    (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

const chillElement = document.getElementById("chill");

// Viable Metric conditions: Temperature <= 10 °C AND Wind Speed > 4.8 km/h
if (temp <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
    chillElement.textContent = "N/A";
}
