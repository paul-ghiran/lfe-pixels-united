function filtreazaDivizibileLung(arrayNumere, divizor) {
    const arrayRezultat = [];

    for (i = 0; i < arrayNumere.length; i++) {
        const elementCurent = arrayNumere[i];
        if (elementCurent % divizor == 0) {
            arrayRezultat.push(elementCurent)
        }
    }

    return arrayRezultat;
}

console.log(filtreazaDivizibileLung([1, 2, 3, 4, 5, 6, 7, 8], 2));

function filtreazaDivizibile(arrayDeVerificat, divizor) {

    function esteDivizibil(numarVerificat) {
        return numarVerificat % divizor == 0;
    }

    return arrayDeVerificat.filter(esteDivizibil)
}
// VERSIUNE SINONIM:
// Aceasta versiune foloseste o functie anonima, pentru a-l declara pe 
//   functionul de verificare in paranteza lui 'filter' 

/*
function filtreazaDivizibile(arrayDeVerificat, divizor) {
    return arrayDeVerificat.filter(function (numarulCurent) {
        return numarulCurent % divizor == 0;
    });
}
*/

console.log(filtreazaDivizibile([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(filtreazaDivizibile([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Functie subset
function verificaIncluziuneArray(arrayInitial, arrayPosibilSubset) {
    var numarElementeGasite = 0;
    for (var i = 0; i < arrayPosibilSubset.length; i++) {
        const elementulCurentDinSubset = arrayPosibilSubset[i];
        if (arrayInitial.includes(elementulCurentDinSubset)) {
            numarElementeGasite = numarElementeGasite + 1;
        }
    }
    return numarElementeGasite == arrayPosibilSubset.length
}

// Varianta cu foreach
function verificaIncluziuneArray2(arrayInitial, arrayPosibilSubset) {
    var amGasitContraExemplu = false;

    arrayPosibilSubset.forEach(function (elementCurent) {
        if (arrayInitial.includes(elementCurent) == false) { // Adica arrayInitial NU include pe elementcurent, 
            //    de aceea e '== false' acolo
            amGasitContraExemplu = true;
        }
    })

    if (amGasitContraExemplu == true) {
        return false;
    } else {
        return true;
    }
}

console.log('1234, 12', verificaIncluziuneArray([1, 2, 3, 4], [1, 2]));
console.log('1234, 16', verificaIncluziuneArray([1, 2, 3, 4], [1, 6]));
console.log('1234, 12 #2', verificaIncluziuneArray2([1, 2, 3, 4], [1, 2]));
console.log('1234, 16 #2', verificaIncluziuneArray2([1, 2, 3, 4], [1, 6]));
// ex 3, sterge un el din array
function eliminaElement(arraySursa, elementNedorit) {
    const indexulElementului = arraySursa.indexOf(elementNedorit);

    if (indexulElementului > -1) {
        arraySursa.splice(indexulElementului, 1)
    }

    return arraySursa;
}

function eliminaElement2(arraySursa, elementNedorit) {

    const arrayRezultat = arraySursa.filter(function (elementCurent) {
        return elementCurent != elementNedorit
    })

    return arrayRezultat;
}


function eliminaElement3(arraySursa, elementNedorit) {

    function esteElementDiferitDeElementulNedorit(elementCurent) {
        return elementCurent != elementNedorit
    }

    const arrayRezultat = arraySursa.filter(esteElementDiferitDeElementulNedorit)

    return arrayRezultat;
}

console.log(eliminaElement([1, 2, 3, 4], 3))
console.log(eliminaElement2([1, 2, 3, 4], 3))
console.log(eliminaElement3([1, 2, 3, 4], 3))

console.log(eliminaElement([1, 2, 3, 4], 5))
console.log(eliminaElement2([1, 2, 3, 4], 5))
console.log(eliminaElement3([1, 2, 3, 4], 5))
