# Weather Widget

Used for digital signage.

Go to <https://nelsonuniversity.github.io/signage-weather> to see it.

### Icons

Weather icons were taken from [Erik Flowers](https://erikflowers.github.io/weather-icons/).

### API

Weather data comes from [Open-Meteo.com](https://open-meteo.com/).

A sample of the returned JSON can be viewed in the [sample-data.json](sample-data.json) file. If you want to change what data is returned from the Open-Meteo API, [use this link to configure](https://open-meteo.com/en/docs#current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=1).


### WMO Weather interpretation codes (WW)

| Code       | Description                                      |
| ---------- | ------------------------------------------------ |
| 0          | Clear sky                                        |
| 1, 2, 3    | Mainly clear, partly cloudy, and overcast        |
| 45, 48     | Fog and depositing rime fog                      |
| 51, 53, 55 | Drizzle: Light, moderate, and dense intensity    |
| 56, 57     | Freezing Drizzle: Light and dense intensity      |
| 61, 63, 65 | Rain: Slight, moderate and heavy intensity       |
| 66, 67     | Freezing Rain: Light and heavy intensity         |
| 71, 73, 75 | Snow fall: Slight, moderate, and heavy intensity |
| 77         | Snow grains                                      |
| 80, 81, 82 | Rain showers: Slight, moderate, and violent      |
| 85, 86     | Snow showers slight and heavy                    |
| 95 \*      | Thunderstorm: Slight or moderate                 |
| 96, 99 \*  | Thunderstorm with slight and heavy hail          |
