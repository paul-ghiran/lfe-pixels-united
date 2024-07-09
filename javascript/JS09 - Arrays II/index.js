/* 
Numărarea literelor 'a' într-un string.
exemplu: “Salut sunt Laura” Output: 3 
*/

const stringulProcesat = "Salut sunt Laura";
var numarDeLitereMatching = 0;

for (i = 0; i < stringulProcesat.length; i++) {
    caracterulCurent = stringulProcesat[i];
    if (caracterulCurent == 'a') {
        numarDeLitereMatching = numarDeLitereMatching + 1;
        console.log("caracterul curent este", caracterulCurent, "pt un total de", numarDeLitereMatching, "pozitia", i)
    }
}

console.log("SFARSIT EXECITIU 1");

/* 
O funcție pt găsirea numărului de litere specificate dintr-un text
Input:  functieLitere(“alune uscate”, “e”) Output: 2 
*/

function functieLitere(stringInCareCaut, literaPeCareOCaut) {
    var counter = 0;

    for (var i = 0; i < stringInCareCaut.length; i++) {
        const caracterulCurent = stringInCareCaut[i];

        if (caracterulCurent == literaPeCareOCaut) {
            counter = counter + 1;
        }
    }

    return counter;
}

const numarLitereE = functieLitere("alune uscate", "e");
const numarLitereA = functieLitere("Salut sunt Laura", "a");

console.log("counter e (alune uscate):", numarLitereE)
console.log("counter a (Salut sunt Laura):", numarLitereA)

console.log("SFARSIT EXECITIU 2");

/*
Se da un array de stringuri, de cate ori se gaseste litera “a” in array?
Input:  [‘baobab’, ‘calculator’] Output: 4
*/

const arrayDeCuvinte = ["baobab", "calculator"];
var totalA = 0;

for (var i = 0; i < arrayDeCuvinte.length; i++) {
    const cuvantulCurent = arrayDeCuvinte[i];
    const litereAInCuvantulCurent = functieLitere(cuvantulCurent, "a");

    totalA = totalA + litereAInCuvantulCurent;
}

console.log("Litere a gasite", totalA)

/* 
    EX extra: Gaseste totalul de litere a din 2 array-uri separate, fara sa il aduni.
*/
const arrayCuNume = ['Paul', 'Raul', 'Clau'];
const arrayCuLegume = ['Castravete', 'Pastarnac'];

function gasesteLiteraInArray(arrayInCareCaut, literaSpecificata) {
    var counter = 0;

    for (var i = 0; i < arrayInCareCaut.length; i++) {
        const cuvantulCurent = arrayInCareCaut[i];
        const litereAInCuvantulCurent = functieLitere(cuvantulCurent, literaSpecificata);

        counter = counter + litereAInCuvantulCurent;
    }

    return counter;
}
console.log("a in nume: ", gasesteLiteraInArray(arrayCuNume, "a"))
console.log("a in legume: ", gasesteLiteraInArray(arrayCuLegume, "a"))
console.log("e in legume: ", gasesteLiteraInArray(arrayCuLegume, "e"))