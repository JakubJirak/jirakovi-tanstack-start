import WeatherWidgetRow from "@/components/weather/weatherWidget/WeatherWidgetRow.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getImage, getText } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";
import { useMemo } from "react";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { IoRainyOutline } from "react-icons/io5";
import { PiWavesBold } from "react-icons/pi";

interface WeatherWidget {
  day: 1 | 2;
}

/*
AKTUALNE - icon, texticon, temp_c, feels like, wind_kph, humidity, location city, time of last update

DNESEK - pocasi pro - 6,9,12,15,18,21 - ikona, text, teplota, chance of rain

FORECAST

DEN - min. temp, max. temp, daily chance of rain, date
HODINA - icon (isday), texticon, temp_c, wind_kph, chance of rain
*/

const WeatherWidget = ({ day }: WeatherWidget) => {
  const { weatherData } = useWeatherContext();
  if (!weatherData) return "";

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const codeData = useMemo(
    () =>
      codes.find(
        (code) =>
          code.code ===
          weatherData.forecast.forecastday[day].day.condition.code,
      ),
    [weatherData],
  );

  const imgFile = getImage(
    codeData?.code,
    weatherData?.current?.is_day,
    codeData,
  );

  const icontext = getText(weatherData?.current?.is_day, codeData);
  const city = weatherData?.location?.name;
  const updated = weatherData.forecast.forecastday[day].date;
  const max = `${weatherData.forecast.forecastday[day].day.maxtemp_c} °C`;
  const min = `${weatherData.forecast.forecastday[day].day.mintemp_c} °C`;
  const rain = `${weatherData.forecast.forecastday[day].day.totalprecip_mm} mm`;
  const chanceOfRain = `${weatherData.forecast.forecastday[day].day.daily_chance_of_rain} %`;

  return (
    <div className="bg-card border border-border grid grid-rows-[30px_1fr_1fr] rounded-xl lg:grid-rows-[40px_4fr_3fr] h-full overflow-hidden">
      <div className="flex justify-around items-center text-gray-400">
        <p>{city}</p>
        <p>{updated}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-[3fr_4fr] justify-items-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mr-[-20px] lg:mr-0 w-40 lg:w-43 2xl:w-45">
            <img
              className="my-[-20px]"
              width="100%"
              src={`/weather-icons/${imgFile}.svg`}
              alt={imgFile}
            />
          </div>
          <p className="mr-[-20px] lg:mr-0 text-center pb-2 text-xl font-semibold">
            {icontext}
          </p>
        </div>
        <p className="text-4xl sm:text-5xl md:text-6xl ml-[-30px] lg:text-[3.5vw] font-bold">
          {max}
        </p>
      </div>
      <div className="flex flex-col px-4 pl-4 py-4 gap-4 justify-between">
        <WeatherWidgetRow
          icon={<FaTemperatureArrowDown />}
          title="Minimálně"
          value={min}
        />
        <WeatherWidgetRow icon={<PiWavesBold />} title="Srážky" value={rain} />
        <WeatherWidgetRow
          icon={<IoRainyOutline />}
          title="Šance deště"
          value={chanceOfRain}
        />
      </div>
    </div>
  );
};
export default WeatherWidget;
