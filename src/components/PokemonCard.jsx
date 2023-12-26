import { useEffect, useState } from "react";
import clsx from "clsx";

// export default function PokemonCard({ name, url }) {
//   const [pokemon, SetPokemon] = useState({});
//   //const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         //console.log(data);
//         // SetPokemon(data.sprites.front_default);
//         SetPokemon(data);
//       });
//   }, [url]);

//   //console.log(pokemon);

//   // const { types } = pokemon;
//   // let pokemonTypes = [types];

//   return (
//     <article
//       className={clsx(
//         " bg-green-500",
//         "h-64 w-50",
//         "flex flex-col items-center p-4 gap-1",
//         "rounded-md shadow-lg",
//         "hover:-translate-y-1 hover:opacity-85 cursor-pointer"
//       )}
//     >
//       {/* <img src={pokemon} alt="" className={clsx("w-[150px]")} /> */}
//       <img
//         src={pokemon?.sprites?.front_default}
//         alt=""
//         className={clsx("w-[150px] max-w[150px] bg-white", "rounded-md")}
//       />
//       <h3 className={clsx("font-bold tracking-wide")}>{name.toUpperCase()}</h3>
//       <h2 className={clsx("font-medium")}>Type:</h2>
//       {/* <div>{pokemon?.types[0]?.type?.name}</div> */}
//     </article>
//   );
// }

export default function PokemonCard({ name, url }) {
  // Estado para manejar los datos del Pokemon
  const [pokemon, setPokemon] = useState({});
  // Estado para manejar el estado de carga de los datos
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Establecer el estado de carga a true al comenzar la carga de datos
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        // Establecer el estado de carga a false cuando los datos estén disponibles
        setIsLoading(false);
      });
  }, [url]); // Asegúrate de incluir 'url' como dependencia para que el efecto se vuelva a ejecutar si cambia la URL

  const pokemonType1 = pokemon?.types?.[0]?.type?.name;
  const pokemonType2 = pokemon?.types?.[1]?.type?.name;

  //const pokemonType1 = "water";

  const typeColors = {
    water: "bg-blue-900",
    grass: "bg-green-950",
    steel: "bg-slate-700",
    bug: "bg-lime-800",
    dragon: "bg-purple-700",
    electric: "bg-yellow-500",
    ghost: "bg-indigo-700",
    fire: "bg-red-700",
    ice: "bg-sky-600",
    fighting: "bg-orange-700",
    normal: "bg-gray-500",
    psychic: "bg-fuchsia-400",
    rock: "bg-stone-800",
    ground: "bg-yellow-950",
    poison: "bg-violet-700",
    flying: "bg-blue-400",
    fairy: "bg-pink-500",
  };

  function getColorForType(type) {
    // Convertimos el tipo a minúsculas para que sea insensible a mayúsculas
    const lowercaseType = type.toLowerCase();

    // Verificamos si el tipo proporcionado existe en el objeto typeColors
    if (lowercaseType in typeColors) {
      // Si existe, retornamos el valor correspondiente a la key
      return typeColors[lowercaseType];
    } else {
      // Si no existe, puedes devolver un valor por defecto o null según tus necesidades
      return "bg-black"; // Valor por defecto si el tipo no es encontrado
    }
  }

  return (
    <article
      className={clsx(
        "bg-slate-200",
        "h-65 w-50",
        "flex flex-col items-center p-4 gap-1",
        "rounded-md shadow-lg",
        "hover:-translate-y-1 hover:opacity-85 cursor-pointer"
      )}
    >
      {/* Mostrar un mensaje de carga mientras se obtienen los datos */}
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        // Mostrar los datos del Pokemon cuando estén disponibles
        <>
          <img
            src={pokemon?.sprites?.front_default}
            alt=""
            className={clsx("w-[150px] max-w[150px] bg-white", "rounded-md")}
          />
          <h3 className={clsx("font-bold tracking-wide")}>
            {name.toUpperCase()}
          </h3>
          <h2 className={clsx("font-medium")}>Type:</h2>
          <section className={clsx("flex gap-2")}>
            <div
              className={clsx(
                " p-1 font-semibold text-white rounded-lg w-[70px] text-center",
                getColorForType(pokemonType1)
              )}
            >
              {pokemon?.types[0]?.type?.name.charAt(0).toUpperCase() +
                pokemon?.types[0]?.type?.name.slice(1) || "Desconocido"}
            </div>
            {pokemon?.types[1] ? (
              <div
                className={clsx(
                  " p-1 font-semibold text-white rounded-lg w-[70px] text-center",
                  getColorForType(pokemonType2)
                )}
              >
                {pokemon?.types[1]?.type?.name.charAt(0).toUpperCase() +
                  pokemon?.types[1]?.type?.name.slice(1)}
              </div>
            ) : (
              ""
            )}
          </section>
        </>
      )}
    </article>
  );
}
