import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getText } from "@/data/Functions/weather-functions.ts";
import type { codeData } from "@/data/Functions/weather-functions.ts";

interface WeatherStats {
  codeData: codeData | undefined;
}

/*
AKTUALNE - icon, texticon, temp_c, feels like, wind_kph, humidity, location city, time of last update

DNESEK - pocasi pro - 6,9,12,15,18,21 - ikona, text, teplota, chance of rain

FORECAST

DEN - min. temp, max. temp, daily chance of rain, date
HODINA - icon (isday), texticon, temp_c, wind_kph, chance of rain
*/

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
