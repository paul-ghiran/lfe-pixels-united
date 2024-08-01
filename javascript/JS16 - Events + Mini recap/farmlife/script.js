//1. Creati un obiect in care sa tinem minte cate vaci avem la ferma, si cate rate
// 10 vaci, 5 rate

// Calculati suma animalelor 

const ferma = {
    vaci: 10,
    rate: 5
};

ferma.total = ferma.vaci + ferma.rate;

console.log(ferma);

function calculeazaPicioare(animal){
    var numarPicioare=0;
    if(animal==='vaci'){
        numarPicioare=ferma.vaci*4;
    }else if(animal ==='rate'){
        numarPicioare=ferma.rate*2;
    };

    return numarPicioare;
}

const picioareVaci=calculeazaPicioare('vaci')
const picioareRate=calculeazaPicioare('rate')
console.log(picioareVaci+picioareRate)