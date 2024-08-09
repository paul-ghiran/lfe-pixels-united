"use strict";

//Se filtreaza un array, returnandu-se elementele divizibile cu 3

//ex 1

const arr = [1, 2, 4, 55, 5, 3, 6];

const diviziblCu3 = (arrayUlParcurs) => {
  return arrayUlParcurs.filter((word) => word % 3 === 0);
};

const diviziblCuThree = (arrayUlParcurs) =>
  arrayUlParcurs.filter((word) => word % 3 === 0);

const diviziblCuTrei = function (arrayUlParcurs) {
  return arrayUlParcurs.filter((word) => word % 3 === 0);
};

function diviziblCuTr3i(arrayUlParcurs) {
  return arrayUlParcurs.filter((word) => word % 3 === 0);
}

console.log(diviziblCu3(arr));
console.log(diviziblCu3([9, 12, 15]));

