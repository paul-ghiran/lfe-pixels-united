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
