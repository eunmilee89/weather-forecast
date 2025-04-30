import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY!;
const BASE_URL = 'https://api.openweathermap.org';

export const fetchCurrentWeather = (lat: number, lon: number) =>
  axios.get(`${BASE_URL}/data/2.5/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  });

export const fetchForecast = (lat: number, lon: number) =>
  axios.get(`${BASE_URL}/data/3.0/onecall`, {
    params: {
      lat,
      lon,
      units: 'metric',
      lang: 'kr',
      exclude: 'minutely,hourly,alerts',
      appid: API_KEY,
    },
  });

export const fetchAirQuality = (lat: number, lon: number) =>
  axios.get(`${BASE_URL}/data/2.5/air_pollution`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

export const fetchRegionName = (lat: number, lon: number) =>
  axios.get(`${BASE_URL}/geo/1.0/reverse`, {
    params: {
      lat,
      lon,
      limit: 1,
      appid: API_KEY,
    },
  });
