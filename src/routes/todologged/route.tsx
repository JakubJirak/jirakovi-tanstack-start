import LoggedInput from "@/components/todologged/LoggedInput.tsx";
import LoggedTodos from "@/components/todologged/LoggedTodos.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLoginContext } from "../../data/Context/LoginContext.tsx";

export const Route = createFileRoute("/todologged")({
  component: RouteComponent,
});

function RouteComponent() {
  const { logged } = useLoginContext();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div>
      {logged && (
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

      {!logged && <p>Nejprve se musíš přihlásit</p>}
    </div>
  );
}
