import { authClient } from "@/lib/auth-client.ts";
import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";

export const Route = createFileRoute("/calendar")({
  component: RouteComponent,
});

export function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      {!session && !isPending && (
        <>
          <p className="text-2xl mt-3 text-center">
            Pro přístup ke kalendari se musíte přihlásit
          </p>
          <Link
            to={linkOptions({ to: "/login" }).to}
            className="text-2xl bg-secondary-800 py-2 w-37 px-4 rounded-2xl flex mx-auto mt-10 cursor-pointer hover:bg-secondary-900 transition-all duration-200"
          >
            Přihlásit se
          </Link>
        </>
      )}
      {session && <h1>work in progress</h1>}
    </>
  );
}
