import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  background-color: #50b2c0;
  color: white;
  border: none;
  border-radius: 8px;
  margin: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

interface CurrentLocationButtonProps {
  onClick: () => void;
}

export const CurrentLocationButton = ({
  onClick,
}: CurrentLocationButtonProps) => {
  return <Button onClick={onClick}>📍 현재 위치로</Button>;
};
