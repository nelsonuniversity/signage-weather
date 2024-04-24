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

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${settings.lat}&longitude=${settings.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=1`;

let currentCode = null;

// Calculates the interval to check for weather updates
const time =
  settings.interval.minutes * 60 * 1000 + settings.interval.seconds * 1000;

function isDay(weatherData) {
  return weatherData.current.is_day === 1;
}

function getDayNight(weatherData) {
  return isDay(weatherData) ? "day" : "night";
}

function getWeatherCode(weatherData) {
  return weatherData.current.weather_code;
}

function getWeatherIcon(weatherData) {
  const dayNight = getDayNight(weatherData);

  return `wi wi-${dayNight}-${dayNight === "night" ? "alt-" : ""}${
    codes[getWeatherCode(weatherData)][dayNight].icon
  }`;
}

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

async function getWeather() {
  try {
    const weatherData = await fetchWeatherData();
    updateTemperature(weatherData.current.temperature_2m);
    await updateIcon(weatherData);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateIcon(weatherData) {
  if (currentCode !== null || currentCode === getWeatherCode(weatherData)) {
    return;
  }
  const iconDiv = document.getElementById("icon");
  iconDiv
    ? (iconDiv.className = getWeatherIcon(weatherData))
    : console.error(`Icon div not found.`);
}

function updateTemperature(temperature) {
  const tempSpan = document.querySelector(".temp");
  tempSpan
    ? (tempSpan.textContent = `${Math.round(temperature, 0)}°`)
    : console.error("temp span not found.");
}

getWeather();
// Call the function to get weather data
setInterval(getWeather, time);

// Descriptions taken from https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c
const codes = {
  0: {
    day: {
      description: "Sunny",
      icon: "sunny",
    },
    night: {
      description: "Clear",
      icon: "clear",
    },
  },
  1: {
    day: {
      description: "Mainly Sunny",
      icon: "cloudy-high",
    },
    night: {
      description: "Mainly Clear",
      icon: "cloudy-high",
    },
  },
  2: {
    day: {
      description: "Partly Cloudy",
      icon: "cloudy",
    },
    night: {
      description: "Partly Cloudy",
      icon: "cloudy",
    },
  },
  3: {
    day: {
      description: "Cloudy",
      icon: "cloudy",
    },
    night: {
      description: "Cloudy",
      icon: "cloudy",
    },
  },
  45: {
    day: {
      description: "Foggy",
      icon: "fog",
    },
    night: {
      description: "Foggy",
      icon: "fog",
    },
  },
  48: {
    day: {
      description: "Rime Fog",
      icon: "fog",
    },
    night: {
      description: "Rime Fog",
      icon: "fog",
    },
  },
  51: {
    day: {
      description: "Light Drizzle",
      icon: "sprinkle",
    },
    night: {
      description: "Light Drizzle",
      icon: "sprinkle",
    },
  },
  53: {
    day: {
      description: "Drizzle",
      icon: "sprinkle",
    },
    night: {
      description: "Drizzle",
      icon: "sprinkle",
    },
  },
  55: {
    day: {
      description: "Heavy Drizzle",
      icon: "sprinkle",
    },
    night: {
      description: "Heavy Drizzle",
      icon: "sprinkle",
    },
  },
  56: {
    day: {
      description: "Light Freezing Drizzle",
      icon: "rain-mix",
    },
    night: {
      description: "Light Freezing Drizzle",
      icon: "rain-mix",
    },
  },
  57: {
    day: {
      description: "Freezing Drizzle",
      icon: "rain-mix",
    },
    night: {
      description: "Freezing Drizzle",
      icon: "rain-mix",
    },
  },
  61: {
    day: {
      description: "Light Rain",
      icon: "rain",
    },
    night: {
      description: "Light Rain",
      icon: "rain",
    },
  },
  63: {
    day: {
      description: "Rain",
      icon: "rain",
    },
    night: {
      description: "Rain",
      icon: "rain",
    },
  },
  65: {
    day: {
      description: "Heavy Rain",
      icon: "showers",
    },
    night: {
      description: "Heavy Rain",
      icon: "showers",
    },
  },
  66: {
    day: {
      description: "Light Freezing Rain",
      icon: "sleet",
    },
    night: {
      description: "Light Freezing Rain",
      icon: "sleet",
    },
  },
  67: {
    day: {
      description: "Freezing Rain",
      icon: "sleet",
    },
    night: {
      description: "Freezing Rain",
      icon: "sleet",
    },
  },
  71: {
    day: {
      description: "Light Snow",
      icon: "snow",
    },
    night: {
      description: "Light Snow",
      icon: "snow",
    },
  },
  73: {
    day: {
      description: "Snow",
      icon: "snow",
    },
    night: {
      description: "Snow",
      icon: "snow",
    },
  },
  75: {
    day: {
      description: "Heavy Snow",
      icon: "snow",
    },
    night: {
      description: "Heavy Snow",
      icon: "snow",
    },
  },
  77: {
    day: {
      description: "Snow Grains",
      icon: "snow",
    },
    night: {
      description: "Snow Grains",
      icon: "snow",
    },
  },
  80: {
    day: {
      description: "Light Showers",
      icon: "showers",
    },
    night: {
      description: "Light Showers",
      icon: "showers",
    },
  },
  81: {
    day: {
      description: "Showers",
      icon: "showers",
    },
    night: {
      description: "Showers",
      icon: "showers",
    },
  },
  82: {
    day: {
      description: "Heavy Showers",
      icon: "storm-showers",
    },
    night: {
      description: "Heavy Showers",
      icon: "storm-showers",
    },
  },
  85: {
    day: {
      description: "Light Snow Showers",
      icon: "snow",
    },
    night: {
      description: "Light Snow Showers",
      icon: "snow",
    },
  },
  86: {
    day: {
      description: "Snow Showers",
      icon: "snow",
    },
    night: {
      description: "Snow Showers",
      icon: "snow",
    },
  },
  95: {
    day: {
      description: "Thunderstorm",
      icon: "thunderstorm",
    },
    night: {
      description: "Thunderstorm",
      icon: "thunderstorm",
    },
  },
  96: {
    day: {
      description: "Light Thunderstorms With Hail",
      icon: "hail",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      icon: "hail",
    },
  },
  99: {
    day: {
      description: "Thunderstorm With Hail",
      icon: "hail",
    },
    night: {
      description: "Thunderstorm With Hail",
      icon: "hail",
    },
  },
};
