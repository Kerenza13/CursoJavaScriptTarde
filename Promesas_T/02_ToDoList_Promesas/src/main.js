/**
 * @autor Carlos Morillas Delgado
 */
import { manejarTarea } from './helpers/script.js';


// Inicializar localStorage (opcional si ya existe)
localStorage.setItem(claveTareas, JSON.stringify(["Comprar leche", "Comprar huevos"]));
manejarTarea(objetoTarea, claveTareas)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));