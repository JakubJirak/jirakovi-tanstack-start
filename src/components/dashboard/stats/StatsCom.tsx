import { statsData } from "@/data/stats-data.ts";
import type { IconType } from "react-icons";
import { IoMdInformationCircleOutline as DefaultIcon } from "react-icons/io";
import { PiThermometerBold } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import StatsCard from "./StatsCard.tsx";

const iconMap: Record<string, IconType> = {
  temperature: PiThermometerBold,
  humidity: WiHumidity,
};

const StatsCom = () => {
  return (
    <section
      className="grid gap-3 grid-cols-2 [grid-area:stats] lg:h-full overflow-y-auto
        md:px-0 sm:grid-cols-[1fr_1fr] md:pt-0
        lg:grid-cols-[1fr_1fr_1fr_1fr]"
    >
      {statsData.map((stat, index) => {
        const IconComponent = iconMap[stat.id] || DefaultIcon;
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        return <StatsCard {...stat} key={index} icon={<IconComponent />} />;
      })}
    </section>
  );
};

export default StatsCom;
