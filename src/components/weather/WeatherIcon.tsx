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
    <div className="w-50 m-[-20px]">
      <img width="100%" src={`/weather-icons/${imgFile}.svg`} alt={imgFile} />
    </div>
  );
};

export default WeatherIcon;
