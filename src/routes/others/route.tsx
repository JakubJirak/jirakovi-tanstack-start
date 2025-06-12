import { ostatniData } from "@/data/ostatni-data.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  IoMdInformationCircleOutline as DefaultIcon,
  IoMdSchool,
} from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { SiAnimalplanet } from "react-icons/si";
import OstatniCard from "./OthersCard.tsx";

const iconMap: Record<string, IconType> = {
  spalicky: PiBowlFood,
  pokemoni: SiAnimalplanet,
  znamky: IoMdSchool,
  kalendar: FaRegCalendarAlt,
};

export const Route = createFileRoute("/others")({
  component: RouteComponent,
});

export function RouteComponent() {
  useEffect(() => {
    window.document.title = "Jirákovi 2.0 | Ostatní";
  }, []);

  return (
    <div className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] p-3 md:p-0">
      {ostatniData.map((ostatni, index) => {
        const IconComponent = iconMap[ostatni.id] || DefaultIcon;
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: budu pouzivat index jako key a nikdo me nezastavi
          <OstatniCard icon={<IconComponent />} {...ostatni} key={index} />
        );
      })}
    </div>
  );
}
