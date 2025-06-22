import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { type codeData, getImage } from "@/data/Functions/weather-functions.ts";

interface WeatherIcon {
  codeData: codeData | undefined;
}

const WeatherIcon = ({ codeData }: WeatherIcon) => {
  const { weatherData } = useWeatherContext();

  if (!weatherData || !codeData) return <p>Chyba pri nacitani dat</p>;

  const imgFile = getImage(
    codeData?.code,
    weatherData?.current?.is_day,
    codeData,
  );

  return (
    <div className="w-full">
      <object
        height="250px"
        aria-label="objekt"
        data={`/weather-icons/${imgFile}.svg`}
        type="image/svg+xml"
      />
    </div>
  );
};

export default WeatherIcon;
