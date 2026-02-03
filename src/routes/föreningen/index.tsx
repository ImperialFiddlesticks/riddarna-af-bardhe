import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/föreningen/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/föreningen/"!</div>
}
