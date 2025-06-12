import { Link } from "@tanstack/react-router";
import type * as React from "react";

interface OstatniProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const OthersCard = ({ title, icon, path }: OstatniProps) => {
  return (
    <Link
      to={path}
      className="bg-primary-900 w-full h-25 flex flex-col items-center justify-evenly rounded-xl hover:bg-primary-800 transition duration-200 min-h-30
              sm:h-auto lg:min-h-[unset]"
    >
      <p className="text-5xl lg:text-4xl 2xl:text-5xl">{icon}</p>
      <h2 className="sm:text-xl lg:text-lg 2xl:text-xl">{title}</h2>
    </Link>
  );
};

export default OthersCard;
