console.log("SALUT metodelor");

// O metoda este o functie atasata de o alta variabila constanta sau alt tip de data

/* 
ARRAY METHODS 

includes: O metoda a unui array care ne spune daca un array include sau nu un element, cu raspuns sub forma de boolean


*/

// Exemplu simplu
console.log([1, 2, 3, 4].includes(2));

// Exemplu cu produse
const legume = ['Rosie', 'Castravete', 'Pastarnac', 'Morcov', 'Telina', 'Cartof', 'Patrunjel'];
const meat = ['Sausage', 'Littles', 'Salami', 'Loin', 'Wings']

const produs1 = 'Rosie';
const produs2 = 'mar';
const thirdProduct = 'Loin';

const estePrimulProdusOLeguma = legume.includes(produs1);
const esteAlDoileaProdusOLeguma = legume.includes(produs2);

console.log(`Este produsul 1 leguma? ${estePrimulProdusOLeguma}`)
console.log(`Este produsul 2 leguma? ${esteAlDoileaProdusOLeguma}`)

const isTheThirdProductMeat = meat.includes('Loin');
console.log("3 product meat?" + isTheThirdProductMeat);

/* FOREACH
    FOREACH este o metoda a unui array care parcurge fiecare element si ruleaza o functie (bucata de cod) 
        pentru fiecare element, pasandu-i elementul curent
*/
console.log('~~~~~~~~~~~~~~~~FOREACH~~~~~~~~~~~~~~~~~')

const simplifiedCart = ['Rosie', 'Salami', 'Patrunjel', 'Wings'];

// VERSIUNEA FOR
for (i = 0; i < simplifiedCart.length; i++) {
    const elementulCurent = simplifiedCart[i];
    console.log(`Parcurg ${elementulCurent}`)
}

// VERSIUNEA forEach
simplifiedCart.forEach(function (elementulCurent) { // This is an anonymous function
    console.log(`Parcurg ${elementulCurent}`)
})

/// ALTERNATIV, FUNCTION STOCAT EXPLICIT
function proceseazaProdusul(produs) { // This is a named function
    console.log(`Parcurg ${produs}`)
}

simplifiedCart.forEach(proceseazaProdusul);
 // Foreach ruleaza functia peste array si ii injecteaza elementul curent drept paramentru
