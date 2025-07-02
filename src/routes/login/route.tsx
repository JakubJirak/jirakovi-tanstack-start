import CreateAccForm from "@/components/login/CreateAccForm.tsx";
import LoginForm from "@/components/login/LoginForm.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [zalozit, setZalozit] = useState<boolean>(false);

  const odhlasit = async () => {
    await authClient.signOut();
    alert("Sign Out!");
  };

  return (
    <>
      <div className="flex gap-3 justify-center">
        <button
          type="button"
          className={`${!zalozit && "text-gray-500"} bg-primary-900 text-xl hover:bg-primary-800 px-3 py-2 rounded-xl transition duration-300 cursor-pointer`}
          onClick={() => setZalozit(true)}
        >
          Vytvořit účet
        </button>
        <button
          type="button"
          className={`${zalozit && "text-gray-500"} bg-primary-900 text-xl hover:bg-primary-800 px-3 py-2 rounded-xl transition duration-300 cursor-pointer`}
          onClick={() => setZalozit(false)}
        >
          Přihlásit se
        </button>
      </div>
      {zalozit ? <CreateAccForm /> : <LoginForm />}
      <button type="button" onClick={odhlasit}>
        Odhlasit se
      </button>
    </>
  );
}
