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

  elementProdus.innerHTML = `<li><img src="${product.image}" /><h2>${product.name}</h2></li>`;

  const butonAdaugareProdus = document.createElement('button');
  butonAdaugareProdus.innerText = "Adauga In Cos";
  elementProdus.appendChild(butonAdaugareProdus);

};

const printeazaProduse = (arrayDeProduse) => arrayDeProduse.forEach((produs) => printeazaProdus(produs));

printeazaProduse(listaProduse);

const cartProduse = [];


addToCart(listaProduse[0]);
addToCart(listaProduse[0]);
addToCart(listaProduse[0]);
addToCart(listaProduse[1]);
addToCart(listaProduse[1]);

console.log(cartProduse);

function calculateTotal(obj) {
  return obj.reduce((sum, curentElement) => sum + curentElement.price, 0);
}

console.log(calculateTotal(listaProduse));

// const calculateTotal2 = (arr) => {
//   let sum = 0;
//   arr.forEach((obj) => (sum += obj.price));
//   return sum;
// };
// console.log(calculateTotal2(listaProduse));


function printeazaElementCart(product) {
  const cartHTML = document.querySelector("#cart");
  const elementCart = document.createElement("div");
  cartHTML.appendChild(elementCart);
  elementCart.innerHTML = `<h4>${product.name} (${product.price})</h4> <hr />`;
};

function printeazaCart(cartIntreg) {
  const cartHTML = document.querySelector("#cart");
  cartHTML.innerHTML = "";
  cartIntreg.forEach(printeazaElementCart);
  cartHTML.innerHTML += "Pret total:" + calculateTotal(cartIntreg)
}

function addToCart(produs) {
  cartProduse.push(produs);
  printeazaCart(cartProduse);
}

printeazaCart(cartProduse);