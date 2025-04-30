export const getWeatherIconUrl = (iconCode: string) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// UNIX timestamp를 사람이 읽을 수 있는 날짜로 변환
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('ko-KR', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};
