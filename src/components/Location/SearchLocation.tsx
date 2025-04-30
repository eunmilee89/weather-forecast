import { useState } from 'react';
import styled from 'styled-components';
import { LOCATION_MAP } from '../../constants/locationMap';

const SearchLocationStyle = styled.div`
  margin: 20px 0;
  text-align: center;

  select {
    padding: 8px;
    width: 220px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 8px;
  }

  button {
    padding: 8px 16px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 8px;
  }
`;

interface SearchLocationProps {
  onSelectLocation: (lat: number, lon: number, name: string) => void;
}

export const SearchLocation = ({ onSelectLocation }: SearchLocationProps) => {
  const locationEntries = Object.entries(LOCATION_MAP);
  const [selectedKey, setSelectedKey] = useState(locationEntries[0][0]);

  const handleSearch = () => {
    const location = LOCATION_MAP[selectedKey];
    if (location) {
      onSelectLocation(location.lat, location.lon, location.name);
    }
  };

  return (
    <SearchLocationStyle>
      <select
        value={selectedKey}
        onChange={(e) => setSelectedKey(e.target.value)}
      >
        {locationEntries.map(([key, value]) => (
          <option key={key} value={key}>
            {value.name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>검색</button>
    </SearchLocationStyle>
  );
};
