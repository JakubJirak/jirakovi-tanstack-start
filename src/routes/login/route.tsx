import CreateAccForm from "@/components/login/CreateAccForm.tsx";
import LoginForm from "@/components/login/LoginForm.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [zalozit, setZalozit] = useState<boolean>(false);

  return (
    <>
      {zalozit ? (
        <CreateAccForm setZalozit={setZalozit} />
      ) : (
        <LoginForm setZalozit={setZalozit} />
      )}
    </>
  );
}
