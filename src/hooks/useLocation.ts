import { useState } from 'react';
import { fetchRegionName } from '../api/weatherApi';
import { LOCATION_MAP } from '../constants/locationMap';

export const useLocation = () => {
  const [lat, setLat] = useState(37.5665);
  const [lon, setLon] = useState(126.978);
  const [regionName, setRegionName] = useState('서울');
  const [isCurrentLocation, setIsCurrentLocation] = useState(true); // ✅ 현재 위치 여부

  const updateLocationByCurrent = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetchRegionName(latitude, longitude);
          const cityEnglish = response.data[0]?.name;

          if (cityEnglish) {
            // 현재 위치일 때는 그대로 보여줌
            setLat(latitude);
            setLon(longitude);
            setRegionName(cityEnglish); // 👉 한글 매핑 없이 OpenWeather 이름 사용
            setIsCurrentLocation(true); // ✅ 현재 위치로 표시
          } else {
            console.error('❌ 지역 이름 못 가져옴');
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
    setRegionName(name); // LOCATION_MAP.name 값
    setIsCurrentLocation(false); // ✅ 수동 검색
  };

  return {
    lat,
    lon,
    regionName,
    isCurrentLocation, // ✅ 같이 반환
    updateLocationByCurrent,
    setManualLocation,
  };
};
