// ~~~~~~~~~~~~~ FUNCTIE LOG AS A STRING

function printeazaObiect(object) {
  if (typeof object.length == "number") {
    console.log("INCEPUT ARRAY:");
    object.forEach(console.log);
    console.log("SFARSIT ARRAY");
  } else {
    console.log("Object:", JSON.stringify(object));
  }
}

//1. Creati un obiect in care sa tinem minte cate vaci avem la ferma, si cate rate
// 10 vaci, 5 rate

// Calculati suma animalelor

const ferma = {
  vaci: 10,
  rate: 5,
};

ferma.total = ferma.vaci + ferma.rate;

console.log(ferma);
console.log(ferma.total);

// ex 2
function calculeazaPicioare(animal) {
  var numarPicioare = 0;
  if (animal === "vaci") {
    numarPicioare = ferma.vaci * 4;
  } else if (animal === "rate") {
    numarPicioare = ferma.rate * 2;
  }

  return numarPicioare;
}

const picioareVaci = calculeazaPicioare("vaci");
const picioareRate = calculeazaPicioare("rate");
console.log(picioareVaci + picioareRate);

// alternativ ex 2
function totalPentruFerma(fermaInput) {
  return fermaInput.vaci * 4 + fermaInput.rate * 2;
}
console.log(totalPentruFerma(ferma));

/*3. Rescrieti obiectul intr-un array de obiecte care sa aiba aceeasi structura ca si:

{ 
  animal: “caine”,
  Sunet: “ham”,
  Numar: “3”
}*/

array = [
  { animal: "caine", sunet: "ham", numar: "3" },
  { animal: "vaca", sunet: "mu", numar: "10" },
  { animal: "rata", sunet: "mac", numar: "5" },
];

function afiseazaSunete(animlas) {
  animlas.forEach((animal) => {
    const { sunet, numar } = animal;
    let sunatRepetat = "";
    for (let i = 0; i < numar; i++) {
      sunatRepetat += sunet + " ";
    }
    console.log(sunatRepetat);
  });
}
console.log(afiseazaSunete(array));

array.push({ animal: "porc", sunet: "groh", numar: "7" });

console.log(array);

// 6
function esteAnimalulInNumarPar(obiectAnimal) {
  if (obiectAnimal.numar % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function gasesteAnimaleCuSot(arrayAnimale) {
  const rezultat = [];
  for (var i = 0; i < arrayAnimale.length; i++) {
    const animalCurent = arrayAnimale[i];

    if (animalCurent.numar % 2 == 0) {
      rezultat.push(animalCurent);
    }
  }

  return rezultat;
}

const animaleCuSot = array.filter(function (arrayAnimale) {
  const rezultat = [];
  for (var i = 0; i < arrayAnimale.length; i++) {
    const animalCurent = arrayAnimale[i];

    if (animalCurent.numar % 2 == 0) {
      rezultat.push(animalCurent);
    }
  }

  return rezultat;
});

const animalePare = gasesteAnimaleCuSot(array);

console.log(animaleCuSot);
console.log(animalePare);
// Identificati animalul care are fix 5 reprezentanti in ferma noastra
function animal5Reprezentanti(array) {
  return array.find((animal) => animal.numar == 5);
}
const animalCuCinciReprezentanti = animal5Reprezentanti(array);
console.log(JSON.stringify(animalCuCinciReprezentanti));

printeazaObiect(animalCuCinciReprezentanti);
printeazaObiect(array);

// 8. Scrieti in HTML toate animalele pe rand, sub forma caine: 3

function afisareAnimale(arr) {
  arr.forEach(function (el) {
    const paragraf = document.createElement("p");
    paragraf.innerText = `${el.animal} : ${el.numar}`;

    document.querySelector("body").appendChild(paragraf);
  });
}

function adaugareButoane(arr) {
  arr.forEach(function (el) {
    const paragraf = document.createElement("p"); // paragraph is now a HTMLElement in browser memory
    const buton = document.createElement("button"); // buton is now a HTMLElement in browser memory
    paragraf.innerText = `${el.animal} : ${el.numar}`;
    buton.innerText = "sunet";
    paragraf.appendChild(buton);

    paragraf.style.border = "1px solid gray";
    paragraf.style.borderRadius = "8px";
    paragraf.style.padding = "12px";
    paragraf.style.margin = "10px";
    paragraf.style.display = "inline-block";

    document.querySelector("body").appendChild(paragraf);
  });
}

adaugareButoane(array);
