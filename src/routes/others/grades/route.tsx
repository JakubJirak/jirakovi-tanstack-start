import Grade from "@/components/others/grades/Grade.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface znamka {
  znamka: number;
  vaha: number;
}

export const Route = createFileRoute("/others/grades")({
  component: RouteComponent,
});

function RouteComponent() {
  const [znamkyArray, setZnamkyArray] = useState<znamka[]>([]);
  const [vaha, setVaha] = useState<string>("");
  const [znamka, setZnamka] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZnamkyArray((z) => [
      { znamka: Number(znamka), vaha: Number(vaha) },
      ...z,
    ]);
    setZnamka("");
    setVaha("");
  };

  const vysledna = () => {
    let sum = 0;
    let count = 0;
    // biome-ignore lint/complexity/noForEach: ME SE FOR EACH LIBI
    znamkyArray.forEach((zn: znamka) => {
      sum += zn.znamka * zn.vaha;
      count += zn.vaha;
    });

    return count === 0 ? 0 : (sum / count).toFixed(2);
  };

  const handleDelete = (index: number) => {
    setZnamkyArray(znamkyArray.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 rounded-xl w-[min(450px,95%)] bg-primary-900 mx-auto mt-4 md:mt-20">
      <h1 className="text-center mb-6 text-2xl">Kalkulačka průměru</h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center mb-5"
      >
        <div className="flex flex-col md:flex-row">
          <label htmlFor="znamka" className="text-xl md:mr-4 mb-2 md:mb-0">
            Známka:
          </label>
          <input
            className="w-20 bg-primary-700/30 focus:outline-none px-2 py-1 rounded-lg md:w-15"
            value={znamka}
            min="1"
            max="5"
            onChange={(e) => setZnamka(e.target.value)}
            type="number"
            id="znamka"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label htmlFor="vaha" className="text-xl md:mr-4 mb-2 md:mb-0">
            Váha:
          </label>
          <input
            className="w-15 bg-primary-700/30 focus:outline-none px-2 py-1 rounded-lg md:w-15"
            value={vaha}
            min="1"
            max="10"
            onChange={(e) => setVaha(e.target.value)}
            type="number"
            id="vaha"
            required
          />
        </div>

        <button
          type="submit"
          className="text-xl py-1 px-2 rounded-xl hover:bg-secondary-800 transition duration-200 cursor-pointer bg-secondary-700"
        >
          Přidat
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {znamkyArray.map((znamky: znamka, index: number) => (
          <Grade
            // biome-ignore lint/suspicious/noArrayIndexKey: BUDU TO DELAT
            key={index}
            znamka={znamky.znamka}
            vaha={znamky.vaha}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <p className="text-2xl font-semibold text-center mt-6">
        Průměr: {vysledna()}
      </p>
    </div>
  );
}
