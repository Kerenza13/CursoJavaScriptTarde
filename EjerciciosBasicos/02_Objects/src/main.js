/**
 * @autor Carlos MD
 * @description Ejerecicios basicos Objetos
 *
 */

/**
 * Dado un objeto que representa un producto, usa Object.keys para obtener
 * las claves del objeto y Object.values para obtener sus valores.
 */
const producto = { nombre: "Laptop", precio: 1000, stock: 5 };
const claves = Object
    .keys(producto);
const valores = Object
    .values(producto);
console.log("Ej8 Claves:", claves);
console.log("Ej8 Valores:", valores);

/**
 * Dado un objeto que representa un coche, usa Object.entries
 * para convertirlo en un array de pares clave-valor.
 */
const coche = { marca: "Toyota ", modelo: "Corolla ", año: 2020 };
const claveValor = Object
    .entries(coche);
console.log("Ej9 " + claveValor);

/**
 * Dado un objeto de configuración, usa Object.assign
 * para crear una copia del objeto con una propiedad adicional.
 */
const configuracion = { tema: "oscuro", idioma: "español" };
const copiaPropAdd = Object
    .assign({}, configuracion, { calidad: "1080" });
console.log("Ej10 ", copiaPropAdd);

/**
 * Crea un objeto que combine dos objetos dados usando el spread operator (...).
 */
const usuario = { nombre: "Ana", edad: 30 };
const detalles = { ciudad: "Madrid", ocupacion: "Ingeniera" };
const objComb = { ...usuario, ...detalles };
console.log("Ej11 ", objComb);

/**
 * Dado un objeto con varias propiedades, usa delete para eliminar una propiedad específica.
 */
const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
delete libro.titulo;
console.log("Ej12 ", libro);

/**
 * Dado un objeto que representa una cuenta de usuario, usa hasOwnProperty para comprobar si tiene una propiedad específica.
 */
const cuenta = { usuario: "Juan", email: "juan@mail.com" };
const propiedadEspec = cuenta
    .hasOwnProperty("usuario");
console.log("Ej13:", propiedadEspec);

/**
 * Dado un objeto que representa un pedido, convierte todas sus claves a mayúsculas utilizando Object.keys y reduce.
 */
const pedido = { producto: "Silla", cantidad: 4, precio: 50 };
const clavesMayus = Object
    .keys(pedido)
        .reduce((acc, clave) => {acc[clave
            .toUpperCase()] = pedido[clave]; return acc}, {});
console.log("Ej14 ", clavesMayus);

/**
 * Dado un array de objetos que representan estudiantes, usa filter y map para obtener los nombres de
 * los estudiantes que tienen una calificación mayor o igual a 85. Métodos sugeridos: filter, map
 */
const estudiantes = [
  { nombre: "Carlos", calificacion: 80 },
  { nombre: "Ana", calificacion: 90 },
  { nombre: "Luis", calificacion: 88 },
  { nombre: "María", calificacion: 70 },
];
const calificacionMayor = estudiantes
  .filter((estudiante) => estudiante.calificacion >= 85)
  .map((estudianteFiltrado) => estudianteFiltrado.nombre);
console.log("Ej15 ", calificacionMayor);

/**
 * Dado un array de productos, usa reduce para calcular el costo total de todos los productos
 * multiplicando el precio por la cantidad. Métodos sugeridos: reduce
 */
const productos = [
  { nombre: "Teclado", precio: 25, cantidad: 2 },
  { nombre: "Mouse", precio: 15, cantidad: 3 },
  { nombre: "Monitor", precio: 200, cantidad: 1 },
];

/**
 * Dado un array de números y un objeto que clasifique esos números en pares e impares, usa forEach
 * para llenar el objeto con los números correspondientes. Métodos sugeridos: forEach
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const clasificacion = { pares: [], impares: [] };
numeros.forEach((numero) => {
  if (numero % 2 === 0) {
    clasificacion.pares.push(numero);
  } else {
    clasificacion.impares.push(numero);
  }
});
console.log("Ej17 ", clasificacion);


/**
 * 
 */