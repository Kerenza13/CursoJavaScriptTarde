import { fetchingData } from "./helpers/script";
import { fetchingDataAsync } from "./helpers/script";
import { fetchingStarwarsAsynnc } from "./helpers/script";
import { fetchingStarwarsPromis } from "./helpers/script";

// fetchingData()
//     .then((users) => { 
//         users.forEach(({username, email}) => { 
//             console.log("Nombre: " , username); 
//             console.log("Email: " , email); 
//             console.table({username, email});
//     });
// }) 
//     .catch ((error) => {console.error(error);});

// fetchingDataAsync()
//     .then((users) => {
//         users.forEach(({ username, city }) => {
//             console.log("Nombre: ", username);
//             console.log("Ciudad: ", city);
//             console.table({ username, city });
//         });
//     })
//     .catch((error) => { console.error(error); });

document
    .getElementById("fetch-characters-assync")
    .addEventListener("click", fetchingDataStarwarsAsynnc);
