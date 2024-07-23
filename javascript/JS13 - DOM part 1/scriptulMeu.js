const butonSubmit = document.querySelector("#submit-todo");
const listaElementeToDo = document.getElementsByClassName("element-todo");

function creazaElementNou(textElement) {
  const elementulNou = document.createElement("li");
  elementulNou.className = "element-todo";
  elementulNou.innerText = textElement;

  const listaULElemente = document.getElementById("elemente-todo");
  listaULElemente.appendChild(elementulNou);
}

butonSubmit.onclick = function () {
  const inputPeCareIlCitesc = document.getElementById("input-todo");
  const textulDinInput = inputPeCareIlCitesc.value;

  creazaElementNou(textulDinInput);
  inputPeCareIlCitesc.value = "";

  asigneazaOnclickLaFiecareElement();
};

function apasaElementulAlXlea(numarElement) {
  const elementulPeCareVreauSaIlModific = listaElementeToDo[numarElement];
  const clasaElementului = elementulPeCareVreauSaIlModific.className;

  if (clasaElementului.includes("complet")) {
    elementulPeCareVreauSaIlModific.className = "element-todo";
  } else {
    elementulPeCareVreauSaIlModific.className = "element-todo complet";
  }
}

function asigneazaOnclickLaFiecareElement() {
  for (var i = 0; i < listaElementeToDo.length; i++) {
    const elementulCurent = listaElementeToDo[i];
    const indexCurent = i;

    elementulCurent.onclick = function () {
      apasaElementulAlXlea(indexCurent);
    };
  }
}

asigneazaOnclickLaFiecareElement();