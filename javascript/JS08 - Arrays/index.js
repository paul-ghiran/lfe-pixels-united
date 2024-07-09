console.log("ARRAYS");

const array_ul_meu = [123, 33, 2, 12312, 3, 12];
const array_ul_doi = ['asd', 23, true, false];

const primaLitera = "A";
var aDouaLitera = "B";

const array_primele_trei_litere = [primaLitera, aDouaLitera, 'C'];

console.log(array_primele_trei_litere);

console.log("POZITIA 0:", array_primele_trei_litere[0]);
console.log("POZITIA 1:", array_primele_trei_litere[1]);
console.log("POZITIA 2:", array_primele_trei_litere[2]);

/* Calculati pretul unui cos de cumparaturi, dupa urmatoarele criterii:
    1. In cosul de cumparaturi se pot afla oricate elemente
    2. Elementele pot fi: Fructe, legume, carne, bautura
    3. Fructele pot fi: 'Mar', 'Para', 'Portocala'
    4. Legumele pot fi: 'Castravete', 'Rosie'
    5. Carnea poate fi: 'Ceafa', 'Mici'
    6. Bautura va fi: 'Apa', 'Bere'
    7. Preturile sunt in felul urmator: Fructe = 5 lei, Legume = 6 lei, Carne = 20 lei, Bautura = 4 lei
    8. In cosul de cumparaturi, un element poate fi prezent de multiple ori
*/

/*  LIMBAJ NATURAL, MACRO
    Trebuie sa trecem prin fiecare element din cos
    Trebuie sa adunam pretul fiecarui element din cos la total

    MICRO
        Trebuie sa trecem prin fiecare element din cos
            > Mergem pe rand in fiecare dintre pozitiile unui array
            > Verificam ce tip de produs este
                > Verificam daca este leguma,
                > Verificam daca este carne,
                > Verificam daca este bautura,
                > Verificam daca este fruct,
            > In functie de tipul de produs, gasim pretul 
                > Daca este leguma returnam 6 lei
                > Daca este carne returnam 20 lei
                > Daca fruct returnam 5 lei
                > Daca bautura returnam 4 lei
            > Adunam pretul la totalulDePanaAcum
*/

// VERSIUNEA greoaie
console.log("AICI INCEPE VERSIUNEA 'greoaie'");

const cos_exemplu = ['Apa', 'Rosie', 'Ceafa'];
const marimeCos = cos_exemplu.length;
var totalCos = 0;

for (i = 0; i < marimeCos; i++) {
    const produsCurent = cos_exemplu[i];

    if (produsCurent == 'Rosie' || produsCurent == 'Castravete') {
        totalCos = totalCos + 6;
    } else if (produsCurent == 'Ceafa' || produsCurent == 'Mici') {
        totalCos = totalCos + 20;
    } else if (produsCurent == 'Apa' || produsCurent == 'Bere') {
        totalCos = totalCos + 4;
    } else if (produsCurent == 'Mar' || produsCurent == 'Para' || produsCurent == 'Portocala') {
        totalCos = totalCos + 5;
    } else {
        console.log(`${produsCurent} nu are pret, va rugam sunati la departamentul de vanzari`)
    }

    console.log(`${i}:Dupa ce am pus un ${produsCurent}, totalul este de ${totalCos}`)
}

console.log("FINAL COS", totalCos)



// VERSIUNEA cu functii
console.log("AICI INCEPE VERSIUNEA cu functii");

const alDoileaCos = ['Apa', 'Rosie', 'Ceafa'];
const lungimeCos2 = alDoileaCos.length;
let totalCos2 = 0;

function determinaTipulProdusului(produsulCurent) {
    if (produsulCurent == 'Rosie' || produsulCurent == 'Castravete') {
        return 'leguma';
    } else if (produsulCurent == 'Ceafa' || produsulCurent == 'Mici') {
        return 'carne';
    } else if (produsulCurent == 'Apa' || produsulCurent == 'Bere') {
        return 'bautura';
    } else if (produsulCurent == 'Mar' || produsulCurent == 'Para' || produsulCurent == 'Portocala') {
        return 'fruct';
    } else {
        return 'problema';
    }
}

function determinaPretulProdusului(tipProdus) {
    // Daca switch-ul este in functie si are un return in case, break devine inutil, pt break opreste executia 
    //    switch-ului, dar return opreste executia intreg function-ului, adica si al switch-ului
    switch (tipProdus) {
        case 'leguma':
            return 6;
        case 'carne':
            return 20;
        case 'fruct':
            return 5
        case 'bautura':
            return 4
        default:
            return 0
    }
}

for (i = 0; i < lungimeCos2; i++) {
    const produs = alDoileaCos[i];
    const tipulProdusului = determinaTipulProdusului(produs);
    const pretulProdusului = determinaPretulProdusului(tipulProdusului);

    totalCos2 = totalCos2 + pretulProdusului;
    console.log(`${produs} este ${tipulProdusului} si costa ${pretulProdusului} pentru un total intermediar de ${totalCos2}`);
}

console.log('PRETUL COSULUI ESTE', totalCos2);

// VERSIUNE INCLUDES, FOREACH
console.log("~~~~~~~~~~~~METODE_HELPER~~~~~~~~~~~")

const alTreileaCos = ['Apa', 'Rosie', 'Ceafa'];
const LEGUME = ['Rosie', 'Castravete'];
const FRUCTE = ['Mar', 'Portocala', 'Para'];
const CARNE = ['Ceafa', 'Mici'];
const BAUTURA = ['Apa', 'Bere'];

function aflaTipulProdusului(produs) {
    if (LEGUME.includes(produs)) {
        return 'leguma'
    } else if (CARNE.includes(produs)) {
        return 'carne'
    } else if (FRUCTE.includes(produs)) {
        return 'fructe'
    } else if (BAUTURA.includes(produs)) {
        return 'bautura'
    } else {
        return 'problema'
    }
};

// determinaPretulProdusului se foloseste de mai sus, fiind deja declarata

var totalCos3 = 0;

function adaugaProdusLaTotal(produsPrimitDeCatreFunctie) {
    const tipulProdusului = aflaTipulProdusului(produsPrimitDeCatreFunctie);
    const pretulProdusului = determinaPretulProdusului(tipulProdusului);

    totalCos3 = totalCos3 + pretulProdusului;
}

alTreileaCos.forEach(adaugaProdusLaTotal)
console.log("TOTAL COS(3):", totalCos3);

console.log("DE CE HELPERS? CA SA NU SCRIEM FOR DE 3 ori ~~~~~~~~~~~~~~~~~~~~~~~~~")
totalCos3 = 0;
const basketOne = ['Apa', 'Bere'];
basketOne.forEach(adaugaProdusLaTotal);
console.log("FOR BASKET One", totalCos3);


totalCos3 = 0;
const secondBasket = ['Apa', 'Mici', 'Mar', 'Rosie'];
secondBasket.forEach(adaugaProdusLaTotal);
console.log("FOR BASKET Two", totalCos3);

totalCos3 = 0;
const thirdBasket = ['Apa', 'Rosie', 'Bere'];
thirdBasket.forEach(adaugaProdusLaTotal);
console.log("FOR BASKET Three", totalCos3);

cos_exemplu.forEach(adaugaProdusLaTotal)

const myArray = [12, 45, 23, 95];

for (i = 0; i < myArray.length; i++) {
    const elementulCurent = myArray[i];
    console.log("Elementul de pe pozitia " + i + " este " + elementulCurent);
}