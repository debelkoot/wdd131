document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------
  // 1. Dynamic Footer Dates
  // --------------------------------------------------
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedParagraph = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }

  // --------------------------------------------------
  // 2. Weather & Wind Chill Calculation
  // --------------------------------------------------
  // Static variables (Metric units: °C and km/h)
  const tempC = 9;       // Temperature in °C (meets requirement <= 10°C)
  const windSpeed = 12;  // Wind speed in km/h (meets requirement > 4.8 km/h)

  // One-line wind chill calculation function for Metric (Environment Canada / NOAA Metric formula)
  // Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  const calculateWindChill = (t, v) => 
    (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

  // Elements
  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");
  const chillElement = document.getElementById("chill");

  // Output static inputs
  if (tempElement) tempElement.textContent = tempC;
  if (windElement) windElement.textContent = windSpeed;

  // Check viability conditions before running calculateWindChill:
  // Metric condition: Temperature <= 10 °C AND Wind speed > 4.8 km/h
  if (tempC <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(tempC, windSpeed)} °C`;
  } else {
    chillElement.textContent = "N/A";
  }
});