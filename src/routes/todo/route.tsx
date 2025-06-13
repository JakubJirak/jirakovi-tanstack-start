import TodoCom from "@/components/todo/TodoCom.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.document.title = "Jirákovi 2.0 | Todolist";
  }, []);

  return <TodoCom />;
}
