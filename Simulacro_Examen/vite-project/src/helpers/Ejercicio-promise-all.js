// const urlPoke = import.meta.env.VITE_ULR_POKEMON;

// /**
//  * @author CARLOS MORILLAS DELGADO
//  * 
//  */

// //Dado un array de nombres de pockemon, usa promise.all para obtener de cada poquemon la habilidad con la puntuacion mas alta
// const arrayPokemons = ['pikachu', 'charmander', 'squirtle', 'bulbasaur', 'mewtwo'];

// export const getPokemonPromiseAll = async (arrayPokemons) => {
//     try {
//         const promesas = arrayPokemons.map(async (nombre) => {
//             const response = await fetch(urlPoke);
//             if (!response.ok) throw new Error(`Error al obtener datos de ${nombre}`);
            
//             const pokemon = await response.json();
//             const habilidadMasAlta = pokemon.habilidades.reduce((max, habilidad) => 
//                 habilidad.puntuacion > max.puntuacion ? habilidad : max
//             ); 
//             return { nombre: pokemon.nombre, habilidad: habilidadMasAlta };
//         });
        
//         const resultados = await Promise.all(promesas);
//         console.log("Resultados de habilidades más altas:", resultados);
//         return resultados;
//     } catch (error) {
//         console.error("Error al obtener habilidades con Promise.all:", error);
//         return null;
//     }
// };

// export const getPokemonPromiseAllSetted = async (arrayPokemons) =>{
//     try {
//         const resultados = await getPokemonPromiseAll(arrayPokemons);
//         if(resultados){
//             const habilidadesSet = new Set(resultados.map(pokemon => pokemon.habilidad.nombre));
//             console.log("Habilidades únicas:", habilidadesSet);
//         }
//         return habilidadesSet;
//     } catch (error) {
//         console.error("Error al obtener habilidades únicas:", error);
//         return null;
//     }
// }