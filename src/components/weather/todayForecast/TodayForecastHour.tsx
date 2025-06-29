import { FaDroplet } from "react-icons/fa6";

interface WeatherData {
  time: string;
  icon: string;
  temp: number;
  rain: number;
}

const TodayForecastHour = ({ time, icon, temp, rain }: WeatherData) => {
  return (
    <div className="bg-primary-900 rounded-xl flex flex-col items-center justify-between py-3 min-w-[150px] flex-shrink-0 overflow-hidden">
      <p className="text-lg text-gray-300">{time}</p>
      <div className="w-25 lg:w-[9vw] xl:w-30 m-[-24px]">
        <img width="100%" src={`/weather-icons/${icon}.svg`} alt={icon} />
      </div>
      <p className="text-2xl font-bold">{temp} °C</p>
      <div className="text-xl text-gray-300 flex items-center gap-1">
        <FaDroplet size={16} />
        {rain} %
      </div>
    </div>
  );
};
export default TodayForecastHour;
