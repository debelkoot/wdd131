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
  // 2. Static Weather Inputs & Elements
  // --------------------------------------------------
  const tempC = 9;       // Metric condition requirement: <= 10°C
  const windSpeed = 12;  // Metric condition requirement: > 4.8 km/h

  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");
  const chillElement = document.getElementById("chill");

  if (tempElement) tempElement.textContent = tempC;
  if (windElement) windElement.textContent = windSpeed;

  // --------------------------------------------------
  // 3. One-line Wind Chill Calculation Function
  // Formula (Metric): 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  // --------------------------------------------------
  const calculateWindChill = (t, v) => 
    (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

  // --------------------------------------------------
  // 4. Execution Guard Clause
  // --------------------------------------------------
  if (tempC <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(tempC, windSpeed)} °C`;
  } else {
    chillElement.textContent = "N/A";
  }
});
