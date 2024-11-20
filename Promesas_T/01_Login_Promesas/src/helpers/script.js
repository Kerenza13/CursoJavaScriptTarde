/**
 * @author Carlos Morillas Delgado
 */
import { userLogin, usuarios } from "../data/data";

/**
 * @description Funcion que exporta la DATA de los usuarios.
 */
export const obtenerUsuarios = () => {
    return new Promise((resolve, reject) => {
        // Simulamos que tarde 2 segundos en obtener los datos de data.js
        console.log("cargando la data...")
        setTimeout(() =>
            !Array.isArray(usuarios)
                ? reject("no hay usuarios")
                : resolve(usuarios),
            3000
        );
    });
};

/**
 * @description Crear una funcion de usuarios que pase como parametro una arry de usuarios almacenado en data y 
 * tiene que crear una promesa que si no es una array o la longitud de la array es 0, entonces me muestre un error 
 * no hay usuarios, en caso contrario, me muestre el nombre y la edad
 * @returns 
 */
export const obtenerUsuarios2 = () => {
    return new Promise((resolve, reject) => {
        !Array.isArray(usuarios) || usuarios.length === 0
            ? reject(new Error("No hay usuarios"))
            : resolve(usuarios.map(user => user));
    });
};

/**
 * @description crear una promesa que permita vlidar el acceso a mi pagina eb si la respuecta es correcta y 
 * mustre bienbenido "username", en acces añadira la dia-mes-año y hora-minuto-segundo a la que acaba de entrar y 
 * un bienbenido usuario, y si la contraseña e uncorrecta dara un mensaje de error.
 * @param {*} findUser 
 * @param {*} findPassword 
 * @param {*} userLogin 
 * @returns 
 */
export const Login = (findUser, findPassword, userLogin) => {
    console.log("Validando el login...");
    return new Promise((resolve, reject) => {
        //aqui valido si la contrseña del usuario findUser es igual a la contraseña findPassword
        setTimeout(() => {
            if (userLogin[findUser] && userLogin[findUser].password === findPassword) {
                resolve({findUser, findPassword});
            } else {
                reject(new Error("Usuario o Contraseña incorrecta"));
            }
        }, 3000);
    });
};


