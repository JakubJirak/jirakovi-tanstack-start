import TodayForecastHour from "@/components/weather/todayForecast/TodayForecastHour.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import type { codeData } from "@/data/Functions/weather-functions.ts";

interface TodayForecast {
  codeData: codeData | undefined;
}
const TodayForecast = ({ codeData }: TodayForecast) => {
  const { weatherData } = useWeatherContext();
  if (!weatherData || !codeData) return <p>Chyba pri nacitani dat</p>;

  return (
    <div className="bg-primary-800/20">
      <p>kod pocasi {codeData?.code}</p>a
      <TodayForecastHour time="0" icon="0" temp="0" minTemp="0" />
    </div>
  );
};
export default TodayForecast;
