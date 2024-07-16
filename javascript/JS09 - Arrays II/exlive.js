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
// Sa se gaseasca numerele impare dintr-un array

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
// se da un array si o var , returnati t sau f daca variabila specif. se gaseste in array
let array = ["acesta", "este", "un", "array"];
let cuvantCautat = "acesta";
function cautaInArray(array, cuvantCautat) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (cuvantCautat === array[i]) {
      count += 1;
      if (count > 0) {
        return "Este adevarat";
      }
    }
  }
}

console.log(cautaInArray(array, cuvantCautat));

// EX 4

function inmulitireArray(str) {
  let x = [];
  for (let i = 0; i < str.length; i++) {
    x.push(str[i] ** 2);
  }
  return x;
}
let arrrayNr = [2, 4, 5, 6, 7, 8];

console.log(inmulitireArray(arrrayNr));
// EX 5
let arr1=[1,2,3,4,5,6,7,8,10,11,12];
function nrpare(arrayDeVerificat){
  for(i=0;i<arrayDeVerificat.length;i++){
    if(verificanrPar(arrayDeVerificat[i])==false){
      return false;
    }
   
  }
  return true; 
}
console.log(nrpare(arr1));
console.log(nrpare([2,4,6]));
function verificanrPar(numar){
  if(numar%2==0){
    return true;
  }else{
    return false;
  }
}
console.log(verificanrPar(11));
// EX 6
