// console.log('JS OK');
// /*Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando
// destructuring e template literal */

// // ** Creo Un array di bici da corsa

// const bicycles = [
//     { nameBrand: 'Sarto', weight: 5.7 },
//     { nameBrand: 'Rose', weight: 6.9 },
//     { nameBrand: 'Canyon', weight: 6.7 },
//     { nameBrand: 'Colnago', weight: 5.2 },
// ]

// console.log(bicycles);

// // ** Creo due array, il primo che contiene i nomi e il secondo il peso
// const nameArray = [];
// const weightArray = [];
// let min = bicycles[0]['weight'];
// // ** Indice che mi sarà utile per collegare i due array
// let indice = 0;

// for (let i = 0; i < bicycles.length; i++) {
//     const bicycle = bicycles[i];
//     const { weight } = bicycle;
//     const { nameBrand } = bicycle
//     weightArray.push(weight);
//     nameArray.push(nameBrand);


//     if (min > bicycle['weight']) {
//         min = bicycle['weight'];
//         indice = i;
//     }

// }

// console.log(indice);
// console.log(weightArray);
// console.log(nameArray);
// console.log(`Il peso inferiore è: ${min}`);

// console.log(nameArray[indice]);
// const result1 = document.getElementById('ex-1');
// result1.innerHTML = `La bici che pesa di meno è <strong> ${nameArray[indice]} </strong>`;

// /*Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse 
// proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.*/
// // ** Funzione che mi genera dei numeri casuale
// const generateRandom = (min, max) => {
//     const random = Math.floor(Math.random() * (max - min + 1)) + min;
//     return random
// }

// const teams = [
//     { nameTeam: 'inter' },
//     { nameTeam: 'juventus' },
//     { nameTeam: 'milan' },
//     { nameTeam: 'atalanta' },
// ];

// const nameTeamArray = [];
// // Aggiungo nuovi elementi all'array
// for (let k = 0; k < teams.length; k++) {
//     const team = teams[k];
//     team['Point'] = generateRandom(1, 90);
//     team['FoulsF'] = generateRandom(1, 90);
//     team['FoulsS'] = generateRandom(1, 90);

//     const { nameTeam, FoulsS } = team;
//     nameTeamArray.push({ nameTeam, FoulsS });

// }
// console.log(teams);
// console.log(nameTeamArray);



// let message = '';
// for (let i = 0; i < teams.length; i++) {
//     const team = teams[i];
//     for (let key in team) {
//         message += `<strong> ${key}:</strong > ${team[key]} <br>`;
//         console.log(message)
//     }
// }
// const result2 = document.getElementById('ex-2');
// result2.innerHTML = `<ul>
//         <li>L'array contenente le informazioni delle squadre è:<br> ${message}</li>
//         <li>L'array contenente i nomi delle squadre è: <strong>${nameTeamArray}</strong>.</li>
//     </ul>`;

/*SNACK 3
Scrivere una funzione che accetti tre argomenti, 
un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori 
che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe. */

// ** Costruisco un generico array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// **Funzione classica

// const getSomeItems = ((genericArray, a, b) => {
//     const newArray = [];
//     for (let i = a; i < b; i++) {
//         item = genericArray[i];
//         newArray.push(item);
//     }
//     return newArray
// });
// **Funzione con i nuovi metodi
const getSomeItems = ((genericArray, a, b) => {
    const newArray = genericArray.filter((item, i) => {
        return (i > a && i < b) ? true : false;
    });
    return newArray
});
const newArray = getSomeItems(numbers, 5, 10);
console.log(newArray);