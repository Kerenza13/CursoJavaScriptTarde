import { sumar } from "/helpers/Script.js";
import { selectF } from "/helpers/Script.js";
import { ecuacion } from "/helpers/Script.js";
import { findStudent } from "/helpers/script.js";
import { obtenerAlumno } from "/helpers/script.js";
import { filtroServidor } from "/helpers/script.js";


// Ej1
console.log("Hola Mundo");
console.log(sumar(1, 2));


//Ej2
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
console.log(selectF(meses));

//Ej3
const a = 41;
const b = 23;
const c = -42;
console.log(ecuacion(a, b, c));


//Ej4
const students = [
    { name: "carlos", age: 21 },
    { name: "santi", age: 17 },
    { name: "migue", age: 11 },
    { name: "adri", age: 43 },];
  console.log(findStudent(students));

//Ej7
let arrayNombres = [];
let numero =5;
const resultado = obtenerAlumno(arrayNombres, numero);
console.log(resultado);

//Ej8
const servidores = [
  {nombre:"servidor 1", uso:[60,80,90]},
  {nombre:"servidor 2", uso:[50,50,50]},
  {nombre:"servidor 3", uso:[70,80,90]},
  {nombre:"servidor 4", uso:[60,40,30]}
];

const servidoresFiltrados = filtroServidor(servidores);
console.log(servidoresFiltrados);