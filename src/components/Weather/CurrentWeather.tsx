import styled from 'styled-components';
import { CurrentWeather as ICurrentWeather } from '../../types/weather';
import { getWeatherIconUrl } from '../../utils/weatherUtils';

const CurrentWeatherStyle = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

interface CurrentWeatherProps {
  data: ICurrentWeather;
  regionName: string;
}

export const CurrentWeather = ({ data, regionName }: CurrentWeatherProps) => {
  return (
    <CurrentWeatherStyle>
      <h2>{regionName} 현재 날씨</h2>
      <div>
        <img
          src={getWeatherIconUrl(data.weather[0].icon)}
          alt={data.weather[0].description}
        />
        <p>{data.weather[0].description}</p>
        <h3>{Math.round(data.main.temp)}°C</h3>
      </div>
    </CurrentWeatherStyle>
  );
};
