import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/others/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/others/grades"!</div>
}
