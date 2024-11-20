import { numAleatorios } from "./helpers/script";
import { fetchingDataJson } from "./helpers/script";


//Crear una array de 20 numeros aleatorios del 1 al 10 ambos incluidios, dicha array deve ser creada en el main mientras que en helers/script.js la funcion de num aleatorios es atomica y en main simplemente se generan 20 numeros, por lo que se repite dica funcion 20 veces, seguidamente crear una funcion fetchingDataJson(URL, id) que le pae com parametro una url y me genere un objeto que tenga le username, la city, la company.name del usuario de jsonplaceholder cullo id coincida, probar la array de numeros aleatorios y mostrar una tarjeta que tenga el username, el city y el company como si fuera una targeta de presentacion.
//Usamos la funcion de numeros aleatiorios para generar un array de 20 numeros

const numerosAleatorios = numAleatorios(20);

//usar fetching data json

fetchingDataJson('https://jsonplaceholder.typicode.com/users', numerosAleatorios[0])
   .then(data => console.log(data))
   .catch(error => console.error(error));

