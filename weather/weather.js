const settings = {
  interval: {
    minutes: 15,
    seconds: 0,
  },
  lat: "32.4068",
  lon: "-96.8535",
  units: "imperial",
  unitsSymbol: "°F",
};

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${settings.lat}&longitude=${settings.lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1`;

const time =
  settings.interval.minutes * 60 * 1000 + settings.interval.seconds * 1000;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

// Example usage:
async function getWeather() {
  try {
    const weatherData = await fetchWeatherData();

    updateWeatherDiv(weatherData.current.temperature_2m);

    console.log(weatherData);
    // You can now use the weatherData object here
  } catch (error) {
    console.error("Error:", error);
  }
}

function updateWeatherDiv(temperature) {
  const weatherDiv = document.querySelector(".CurrentTemp");
  if (weatherDiv) {
    weatherDiv.textContent = `${temperature} °F`;
  } else {
    console.error("Weather div not found.");
  }
}

getWeather();
// Call the function to get weather data
setInterval(getWeather, time);
