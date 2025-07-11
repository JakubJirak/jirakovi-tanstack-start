import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type React from "react";

export const Route = createFileRoute("/others/pokemons")({
  component: RouteComponent,
});

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const fetchPokemon = async (name: string): Promise<Pokemon> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
  );
  if (!res.ok) throw new Error("Pokémon nenalezen");
  return res.json();
};

function RouteComponent() {
  const [input, setInput] = useState<string>("");
  const [pokemonName, setPokemonName] = useState<string>("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemon(pokemonName),
    enabled: !!pokemonName, // fetchne jen když máme jméno
    retry: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPokemonName(input.trim());
  };

  return (
    <div className="w-[95%] max-w-[700px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-card border-border border flex flex-col items-center justify-between rounded-xl p-4 my-6 text-xl"
      >
        <h1
          className="text-2xl mt-1 mb-5 text-center
                md:text-3xl"
        >
          Najděte ikonku podle jména Pokémona
        </h1>
        <div className="flex items-center justify-between w-full gap-3">
          <input
            className="focus:outline-none bg-secondary placeholder:text-lg px-2 py-1 w-full rounded-lg"
            type="text"
            placeholder="Zadej jméno Pokémona"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary px-2 py-1 rounded-lg hover:bg-secondary-800 cursor-pointer transition duration-200"
          >
            Hledat
          </button>
        </div>
      </form>

      {isLoading && <div>Načítání...</div>}
      {error && <div>Chyba: {(error as Error).message}</div>}
      {data && (
        <div className="flex justify-center items-center">
          <img
            className="w-80"
            src={data.sprites.front_default}
            alt={data.name}
          />
        </div>
      )}
    </div>
  );
}
