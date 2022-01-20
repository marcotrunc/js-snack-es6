console.log('JS OK');
/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando
destructuring e template literal */

// ** Creo Un array di bici da corsa

const bicycles = [
    { nameBrand: 'canyon', weight: 6.7 },
    { nameBrand: 'rose', weight: 6.9 },
    { nameBrand: 'colnago', weight: 5.2 },
    { nameBrand: 'sarto', weight: 5.7 },
]

console.log(bicycles);


const weightArray = [];
for (let i = 0; i < bicycles.length; i++) {
    const bicycle = bicycles[i];
    const { weight } = bicycle;
    weightArray.push(weight)
}
console.log(weightArray);


let result = 0;
for (let j = 1; j < weightArray.length; j++) {
    if (weightArray[j - 1] < weightArray[j]) {
        result = weightArray[j - 1];
    } else {
        result = weightArray[j];
    }
}
console.log(`Il peso inferiore è:${result}`);