import type { WeatherData } from "@/data/weather-data-type.ts";
import type React from "react";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

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
    if (typeof window !== "undefined") {
      try {
        const data = window.localStorage.getItem("weatherData");
        setWeatherData(data ? JSON.parse(data) : null);
      } catch (err) {
        setWeatherData(null);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && weatherData !== null) {
      try {
        window.localStorage.setItem("weatherData", JSON.stringify(weatherData));
      } catch (err) {
        console.log("Weather Data Error", err);
      }
    }
  }, [weatherData]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
