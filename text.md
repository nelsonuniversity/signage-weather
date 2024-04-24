https://open-meteo.com/en/docs#current=temperature_2m,weather_code&hourly=&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1

```
{"latitude":32.409317,"longitude":-96.838745,"generationtime_ms":0.0680685043334961,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":194.0,"current_units":{"time":"iso8601","interval":"seconds","temperature_2m":"°F","weather_code":"wmo code"},"current":{"time":"2024-04-23T21:45","interval":900,"temperature_2m":71.7,"weather_code":1}}
```

## WMO Weather interpretation codes (WW)

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

For converting codes to icons, this might help

https://weatherups.vercel.app/

https://github.com/bhendi-boi/WeatherUps/blob/main/src/helpers/getIcon.tsx
