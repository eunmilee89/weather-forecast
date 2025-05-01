import { useEffect } from 'react';
import {
  useCurrentWeather,
  useForecast,
  useAirQuality,
} from './hooks/useWeather';
import { CurrentWeather } from './components/Weather/CurrentWeather';
import { AirQuality } from './components/Weather/AirQuality';
import { SearchLocation } from './components/Location/SearchLocation';
import { CurrentLocationButton } from './components/Location/CurrentLocationButton';
import { GlobalStyle } from './styles/globalStyle';
import styled from 'styled-components';
import { useLocation } from './hooks/useLocation';
import { WeatherList } from './components/Weather/WeatherList';

const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: auto;

  .title {
    text-align: center;
  }

  .currentWeather {
    background-color: white;
    padding: 8px;
    margin: 16px auto;
    width: 280px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-size: 20px;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: 425px) {
      flex-direction: column;
      gap: 0px;
    }
  }
`;

function App() {
  const { lat, lon, regionName, updateLocationByCurrent, setManualLocation } =
    useLocation();

  const { data: currentWeather } = useCurrentWeather(lat, lon);
  const { data: forecast } = useForecast(lat, lon);
  const { data: airQuality } = useAirQuality(lat, lon);

  useEffect(() => {
    updateLocationByCurrent();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <h2 className='title'>
          {regionName.replace(/-si|-gu|-dong|-do|-gun/gi, '')} 현재 날씨
        </h2>
        <div className='currentWeather'>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {airQuality && <AirQuality aqi={airQuality.list[0].main.aqi} />}
        </div>
        <div className='search'>
          <SearchLocation
            onSelectLocation={(lat, lon, name) => {
              setManualLocation(lat, lon, name);
            }}
          />
          <CurrentLocationButton onClick={updateLocationByCurrent} />
        </div>
        {forecast && <WeatherList list={forecast} />}
      </Container>
    </>
  );
}

export default App;
