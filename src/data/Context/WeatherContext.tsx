import type React from "react";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface WeatherContextType {
  weatherData: object;
  setWeatherData: React.Dispatch<React.SetStateAction<object>>;
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
  const [weatherData, setWeatherData] = useState<object>({});

  useEffect(() => {
    const data = window.localStorage.getItem("weatherData");
    setWeatherData(data ? JSON.parse(data) : null);
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
