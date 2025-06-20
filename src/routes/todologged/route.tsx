import LoggedInput from "@/components/todologged/LoggedInput.tsx";
import LoggedTodos from "@/components/todologged/LoggedTodos.tsx";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../data/Context/LoginContext.tsx";

export const Route = createFileRoute("/todologged")({
  component: RouteComponent,
});

function RouteComponent() {
  const { logged } = useLoginContext();
  const [fetchAgain, setFetchAgain] = useState(false);
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: nechapu co se ti nelibi bro
  useEffect(() => {
    if (!logged) {
      navigate({ to: "/login" });
    }
  }, []);

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
    </div>
  );
}
