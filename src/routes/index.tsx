import MobileHeaders from "@/components/dashboard/MobileHeaders.tsx";
import OthersCom from "@/components/dashboard/others/OthersCom.tsx";
import StatsCom from "@/components/dashboard/stats/StatsCom.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { RouteComponent as Calendar } from "../routes/calendar/route.tsx";
import "../styles.css";
import CalendarDashboard from "@/components/dashboard/calendar/CalendarDashboard.tsx";
import WeatherWidget from "@/components/weather/weatherWidget/WeatherWidget.tsx";
import { useWeatherContext } from "@/data/Context/WeatherContext.tsx";
import { codes } from "@/data/weather-codes.ts";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { weatherData } = useWeatherContext();

  useEffect(() => {
    window.document.title = "Jirákovi 2.0 | Dashboard";
  }, []);

  const codeData = useMemo(
    () =>
      codes.find((code) => code.code === weatherData?.current?.condition?.code),
    [weatherData],
  );

  return (
    <>
      {/* MOBIL */}
      <div className="grid grid-cols-1 gap-3 lg:hidden w-[95%] mx-auto mt-3 pb-3">
        {/* <MobileHeaders element={<TodolistCom />} header="Todolist" /> */}
        <MobileHeaders element={<Calendar />} header="Kalendář" />
        {weatherData && (
          <MobileHeaders
            element={<WeatherWidget codeData={codeData} />}
            header="Počasí"
          />
        )}
        <MobileHeaders element={<StatsCom />} header="Statistiky" />
        <MobileHeaders element={<OthersCom />} header="Ostatní" />
      </div>

      {/* POCITAC */}
      <div className='hidden lg:grid lg:w-full lg:h-full lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:gap-3 lg:grid-rows-[6fr_1fr] lg:[grid-template-areas:"todolist_todolist_kalendar_kalendar_pocasi_pocasi"_"stats_stats_stats_stats_ostatni_ostatni"]'>
        <div className="bg-card border border-border [grid-area:todolist] w-full max-h-[78vh] overflow-auto p-3 rounded-xl">
          <h1 className="mb-5 text-center text-4xl font-bold">Todolist</h1>
        </div>
        <div className="bg-card border border-border rounded-xl [grid-area:kalendar]">
          <CalendarDashboard />
        </div>
        <div className="bg-card border border-border rounded-xl [grid-area:pocasi]">
          <WeatherWidget codeData={codeData} />
        </div>
        <div className="bg-card border border-border rounded-xl p-2 [grid-area:ostatni]">
          <OthersCom />
        </div>
        <div className="bg-card border border-border rounded-xl p-2 [grid-area:stats]">
          <StatsCom />
        </div>
      </div>
    </>
  );
}
