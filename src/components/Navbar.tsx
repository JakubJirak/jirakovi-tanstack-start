import { linkOptions } from "@tanstack/react-router";
import { FaListUl } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LuCalendarDays, LuThermometerSun } from "react-icons/lu";
import { PiDotsNineBold } from "react-icons/pi";
import NavbarLink from "./NavbarLink.tsx";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav
      className={` ${isOpen ? "flex" : "hidden"} [grid-area:'navbar'] absolute top-0 right-0 w-[clamp(220px,55%,300px)] h-screen bg-primary-900 z-20
            md:static md:w-auto md:h-auto md:bg-transparent md:flex flex-col md:border-r-2 border-primary-800 pt-2`}
    >
      <NavbarLink
        to={linkOptions({ to: "/" }).to}
        text="Dashboard"
        icon={<GoHome />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarLink
        to={linkOptions({ to: "/weather" }).to}
        text="Počasí"
        icon={<LuThermometerSun />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarLink
        to={linkOptions({ to: "/calendar" }).to}
        text="Kalendář"
        icon={<LuCalendarDays />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarLink
        to={linkOptions({ to: "/todologged" }).to}
        text="Todo"
        icon={<FaListUl />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarLink
        to={linkOptions({ to: "/others" }).to}
        text="Ostatní"
        icon={<PiDotsNineBold />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavbarLink
        to={linkOptions({ to: "/login" }).to}
        text="Login"
        icon={<FiLogIn />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
}

export default Navbar;
