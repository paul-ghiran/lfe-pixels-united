
const GLOBAL_CONFIG = {
  productsPerPage: 15,
  order: 'asc'
}

const printeazaProdus = function (product) {
  const listaProduseHtml = document.querySelector(".lista-produse");
  const elementProdus = document.createElement("div");
  listaProduseHtml.appendChild(elementProdus);

  elementProdus.innerHTML = `<li>
    <img src="${product.image}" />
  </li>
  <h2>${product.title}</h2>
  <h4>${product.price}</h4>`;

  const butonAdaugareProdus = document.createElement("button");
  butonAdaugareProdus.innerText = "Adauga In Cos";
  elementProdus.appendChild(butonAdaugareProdus);

  butonAdaugareProdus.addEventListener("click", function () {
    addToCart(product);
  });
};

const printeazaProduse = (arrayDeProduse) => {
  const listaProduseHtml = document.querySelector(".lista-produse");
  listaProduseHtml.innerHTML = '';
  arrayDeProduse.forEach((produs) => printeazaProdus(produs));
}

const cartSalvat = JSON.parse(localStorage.getItem('cart'))
const cartProduse = cartSalvat ? cartSalvat : [];

console.log(cartProduse);

function calculateTotal(array) {
  return array.reduce((sum, curentElement) => sum + curentElement.price, 0);
}


const calculateTotal2 = (arr) => {
  let sum = 0;
  arr.forEach((obj) => (sum += obj.price));
  return sum;
};

function printeazaElementCart(product) {
  const cartHTML = document.querySelector("#cart");
  const elementCart = document.createElement("div");
  cartHTML.appendChild(elementCart);
  elementCart.innerHTML = `<h4>${product.title} (${product.price})</h4> <hr />`;
}

function printeazaCart(cartIntreg) {
  const cartHTML = document.querySelector("#cart");
  cartHTML.innerHTML = "";

  cartIntreg.forEach(printeazaElementCart);

  cartHTML.innerHTML += "Pret total:" + calculateTotal(cartIntreg).toFixed(2);
  
  const buttonSubmit = document.createElement("button");
  cartHTML.appendChild(buttonSubmit);
  buttonSubmit.className = "clasa-button";
  buttonSubmit.innerHTML = "Submit Order";
  buttonSubmit.addEventListener("click", trimiteComanda);
}

function addToCart(produs) {
  const cartDinLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

  cartDinLocalStorage.push(produs);
  printeazaCart(cartDinLocalStorage);

  const cartFormatString = JSON.stringify(cartDinLocalStorage)

  localStorage.setItem('cart', cartFormatString)
}


const fetchData = async function () {
  const raspunsRequest =
    await fetch(`https://fakestoreapi.com/products?limit=${GLOBAL_CONFIG.productsPerPage}&sort=${GLOBAL_CONFIG.order}`);
  const arrayProduse = await raspunsRequest.json();

  printeazaProduse(arrayProduse);
};


async function trimiteComanda() {
  const continutBody = JSON.stringify({
    order: cartProduse.map((produs) => produs.id),
  });

  const promise = fetch("https://paulghiran.com/messages/order.php", {
    headers: {
      "Content-Type": "application/json",
      userkey: "london",
    },
    method: "POST",
    body: continutBody,
  });
}


/// INIT PAGE 

fetchData();
printeazaCart(cartProduse);


const productPerPageElement = document.querySelector('#productPerPage');
const orderElement = document.querySelector('#order');

productPerPageElement.addEventListener('change', function (event) {
  GLOBAL_CONFIG.productsPerPage = +event.target.value;
  fetchData();
})

orderElement.addEventListener('change', function (event) {
  GLOBAL_CONFIG.order = event.target.value;
  fetchData();
})