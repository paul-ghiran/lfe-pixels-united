const listaProduse = [
  {
    name: "tastatura",
    price: 400,
    image: "https://placehold.it/100x100",
    id: 1,
  },
  {
    name: "mouse",
    price: 600,
    image: "https://placehold.it/100x100",
    id: 2,
  },
  {
    name: "casti",
    price: 100,
    image: "https://placehold.it/100x100",
    id: 3,
  },
];

const printeazaProdus = function (product) {
  const listaProduseHtml = document.querySelector(".lista-produse");
  const elementProdus = document.createElement("div");
  listaProduseHtml.appendChild(elementProdus);
  elementProdus.innerHTML = `<li><img src="${product.image}" /><h2>${product.name}</h2><button></button></li>`;
};

const printeazaProduse = (arrayDeProduse) => arrayDeProduse.forEach((produs) => printeazaProdus(produs));

printeazaProduse(listaProduse);

const cartProduse = [];
function addToCart(produs) {
  cartProduse.push(produs);
}
addToCart(listaProduse[0]);
console.log(addToCart(listaProduse));
console.log(cartProduse);

const calculateTotal = (obj) => obj.reduce((sum, curentElement) => sum + curentElement.price, 0);
console.log(calculateTotal(listaProduse));

const calculateTotal2 = (arr) => {
  let sum = 0;
  arr.forEach((obj) => (sum += obj.price));
  return sum;
};
console.log(calculateTotal2(listaProduse));
