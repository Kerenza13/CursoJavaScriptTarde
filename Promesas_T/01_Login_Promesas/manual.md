# Manual de Promesas

## 1. Estado de las Promesas

- **Pendiente (Pending)**: Estado inicial; la promesa no está ni rechazada ni cumplida.
- **Cumplida (Fulfilled)**: La acción se completó correctamente.
- **Rechazada (Rejected)**: La acción fue rechazada.

## 2. Tipos de Promesas

### a) Creación de Promesas

- **Creación de la promesa**:

```javascript
const miPromesa = new Promise((resolve, reject) => {
    // Aquí va el código asíncrono
    if (/* La condición se resuelve correctamente */) {
        resolve(valor); // Resuelve la promesa correctamente y devuelve el valor
    } else {
        reject(error); // Rechaza la promesa y devuelve el error
    }
});
```
- **Consumo de Promesas**:

```javascript
miPromesa
    .then(valor =>{
        // Codigo si se resuelve correctamente
            })
    .catch(error=>{
        // Codigo si se rechaza la promesa generando un error
            })
```