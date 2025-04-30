import { useState } from 'react';
import styled from 'styled-components';
import { LOCATION_MAP } from '../../constants/locationMap';

const SearchLocationStyle = styled.div`
  margin: 20px 0;
  text-align: center;

  input {
    padding: 8px;
    width: 200px;
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
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const foundEntry = Object.entries(LOCATION_MAP).find(([_, value]) =>
      value.name.includes(query.trim())
    );

    if (foundEntry) {
      const [, location] = foundEntry;
      onSelectLocation(location.lat, location.lon, location.name);
    } else {
      alert('해당 지역을 찾을 수 없습니다.');
    }
  };

  return (
    <SearchLocationStyle>
      <input
        type='text'
        placeholder='도/시 이름 입력 (예: 서울, 경기)'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </SearchLocationStyle>
  );
};
