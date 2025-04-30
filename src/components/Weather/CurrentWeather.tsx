import styled from 'styled-components';
import { CurrentWeather as ICurrentWeather } from '../../types/weather';
import { getWeatherIconUrl } from '../../utils/weatherUtils';

const CurrentWeatherStyle = styled.div`
  text-align: center;
  margin-bottom: 8px;

  img {
    width: 120px;
  }
`;

interface CurrentWeatherProps {
  data: ICurrentWeather;
}

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <CurrentWeatherStyle>
      <img
        src={getWeatherIconUrl(data.weather[0].icon)}
        alt={data.weather[0].description}
      />
      <p>{data.weather[0].description}</p>
      <h3>{Math.round(data.main.temp)}°C</h3>
    </CurrentWeatherStyle>
  );
};
