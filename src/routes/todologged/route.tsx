import LoggedInput from "@/components/todologged/LoggedInput.tsx";
import LoggedTodos from "@/components/todologged/LoggedTodos.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/todologged")({
  component: RouteComponent,
});

function RouteComponent() {
  const [fetchAgain, setFetchAgain] = useState(false);

  const { data: session } = authClient.useSession();

  return (
    <div>
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
      {!session && (
        <div className="flex flex-col items-center">
          <p className="text-2xl mt-3 text-center">
            Pro přístup k todolistu se musíte přihlásit
          </p>
          <Link
            to={linkOptions({ to: "/login" }).to}
            className="text-2xl bg-secondary-800 py-2 px-4 rounded-2xl inline-flex mt-10 cursor-pointer hover:bg-secondary-900 transition-all duration-200"
          >
            Přihlásit se
          </Link>
        </div>
      )}
    </div>
  );
}
