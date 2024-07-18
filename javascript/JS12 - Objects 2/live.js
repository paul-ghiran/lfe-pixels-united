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

const volkswagenGolf ={
    pret: 25000,
    caiPutere: (volkswagenJetta.caiPutere + volkswagenPolo.caiPutere) / 2,
    caroserie: "hatchback",
    cantitate: 10,
};

inventar.push(volkswagenGolf);


// Part 5
const modele=['Jetta','Polo','Passat','Golf'];

function adaugaModel(){
  for(let i=0;i<inventar.length;i++){
    inventar[i].model=modele[i]
  }
}

adaugaModel();


// Part 6

// Part 7

// Part 8

// Part 9

console.log( JSON.stringify (inventar) );

function seteazaCantitate(array) {
  for (let i = 0; i < array.length; i++) {
    const produsCurrent = array[i];
    produsCurrent.cantitateInitiala = produsCurrent.cantitate;
  }
  return array;
}

console.log(seteazaCantitate(inventar));
