import { linkOptions } from "@tanstack/react-router";

export const ostatniData = [
  {
    id: "spalicky",
    header: "Špalíčky",
    longHead: "Výpočet ingrediencí pro špalíčky",
    desc: "Pomocí množství brambor vypočítá množství dalších ingrediencí pro špalíčky.",
    path: linkOptions({ to: "/others/spalicky" }).to,
  },
  {
    id: "pokemoni",
    header: "Pokémoni",
    longHead: "Vyhledávání Pokémonů",
    desc: "Najděte si informace o svém oblíbeném Pokémonovi!",
    path: linkOptions({ to: "/others/pokemons" }).to,
  },
  {
    id: "znamky",
    header: "Známky",
    longHead: "Výpočet průměru známek s váhami",
    desc: "Přidejte svoje známky s jejich váhami a uvidíte svůj výsledný průměr.",
    path: linkOptions({ to: "/others/grades" }).to,
  },
  {
    id: "kalendar",
    header: "Kalendář",
    longHead: "Jakýkoliv kalendář podle výběru",
    desc: "Vyberte jakýkoliv měsíc a rok a zobrazí se vám kalendář dle vašeho výběru",
    path: "/ostatni",
  },
  {
    id: "data",
    header: "Funkce",
    longHead: "Delší nadpis",
    desc: "Popis funkce a k čemu je",
    path: "/ostatni",
  },
  {
    id: "data",
    header: "Funkce",
    longHead: "Delší nadpis",
    desc: "Popis funkce a k čemu je",
    path: "/ostatni",
  },
  {
    id: "data",
    header: "Funkce",
    longHead: "Delší nadpis",
    desc: "Popis funkce a k čemu je",
    path: "/ostatni",
  },
  {
    id: "data",
    header: "Funkce",
    longHead: "Delší nadpis",
    desc: "Popis funkce a k čemu je",
    path: "/ostatni",
  },
];
