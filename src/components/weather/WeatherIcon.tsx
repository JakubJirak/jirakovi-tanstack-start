import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getImage } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";
import { useMemo } from "react";

const WeatherIcon = () => {
  const { weatherData } = useWeatherContext();

  const codeData = useMemo(
    () =>
      // @ts-ignore
      codes.find((code) => code.code === weatherData?.current?.condition?.code),
    [weatherData],
  );

  if (!weatherData || !codeData) return null;
  // @ts-ignore
  const imgFile = getImage(codeData.code, weatherData.current.is_day, codeData);
  // @ts-ignore
  const temp = weatherData.current.temp_c;

  return (
    <div className="w-full">
      <object
        height="250px"
        aria-label="objekt"
        data={`/weather-icons/${imgFile}.svg`}
        type="image/svg+xml"
      />
      <p>{temp}</p>
    </div>
  );
};

export default WeatherIcon;
