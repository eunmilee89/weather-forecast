import { useState } from 'react';
import { fetchRegionName } from '../api/weatherApi';
import { LOCATION_MAP } from '../constants/locationMap';

export const useLocation = () => {
  const [lat, setLat] = useState(37.5665);
  const [lon, setLon] = useState(126.978);
  const [regionName, setRegionName] = useState('서울');

  const updateLocationByCurrent = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          console.log('position >>>', position);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetchRegionName(latitude, longitude);
          console.log('response >>>', response);
          const cityEnglish = response.data[0]?.name;

          if (cityEnglish && LOCATION_MAP[cityEnglish]) {
            const location = LOCATION_MAP[cityEnglish];
            setLat(location.lat);
            setLon(location.lon);
            setRegionName(location.name);
          } else {
            console.error('❌ 지역 이름 매칭 실패');
          }
        } catch (error) {
          console.error('❌ 현재 위치 가져오기 실패:', error);
        }
      });
    }
  };

  const setManualLocation = (lat: number, lon: number, name: string) => {
    setLat(lat);
    setLon(lon);
    setRegionName(name);
  };

  return { lat, lon, regionName, updateLocationByCurrent, setManualLocation };
};
