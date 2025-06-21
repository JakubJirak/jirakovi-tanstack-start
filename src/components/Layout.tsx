import Navbar from "./Navbar.tsx";

import { LoginProvider } from "@/data/Context/LoginContext.tsx";
import { TodoProvider } from "@/data/Context/TodoContext.tsx";
import { WeatherProvider } from "@/data/Context/WeatherContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Header from "./Header.tsx";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Number.POSITIVE_INFINITY,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div
      className="grid h-screen w-screen [grid-template-areas:'name_header_icon'_'main_main_main'] grid-rows-[80px_1fr] grid-cols-[150px_1fr_50px]
        md:grid-cols-[180px_1fr] md:grid-rows-[6vh_1fr] md:[grid-template-areas:'name_header'_'navbar_main']
        lg:grid-cols-[clamp(180px,10vw,200px)_1fr]"
    >
      <h2 className="[grid-area:name] text-2xl flex items-center justify-center border-b-2 md:border-r-2 border-primary-800">
        Jirákovi 2.0
      </h2>
      <Header />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <button
        type="button"
        className="border-b-2 border-primary-800 md:hidden [grid-area:icon] text-2xl pr-4"
        onClick={handleClick}
      >
        <FiMenu />
      </button>

      <main className="[grid-area:main] md:p-3">
        <QueryClientProvider client={queryClient}>
          <TodoProvider>
            <LoginProvider>
              <WeatherProvider>
                <Outlet />
              </WeatherProvider>
            </LoginProvider>
          </TodoProvider>
        </QueryClientProvider>
      </main>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={` ${isOpen ? "block" : "hidden"} bg-black w-screen h-screen absolute z-10 opacity-85 md:hidden`}
        onClick={handleClick}
      />
    </div>
  );
}

export default Layout;
