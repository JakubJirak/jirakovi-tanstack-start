import TodayForecastHour from "@/components/weather/todayForecast/TodayForecastHour.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { getImage } from "@/data/Functions/weather-functions.ts";
import { codes } from "@/data/weather-codes.ts";

interface WeatherForecastProps {
  day: number;
}

const TodayForecast = ({ day }: WeatherForecastProps) => {
  const { weatherData } = useWeatherContext();
  const todayFrc = weatherData?.forecast.forecastday[day]?.hour;
  if (!weatherData) return null;

  return (
    <div className="bg-card border border-border rounded-xl overflow-x-auto">
      <div className="grid grid-cols-6 grid-rows-2 gap-4 h-full p-4 min-w-[1010px]">
        {todayFrc?.map((hour, index) => {
          if (index % 2 === 0) {
            const codeData = codes.find(
              (code) => code.code === hour.condition.code,
            );

            const is_day = index < 6 || index > 20 ? 0 : 1;

            return (
              <TodayForecastHour
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
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
