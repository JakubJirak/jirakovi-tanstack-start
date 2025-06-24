import WeatherWidgetRow from "@/components/weather/weatherWidget/WeatherWidgetRow.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import {
  type codeData,
  getImage,
  getText,
} from "@/data/Functions/weather-functions.ts";
import { useEffect, useState } from "react";

interface WeatherWidget {
  codeData: codeData | undefined;
}

/*
AKTUALNE - icon, texticon, temp_c, feels like, wind_kph, humidity, location city, time of last update

DNESEK - pocasi pro - 6,9,12,15,18,21 - ikona, text, teplota, chance of rain

FORECAST

DEN - min. temp, max. temp, daily chance of rain, date
HODINA - icon (isday), texticon, temp_c, wind_kph, chance of rain
*/

const WeatherWidget = ({ codeData }: WeatherWidget) => {
  const { weatherData } = useWeatherContext();
  const [icontext, setIcontext] = useState<string>("");

  if (!weatherData || !codeData) return <p>Chyba pri nacitani dat</p>;

  const imgFile = getImage(
    codeData?.code,
    weatherData?.current?.is_day,
    codeData,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimeout(() => {
      setIcontext(getText(weatherData?.current?.is_day, codeData));
    }, 1000);
  }, []);

  const city = weatherData?.location?.name;
  const updated = weatherData?.location?.localtime;
  const temp = weatherData.current?.temp_c;
  const feelsLike = `${String(weatherData.current?.feelslike_c)} °C`;
  const humidity = `${String(weatherData.current?.humidity)} %`;
  const wind = `${String(weatherData.current?.wind_kph)} km/h`;

  return (
    <div className="flex gap-2">
      <div className="">
        <p>{city}</p>
        <div className="w-50">
          <img
            width="100%"
            src={`/weather-icons/${imgFile}.svg`}
            alt={imgFile}
          />
        </div>
        <p>{icontext}</p>
      </div>
      <div className="">
        <p>{updated}</p>
        <p>{temp} °C</p>
        <WeatherWidgetRow icon="i" title="Pocitova" value={feelsLike} />
        <WeatherWidgetRow icon="i" title="Vlhkost" value={humidity} />
        <WeatherWidgetRow icon="i" title="Vitr" value={wind} />
      </div>
    </div>
  );
};
export default WeatherWidget;
