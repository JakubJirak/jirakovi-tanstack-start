import TodayForecastHour from "@/components/weather/todayForecast/TodayForecastHour.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { type codeData, getImage } from "@/data/Functions/weather-functions.ts";

interface TodayForecast {
  codeData: codeData | undefined;
}
const TodayForecast = ({ codeData }: TodayForecast) => {
  const { weatherData } = useWeatherContext();
  if (!weatherData || !codeData) return "";

  const imgFile = getImage(
    codeData?.code,
    weatherData?.current?.is_day,
    codeData,
  );

  return (
    <div className="bg-primary-800/20 rounded-xl overflow-x-auto">
      <div className="grid grid-rows-2 gap-4 grid-flow-col h-full p-4">
        <TodayForecastHour
          time="15:00"
          icon={imgFile}
          temp="25.1 °C"
          rain={20}
        />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
        <TodayForecastHour time="0" icon="0" temp="0" rain={20} />
      </div>
    </div>
  );
};
export default TodayForecast;
