import TodayForecastHour from "@/components/weather/todayForecast/TodayForecastHour.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getImage } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";

const TodayForecast = () => {
  const { weatherData } = useWeatherContext();
  const todayFrc = weatherData?.forecast.forecastday[0]?.hour;
  if (!weatherData) return "";

  return (
    <div className="bg-primary-800/20 rounded-xl overflow-x-auto">
      <div className="grid grid-cols-6 gap-4 grid-flow-row h-full p-4">
        {/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
        {todayFrc &&
          todayFrc.map((hour, index) => {
            if (index % 2 === 0) {
              const codeData = codes.find(
                (code) => code.code === hour.condition.code,
              );

              const is_day = index < 6 || index > 20 ? 0 : 1;

              return (
                <TodayForecastHour
                  time={`${index}:00`}
                  icon={getImage(codeData?.code, is_day, codeData)}
                  temp={hour.temp_c}
                  rain={hour.chance_of_rain}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
export default TodayForecast;
