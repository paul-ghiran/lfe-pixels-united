const mesaje = [
  {
    autor: "Paul",
    text: "Salut",
  },
  {
    autor: "London",
    text: "Salut Paul",
  },
];

function printeazaMesaje() {
  const _chatbox = document.getElementById("chatbox");
  _chatbox.innerHTML = "";

  mesaje.forEach(printeazaUnMesaj);
}

function printeazaUnMesaj(obiectMesaj) {
  const _mesajNou = document.createElement("div");

  const _autorMesaj = document.createElement("b");
  _autorMesaj.innerText = obiectMesaj.autor + ":";

  const _continutMesaj = document.createElement("p");
  _continutMesaj.innerText = obiectMesaj.text;

  const _chatbox = document.getElementById("chatbox");

  _chatbox.appendChild(_mesajNou);
  _mesajNou.append(_autorMesaj);
  _mesajNou.appendChild(_continutMesaj);
}

printeazaMesaje();

function printeazaMesajulDinCutiaCurenta(event) {
  const _cutiaMesajului = event.target;
  const butonApasat = event.code;

  if (butonApasat == "Enter") {
    const IDulCutiei = _cutiaMesajului.id;
    var _cutieNumeUser;

    if(IDulCutiei == 'mesaj1') {
        _cutieNumeUser = document.getElementById('utilizator1');
    } else {
        _cutieNumeUser = document.getElementById('utilizator2')
    }

    const obiectMesajNou = {
        autor: _cutieNumeUser.value,
        text: _cutiaMesajului.value
    };

    printeazaUnMesaj(obiectMesajNou);
    _cutiaMesajului.value = '';
  }
}

const _mesaj1 = document.getElementById("mesaj1");
const _mesaj2 = document.getElementById("mesaj2");

_mesaj1.addEventListener("keypress", printeazaMesajulDinCutiaCurenta);
_mesaj2.addEventListener("keypress", printeazaMesajulDinCutiaCurenta);
