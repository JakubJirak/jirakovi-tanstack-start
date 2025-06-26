import WeatherWidgetRow from "@/components/weather/weatherWidget/WeatherWidgetRow.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import {
  type codeData,
  getImage,
  getText,
} from "@/data/Functions/weather-functions.ts";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

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

  if (!weatherData || !codeData) return "";

  const imgFile = getImage(
    codeData?.code,
    weatherData?.current?.is_day,
    codeData,
  );

  const icontext = getText(weatherData?.current?.is_day, codeData);
  const city = weatherData?.location?.name;
  const updated = weatherData?.location?.localtime;
  const temp = weatherData.current?.temp_c;
  const feelsLike = `${String(weatherData.current?.feelslike_c)} °C`;
  const humidity = `${String(weatherData.current?.humidity)} %`;
  const wind = `${String(weatherData.current?.wind_kph)} km/h`;

  return (
    <div className="bg-primary-800/20 grid grid-rows-[30px_1fr_1fr] rounded-xl lg:grid-rows-[40px_4fr_3fr] h-full overflow-hidden">
      <div className="flex justify-around items-center text-gray-400">
        <p>{city}</p>
        <p>{updated}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-[3fr_4fr] justify-items-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mr-[-20px] lg:mr-0 w-40 lg:w-45 2xl:w-50">
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
          {temp} °C
        </p>
      </div>
      <div className="flex flex-col px-4 pl-4 py-4 gap-4 justify-between">
        <WeatherWidgetRow
          icon={<FaTemperatureHalf />}
          title="Pocitově"
          value={feelsLike}
        />
        <WeatherWidgetRow
          icon={<WiHumidity />}
          title="Vlhkost"
          value={humidity}
        />
        <WeatherWidgetRow icon={<FaWind />} title="Vítr" value={wind} />
      </div>
    </div>
  );
};
export default WeatherWidget;
