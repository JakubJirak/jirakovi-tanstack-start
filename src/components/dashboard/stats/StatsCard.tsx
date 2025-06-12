import type React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  header: string;
  data: number;
}

const StatsCard = ({ header, data, icon }: StatsCardProps) => {
  return (
    <div
      className="bg-primary-900 w-full mx-auto items-center grid grid-cols-[20px_90px_1fr] rounded-xl p-4
            sm:grid-cols-[30px_110px_1fr] xl:grid-cols-[30px_110px_1fr] 2xl:grid-cols-[40px_130px_1fr]"
    >
      <p className="text-2xl sm:text-3xl 2xl:text-4xl justify-self-center">
        {icon}
      </p>
      <p className="mx-3 text-xl sm:text-2xl 2xl:text-3xl">{header}:</p>
      <p className="text-xl justify-self-start sm:text-2xl 2xl:text-3xl">
        {data}
      </p>
    </div>
  );
};

export default StatsCard;
