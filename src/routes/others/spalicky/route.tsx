import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
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

  const [kusy, setKusy] = useState("");
  const [vysledekKusy, setVysledekKusy] = useState<{
    brambory: number;
    mouka: number;
    krupicka: number;
    vejce: number;
  } | null>();

  function vypocet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setVysledek({
      pocet: Number(brambory) * pocetNasob,
      mouka: Number(brambory) / 3,
      krupicka: (Number(brambory) * 2) / 15,
      vejce: Number(brambory) / 750,
    });
    setBrambory("");
  }

  function vypocetKusy(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const bramboryKusy = Number(kusy) / pocetNasob;
    setVysledekKusy({
      brambory: bramboryKusy,
      mouka: Number(bramboryKusy) / 3,
      krupicka: (Number(bramboryKusy) * 2) / 15,
      vejce: Number(bramboryKusy) / 750,
    });
    setKusy("");
  }

  return (
    <div className="w-[95%] max-w-[520px] mx-auto mt-4 flex flex-col items-center justify-center">
      <Tabs defaultValue="bram" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="bram">Podle brambor</TabsTrigger>
          <TabsTrigger value="kusy">Podle kusů</TabsTrigger>
        </TabsList>
        <TabsContent value="bram">
          <form
            onSubmit={vypocet}
            className="bg-card border-border border w-full flex flex-col items-center justify-between rounded-xl p-4 text-xl"
          >
            <h1 className="text-2xl mb-5 text-center">
              Výpočet ingrediencí pro špalíčky
            </h1>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="brambory"
                className="min-w-33 text-muted-foreground"
              >
                Brambory (g):
              </label>
              <input
                required
                type="number"
                id="brambory"
                min="100"
                max="50000"
                value={brambory}
                onChange={(e) => setBrambory(e.target.value)}
                className="w-[20%] mr-auto px-2 py-1 rounded-lg bg-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-2 py-1 text-lg md:text-xl rounded-lg hover:bg-secondary-800 cursor-pointer transition duration-200"
              >
                Vypočítat
              </button>
            </div>
          </form>
          {vysledek && (
            <div className="w-full mt-5 text-xl md:text-2xl flex flex-col gap-5 bg-card border-border border rounded-xl p-4">
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
        </TabsContent>
        <TabsContent value="kusy">
          <form
            onSubmit={vypocetKusy}
            className="bg-card border-border border w-full flex flex-col items-center justify-between rounded-xl p-4 text-xl"
          >
            <h1 className="text-2xl mb-5 text-center">
              Výpočet ingrediencí pro špalíčky
            </h1>
            <div className="flex items-center justify-between w-full">
              <label htmlFor="kusy" className="min-w-33 text-muted-foreground">
                Kusy:
              </label>
              <input
                required
                type="number"
                id="kusy"
                min="1"
                max="5000"
                value={kusy}
                onChange={(e) => setKusy(e.target.value)}
                className="w-[20%] mr-auto px-2 py-1 rounded-lg bg-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-2 py-1 text-lg md:text-xl rounded-lg hover:bg-secondary-800 cursor-pointer transition duration-200"
              >
                Vypočítat
              </button>
            </div>
          </form>
          {vysledekKusy && (
            <div className="w-full mt-5 text-xl md:text-2xl flex flex-col gap-5 bg-card border-border border rounded-xl p-4">
              <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
                <PiBowlFood size={48} />
                <p className="text-xl">Brambory:</p>
                <p>{vysledekKusy.brambory.toFixed(1)}g</p>
              </div>
              <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
                <img src={flour} alt="" />
                <p className="text-xl">Mouka:</p>
                <p>{vysledekKusy.mouka.toFixed(1)}g</p>
              </div>
              <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
                <TbPaperBag size={48} />
                <p className="text-xl">Krupička:</p>
                <p>{vysledekKusy.krupicka.toFixed(1)}g</p>
              </div>
              <div className="grid grid-cols-[40px_75px_1fr] md:grid-cols-[50px_90px_1fr] items-center gap-5 md:w-75 mx-auto">
                <BsEgg size={48} />
                <p className="text-xl">Vejce:</p>
                <p>{vysledekKusy.vejce.toFixed(1)} ks</p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
