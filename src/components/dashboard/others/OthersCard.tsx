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
      className="bg-secondary w-full h-25 flex flex-col items-center justify-evenly rounded-xl hover:bg-accent transition duration-200 min-h-25
              sm:h-auto lg:min-h-[unset]"
    >
      <p className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{icon}</p>
      <h2 className="text-sm sm:text-xl lg:text-base xl:text-lg 2xl:text-xl">
        {title}
      </h2>
    </Link>
  );
};

export default OthersCard;
