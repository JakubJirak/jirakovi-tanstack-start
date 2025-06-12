import { useState } from "react";
import type React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface MobileHeadersProps {
  element: React.ReactNode;
  header: string;
}

const MobileHeaders = ({ element, header }: MobileHeadersProps) => {
  const [bool, setBool] = useState(true);

  return (
    <div
      className={`${bool ? "" : "h-14 overflow-hidden"}  bg-primary-800/20 w-full max-h-[700px] overflow-auto p-3 rounded-xl relative
                    md:px-3`}
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <h1
        className="text-center text-2xl font-bold"
        onClick={() => setBool(!bool)}
      >
        {header}
      </h1>
      <IoIosArrowDown
        onClick={() => setBool(!bool)}
        className={`${bool ? "transform rotate-[180deg]" : ""} absolute text-2xl right-4 top-4 transition duration-200`}
      />
      <div className={`${bool ? "block" : "hidden"} mt-3`}>{element}</div>
    </div>
  );
};

export default MobileHeaders;
