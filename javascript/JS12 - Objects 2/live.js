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
  model: "Golf",
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

// Setati un pret de achizitie de 80% din valoare fiecarei masini din inventar

function seteazaPretAchizieLaTotInventarul(array) {
  array.forEach(seteazaPretAchizitieUnSingurModel);
}

function seteazaPretAchizitieUnSingurModel(obiectMasina) {
  obiectMasina.pretAchizitie = obiectMasina.pret * 0.8;
}

seteazaPretAchizieLaTotInventarul(inventar);

// Inceput ex live

// Team 0, ex 1:
// Creati o variabila care va memora vanzarile dealership-ului
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

function gasireMasina(modelMasina) {
  for (i = 0; i < inventar.length; i++) {
    if (inventar[i].model == modelMasina) {
      return inventar[i];
    }
  }
}

// Team 1, ex 2

function reseteazaCantitati() {
  for (i = 0; i < inventar.length; i++) {
    inventar[i].cantitate = inventar[i].cantitateInitiala;
  }
}

// Team 1, totalul valorii masinilor vandute dintr-un anumit tip

function totalVanzariPerModel(modelMasina) {
  const modelDorit = gasireMasina(modelMasina);

  return afisareMasiniCumaprate(modelMasina) * modelDorit.pret;
}

console.log("TOTAL $ POLO", totalVanzariPerModel("Polo"));
// Team 2, ex 1
function totalProduse(categorie) {
  let total = 0;
  for (let i = 0; i < inventar.length; i++) {
    if (inventar[i].caroserie === categorie) {
      total += inventar[i].cantitate;
    }
  }
  return total;
}

console.log(totalProduse("hatchback"));

// Team 2, ex 2
function afisareMasiniCumaprate(model) {
  const modelGasit = gasireMasina(model);

  if (modelGasit) {
    console.log("Model gasit", modelGasit);
    counter = modelGasit.cantitateInitiala - modelGasit.cantitate;
    return counter;
  }
}
console.log(afisareMasiniCumaprate("Polo"));

function masiniVandutePerCategorie() {
  const rezultatFinal = {
    hatchback: 0,
    sedan: 0,
  };

  for (var i = 0; i < modele.length; i++) {
    const modelulCurent = modele[i];
    const obiectMasina = gasireMasina(modelulCurent);

    const masiniVanduteModelCurent = afisareMasiniCumaprate(modelulCurent); // Aka cate s-au cumparat, polo, passsat etc

    //  rezultatFinal[obiectMasina.caroserie] += masiniVanduteModelCurent;
    //  SINONIM LINIE MAI SUS:
    if (obiectMasina.caroserie == "hatchback") {
      rezultatFinal.hatchback += masiniVanduteModelCurent;
    } else {
      rezultatFinal.sedan += masiniVanduteModelCurent;
    }
  }

  return rezultatFinal;
}

console.log("Vandute per categorie", masiniVandutePerCategorie());

// Sfarsit fisier
console.log("VANZARILE TOTALE SUNT", vanzariTotale);
console.log(inventar);

function cumparaPolo() {
  cumparaMasina("Polo");
}

function afiseazaTotal() {
  document.getElementById("total").innerText = vanzariTotale;
}
