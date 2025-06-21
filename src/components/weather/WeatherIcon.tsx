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

  return (
    <div className="w-full">
      <object
        height="250px"
        aria-label="objekt"
        data={`../../../public/weather-icons/${imgFile}.svg`}
        type="image/svg+xml"
      />
    </div>
  );
};

export default WeatherIcon;
