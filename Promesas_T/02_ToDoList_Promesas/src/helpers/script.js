/**
 * @author Carlos Morillas Delgado
 */


/**
 * @description Crear un to do list que ejemplifique una tarea sincrona al guardar en local storage las tareas, 
 * usando promesas. crear una funcion que pase por parametro una tarea y la almacene dentro del local storage en 
 * la clave tareas, nombre. Si la clave no existe mostrar mensaje de error. crear otra funcion asincrona que le pase 
 * como parametro el nombre de la tarea, y la clave donde se guarda la tarea en el localstorage. si la tarea no existe la 
 * guarda en el local storage, si la tarea si existe m pregunta si quiero completa(borrandola), si pongo si la completa, 
 * si pongo no, no la borra. Cada vez que añadas una tarea o completemos una tarea, s emostrara una lista de las existentes.
 * @param {*} nombreTarea 
 * @param {*} clave 
 * @returns 
 */
export const manejarTarea = (objetoTarea, clave) => {
    return new Promise((resolve, reject) => {
        if (!objetoTarea || !objetoTarea.nombre || !objetoTarea.descripcion) {
            reject("Error: El objeto de tarea debe tener valores no vacíos.");
            return;
        }
        const tareasExistentes = JSON.parse(localStorage.getItem(clave)) || [];
        if (!localStorage.getItem(clave)) {
            reject(`Error: La clave '${clave}' no existe en localStorage`);
            return;
        }
        const tareaIndex = tareasExistentes.findIndex(tarea => tarea.nombre === objetoTarea.nombre);
        if (tareaIndex === -1) {
            tareasExistentes.push(objetoTarea);
            localStorage.setItem(clave, JSON.stringify(tareasExistentes));
            resolve(`Tarea '${objetoTarea.nombre}' agregada correctamente`);
        } else {
            const completar = confirm(`La tarea '${objetoTarea.nombre}' ya existe. ¿Quieres completarla (borrarla)?`);
            if (completar) {
                tareasExistentes.splice(tareaIndex, 1);
                localStorage.setItem(clave, JSON.stringify(tareasExistentes));
                resolve(`Tarea '${objetoTarea.nombre}' completada y eliminada`);
            } else {
                resolve(`La tarea '${objetoTarea.nombre}' no fue completada`);
            }
        }
        mostrarTareas(clave);
    });
};

const mostrarTareas = (clave) => {
    const tareasExistentes = JSON.parse(localStorage.getItem(clave)) || [];
    console.log("Lista de tareas actuales:");
    tareasExistentes.forEach(tarea => console.log(tarea.nombre));
};