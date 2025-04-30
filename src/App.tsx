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
        {currentWeather && (
          <CurrentWeather data={currentWeather} regionName={regionName} />
        )}
        <CurrentLocationButton onClick={updateLocationByCurrent} />
        {airQuality && <AirQuality aqi={airQuality.list[0].main.aqi} />}
        <SearchLocation
          onSelectLocation={(lat, lon, name) => {
            setManualLocation(lat, lon, name);
          }}
        />
        {forecast && <WeatherList list={forecast} />}
      </Container>
    </>
  );
}

export default App;
