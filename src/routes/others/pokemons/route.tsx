import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/others/pokemons')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/others/pokemons"!</div>
}
