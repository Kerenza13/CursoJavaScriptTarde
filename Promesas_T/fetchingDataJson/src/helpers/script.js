/**
 * @author Carlos Morillas Delgado
 */

//Crear una array de 20 numeros aleatorios del 1 al 10 ambos incluidios, dicha array deve ser creada en el main mientras que en helers/script.js la funcion de num aleatorios es atomica y en main simplemente se generan 20 numeros, por lo que se repite dica funcion 20 veces, seguidamente crear una funcion fetchingDataJson(URL, id) que le pae com parametro una url y me genere un objeto que tenga le username, la city, la company.name del usuario de jsonplaceholder cullo id coincida, probar la array de numeros aleatorios y mostrar una tarjeta que tenga el username, el city y el company como si fuera una targeta de presentacion.


export const getRandomNumber = (min, max) => {//+
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const fetchingDataJson= async(url, id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const user = await response.json();
      return {
        username: user.username,
        city: user.address.city,
        company: user.company.name,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }