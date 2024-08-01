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
