console.log('JS OK');
/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando
destructuring e template literal */

// ** Creo Un array di bici da corsa

const bicycles = [
    { nameBrand: 'sarto', weight: 5.7 },
    { nameBrand: 'rose', weight: 6.9 },
    { nameBrand: 'canyon', weight: 6.7 },
    { nameBrand: 'colnago', weight: 5.2 },
]

console.log(bicycles);


const nameArray = [];
const weightArray = [];
let min = bicycles[0]['weight'];
let indice = 0;

for (let i = 0; i < bicycles.length; i++) {
    const bicycle = bicycles[i];
    const { weight } = bicycle;
    const { nameBrand } = bicycle
    weightArray.push(weight);
    nameArray.push(nameBrand);


    if (min > bicycles[i]['weight']) {
        min = bicycles[i]['weight'];
        indice = i;
    }

}

console.log(indice);
console.log(weightArray);
console.log(nameArray);
console.log(`Il peso inferiore è: ${min}`);

console.log(nameArray[indice]);
const result1 = document.getElementById('ex-1');
result1.innerText = `La bici che pesa di meno è ${nameArray[indice]}`;

/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse 
proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.*/
// ** Funzione che mi genera dei numeri casuale
const generateRandom = () => {
    const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    return random
}

const teams = [
    { nameTeam: 'inter' },
    { nameTeam: 'juventus' },
    { nameTeam: 'milan' },
    { nameTeam: 'atalanta' },
];

const nameTeamArray = [];
// Aggiungo nuovi elementi all'array
for (let k = 0; k < teams.length; k++) {
    teams[k]['point'] = generateRandom();
    teams[k]['foluF'] = generateRandom();
    teams[k]['foluS'] = generateRandom();

    const team = teams[k];
    const { nameTeam } = team;
    nameTeamArray.push(nameTeam);

}
console.log(teams);
console.log(nameTeamArray);