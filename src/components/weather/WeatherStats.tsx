import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getText } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";
import { useMemo } from "react";

const WeatherStats = () => {
  const { weatherData } = useWeatherContext();

  const codeData = useMemo(
    () =>
      codes.find((code) => code.code === weatherData?.current?.condition?.code),
    [weatherData],
  );

  if (!weatherData || !codeData) return null;

  const icontext = getText(weatherData?.current?.is_day, codeData);
  const temp = weatherData.current?.temp_c || "stupen";
  const feelsLike = weatherData.current?.feelslike_c;
  const humidity = weatherData.current?.humidity;

  return (
    <div>
      <p>{temp} °C</p>
      <p>{feelsLike} °C</p>
      <p>{icontext}</p>
      <p>{humidity} %</p>
    </div>
  );
};

export default WeatherStats;
