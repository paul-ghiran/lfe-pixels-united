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
const arrayPatrate = arrayExemplu.map(calculeazaPatratul)
console.log("patratele sunt ", arrayPatrate)

console.log("arrayExemplu este", arrayExemplu)

// FILTER 
// We filter the items from an array, based on a condition evaluated by a function
console.warn("EXEMPLU FILTER");

function verificaDacaNumarulEsteImpar(numar) {
    return numar % 2 == 1;
}
const numereleImpare = arrayExemplu.filter(verificaDacaNumarulEsteImpar);

console.log("Numerele impare sunt", numereleImpare);
function filtreazaDoarNumereImpare(arrayDeFiltrat) {
    const arrayRezultat = [];

    for (var i = 0; i < arrayDeFiltrat.length; i++) {
        if (arrayDeFiltrat[i] % 2 == 1) {
            arrayRezultat.push(arrayDeFiltrat[i])
        }
    }

    return arrayRezultat;
}
const numereleImpare2 = filtreazaDoarNumereImpare(arrayExemplu);

console.log("Numerele impare2 sunt", numereleImpare2);

// Includes 
// Input: Un element care se cauta in array
// Returneaza true / false daca elementul este gasit in array
console.log("Inceput exemplu includes")
console.log("arrayExemplu este", arrayExemplu)

console.log("arrayExemplu include pe 3", arrayExemplu.includes(3));
console.log("arrayExemplu include pe 6", arrayExemplu.includes(6));

function existaElementul(arrayDeParcurs, elementDeCautat) {
    for (i = 0; i < arrayDeParcurs.length; i++) {
        if (arrayDeParcurs[i] == elementDeCautat) {
            return true
        }
    }
    return false;
}
console.log("arrayExemplu include pe 4", existaElementul(arrayExemplu, 4));
console.log("arrayExemplu include pe 7", existaElementul(arrayExemplu, 7));

// IndexOf 
// Input: Un element care se cauta in array
// Returneaza pozitia elementului sau -1 daca nu se gaseste
console.log("Inceput exemplu indexOf")
console.log("arrayExemplu este", arrayExemplu)

console.log("arrayExemplu il include pe 3 pe pozitia", arrayExemplu.indexOf(3));
console.log("arrayExemplu il include(?) pe 6 pe pozitia", arrayExemplu.indexOf(6));

function gasestePozitiaElementului(arrayDeParcurs, elementDeCautat) {
    for (i = 0; i < arrayDeParcurs.length; i++) {
        if (arrayDeParcurs[i] == elementDeCautat) {
            return i
        }
    }
    return -1;
}
console.log("arrayExemplu il include(?) pe 4 pe pozitia", gasestePozitiaElementului(arrayExemplu, 4))
console.log("arrayExemplu il include(?) pe 7 pe pozitia", gasestePozitiaElementului(arrayExemplu, 7))
// Slice 
// Input: Pozitia unui element de unde incepem taierea
//        Numarul de elemente 
// Returneaza un nou array mai mic, taiat din cel mare 
console.log("INCEPUT EXEMPLU slice ")
console.log("arrayexemplu era", arrayExemplu)
const copieArray = arrayExemplu.slice(1, 3)
console.log("copieArray arrayexemplu este", copieArray)

// Cerinta: Se doreste copierea elementor dintr-un array pana la identificarea lui 12;
const arrayEx1Slice = [1, 3, 6, 4, 12, 8, 9, 10, 150];
const pozitiaLui12 = arrayEx1Slice.indexOf(12)

const sliceUlPanaLa12 = arrayEx1Slice.slice(0, pozitiaLui12 + 1)
console.log("Slice-ul pana la 12", sliceUlPanaLa12)
// Cerinta: Se doreste copierea elementor dintr-un array de la identificarea lui 12;
const sliceUlDupa12 = arrayEx1Slice.slice(pozitiaLui12 + 1, pozitiaLui12 + 4)
console.log("Slice-ul dupa 12", sliceUlDupa12)

function sliceArray(tortDeProcesat, startPosition, endPosition) {
    const arrayRezultat = [];

    for (var i = startPosition; i < endPosition; i++) {
        const bucaticaCurentaDeTort = tortDeProcesat[i];

        arrayRezultat.push(bucaticaCurentaDeTort);
    }

    return arrayRezultat;
}
console.log("Slice-ul dupa 12", sliceArray(arrayEx1Slice, pozitiaLui12 + 1, pozitiaLui12 + 4))

// Splice 
// Input: Pozitia unui element de unde incepem taierea
//        Numarul de elemente 
//        Ce adaugam in loc
// Modifica array-ul 

console.warn("EXEMPLU SPLICE")
console.log("arrayEx1Slice este", arrayEx1Slice)

// Use case1: Stergeti un element din array (sau mai multe, parametrul secund)
const pozitiaLui6 = arrayEx1Slice.indexOf(6);

const result = arrayEx1Slice.splice(pozitiaLui6, 1);
console.log("arrayEx1Slice spliced", result)
console.log("arrayEx1Slice fara 6 este", arrayEx1Slice)

// Use case 2: Inlocuiti un element din array 
// mai bine zis: Stergeti elemente din array, si adaugati elemente noi
arrayEx1Slice.splice(1, 1, 100)
console.log("arrayEx1Slice cu 3 inlocuit cu 100 este", arrayEx1Slice)

// Use case 3: Adaugati un element sau mai multe in array, fara sa stergeti nimic 
// explicatie: Ii dam sa stearga 0 elemente
arrayEx1Slice.splice(1, 0, 200)
console.log("arrayEx1Slice use case 3 este", arrayEx1Slice)

function pseudoSPlice(arrayulDeProcesat, startPosition, deletedElements, addedElement) {
    const arrayRezultat = [];

    for (var i = 0; i < arrayulDeProcesat.length; i++) {
        if (i >= startPosition && i < startPosition + deletedElements) {
            // Suntem la elementele care trebuie sterse
            console.log("SUNT PE POZITIA i, si nu introduc numere", i)
            if (i == startPosition && addedElement !== undefined) {
                arrayRezultat.push(addedElement)
            }
        } else {
            arrayRezultat.push(arrayulDeProcesat[i])
        }
    }

    return arrayRezultat;
}

console.log("Inceput test", arrayEx1Slice);
console.log("rez", pseudoSPlice(arrayEx1Slice, 1, 4, 2))

console.log("rez", pseudoSPlice(arrayEx1Slice, arrayEx1Slice.indexOf(9), 1))