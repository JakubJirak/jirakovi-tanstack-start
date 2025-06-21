import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getText } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";
import { useMemo } from "react";

const WeatherStats = () => {
  const { weatherData } = useWeatherContext();

  const codeData = useMemo(
    () =>
      // @ts-ignore
      codes.find((code) => code.code === weatherData?.current?.condition?.code),
    [weatherData],
  );
  // @ts-ignore
  const icontext = getText(weatherData.current.is_day, codeData);
  // @ts-ignore
  const temp = weatherData.current.temp_c;

  return (
    <div>
      <p>{icontext}</p>
      <p>{temp} °C</p>
    </div>
  );
};

export default WeatherStats;
