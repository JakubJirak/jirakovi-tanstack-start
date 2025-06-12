import { db } from "@/db";
import { users } from "@/db/schema.ts";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
});

const getUsers = createServerFn().handler(() => {
  return db.select().from(users);
});

function TanStackQueryDemo() {
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    initialData: [],
    enabled: false,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">People list</h1>
      <button type="button" onClick={() => refetch()}>
        refetch
      </button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
