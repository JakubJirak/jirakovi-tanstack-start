import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getImage } from "@/data/Functions/weather-functions.ts";

interface WeatherIconProps {
  codeData: {
    code: number;
    day: string;
    night: string;
    icon: string;
    nighticon: string;
  };
}

const WeatherIcon = ({ codeData }: WeatherIconProps) => {
  const { weatherData } = useWeatherContext();

  if (!weatherData || !codeData) return null;

  // @ts-ignore
  const imgFile = getImage(codeData.code, weatherData.current.is_day, codeData);

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
