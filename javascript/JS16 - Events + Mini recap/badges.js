const PERSOANE = [
  {
    nume: "Jeff Bezos",
    titlu: "Former CEO @ Amazon",
  },
  {
    nume: "Bill Gates",
    titlu: "Former CEO @ Microsoft",
  },
  {
    nume: "Elon Musk",
    titlu: "CEO @ Tesla",
  },
  {
    nume: "Tim Cook",
    titlu: "CEO @ Apple",
  },
];

function prezentarePersoana(event) {
  const numeleSelectat = event.target;

  const badge_ul_selectat = numeleSelectat.parentNode;

  const _name = badge_ul_selectat.querySelector(".badge__name");
  const _title = badge_ul_selectat.querySelector(".badge__title");

  const nume = _name.innerText;
  const titlu = _title.innerText;

  console.log(`Sunt ${nume} si am titlul ${titlu}`);
}

function transformaObiectulInElementHTML(obiectContinut) {
  const _badge = document.createElement("div");
  const _name = document.createElement("h3");
  const _title = document.createElement("h4");

  _badge.className = "badge";
  _name.className = "badge__name";
  _title.className = "badge__title";

  _name.innerText = obiectContinut.nume;
  _title.innerText = obiectContinut.titlu;

  _badge.appendChild(_name);
  _badge.appendChild(_title);

  _name.addEventListener("click", prezentarePersoana);

  return _badge;
}

function lipesteElementInPeople(_badge) {
  const _peopleElement = document.querySelector("#people");

  _peopleElement.appendChild(_badge);
  // Lipim in document in "#people" _badge-ul curent,
  //  care este si el un element HTML
}

function printeazaBadgeurile(arrayDePersoane) {
  document.querySelector("#people").innerHTML = "";

  const _allBadges = arrayDePersoane.map(transformaObiectulInElementHTML);
  // map trece peste fiecare element din array, si returneaza
  // un array de rezultate dupa ce apeleaza functia dintre paranteze
  // In cazul acesta: Un array de _badge(s) care sunt elemente HTML de la linia :51

  _allBadges.forEach(lipesteElementInPeople);
  // Aici trecem prin fiecare element din arra-ul de elemente HTML numit _allBadges
  //  si pentru fiecare element, apelam functia lipesteElementInPeople, care
  //  il pune in div-ul cu id people
}

printeazaBadgeurile(PERSOANE);
