import MobileHeaders from "@/components/dashboard/MobileHeaders.tsx";
import OthersCom from "@/components/dashboard/others/OthersCom.tsx";
import StatsCom from "@/components/dashboard/stats/StatsCom.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { RouteComponent as Calendar } from "../routes/calendar/route.tsx";
import { RouteComponent as Weather } from "../routes/weather/route.tsx";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  useEffect(() => {
    window.document.title = "Jirákovi 2.0 | Dashboard";
  }, []);

  return (
    <>
      {/* MOBIL */}
      <div className="grid grid-cols-1 gap-3 lg:hidden w-[95%] mx-auto mt-3 pb-3">
        {/* <MobileHeaders element={<TodolistCom />} header="Todolist" /> */}
        <MobileHeaders element={<Calendar />} header="Kalendář" />
        <MobileHeaders element={<Weather />} header="Počasí" />
        <MobileHeaders element={<StatsCom />} header="Statistiky" />
        <MobileHeaders element={<OthersCom />} header="Ostatní" />
      </div>

      {/* POCITAC */}
      <div className='hidden lg:grid lg:w-full lg:h-full lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:gap-3 lg:grid-rows-[minmax(0,3fr)_minmax(0,1fr)] lg:[grid-template-areas:"todolist_todolist_kalendar_kalendar_pocasi_pocasi"_"stats_stats_stats_stats_ostatni_ostatni"]'>
        <div className="bg-primary-800/20 [grid-area:todolist] w-full max-h-[67.9vh] overflow-auto p-3 rounded-xl">
          <h1 className="mb-5 text-center text-4xl font-bold">Todolist</h1>
        </div>
        <div className="bg-primary-800/20 rounded-xl [grid-area:kalendar]">
          kalendar
        </div>
        <div className="bg-primary-800/20 rounded-xl [grid-area:pocasi]">
          pocasi
        </div>
        <div className="bg-primary-800/20 rounded-xl p-2 [grid-area:ostatni]">
          <OthersCom />
        </div>
        <div className="bg-primary-800/20 rounded-xl p-2 [grid-area:stats]">
          <StatsCom />
        </div>
      </div>
    </>
  );
}
