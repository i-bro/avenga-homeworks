import { getCurrentHourISO } from "../services/helpers.js";

export const baseUrl = "https://api.open-meteo.com/v1/forecast";

export async function getHourlyWeatherForGeolocation(latitude, longitude) {
  
    const hum = "relative_humidity_2m";
    const temp = "temperature_2m";
    const precip = "precipitation_probability";
    const wind = "wind_speed_10m";
 
    const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    hourly: `${temp},${precip}`,
    timezone: "Europe/Skopje",
    past_hours: "0",
    forecast_hours: "24",
  });
 
  const url = `${baseUrl}?${params.toString()}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}