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

  if (!weatherData || !codeData) return null;

  //@ts-ignore
  const icontext = getText(weatherData.current.is_day, codeData) || "text";
  //@ts-ignore
  const temp = weatherData.current.temp_c || "stupen";

  return (
    <div>
      <p>{temp}</p>
      <p>{icontext}</p>
    </div>
  );
};

export default WeatherStats;
