import LoggedTodo from "@/components/todologged/LoggedTodo.tsx";
import {
  CalendarBig,
  CalendarDayButton,
} from "@/components/ui/calendar-big.tsx";
import { db } from "@/db";
import { todos } from "@/db/schema.ts";
import { authClient } from "@/lib/auth-client.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { cs } from "date-fns/locale";
import { and, eq } from "drizzle-orm";
import type React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

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

const fetchAllData = createServerFn({ method: "GET" })
  .validator((data: { userId: string }) => data)
  .handler(async ({ data }) => {
    const todosUser = await db
      .select()
      .from(todos)
      .where(eq(todos.userId, data.userId));
    return todosUser;
  });

const addTodo = createServerFn({ method: "POST" })
  .validator(
    (data: { userId: string; text: string; date: string; isDone: boolean }) =>
      data,
  )
  .handler(async ({ data }) => {
    await db
      .insert(todos)
      .values({
        text: data.text,
        date: data.date,
        isDone: data.isDone,
        userId: data.userId,
      })
      .execute();
  });

export function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [inpValue, setInpValue] = useState("");

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

  const { data: allTodos, refetch: allRefetch } = useQuery({
    queryKey: ["todos", userId],
    queryFn: () => fetchAllData({ data: { userId } }),
    enabled: !!session,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => refetchAll(),
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

  const allDates = () => {
    if (allTodos === undefined) {
      return "";
    }
    return allTodos.map((todo) => todo.date);
  };

  const mutationTodos = useMutation({
    mutationFn: addTodo,
    onError: (err) => console.log(err),
    onSuccess: () => refetchAll(),
  });

  const addUserMutation = () => {
    mutationTodos.mutate({
      data: {
        text: inpValue,
        userId: userId,
        date: toLocalISODateString(date),
        isDone: false,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUserMutation();
    setInpValue("");
  };

  function refetchAll() {
    refetch();
    allRefetch();
  }

  if (!session && !isPending) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-2xl mt-3 text-center">
          Pro přístup ke kalendáři se musíte přihlásit
        </p>
        <Link
          to={linkOptions({ to: "/login" }).to}
          className="text-2xl bg-secondary-800 py-2 px-4 rounded-2xl inline-flex mt-10 cursor-pointer hover:bg-secondary-900 transition-all duration-200"
        >
          Přihlásit se
        </Link>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="dark flex gap-3 lg:flex-row-reverse flex-col lg:flex-row">
      <CalendarBig
        locale={cs}
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={(d) => d && setDate(d)}
        className="rounded-2xl w-[95%] border-2 mt-3 max-h-[680px] lg:mt-0 border-border mx-auto shadow-sm md:w-[unset] md:mx-[unset] md:[--cell-size:--spacing(15)] xl:[--cell-size:--spacing(20)]"
        components={{
          DayButton: ({ children, modifiers, day, ...props }) => {
            const todoDates = allDates();
            const dayString = toLocalISODateString(day.date);
            const isSpecial = todoDates.includes(dayString);

            return (
              <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                {children}
                {isSpecial && !modifiers.outside && <span>Pozn.</span>}
              </CalendarDayButton>
            );
          },
        }}
      />
      <div className="flex-1 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl text-center mb-3 font-semibold">
          {date?.toLocaleDateString()}
        </h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex mx-auto w-[95%] mb-8 bg-card border border-border p-2 text-xl items-center rounded-xl px-3 lg:w-full"
          >
            <input
              value={inpValue}
              type="text"
              placeholder="Úkol..."
              required
              id="valInp"
              className="px-2 focus:outline-none w-full rounded-lg"
              onChange={(e) => setInpValue(e.target.value)}
            />
            <button
              className="bg-primary flex cursor-pointer items-center justify-center min-w-10 min-h-10 rounded-full text-2xl"
              type="submit"
            >
              <FaPlus />
            </button>
          </form>
          {data?.length === 0 && (
            <p className="text-center text-muted-foreground">
              Přidejte pro tento den poznámku
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
