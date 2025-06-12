import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/zkouska')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/zkouska"!</div>
}
