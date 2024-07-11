// Array Push
// se aplica la fel ca toate array helper functions/method pe un array
var arrayExemplu = [0, 1, 2]; // avem length 3

console.log(arrayExemplu); // avem length 3

arrayExemplu.push(3); //  length devine 4

console.log(arrayExemplu); // avem length 4

arrayExemplu[arrayExemplu.length] = 4; // length 4 inseamna ca avem pozitiile 0,1,2,3.
//   Daca adaugam pozitia 4, se mareste array-ul

console.log(arrayExemplu); // avem length 5

// Array Pop
// se aplica la fel ca toate array helper functions/method pe un array
// Rezultat: Elimina ultimul element din array
console.log("Exemplu pop INCEPE AICI")
const rezultatInUrmaLuiPop = arrayExemplu.pop();

console.log("Am scos ", rezultatInUrmaLuiPop)
console.log("Array-ul devine ", arrayExemplu)

// Alternativa pop
arrayExemplu.length = arrayExemplu.length - 1;
console.log("Array-ul devine ", arrayExemplu);

// ARRAY UNSHIFT: Adauga un element la inceputul array-ului
console.log("Exemplu UNSHIFT INCEPE AICI")
arrayExemplu.unshift(-1);
console.log("Array-ul devine ", arrayExemplu);

function pseudoUnshift(arrayCareTrebuieModificat, elementCareTrebuieAdaugat) {
    const arrayRezultat = [elementCareTrebuieAdaugat];

    for (var i = 0; i < arrayCareTrebuieModificat.length; i++) {
        const elementulCurent = arrayCareTrebuieModificat[i];
        arrayRezultat.push(elementulCurent);
    }

    return arrayRezultat;
}

console.log("O pseudo modificare tip unshift")
console.log(pseudoUnshift(arrayExemplu, -2)); // atentie, aici este un rezultat nou, nu se modifica arrayExemplu

// ARRAY SHIFT
// Elimina primul element din array
console.log("Exemplu UNSHIFT INCEPE AICI")
console.log("Array-ul este acum ", arrayExemplu);
arrayExemplu.shift();
console.log("Array-ul devine ", arrayExemplu);

function pseudoShift(arrayCareTrebuieModificat) {
    for (var i = 0; i < arrayCareTrebuieModificat.length; i++) {
        arrayCareTrebuieModificat[i] = arrayCareTrebuieModificat[i + 1]
    }
    arrayCareTrebuieModificat.length = arrayCareTrebuieModificat.length - 1;
}

console.log("PSEUDO UNSHIFT")
pseudoShift(arrayExemplu)
console.log("Array-ul devine ", arrayExemplu);

// For Each , for each element in a list/array, do the following
// INPUT: O functie

// Se da un arrayExemplu, mergeti prin acest array si printati "DA" sau "NU" daca numarul curent este par

function printeazaDacaNumarulEstePar(nr) {
    if (nr % 2 == 0) {
        console.log("DA")
    } else {
        console.log("NU")
    }
}

arrayExemplu.push(3, 4, 5);
array2 = [123, 44, 5434, 53453];

arrayExemplu.forEach(printeazaDacaNumarulEstePar)
console.log("Array-ul a ramas", arrayExemplu)
array2.forEach(printeazaDacaNumarulEstePar)

console.log("~~~")

for (var i = 0; i < array2.length; i++) {
    printeazaDacaNumarulEstePar(array2[i])
}

// Map 
// For each element of an array, we map the result of a function into a new array
// INPUT: O functie

console.log("EXEMPLU MAP");

function calculeazaPatratul(nr) {
    return nr ** 2
}
console.log("patratele sunt ", arrayExemplu.map(calculeazaPatratul))

console.log("arrayExemplu este", arrayExemplu)