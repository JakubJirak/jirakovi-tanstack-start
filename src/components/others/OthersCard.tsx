import { Link } from "@tanstack/react-router";
import type React from "react";

interface OthersCardProps {
  longHead: string;
  desc: string;
  icon: React.ReactNode;
  path: string;
}

const OthersCard = ({ longHead, desc, icon, path }: OthersCardProps) => {
  return (
    <Link
      to={path}
      className="bg-card border-1 border-border w-full flex flex-col items-center rounded-xl hover:bg-popover transition duration-200 p-4
              sm:h-70"
    >
      <p className="text-7xl mb-4">{icon}</p>
      <h2 className="text-2xl font-semibold text-center mb-4">{longHead}</h2>
      <p className="text-gray-400 pb-0 text-center">{desc}</p>
    </Link>
  );
};

export default OthersCard;
