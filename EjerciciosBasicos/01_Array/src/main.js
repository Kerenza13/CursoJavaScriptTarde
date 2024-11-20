/**
 * @autor Carlos MD
 * @description Ejerecicios basicos Arrays
 *
 */


/**
 * Dada una array de numeros, utiliza filter y map para obtener los numeros pares y elevarlos al cuadrado.
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros
  .filter((num) => { return num % 2 === 0})
  .map((numerosPares) => {return Math.pow(numerosPares, 2)});
console.log("Ej1 los numeros pares elevados al cuadrado de " + numeros + " son " + numerosPares);


/**
 * Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios entre ellos. 
 */
const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];
const concatPalabras = palabras
    .reduce((acc, palabra) => {return `${acc} ${palabra}`;}, ""); //acc + (acc ? " " : "") + palabra
console.log("Ej2 " + concatPalabras);


/**
 * Dado un array de números, usa some para verificar si existe algún número 
 * mayor a 100 y every para comprobar si todos los números son positivos.
 */
const numeros3 = [1, 50, 75, 99];
console.log("Ej3 " + `Hay algun numero en ${numeros3} mayor que 100? --> ${numeros3
    .some((num3) => num3 > 100)}`);
console.log("Ej3 " + `Hay algun numero en ${numeros3} positivo? --> ${numeros3
    .some((num3) => num3 > 0)}`);


/**
 * Dado un array de números desordenados, usa sort para ordenarlos de mayor a menor.
 */
const numeros4 = [5, 1, 8, 3, 10, 2];
const numerosOrdenados = numeros4
    .sort((a, b) => b - a);
console.log("Ej4 " + numeros4 + " ordenado es " + numerosOrdenados);

/**
 * Usa el método find para obtener el primer número divisible por 3 de un array, y findIndex para obtener su índice.
 */
const numeros5 = [4, 5, 9, 12, 7];
const numeroDivisible = numeros5
    .find((num5) => {return num5 %3 === 0});
console.log("Ej5  El primer numero divisible por 3 de " + numeros5 + " es " + numeroDivisible);


/**
 * Dado un array de números, usa forEach para sumar todos los números.
 */
const numeros6 = [2, 4, 6, 8];
let totalSuma = 0;
numeros6.forEach((num6) => {totalSuma += num6;});
console.log("Ej6 " + totalSuma);


/**
 * Dado un array de números, usa slice para obtener los primeros 3 números y splice para eliminar los dos últimos elementos del array original.
 */
const numeros7 = [10, 20, 30, 40, 50, 60];
console.log("Ej7 " + `Los tres primeros numeros en ${numeros7} son --> ${numeros7.slice(0, 3)}`);
console.log("Ej7 " + `Los dos últimos números para eliminar en ${numeros7} son --> ${numeros7.splice(-2)}`);

