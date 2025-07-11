import OthersCard from "@/components/dashboard/others/OthersCard.tsx";
import { ostatniData } from "@/data/ostatni-data.ts";
import type { IconType } from "react-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  IoMdInformationCircleOutline as DefaultIcon,
  IoMdSchool,
} from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { SiAnimalplanet } from "react-icons/si";

const iconMap: Record<string, IconType> = {
  spalicky: PiBowlFood,
  pokemoni: SiAnimalplanet,
  znamky: IoMdSchool,
  kalendar: FaRegCalendarAlt,
};

const OthersCom = () => {
  return (
    <section
      className="grid gap-3 mx-auto grid-cols-4 w-full lg:h-full overflow-y-auto
        sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]
        md:px-0 md:pt-0
        lg:grid-cols-[1fr_1fr_1fr_1fr]"
    >
      {ostatniData.map((ostatni, index) => {
        if (index > 3) {
          return null;
        }

        const IconComponent = iconMap[ostatni.id] || DefaultIcon;

        return (
          <OthersCard
            title={ostatni.header}
            icon={<IconComponent />}
            path={ostatni.path}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
          />
        );
      })}
    </section>
  );
};

export default OthersCom;
