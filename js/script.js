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