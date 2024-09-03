type Product = {
    name: string,
    price: number,
    image: string,
    id: number
}

type TypeSomethingWithStock = {
    stock: number
} 

type ProductWithStock = TypeSomethingWithStock | Product;


var listaProduse2: Product[] = [
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

  

const printeazaProdus2 = function (product: Product):boolean {
    // aici cod;
    return true
}

printeazaProdus2(323);
printeazaProdus2({
    name: "NumeProdus"
});
