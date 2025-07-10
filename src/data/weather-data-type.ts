export interface WeatherData {
  current: {
    feelslike_c: number;
    humidity: number;
    is_day: number;
    temp_c: number;
    wind_kph: number;
    condition: {
      code: number;
    };
  };
  forecast: {
    forecastday: day[];
  };
  location: {
    name: string;
    localtime: string;
  } | null;
}

type day = {
  date: string;
  day: {
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    totalprecip_mm: number;
    condition: {
      code: number;
    };
  };
  hour: hour[];
};

type hour = {
  chance_of_rain: number;
  cloud: number;
  is_day: number;
  temp_c: number;
  time: string;
  wind_kph: number;
  condition: {
    code: number;
  };
};
