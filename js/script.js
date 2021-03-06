// ! Funzione per stampare in pagina un array di oggetti
function printInPage(genericArray, key) {
    const newArray = [];
    for (let i = 0; i < genericArray.length; i++) {
        item = genericArray[i]
        newArray.push(item[key]);
    }
    return newArray;
}
// !--------------------------------
/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando
destructuring e template literal */

// ** Creo Un array di bici da corsa

const bicycles = [
    { nameBrand: 'Sarto', weight: 5.7 },
    { nameBrand: 'Rose', weight: 6.9 },
    { nameBrand: 'Canyon', weight: 6.7 },
    { nameBrand: 'Colnago', weight: 5.2 },
]

// ** Assumo che la bici più leggera sia la prima
let lightest = bicycles[0];

for (let i = 0; i < bicycles.length; i++) {
    bycicle = bicycles[i];
    if (bycicle.weight < lightest.weight) {
        lightest = bycicle;
    }
}

console.log(lightest);
// ** Recuper Elemento in pagina 
const resultOne = document.getElementById('ex-1');
resultOne.innerHTML = `La bici da corsa che pesa di meno è la <strong>${lightest.nameBrand}</strong>.`;

/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse 
proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.*/
// ** Funzione che mi genera dei numeri casuale
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const teams = [
    { nameTeam: 'inter' },
    { nameTeam: 'juventus' },
    { nameTeam: 'milan' },
    { nameTeam: 'atalanta' },
];

// Aggiungo nuovi elementi all'array
const nameTeamArray = [];
for (let k = 0; k < teams.length; k++) {
    const team = teams[k];
    team['point'] = generateRandom(1, 90);
    team['foulsS'] = generateRandom(1, 90);

    const { nameTeam, foulsS } = team
    nameTeamArray.push({ nameTeam, foulsS });
}
console.log(teams);
console.log(nameTeamArray);

function printInPage(genericArray, key) {
    const newArray = [];
    for (let i = 0; i < genericArray.length; i++) {
        item = genericArray[i]
        newArray.push(item[key]);
    }
    return newArray;
}
// !
// ** Recupero elemento in pagina
const resultTwo = document.getElementById('ex-2');
resultTwo.innerHTML = `Nomi Squadre:<br>
[<strong>${printInPage(teams, 'nameTeam')}</strong>]<br>
punti:<strong>${printInPage(teams, 'point')}</strong><br>
falli subiti <strong>${printInPage(teams, 'foulsS')}</strong>`;




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

// **Recupero elemento in pagina
const resultThree = document.getElementById('ex-3');

// **Costruisco il nuovo array
const newArray = getSomeItems(numbers, 5, 10);

// **Stampo in console
console.log(newArray);

// ** Stampo in pagina
resultThree.innerHTML = `Dato l'array numbers:<br>
<strong> [${numbers}]</strong>.<br>
Stampo un nuovo array con elementi di numbers posizionati tra a e b:<br>
<strong>[${newArray}]<strong>, con a < b. `;


/*SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id,
nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe(stringhe) 
con il loro nome in maiuscolo
ES(marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un 
totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un 
totale di voti superiore a 70 e id superiore a 120 */

// ** Creiamo un gerico array di oggetti
const students = [
    { name: 'Isaac Newton', id: 80, grades: 88 },
    { name: 'Albert Einstein', id: 90, grades: 89 },
    { name: 'galileo galilei', id: 100, grades: 40 },
    { name: 'charles Darwin', id: 150, grades: 50 },
    { name: 'Stephen Hawking', id: 121, grades: 90 },
    { name: 'Alessandro volta', id: 132, grades: 45 },
];

// ** Creo un array contenente il nome delle persone in maiuscolo
const license = students.map((student) => {
    return student.name.charAt(0).toUpperCase() + student.name.substring(1);
});
console.log(license);


// ** Creo un array contenente gli studenti con grades > 70, filtrando students
const highGrades = students.filter(item => (item.grades > 70));
console.log(highGrades);

// ** Creo un array che contiene gli studenti che hanno i voti
// maggiori di 70 e id maggiori di 120, filtrando l'array highGrades

const highGradesAndId = highGrades.filter(item => (item.id > 120));
console.log(highGradesAndId);

// ** Creo un array contenente la prima lettera della singola parola in maiuscolo
const license = students.map((student) => {
    return student.name.charAt(0).toUpperCase();
});

// ** Richiamo elemento in pagina
const resultFour = document.getElementById('ex-4');
// ** Stampo elemento in pagina grazie alla funzione printInPage
resultFour.innerHTML = `Array con il nome degli studenti in maiuscolo:<br>
<strong>[${license}]</strong>.<br>
Gli studenti con voto maggiore di 70 sono:<br>
<strong>${printInPage(highGrades, 'name')}</strong>. <br>
Lo studente con voto maggiore di 70 e id maggiore di 120 è:<br>
<strong>${printInPage(highGradesAndId, 'name')}</strong>.`;