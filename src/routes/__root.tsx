import Layout from "@/components/Layout.tsx";
import { Button } from "@/components/ui/button.tsx";
import { getUserSession } from "@/lib/auth-server.ts";
import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type * as React from "react";
import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import appCss from "../styles.css?url";
interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Jirákovi 2.0",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  beforeLoad: async () => {
    const session = await getUserSession();
    return { session };
  },

  component: () => (
    <RootDocument>
      <Layout />

      <TanStackRouterDevtools />

      <TanStackQueryLayout />
    </RootDocument>
  ),

  notFoundComponent: () => {
    return (
      <>
        <p className="mt-10 mb-5 text-red-500 text-center">
          Tato stránka nebyla nalezena
        </p>
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <Button>Domovská stránka</Button>
          </Link>
        </div>
      </>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
