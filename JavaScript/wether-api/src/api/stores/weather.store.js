import { getHourlyWeatherForGeolocation } from "../api.js"
import { getGeolocation } from "../../services/getGeolocation.js";

export const weatherStore = {
  state: {
    hourlyData: []
  },

  async setHourlyDataForMyLocation() {
    const myLocation = await getGeolocation();

    const dataFromApi = await getHourlyWeatherForGeolocation(
      myLocation.latitude,
      myLocation.longitude
    );

    this.state.hourlyData = dataFromApi.hourly;
  },

  async init() {
    await this.setHourlyDataForMyLocation();
  }
};