import type React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  header: string;
  data: number;
}

const StatsCard = ({ header, data, icon }: StatsCardProps) => {
  return (
    <div
      className="bg-secondary w-full mx-auto items-center grid grid-cols-[10px_80px_1fr] rounded-xl p-4
            sm:grid-cols-[30px_110px_1fr] lg:grid-cols-[10px_92px_1fr] xl:grid-cols-[20px_100px_1fr] 2xl:grid-cols-[35px_120px_1fr]"
    >
      <p className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl justify-self-center">
        {icon}
      </p>
      <p className="mx-3 text-lg sm:text-2xl lg:text-xl 2xl:text-2xl">
        {header}:
      </p>
      <p className="text-lg justify-self-start sm:text-2xl 2xl:text-3xl">
        {data}
      </p>
    </div>
  );
};

export default StatsCard;
