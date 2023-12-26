import { data } from "autoprefixer";
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className={clsx(" bg-slate-600 min-h-svh", "p-5 text-black")}>
        {/* <img
          src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png"
          alt=""
          className={clsx("w-52 mx-auto")}
        /> */}
        <section className={clsx("flex flex-wrap justify-center gap-3")}>
          {pokemonList.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
              ></PokemonCard>
            );
          })}
        </section>
      </main>
    </>
  );
}
