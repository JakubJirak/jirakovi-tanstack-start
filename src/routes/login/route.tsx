import LoginForm from "@/components/login/LoginForm.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginForm />;
}
