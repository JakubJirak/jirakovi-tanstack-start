import type React from "react";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface WeatherData {
  current: {
    feelslike_c: number;
    humidity: number;
    is_day: number;
    temp_c: number;
    wind_kph: number;
    condition: {
      code: number;
    };
  }
  location: {
    name: string;
    localtime: string;
  }| null
}

interface WeatherContextType {
  weatherData: WeatherData | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};

export const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    setWeatherData(() => {
      const data = window.localStorage.getItem("weatherData");
      return data ? JSON.parse(data) : null;
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }, [weatherData]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
