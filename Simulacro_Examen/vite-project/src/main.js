//imports
import { generatedProductMap } from "./helpers/Ej2";
import { buscarCartas } from "./helpers/Ejercicio1";
import { deletePokemon } from "./helpers/Ejercicio1";
import { updatePokemon } from "./helpers/Ejercicio1";
import { createPokemon } from "./helpers/Ejercicio1";
import { getProducts } from "./helpers/getProducts";
/**
 * @author Carlos Morillas Delgado
 * @description
 */


getProducts(urlProduct)
    .then(productos)
    .catch((error) => { console.error("Error al obtener productos:", error) })



// const init = async () => {
//     // Ej 1
//     const ejercicio1 = await buscarCartas();
//     console.log("Ejercicio1-->", ejercicio1);


//     await deletePokemon("Bulbasaur");

//     await updatePokemon(1);

//     const nuevoPokemon = {
//         name: "Charmander",
//         type: "Fuego",
//         price: 50,
//     };
//     await createPokemon(nuevoPokemon);
// };

// init();