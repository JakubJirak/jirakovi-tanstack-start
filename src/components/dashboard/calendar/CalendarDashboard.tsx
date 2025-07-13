import { CalendarBig } from "@/components/ui/calendar-big.tsx";
import { cs } from "date-fns/locale";
import { useState } from "react";

const CalendarDashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarBig
      locale={cs}
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={(d) => d && setDate(d)}
      className="rounded-2xl mt-3 w-full lg:mt-0"
    />
  );
};

export default CalendarDashboard;
