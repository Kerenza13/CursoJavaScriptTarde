/**
 * @author Carlos Morillas Delgado
 * 
 */


export const getProducts = async (urlProduct) => {
    try {
        const response = await fetch(urlProduct);
        if (!response.ok) {
            throw new Error(`Error al obtener los productos`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return null;
    }
}