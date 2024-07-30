const _formular = document.querySelector("#formular_principal");
const valoriFormular = {};

function handleSubmit(event) {
  event.preventDefault();

  const _forumarulFolosit = event.target;
  const listaInputuri = _forumarulFolosit.querySelectorAll("input");

  for (var i = 0; i < listaInputuri.length; i++) {
    const inputulCurent = listaInputuri[i];

    valoriFormular[inputulCurent.name] = inputulCurent.value;
  }
}

_formular.addEventListener("submit", handleSubmit);

const _butonInchidereModal = document.querySelector(".modal-footer button");
const _modal = document.querySelector(".modal");
const _butonDeschidereModal = document.querySelector("#modal-open");
const _modalBackground = document.querySelector(".modal-background");
const _modalContent = document.querySelector(".modal-content");
const _butonExempluLink = document.querySelector("#ex-default");

function inchideModal() {
  _modal.classList.add("hidden");
}

function deschideModal() {
  _modal.classList.remove("hidden");
}

_butonInchidereModal.addEventListener("click", inchideModal);
_butonDeschidereModal.addEventListener("click", deschideModal);
_modalBackground.addEventListener("click", inchideModal);
_modalContent.addEventListener("click", functieFaraPropagare);

function functieFaraPropagare(event) {
  event.stopPropagation();
}

function preventDefault(event) {
  event.preventDefault();
}

_butonExempluLink.addEventListener("click", preventDefault);

// Ex dropdown
const dateFormular = {};

const _valoareDropdown = document.querySelector(".dropdown__current-value");
const _dropdown = document.querySelector(".dropdown");
const _dropdownOptions = document.querySelector(".dropdown__options");

function toggleDropdown() {
  if (_dropdown.className == "dropdown") {
    _dropdown.classList.add("open");
  } else {
    _dropdown.classList.remove("open");
  }
}

function handleDropdownOptionsClick(event) {
  _valoareDropdown.innerText = event.target.innerText;

  dateFormular.filosofie = event.target.innerText;

  toggleDropdown();
}

_valoareDropdown.addEventListener("click", toggleDropdown);
_dropdownOptions.addEventListener("click", handleDropdownOptionsClick);
