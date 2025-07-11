import type * as React from "react";

interface WeatherData {
  icon: React.ReactNode;
  title: string;
  value?: string;
}

const WeatherWidgetRow = ({ icon, title, value }: WeatherData) => {
  return (
    <div className="grid bg-secondary border border-border grid-cols-[40px_1fr_1fr] items-center text-xl py-3 pl-3 rounded-xl">
      <p className="text-2xl">{icon}</p>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};
export default WeatherWidgetRow;
