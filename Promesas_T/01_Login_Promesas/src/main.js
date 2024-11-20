import { obtenerUsuarios, obtenerUsuarios2, Login } from "./helpers/script";
import { usuarios, userLogin } from "./data/data";

// obtenerUsuarios()
//     .then((users) => {
//         users.forEach(user => {
//             console.log(`${user.nombre} ---> ${user.edad}`);
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// obtenerUsuarios2()
//     .then((users) => {
//         users.forEach(user => {
//             console.log(`${user.nombre} ---> ${user.edad}`);
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     }); 

Login("username1", "1234", userLogin)
.then(({ findUser, findPassword }) => {console.log(`Bienvenido ${findUser} con contraseña: ${findPassword}`);})
.catch((error) => {console.error(error);});
