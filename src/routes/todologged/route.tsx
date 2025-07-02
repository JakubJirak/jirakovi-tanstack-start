import LoggedInput from "@/components/todologged/LoggedInput.tsx";
import LoggedTodos from "@/components/todologged/LoggedTodos.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/todologged")({
  component: RouteComponent,
});

function RouteComponent() {
  const [fetchAgain, setFetchAgain] = useState(false);
  //const navigate = useNavigate();

  const {
    data: session,
    //isPending - loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <p>{error?.name}</p>
      <button type="button" onClick={refetch}>
        refetch
      </button>
      {session && (
        <div className=" mx-auto flex flex-col items-center justify-center overflow-auto">
          <div className="w-[min(95%,1100px)] max-h-[90vh]">
            <LoggedInput
              setFetchAgain={setFetchAgain}
              fetchAgain={fetchAgain}
            />
            <LoggedTodos fetchAgain={fetchAgain} />
          </div>
        </div>
      )}
    </div>
  );
}
