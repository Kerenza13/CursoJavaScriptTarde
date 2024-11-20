//imports
import { getProducts } from "./helpers/getProducts";
const urlProduct = `${import.meta.env.VITE_URL_SERVER}/productos`

/**
 * @author Carlos Morillas Delgado
 * @description Crear una funcion que le pase como parametro un array de objetos producto(crear funcion tambien que me traiga el objeto del localhost 4000) que devuelva un map de todos los productos culla clave sea nombre del producto y que almacene, precio el producto que cantidad tengo, una array con las tallas disponibles y un arra con los colores.
 * @description Crear una funcion que le pase como parametro un map segundo parametro una clave y almacene en local storage con esa clave siempre  cuando esa clave no exista ya
 */

const dataProducts = getProducts(urlProduct)
    .then((productos) => { return productos; })
    .catch((error) => { console.log("error") });



export const generatedProductMap = async (getProducts) => {
    try {
        const mapProductos = new Map();
        dataProducts.forEach(({ nombre, precio, stock, detalles }) => {
            const clave = nombre;
            const valor = {
                precio,
                stock: stock.cantidad,
                tallas: detalles["tallas disponibles"],
                colores: detalles.colores
            };
            mapProductos.set(clave, valor);
        });
        return mapProductos;
    } catch (error) {
        console.error("Error al obtener los productos", error);
    }
};




getProducts(urlProduct)
    .then(productos => {
        const mapProductos = new Map();
        productos.forEach(({ nombre, precio, stock, detalles }) => {
            const clave = nombre;
            const valor = {
                precio,
                stock: stock.cantidad,
                tallas: detalles["tallas disponibles"],
                colores: detalles.colores
            };
            mapProductos.set(clave, valor);
        });
        return mapProductos;
    })

    .catch(error => {
        console.error("Error al obtener los productos", error);
    });

// getProducts(urlProduct)
//   .then(productos => {
//     const mapProductos = new Map();
//     productos.forEach(({nombre, precio, stock ,detalles}) => {
//       const clave= nombre;
//       const valor = {
//         precio,
//         stock: stock.cantidad,
//         tallas: detalles["tallas disponibles"],
//         colores: detalles.colores
//       };
//       mapProductos.set(clave, valor);
//     });
//     return mapProductos;
//   })
//   .catch(error => {
//     console.error("Error al obtener los productos", error);
//   });