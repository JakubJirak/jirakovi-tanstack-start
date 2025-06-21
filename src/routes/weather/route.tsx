import WeatherIcon from "@/components/weather/WeatherIcon.tsx";
import WeatherStats from "@/components/weather/WeatherStats.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { env } from "@/env.ts";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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

  useEffect(() => {
    if (!weatherData) {
      getData();
    }
  });

  return (
    <div>
      <button onClick={getData} type="button">
        klini
      </button>
      <div className="">
        <WeatherIcon />
        <WeatherStats />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
    </div>
  );
}
