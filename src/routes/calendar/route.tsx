import { Calendar, CalendarDayButton } from "@/components/ui/calendar.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";
import { cs } from "date-fns/locale";
import { useState } from "react";

export const Route = createFileRoute("/calendar")({
  component: RouteComponent,
});

export function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();
  const [date, setDate] = useState<Date | undefined>(new Date());

  function toLocalISODateString(date: Date | undefined): string {
    if (date === undefined) return "";
    const tzOff = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - tzOff);
    return localDate.toISOString().slice(0, 10);
  }

  const dates: string[] = ["2025-07-12", "2025-07-14", "2025-07-16"];

  return (
    <>
      {!session && !isPending && (
        <>
          <p className="text-2xl mt-3 text-center">
            Pro přístup ke kalendari se musíte přihlásit
          </p>
          <Link
            to={linkOptions({ to: "/login" }).to}
            className="text-2xl bg-secondary-800 py-2 w-37 px-4 rounded-2xl flex mx-auto mt-10 cursor-pointer hover:bg-secondary-900 transition-all duration-200"
          >
            Přihlásit se
          </Link>
        </>
      )}
      {session && (
        <div className="dark flex flex-col lg:flex-row dark">
          <div className="flex-1">
            <p>{date?.toLocaleDateString()}</p>
          </div>
          <Calendar
            locale={cs}
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={(d) => d && setDate(d)}
            className="rounded-2xl w-[95%] border-2 border-border mx-auto shadow-sm md:w-[unset] md:mx-[unset] md:[--cell-size:--spacing(15)] xl:[--cell-size:--spacing(20)]"
            components={{
              DayButton: ({ children, modifiers, day, ...props }) => {
                const dayString = toLocalISODateString(day.date);
                const isSpecial = dates.includes(dayString);

                return (
                  <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                    {children}
                    {isSpecial && !modifiers.outside && <span>Pozn.</span>}
                  </CalendarDayButton>
                );
              },
            }}
          />
        </div>
      )}
    </>
  );
}
