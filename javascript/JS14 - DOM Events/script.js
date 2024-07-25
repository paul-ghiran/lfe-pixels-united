const masini = [
  {
    model: "Jetta",
    pret: 30000,
    caiPutere: 140,
    caroserie: "sedan",
    cantitate: 10,
    cantitateInitiala: 10,
  },
  {
    model: "Polo",
    pret: 20000,
    caiPutere: 140,
    caroserie: "hatchback",
    cantitate: 10,
    cantitateInitiala: 10,
  },
  {
    model: "Golf",
    pret: 25000,
    caiPutere: 140,
    caroserie: "hatchback",
    cantitate: 10,
    cantitateInitiala: 10,
  },
  {
    model: "Passat",
    pret: 35000,
    caiPutere: 140,
    caroserie: "sedan",
    cantitate: 10,
    cantitateInitiala: 10,
  },
];

var totalVanzari = 0;
var masiniVandute = 0;

function creazaCardMasina(obiectMasina) {
  const elementMasina = document.createElement("div");
  elementMasina.classList.add("card");
  elementMasina.className += " masina";

  elementMasina.innerHTML = `
  <h3>${obiectMasina.model}</h3>
  <b>Tip:</b> ${obiectMasina.caroserie} (${obiectMasina.caiPutere})
  <br />
  ${obiectMasina.cantitate} / 
  ${obiectMasina.cantitateInitiala}
  `;

  elementMasina.onclick = function () {
    cumparaMasina(obiectMasina);
  };

  document.querySelector(".produse").appendChild(elementMasina);
}

function cumparaMasina(obiectMasina) {
  if (obiectMasina.cantitate == 0) {
    return false;
  }

  obiectMasina.cantitate -= 1;
  totalVanzari += obiectMasina.pret;
  masiniVandute += 1;

  const mesajNou = document.createElement("div");
  mesajNou.innerHTML += `<div>S-a vandut un ${obiectMasina.model} </div>
  <hr/>
  Total vanzari: ${totalVanzari} (${masiniVandute} masini)
    <hr/>
`;
  document.querySelector(".admin").appendChild(mesajNou);

  printeazaMasini();
}

function printeazaMasini() {
  document.querySelector(".produse").innerHTML = "";
  masini.forEach(creazaCardMasina);
}
/// Executia codului

// Initializare

const newStructure = document.createElement("main");
newStructure.innerHTML = `<div class="produse"></div>
<div class="admin">
    <button id="raportVanzari">Genereaza Raport</button>
    <button id="refaStocul">Refa Stocul</button>
  </div>
`;
document.querySelector("body").appendChild(newStructure);

// Inceput cod
printeazaMasini();

/// daca ar fi react:

/*
function Masini(masini) {
  return (
    <div>
      {masini.forEach(function (masina) {
        return <div className="masina car"> {masina.model} </div>;
      })}
    </div>
  );
}
  */

function cateMasiniLipsescDinStoc(masini) {
  var lipsescDinStoc = 0;
  masini.forEach(function (masina) {
    lipsescDinStoc += masina.cantitateInitiala - masina.cantitate;
  });
  return lipsescDinStoc;
}

function genereazaRaport() {
  const report = document.createElement("article");
  report.innerHTML = "<h3>Raport Vanzari</h3>";

  report.innerHTML += `<h5>De la ultimul restock s-au vandut</h5>
  <p> ${cateMasiniLipsescDinStoc(masini)} </p>`;

  this.parentNode.appendChild(report);
  console.log("Succes");

  inputDeTest.addEventListener("change", function (event) {
    console.log(event);
  });
}

const butonVanzari = document.getElementById("raportVanzari");

butonVanzari.addEventListener("click", genereazaRaport);

const inputDeTest = document.getElementById("testinput");

inputDeTest.addEventListener("input", function (event) {
  console.log(this.value);
});

inputDeTest.addEventListener("input", creazaWarning);

function creazaWarning(event) {
  console.warn(event.target.value);
}

inputDeTest.removeEventListener("input", creazaWarning)