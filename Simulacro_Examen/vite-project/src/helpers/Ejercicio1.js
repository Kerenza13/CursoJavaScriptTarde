// const urlPoke = import.meta.env.VITE_ULR_POKEMON;

// /**
//  * @author Carlos Morillas Delgado
//  * @Description Desarrolla una funcion ue recupere todas las cartas de pokemon de db.json utilizando async/await y almacenalas en un map para un acceso rapido por nombre

//  */

// export const buscarCartas = async () => {
//     try {
//         const response = await fetch(urlPoke);
//         if (!response.ok) {
//             throw new Error(`Error al obtener las cartas de pokemon`);
//         }
//         const data = await response.json();
//         const cartasMap = new Map();
//         data.foreach(carta => {
//             cartasMap.set(carta.name, carta)
//         });
//         return cartasMap;
//     } catch (error) {
//         console.error('Error al obtener las cartas de pokemon:', error);
//         return null;
//     }

// };

// export const deletePokemon = async (name) => {
//     try {
//         const response = await fetch(urlPoke);
//         if (!response.ok) throw new Error("Error getAllPokemons");
//         const pokemonBuscando = dataPokemons.find(
//             (pokemon) => pokemon.nombre.toLoweCase() === name.toLoweCase()
//         );
//         if (!pokemonBuscando) {
//             console.log("No encuentro el poquemon para borrar");
//             return;
//         }
//         const { id } = pokemonBuscando;
//         const responseDelete = await fetch('${urlPoke}/${id}', {
//             method: "DELETE",
//         });
//         if (!responseDelete.ok) throw new Error("Erro deletePokemon");
//         console.log("pokemon eliminado correctamente");
//     } catch (error) {
//         console.log("Error deletePokemon", error);
//     }
// };

// export const updatePokemon = async (name) => {
//     try {
//         const response = await fetch(urlPoke);
//         if (!response.ok) throw new Error("Error al obtener Pokémon");

//         const dataPokemons = await response.json();
//         const pokemonBuscando = dataPokemons.find(
//             (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
//         );

//         if (!pokemonBuscando) {
//             console.log("No se encontró el Pokémon para actualizar");
//             return;
//         }

//         const newPrice = pokemonBuscando.price + 10;
//         const updatedPokemon = { ...pokemonBuscando, price: newPrice };

//         const responseUpdate = await fetch(`${urlPoke}/${pokemonBuscando.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedPokemon),
//         });

//         if (!responseUpdate.ok) throw new Error("Error al actualizar Pokémon");
//         console.log("Pokémon actualizado correctamente");
//     } catch (error) {
//         console.log("Error al actualizar Pokémon:", error);
//     }
// };

// export const createPokemon = async (pokemon) => {
//     try {
//         const response = await fetch(urlPoke, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(pokemon),
//         });

//         if (!response.ok) throw new Error("Error al crear el Pokémon");
//         console.log("Pokémon creado correctamente");
//     } catch (error) {
//         console.log("Error al crear Pokémon:", error);
//     }
// };
