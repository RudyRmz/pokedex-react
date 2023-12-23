import { useEffect, useState } from "react";
import clsx from "clsx";

export default function PokemonCard({ name, url }) {
  const [pokemon, SetPokemon] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        // SetPokemon(data.sprites.front_default);
        SetPokemon(data);
      });
  }, []);

  return (
    <article
      className={clsx(
        " bg-green-500",
        "h-64 w-50",
        "flex flex-col items-center p-4 gap-1",
        "rounded-md shadow-lg",
        "hover:-translate-y-1 hover:opacity-85 cursor-pointer"
      )}
    >
      {/* <img src={pokemon} alt="" className={clsx("w-[150px]")} /> */}
      <img
        src={pokemon?.sprites?.front_default}
        alt=""
        className={clsx("w-[150px] max-w[150px] bg-white", "rounded-md")}
      />
      <h3 className={clsx("font-bold tracking-wide")}>{name.toUpperCase()}</h3>
      <h2 className={clsx("font-medium")}>Type:</h2>
    </article>
  );
}
