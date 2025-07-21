import LoggedInput from "@/components/todologged/LoggedInput.tsx";
import LoggedTodos from "@/components/todologged/LoggedTodos.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/todologged")({
  beforeLoad: ({ context }) => {
    if (!context.session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { data: session } = authClient.useSession();
  if (!session) return null;

  return (
    <div className=" mx-auto flex flex-col items-center justify-center overflow-auto">
      <div className="w-[min(95%,1100px)] max-h-[90vh]">
        <LoggedInput setFetchAgain={setFetchAgain} fetchAgain={fetchAgain} />
        <LoggedTodos fetchAgain={fetchAgain} />
      </div>
    </div>
  );
}
