//EX 1
// Suma nr pare dintr-un array
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function numerepare(arr) {
  let suma = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      suma = suma + arr[i];
    }
  }
  return suma;
}

console.log(numerepare(array1));

// Ex 2

const arrayEx = [1, 2];
arrayEx.push(4, 5);
console.log(arrayEx);

function filtareImpare(array) {
  const arrayStocareNr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      arrayStocareNr.push(array[i]);
    }
  }
  return arrayStocareNr;
}

console.log(filtareImpare(arrayEx));


 // EX 3


 // EX 4 


 // EX 5


 // EX 6
