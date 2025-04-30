export interface CurrentWeather {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface DailyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface OneCallResponse {
  current: CurrentWeather;
  daily: DailyWeather[];
}
