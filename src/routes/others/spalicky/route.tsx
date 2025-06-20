import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type React from "react";
import { BsEgg } from "react-icons/bs";
import { PiBowlFood } from "react-icons/pi";
import { TbPaperBag } from "react-icons/tb";
import flour from "../../../images/flour.svg";

export const Route = createFileRoute("/others/spalicky")({
  component: RouteComponent,
});

function RouteComponent() {
  const [brambory, setBrambory] = useState<string>("");
  const [vysledek, setVysledek] = useState<{
    pocet: number;
    mouka: number;
    krupicka: number;
    vejce: number;
  } | null>();
  const pocetNasob: number = 0.1070796460176991;

  function vypocet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setVysledek({
      pocet: Number(brambory) * pocetNasob,
      mouka: Number(brambory) / 3,
      krupicka: (Number(brambory) * 2) / 15,
      vejce: Number(brambory) / 750,
    });
  }

  return (
    <div className="w-[95%] max-w-[520px] mx-auto mt-3 flex flex-col items-center justify-center">
      <form
        onSubmit={vypocet}
        className="bg-primary-900 w-full flex flex-col items-center justify-between rounded-xl p-4 text-xl"
      >
        <h1 className="text-2xl mb-5 text-center">
          Výpočet ingrediencí pro špalíčky
        </h1>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="brambory" className="min-w-33">
            Brambory (g):
          </label>
          <input
            type="number"
            id="brambory"
            min="100"
            max="50000"
            value={brambory}
            onChange={(e) => setBrambory(e.target.value)}
            className="w-[20%] mr-auto px-2 py-1 rounded-lg bg-primary-700/50 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-secondary-700 px-2 py-1 text-lg md:text-xl rounded-lg hover:bg-secondary-800 cursor-pointer transition duration-200"
          >
            Vypočítat
          </button>
        </div>
      </form>

      {vysledek && (
        <div className="w-full mt-5 text-xl md:text-2xl flex flex-col gap-5 bg-primary-900 rounded-xl p-4">
          <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
            <PiBowlFood size={48} />
            <p>Počet:</p>
            <p>{vysledek.pocet.toFixed(1)} ks</p>
          </div>
          <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
            <img src={flour} alt="" />
            <p>Mouka:</p>
            <p>{vysledek.mouka.toFixed(1)}g</p>
          </div>
          <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
            <TbPaperBag size={48} />
            <p>Krupička:</p>
            <p>{vysledek.krupicka.toFixed(1)}g</p>
          </div>
          <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
            <BsEgg size={48} />
            <p>Vejce:</p>
            <p>{vysledek.vejce.toFixed(1)} ks</p>
          </div>
        </div>
      )}
    </div>
  );
}
