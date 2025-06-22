import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getText } from "@/data/Functions/weather-functions.ts";
import type { codeData } from "@/data/Functions/weather-functions.ts";

interface WeatherStats {
  codeData: codeData | undefined;
}

const WeatherStats = ({ codeData }: WeatherStats) => {
  const { weatherData } = useWeatherContext();

  if (!weatherData || !codeData) return <p>Chyba pri nacitani dat</p>;

  const icontext = getText(weatherData?.current?.is_day, codeData);
  const temp = weatherData.current?.temp_c;
  const feelsLike = weatherData.current?.feelslike_c;
  const humidity = weatherData.current?.humidity;

  return (
    <div>
      <p>{icontext}</p>
      <p>{temp} °C</p>
      <p>{feelsLike} °C</p>
      <p>{humidity} %</p>
    </div>
  );
};

export default WeatherStats;
