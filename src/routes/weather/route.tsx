import WeatherDayWidget from "@/components/weather/dayForecast/WeatherDayWidget.tsx";
import TodayForecast from "@/components/weather/todayForecast/TodayForecast.tsx";
import WeatherWidget from "@/components/weather/weatherWidget/WeatherWidget.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { codes } from "@/data/weather-codes.ts";
import { env } from "@/env.ts";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { RiResetLeftFill } from "react-icons/ri";

export const Route = createFileRoute("/weather")({
  component: RouteComponent,
});

export function RouteComponent() {
  const { weatherData, setWeatherData } = useWeatherContext();

  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${env.VITE_WEATHERAPI_KEY}&q=chrudim&days=3&aqi=yes&alerts=no`,
    );
    if (!res.ok) throw new Error("failed to fetch");
    console.log("fetchnuljsem");
    return res.json();
  };

  const { refetch, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchData,
    enabled: false,
  });

  const getData = async () => {
    const data = await refetch();
    if (data) {
      setWeatherData(data.data);
    }
    console.log(data.data);
  };

  const codeData = useMemo(
    () =>
      codes.find((code) => code.code === weatherData?.current?.condition?.code),
    [weatherData],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const local = window.localStorage.getItem("weatherData");
    if (!local) getData();
  }, []);

  return (
    <div className="p-3 lg:p-0">
      <button
        onClick={getData}
        className="absolute m-1 text-gray-300 bg-secondary p-1 rounded-2xl hover:bg-accent transition duration-200 cursor-pointer"
        type="button"
      >
        <RiResetLeftFill size={24} />
      </button>
      <div className="grid lg:grid-rows-[500px_500px_500px] lg:h-[91vh] gap-3 overflow-x-hidden">
        <div className="grid grid-cols-1 gap-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[3fr_7fr] overflow-hidden">
          <WeatherWidget codeData={codeData} />
          <TodayForecast day={0} />
        </div>
        <div className="grid grid-cols-1 gap-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[3fr_7fr] overflow-hidden">
          <WeatherDayWidget day={1} />
          <TodayForecast day={1} />
        </div>
        <div className="grid grid-cols-1 gap-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[3fr_7fr] overflow-hidden">
          <WeatherDayWidget day={2} />
          <TodayForecast day={2} />
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
    </div>
  );
}
