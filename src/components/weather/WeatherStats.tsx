import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getText } from "@/data/Functions/weather-functions.ts";

interface WeatherStatsProps {
  codeData: {
    code: number;
    day: string;
    night: string;
    icon: string;
    nighticon: string;
  };
}

const WeatherStats = ({ codeData }: WeatherStatsProps) => {
  const { weatherData } = useWeatherContext();

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
