import styled from 'styled-components';
import { formatDate, getWeatherIconUrl } from '../../utils/weatherUtils';
import { DailyWeather } from '../../types/weather';

const WeatherListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;

  .card {
    background: white;
    padding: 16px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

interface ForecastListProps {
  list: DailyWeather[];
}

export const WeatherList = ({ list }: ForecastListProps) => (
  <WeatherListStyle>
    {list.map((item) => (
      <div className='card' key={item.dt}>
        <div>{formatDate(item.dt)}</div>
        <img
          src={getWeatherIconUrl(item.weather[0].icon)}
          alt={item.weather[0].description}
        />
        <div>{item.weather[0].description}</div>
        <div>
          최고: {Math.round(item.temp.max)}°C / 최저:{' '}
          {Math.round(item.temp.min)}°C
        </div>
      </div>
    ))}
  </WeatherListStyle>
);
