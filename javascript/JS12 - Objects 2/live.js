// Part 1 Ne imaginam un dealership auto
const inventar = [];

const volkswagenJetta = {
  pret: 30000,
  caiPutere: 140,
  caroserie: "sedan",
  cantitate: 10,
};

inventar.push(volkswagenJetta);

// Part 2 Maria
const volkswagenPolo = {
  pret: 20000,
  caiPutere: 85,
  caroserie: "hatchback",
};
volkswagenPolo.cantitate = 10;
inventar.push(volkswagenPolo);

// Part 3 Eric
const volkswagenPassat = {
  pret: 40000,
  caiPutere: 170,
  caroserie: "sedan",
  cantitate: 5,
};

inventar.push(volkswagenPassat);

// Part 4

const volkswagenGolf = {
  pret: 25000,
  caiPutere: (volkswagenJetta.caiPutere + volkswagenPolo.caiPutere) / 2,
  caroserie: "hatchback",
  cantitate: 10,
};

inventar.push(volkswagenGolf);

// Part 5
const modele = ["Jetta", "Polo", "Passat", "Golf"];

function adaugaModel() {
  for (let i = 0; i < inventar.length; i++) {
    inventar[i].model = modele[i];
  }
}

adaugaModel();

// Sfarsit setup 
console.log(JSON.stringify(inventar));

function seteazaCantitate(array) {
  for (let i = 0; i < array.length; i++) {
    const produsCurrent = array[i];
    produsCurrent.cantitateInitiala = produsCurrent.cantitate;
  }
  return array;
}

console.log(seteazaCantitate(inventar));

// Inceput ex live

// Team 0, ex 1:
// Creati o variabila care va memora vanzarile dealership-ulu
// Creati o functie care "CUMPARA" o masina, adica ii scade cantitatea si ne creste noua vanzarile, in functie de modelul acesteia (string, ex 'Polo' )

var vanzariTotale = 0;

function cumparaMasina(modelMasina) {
  const modelulGasit = inventar.find(function (masinaDinInventar) {
    return masinaDinInventar.model == modelMasina;
  });

  modelulGasit.cantitate = modelulGasit.cantitate - 1;
  vanzariTotale += modelulGasit.pret;

  console.log(
    "S-a cumparat un ",
    modelMasina,
    ", vanzarile totale ajungand la",
    vanzariTotale
  );
}

cumparaMasina("Polo");
cumparaMasina("Polo");

// Team 1, ex 1

// Team 1, ex 2

// Team 2, ex 1

// Team 2, ex 2


// Sfarsit fisier
console.log("VANZARILE TOTALE SUNT", vanzariTotale);
console.log(inventar)