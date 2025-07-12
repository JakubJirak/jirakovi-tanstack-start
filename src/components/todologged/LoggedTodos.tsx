import { db } from "@/db";
import { todos } from "@/db/schema.ts";
import { authClient } from "@/lib/auth-client.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import LoggedTodo from "./LoggedTodo.tsx";

type Poznamka = typeof todos.$inferSelect;

interface LoggedTodosProps {
  fetchAgain: boolean;
}

const fetchData = createServerFn({ method: "GET" })
  .validator((data: { userId: string }) => data)
  .handler(async ({ data }) => {
    const todosUser = await db
      .select()
      .from(todos)
      .where(eq(todos.userId, data.userId));
    return todosUser;
  });

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

const LoggedTodos = ({ fetchAgain }: LoggedTodosProps) => {
  const { data: session } = authClient.useSession();

  if (!session) return null;
  const userId = session.user.id;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["todos", userId],
    queryFn: () => fetchData({ data: { userId: userId } }),
    enabled: true,
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    refetch();
  }, [fetchAgain]);

  return (
    <div className="grid gap-5 pb-3 lg:pb-0">
      <button
        type="button"
        onClick={() => refetch()}
        className="w-20 justify-self-end bg-secondary mb-[-8px] md:mb-0 mt-2 py-2 rounded-2xl hover:bg-accent transition duration-300 ease-in-out cursor-pointer"
      >
        Refetch
      </button>
      {isLoading && <p>Nacitani</p>}
      {error && <p>Chyba</p>}
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
  );
};

export default LoggedTodos;
