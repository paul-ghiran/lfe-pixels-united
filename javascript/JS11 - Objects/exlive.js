// Se dau urmatoarele obiecte (portocala, mar, ceafa) calculati totalul pretului acestora, 
// avand in vedere ca fructele costa 6 lei si carnea 20 lei

const portocala = {
    numeProdus: 'portocala',
    tip: 'fruct',
    pret: 6,
}

const mar = {
    numeProdus: 'mar Johnatan',
    tip: 'fruct',
    pret: 6,
}

const ceafa = {
    numeProdus: 'ceafa',
    tip: 'carne',
    pret: 20,
}

console.log("PRET PORTOCALA", portocala.pret)

const totalProduse = portocala.pret + mar.pret + ceafa.pret;

console.log(totalProduse)

const PRODUSE_MAGAZIN = {
    ceafa: {
        numeProdus: 'ceafa',
        tip: 'carne',
        pret: 20,
    },
    mar: {
        numeProdus: 'mar Johnatan',
        tip: 'fruct',
        pret: 6,
    },
    portocala: {
        numeProdus: 'portocala',
        tip: 'fruct',
        pret: 6,
    }
}

// Se da un array: 
//   ['mar', 'mar', 'mar', 'ceafa', 'mar', 'portocala']
// Declarati o functie totalCos care calculeaza totalul unui array de produse

function calculeazaTotalProduse(arrayDeProduse) {
    var totalProduse = 0;

    for (var i = 0; i < arrayDeProduse.length; i++) {
        const numeleProdusuluiCurent = arrayDeProduse[i];
        const produsulCurent = PRODUSE_MAGAZIN[numeleProdusuluiCurent]

        totalProduse += produsulCurent.pret;
    }

    return totalProduse;
}

const arrayExUnu = ['mar', 'mar', 'mar', 'ceafa', 'mar', 'portocala'];
console.log("PRET TOTAL", calculeazaTotalProduse(arrayExUnu))

// Exercitiu simplificat

// Se da un array: 
//   [mar, mar, mar, ceafa, mar, portocala]
// Declarati o functie totalCos care calculeaza totalul unui array de produse

const arrayExDoi = [mar, mar, mar, ceafa, mar, portocala]// Aici ne uitam la variabilele de la liniile 4, 10 , 16

function calculeazaTotalProduse2(arrayDeProduse) {
    var totalCos = 0;
    for (var i = 0; i < arrayDeProduse.length; i++) {
        const produsCurent = arrayDeProduse[i];
        totalCos = totalCos + produsCurent.pret;
    }
    return totalCos
};

console.log("PRET TOTAL ex 2", calculeazaTotalProduse2(arrayExDoi))
console.log("PRET La un cos mai mic", calculeazaTotalProduse2( [mar] ))
console.log("PRET La un cos mai mic", calculeazaTotalProduse2( [mar, portocala] ))
console.log("PRET La un cos mai mic", calculeazaTotalProduse2( [ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa, ceafa] ))
