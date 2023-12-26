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

  function capitalizarPrimeraLetra(typeName) {
    // Verificar si la typeName está vacía
    if (typeName.length === 0) {
      return typeName;
    }

    // Obtener el primer carácter en mayúscula y concatenar el resto de la typeName
    return typeName.charAt(0).toUpperCase() + typeName.slice(1);
  }
  return (
    <article
      className={clsx(
        "bg-green-500",
        "h-64 w-50",
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
          <h2 className={clsx("font-medium")}>Tipo:</h2>
          <section className={clsx("flex gap-2")}>
            <div>
              {pokemon?.types[0]?.type?.name.charAt(0).toUpperCase() +
                pokemon?.types[0]?.type?.name.slice(1) || "Desconocido"}
            </div>
            {pokemon?.types[1] ? (
              <div>
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
