import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/others/spalicky")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/others/spalicky"!</div>;
}
