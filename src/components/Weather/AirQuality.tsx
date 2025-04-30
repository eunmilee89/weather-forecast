import styled from 'styled-components';

const AirQualityStyle = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;

interface AirQualityProps {
  aqi: number;
}

const getAQIDescription = (aqi: number) => {
  switch (aqi) {
    case 1:
      return '좋음';
    case 2:
      return '보통';
    case 3:
      return '약간 나쁨';
    case 4:
      return '나쁨';
    case 5:
      return '매우 나쁨';
    default:
      return '알 수 없음';
  }
};

export const AirQuality = ({ aqi }: AirQualityProps) => (
  <AirQualityStyle>
    <p>미세먼지 상태: {getAQIDescription(aqi)}</p>
  </AirQualityStyle>
);
