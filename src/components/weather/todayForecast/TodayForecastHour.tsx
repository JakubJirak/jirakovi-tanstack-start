interface WeatherData {
  time: string;
  icon: string;
  temp: string;
  rain: number;
}

const TodayForecastHour = ({ time, icon, temp, rain }: WeatherData) => {
  return (
    <div className="bg-primary-900 rounded-xl flex flex-col items-center justify-between py-3 min-w-[150px] overflow-hidden">
      <p className="text-lg">{time}</p>
      <div className="w-25 lg:w-[9vw] xl:w-30 m-[-24px]">
        <img width="100%" src={`/weather-icons/${icon}.svg`} alt={icon} />
      </div>
      <p className="text-2xl font-bold">{temp}</p>
      <p className="text-xl text-gray-300">{rain} %</p>
    </div>
  );
};
export default TodayForecastHour;
