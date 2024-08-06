// Scope: Function level (var)
function primulOras() {
  var numeleOrasului = "Televizoreni";

  console.log("eu fost primul", numeleOrasului);
}

function oras() {
  var numeleOrasului = "Curajenii De Munte";

  function cartier() {
    console.log("1:", numeleOrasului);

    var numeleCartierului = "Bradet";
    console.log("2:", numeleCartierului);
  }

  function cartier2() {
    console.log("4:", numeleOrasului);

    var numeleCartierului = "Central";
    console.log("5:", numeleCartierului);
  }
  cartier();

  console.log("2.5:", numeleOrasului);

  cartier2();
}

function altOras() {
  const numeleOrasului = "ZALAO";
  console.log("7", numeleOrasului);
}

primulOras();
oras();

// console.log("6", numeleOrasului);
// altOras();

// console.log("8", numeleOrasului);

// SCOPE- Block level - const si let

console.log("~~~~~~~~~~~ BLOCK LEVEL")
function orasel() {
  const numeOras = "codesti";

  if (2 == "2") { // if-ul are un block propriu, si un block level scope propriu, la fel orice are acolade
    const numeBlock = "whatever";
    let locuitoriBlock = "55";

    console.log("NB", numeBlock);
    console.log("LB", locuitoriBlock);
    var sneakyVar = 100;

    console.log("SV", sneakyVar);
  }
  
  if ( 3 == "3") {
    const numeBlock = "whatever3tokyodrift";
    console.log("NB", numeBlock);
  }

  console.log("NO", numeOras)
  console.log("SV", sneakyVar);
  console.log("LB2", locuitoriBlock)
}

orasel();