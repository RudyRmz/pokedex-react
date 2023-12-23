import { useEffect, useState } from "react";
import clsx from "clsx";

export default function PokemonCard({ name, url }) {
  const [pokemon, SetPokemon] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // SetPokemon(data.sprites.front_default);
        SetPokemon(data);
      });
  }, []);

  return (
    <article>
      {/* <img src={pokemon} alt="" className={clsx("w-[150px]")} /> */}
      <img
        src={pokemon?.sprites?.other?.dream_world?.front_default}
        alt=""
        className={clsx("w-[125px] max-w[150px]")}
      />
      <h3>{name.toUpperCase()}</h3>
    </article>
  );
}
