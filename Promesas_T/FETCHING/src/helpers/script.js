//imports
const urlAPI = import.meta.env.VITE_API_URL;
const imageUrl = import.meta.env.VITE_IMAGE_URL;
const infoUrl = import.meta.env.VITE_INFO_URL;


/**
 * @description Funcion que hace una peticion auna API y devuelve una promesa data
 * @returns { Promise<array> } Devuelve una promesa que es una array de datos
 */
export const fetchingData = () => {
    return fetch(urlAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la peticion");
            }
            return response.json();
        }) //Devuelve una promesa y pasamos la data
        .catch((error) => console.error(error));
};


export const fetchingDataAsync = async () => {
    try {
        const response = await fetch(urlAPI)
        if (!response.ok) {
            throw new Error("Error en la peticion");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error en la peticion async");
    }
};

const urlAPIStarwars = import.meta.env.VITE_API_URL_STARWARS;
// https://swspi.dev/api/people/?page=1
// https://starwars-visualguide.com/assets/img/characters/1.jpg
// crear una funcion llamada fetching starwars promis y fetching starwars async, que le pase como parametro la url de starwars y me devuelva nombre del personaje, altura y la url de la imagen del personaje en una tabla, ten en cuenta que los enlaces van en un archivo .env
export const fetchingStarwarsPromis = () => {

}


export async function fetchingStarwarsAsynnc() {
    try {
        //array que guarde toda la data de las distintas paginas
        const allCharacters = [];
        let currentPage = 1;
        let hasNextPage = true;
        //Recorremos nuestra API obteniendo las ?page=numero mientras hasnextpage sea true, cuando sea null, se para
        while (hasNextPage) {
            const response = await fetch(`${infoUrl}?page=${currentPage}`);
            if (!response.ok) {
                throw new Error("Error Fetching Data");
            }
            const data = await response.json();
            //añadimos la data.result al array de todos los personajes 
            allCharacters = allCharacters.concat(data.results);
            // allCharacters=[...allCharacters,...data.results];
            // allCharacters.push(...data.results);
            currentPage++;
            hasNextPage = data.next !== null;
        }
        console.log(allCharacters);
        localStorage.setItem("allCharacters", JSON.stringify(allCharacters));

    } catch (error) {
        throw new Error("Error Fetching Data", error);
    }

}

