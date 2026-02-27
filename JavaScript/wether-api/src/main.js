import { getHourlyWeatherForGeolocation } from "./api/api.js";
import { renderHourlyCards } from "./api/render/renderHourlyCards.js";
import { weatherStore } from "./api/stores/weather.store.js";
import { getGeolocation } from "./services/getGeolocation.js";


export async function main() {
  console.log("Hello weather app!");
  const userLocation = getGeolocation();
  console.log(userLocation);
  const hourlyWeatherData = await getHourlyWeatherForGeolocation(41.9981, 21.4254);
//   console.log(hourlyWeatherData);
//   console.log(userLocation);
await weatherStore.init();
renderHourlyCards(weatherStore.state.hourlyData);
}