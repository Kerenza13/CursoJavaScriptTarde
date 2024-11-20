/**
 * @autor Carlos MD
 * @description Funciones
 *
 */

//Imaginamos que tenemos un array de objetos, user=[{name:"pepe",role:"admin"},{name:"paco",role:"admin"},{name:"pablo",role:"user"},{name:"carlos",role:"user"}] agupar usuarios por rol

//Dada una frase, usa map para contar cuantas veces aparece cada palabra

//Dada una array de votos,votos=[{a,b,c,d}] cuenta cuantos votos tiene cada opcion


/**
 * @description Elimina los números duplicados de ambos arrays y devuelve nuevos arrays sin duplicados.
 * @param {number[]} arr1 - Array1.
 * @param {number[]} arr2 - Array2.
 * @returns {Object} Un objeto que contiene dos arrays: arr1SinDuplicados y arr2SinDuplicados.
 */
export function eliminarDuplicados(arr1, arr2) {
  const arr1SD = [...new Set(arr1)];
  const arr2SD = [...new Set(arr2)];
  return arr1SD, arr2SD;
}


/**
 * @description Dadas 2 arrays, une ambas arrays sin duplicar elementos.
 * @param {number[]} arr1 - Array 1.
 * @param {number[]} arr2 - Array 2.
 * @returns {number[]} Array 3 la cual contiene los elementos sin duplicar de array1 y 2.
 */
export function combinarArrays(arr1, arr2) {
  const combinado = [...new Set([...arr1, ...arr2])];
  return combinado;
}
