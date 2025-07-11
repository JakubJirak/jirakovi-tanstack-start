import { Link } from "@tanstack/react-router";
import type React from "react";

interface NavbarLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const NavbarLink = ({ to, text, icon, isOpen, setIsOpen }: NavbarLinkProps) => {
  return (
    <Link
      onClick={() => isOpen && setIsOpen(!isOpen)}
      to={to}
      className={
        "text-xl px-3 py-3 my-0.5 hover:bg-popover w-[90%] mx-auto rounded-xl transition duration-200 grid grid-cols-[40px_1fr] items-center"
      }
      activeProps={{ className: "text-primary" }}
    >
      <span className="text-2xl">{icon}</span>
      {text}
    </Link>
  );
};

export default NavbarLink;
