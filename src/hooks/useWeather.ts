import { useQuery } from '@tanstack/react-query';
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchAirQuality,
} from '../api/weatherApi';
import { CurrentWeather, DailyWeather } from '../types/weather';

export const useCurrentWeather = (lat: number, lon: number) =>
  useQuery<CurrentWeather>({
    queryKey: ['currentWeather', lat, lon],
    queryFn: async () => {
      const res = await fetchCurrentWeather(lat, lon);
      console.log('🔥 currentWeather:', res.data);
      return res.data;
    },
  });

export const useForecast = (lat: number, lon: number) =>
  useQuery<DailyWeather[]>({
    queryKey: ['forecast', lat, lon],
    queryFn: async () => {
      const res = await fetchForecast(lat, lon);
      console.log('☁️ forecast:', res.data.daily);
      return res.data.daily;
    },
  });

export const useAirQuality = (lat: number, lon: number) =>
  useQuery({
    queryKey: ['airQuality', lat, lon],
    queryFn: async () => {
      const res = await fetchAirQuality(lat, lon);
      console.log('💨 airQuality:', res.data);
      return res.data;
    },
  });
