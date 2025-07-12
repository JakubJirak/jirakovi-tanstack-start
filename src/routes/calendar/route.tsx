import LoggedTodo from "@/components/todologged/LoggedTodo.tsx";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar.tsx";
import { db } from "@/db";
import { todos } from "@/db/schema.ts";
import { authClient } from "@/lib/auth-client.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { cs } from "date-fns/locale";
import { and, eq } from "drizzle-orm";
import { useState } from "react";

export const Route = createFileRoute("/calendar")({
  component: RouteComponent,
});

type Poznamka = typeof todos.$inferSelect;

const deleteData = createServerFn({ method: "POST" })
  .validator((data: { id: number }) => data)
  .handler(async ({ data }) => {
    await db.delete(todos).where(eq(todos.id, data.id)).execute();
    return true;
  });

const updateData = createServerFn({ method: "POST" })
  .validator((data: { id: number; isDone: boolean }) => data)
  .handler(async ({ data }) => {
    await db
      .update(todos)
      .set({ isDone: !data.isDone })
      .where(eq(todos.id, Number(data.id)))
      .execute();
    return true;
  });
const fetchData = createServerFn({ method: "GET" })
  .validator((data: { userId: string; ISOdate: string }) => data)
  .handler(async ({ data }) => {
    const todosUser = await db
      .select()
      .from(todos)
      .where(and(eq(todos.userId, data.userId), eq(todos.date, data.ISOdate)));
    return todosUser;
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
  const ISOdate = toLocalISODateString(date);

  const userId = session?.user.id ?? "";

  const { data, refetch } = useQuery({
    queryKey: ["todos", userId, ISOdate],
    queryFn: () => fetchData({ data: { userId, ISOdate } }),
    enabled: !!session,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => refetch(),
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate({ data: { id } });
  };

  const updateMutation = useMutation({
    mutationFn: updateData,
    onSuccess: () => refetch(),
  });

  const handleUpdate = (id: number, isDone: boolean) => {
    updateMutation.mutate({ data: { id, isDone } });
  };

  const dates: string[] = ["2025-07-12", "2025-07-14", "2025-07-16"];

  if (!session && !isPending) {
    return (
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
    );
  }

  if (!session) return null;

  return (
    <div className="dark flex gap-3 lg:flex-row-reverse flex-col lg:flex-row">
      <Calendar
        locale={cs}
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={(d) => d && setDate(d)}
        className="rounded-2xl w-[95%] border-2 mt-3 lg:mt-0 border-border mx-auto shadow-sm md:w-[unset] md:mx-[unset] md:[--cell-size:--spacing(15)] xl:[--cell-size:--spacing(20)]"
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
      <div className="flex-1">
        <h1 className="text-2xl text-center mb-3 font-semibold">
          {date?.toLocaleDateString()}
        </h1>
        <div>
          {data?.length === 0 && (
            <p className="text-center text-muted-foreground">
              Pro tento den nemáte žádné poznámky
            </p>
          )}
          {data?.length !== 0 && (
            <div className="flex w-[95%] mx-auto lg:w-full gap-4 pb-3 lg:pb-0 flex-col max-w-[1500px]">
              {data?.map((poznamka: Poznamka) => (
                <LoggedTodo
                  key={poznamka.id}
                  text={poznamka.text}
                  date={poznamka.date}
                  isDone={poznamka.isDone}
                  id={poznamka.id}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
