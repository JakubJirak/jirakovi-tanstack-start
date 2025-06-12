import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/weather")({
  component: RouteComponent,
});

export function RouteComponent() {
  return <div>Hello "/weather"!</div>;
}
