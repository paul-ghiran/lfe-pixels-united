const pisicaTipica = {
    specie: 'felinus pisicus',
    talie: 'mica',
    sunet: 'miau',
    dieta: 'omnivora',
    durataViata: 18,
}
const pisicaNorvegiana = {  ...pisicaTipica, specie: "norvegiana", durataViata: 17 };
const pisicaTomberonezaSalbaticaUrbana = { ...pisicaTipica, durataViata: 8, specie: 'felinus urbanus'};

const pisici = [pisicaTipica, pisicaNorvegiana, pisicaTomberonezaSalbaticaUrbana];
// spread


console.log("Pisica imprastiata", pisicaNorvegiana);

const pisicaNorvegiana2 = { ...pisicaTipica, specie: "norvegiana" };

console.log("Pisica imprastiata2", pisicaNorvegiana2);


//functie care duce la output: 
// O felinus pisicus de talie medie spera sa traiasca 17 ani

// scoatePropozitia( pisica );
// scoatePropozitia( pisicaNorvegiana );

function TLDR_solutie (animal) {
    return animal.specie + ' traieste '+ animal.durataViata;
}

console.log(TLDR_solutie(pisicaTipica))
console.log(TLDR_solutie(pisicaNorvegiana))



// Cerinta: O functie care returneaza obiectul cu durata de viata cea mai scurta

function ceaMaiShortlivedPisica ( animale ) {
    let celMaiMuritorAnimal = animale[0];

    animale.forEach( animalCurent => {
        if (animalCurent.durataViata < celMaiMuritorAnimal.durataViata) {
            celMaiMuritorAnimal = animalCurent;
        }
    })

    return celMaiMuritorAnimal;
}

/// SAU

function ceaMaiScurtaDurataDeViata( animale ) {
    let minDePanaAcum = 1000;

    for(var i=0; i < animale.length; i++ ) {
        if (minDePanaAcum >  animale[i].durataViata) {
            minDePanaAcum = animale[i].durataViata;
        }
    }

    const animalulNefericit =  animale.find( function (animal){
        return animal.durataViata == minDePanaAcum;
    })

    return animalulNefericit;
}


function ceaMaiScurtaDurataDeViata3( animale ) {
    let minDePanaAcum = 1000;
    let animalulNefericit = {};

    for(var i=0; i < animale.length; i++ ) {
        if (minDePanaAcum >  animale[i].durataViata) { // inseamna ca traiesc mai putin decat cei de pana acum
            minDePanaAcum = animale[i].durataViata;
            animalulNefericit = animale[i];
        }
    }

    return animalulNefericit;
}


console.log("Final", ceaMaiShortlivedPisica(pisici)) // trebuie sa vina inapoi pisica urbana, ca obiect, ca specie, ce vreti voi
console.log("F2", ceaMaiScurtaDurataDeViata(pisici));
console.log("F3", ceaMaiScurtaDurataDeViata3(pisici));