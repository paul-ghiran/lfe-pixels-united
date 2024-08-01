const PERSOANE = [
  {
    nume: "Jeff Bezos",
    titlu: "Former CEO @ Amazon",
  },
  {
    nume: "Bill Gates",
    titlu: "Former CEO @ Microsoft",
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

function initiazaElement(obiectContinut) {
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

function scrieElement(obiectContinut) {
  const _badge = document.createElement("div");
  _badge.className = "badge";
  _badge.innerHTML = `
        <h3 class="badge__name">${obiectContinut.nume}</h3>
        <h4 class="badge__title">${obiectContinut.titlu}</h4>
    `;

  const _name = _badge.querySelector(".badge__name");
  _name.addEventListener("click", prezentarePersoana);

  return _badge;
}

const el1 = initiazaElement(PERSOANE[0]);
const el2 = scrieElement(PERSOANE[1]);

document.querySelector("#people").appendChild(el1);
document.querySelector("#people").appendChild(el2);
