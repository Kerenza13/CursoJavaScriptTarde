export function sumar(a = 0, b = 0) {
  return a + b;
}

export const findData = (arrayDatanumber, numFind) => {
  arrayDataNumber.find((number) => number === numbFind) !== undefined
    ? true
    : false;
};

//Dada una array, crear una funcion que genere una array con el primer caracter de cada una de los elementos de la array en mayuscula
/**
 * @description Funcion que recive un array de texto y devuelve el array con la primera letra de cada palabra en mayuscula.
 * @param {array} arrayPalabras
 * @returns {array}
 */
export const selectF = (arrayPalabras = []) =>
  arrayPalabras.map((palabra) => palabra.charAt(0).toUpperCase());

//pasar or parametro los coeficientes de una ecuacion de segundo grado y que devuelva una array con las soluciones
/**
 * @description Funcion a la cual le pasas 3 valores donde a no puede ser 0 y te hace una ecuacion de segundo grado con estos.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns
 */
export const ecuacion = (a, b, c) => {
  if (a === 0 || a === undefined) {
    return "El coeficiente 'a' no puede ser 0";
  }
  const discriminante = Math.pow(b, 2) - 4 * a * c;
  if (discriminante < 0) {
    return ["No hay soluciones reales"];
  } else if (discriminante === 0) {
    return [-b / (2 * a)];
  } else {
    return [
      (-b + Math.sqrt(discriminante)) / (2 * a),
      (-b - Math.sqrt(discriminante)) / (2 * a),
    ];
  }
};

//Dado el siguiente ogbejo, obtener los estudiantes (nombre), a) Ordenados x edad de menor a mayor, b) Buscar los alumnos mayores de 20.
/**
 * @description Funcion la cual obtiene el nombre de los estudiantes ordenados de menor a mayor la cual busca a los alumnos malores de 20
 * @param {array} students
 * @returns
 */
export function findStudent(students) {
  students.sort((a, b) => a.age - b.age);
  const may20Names = [];
  for (const student of students) {
    if (student.age > 20) {
      may20Names.push(student.name);
    }
  }
  return may20Names;
}

//dada la siguiente extructura de datos obtenidas de transacciones de temu, se pide obtener ls direcciones que tengan un monto superior a 14, y calcular la media aritmetica de los montos
const transaccion = [
  { id: 1, mont: 8, direccion: "0xabc" },
  { id: 2, mont: 15, direccion: "0xdfe" },
  { id: 3, mont: 22, direccion: "0xjkl" },
  { id: 4, mont: 11, direccion: "0xmnq" },
];

//dados los siguientes bloques de un hash de bitcoin, se pide comprobar la integridad de la transaccion. Una transsaccon es correcta o no pierde su integridad si el hash de una transsaccion coincide con el prevhash de esa transaccion
const bloques = [
  { id: 1, hash: "abc123", prevhash: "null" },
  { id: 2, hash: "def456", prevhash: "abc123" },
  { id: 3, hash: "ghi789", prevhash: "def456" },
  { id: 4, hash: "jkl012", prevhash: "ghi789" },
];

// crear una funcion que le pase como parametro una array de nombres, y que le pase como segundo parametro un numero, se pide: obligatorio pasar ambos parametros, el seguno parametro deve ser un numero entre 1 y 16,para ejecutarlo generara un numero aleatorio entre 1 y 16 devolviendo el nombre del alumno hubicado en la posicion numero -1
/**
 * @description Funcion a la que le pasas una array de nombres y un numero y te asocia a la persona a la cual corresponda ese numero por orden de lista del array.
 * @param {Array<string>} nombres
 * @param {number} numero
 * @returns {string}
 */
export function obtenerAlumno(arrayNombres, numero) {
  if (
    !Array.isArray(arrayNombres) ||
    !arrayNombres.every((name) => typeof name === "string") ||
    arrayNombres.length === 0 ||
    arrayNombres === null ||
    arrayNombres === undefined
  ) {
    return "El array solo puede contener nombres y no pueden ser undefined ni null, y no debe estar vacío.";
  }
  if (
    numero === undefined ||
    numero === null ||
    typeof numero !== "number" ||
    numero < 1 ||
    numero > 16
  ) {
    return "El segundo parametro debe ser un numero entre 1 y 16 y no puede ser null o undefined.";
  }
  const numeroAleatorio = Math.floor(Math.random() * numero) + 1;
  return arrayNombres[numeroAleatorio - 1];
}

//Dado el siguiente objeto, haz una funcion que filtre aquellos servidores cullo promedio de uso sea mallor del del 75%
/**
 * @description Filtra los servidores cuyo promedio de uso sea mayor o igual al 75%
 * @param {Array} servidores
 * @returns {Array}
 */
export function filtroServidor(servidores) {
  return servidores.filter((servidor) => {
    const usoProm =
      servidor.uso.reduce((suma, uso) => suma + uso, 0) / servidor.uso.length;
    return usoProm >= 75;
  });
}

//dada una array de clientes, haz una funcion que genere un resumen total de facturacion para cada cliente
/**
 * @description Genera un resumen total de facturación para cada cliente
 * @param {Array} facturas - Arreglo de objetos que representan a los clientes y sus facturas
 * @returns {Object} - Objeto con el nombre del cliente como clave y el total de facturación como valor
 */
export function totalFac(facturas){
const genFacTot=(arrayFac)=>{
  const objResumTot = arrayFac.reduce((acc,cliente)=>{
    if(acc[cliente.nombre]===cliente.nombre);
  })
}

}


const facturas =[
  {nombre:"luis", total:300},
  {nombre:"Sara", total:200},
  {nombre:"Sara", total:100},
  {nombre:"luis", total:100},
  {nombre:"luis", total:300}
]