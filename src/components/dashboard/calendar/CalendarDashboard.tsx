import { Calendar } from "@/components/ui/calendar.tsx";
import { cs } from "date-fns/locale";
import { useState } from "react";

const CalendarDashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      locale={cs}
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={(d) => d && setDate(d)}
      className="rounded-2xl mt-3 w-full lg:mt-0 shadow-sm md:[--cell-size:--spacing(10)] xl:[--cell-size:--spacing(18)]"
    />
  );
};

export default CalendarDashboard;
