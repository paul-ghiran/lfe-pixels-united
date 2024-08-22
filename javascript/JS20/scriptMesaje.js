const _modal = document.querySelector("#modal-author");
const _close = document.querySelector(".close");
const _submitMessage = document.querySelector("#submitMessage");
const _sendMessage = document.querySelector("#sendMessage");
const _authorInput = document.querySelector("#authorName");
const _textarea = document.querySelector("#newMessage");
const _listaMesaje = document.querySelector("#lista-mesaje");

// Deschide modalul la click pe butonul de submit
_submitMessage.addEventListener("click", () => {
  if (_textarea.value.trim()) {
    _modal.style.display = "block";
  } else {
    alert("Vă rugăm să introduceți un mesaj înainte de a trimite.");
  }
});

// Închide modalul
_close.addEventListener("click", () => {
  _modal.style.display = "none";
});

// Trimite mesajul cu autorul specificat
_sendMessage.addEventListener("click", () => {
  const author = _authorInput.value;
  const message = _textarea.value;

  if (author.trim()) {
    fetchPostMessageWithAuthor(author, message);
    _authorInput.value = "";
    _textarea.value = "";
    _modal.style.display = "none";
  } else {
    alert("Vă rugăm să introduceți un autor.");
  }
});

function fetchPostMessageWithAuthor(author, mesaj) {
  const promise = fetch("https://paulghiran.com/messages/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      author: author,
      message: mesaj,
    }),
  });

  promise.then((response) => response.json()).then(console.log);
}

function printMessages(array) {
  _listaMesaje.innerHTML = "";

  array.forEach(printMessage);
}

function printMessage(messageObject) {
  const _messageElement = document.createElement("div");
  const _authorElement = document.createElement("h5");
  const _messageTextElement = document.createElement("p");

  _messageElement.appendChild(_authorElement);
  _messageElement.appendChild(_messageTextElement);

  _authorElement.innerText = messageObject.author;
  _authorElement.innerHTML += `<span> @ ${messageObject.time}</span>`;

  _messageTextElement.innerText = messageObject.message;

  _listaMesaje.appendChild(_messageElement);
}

function fetchMessagesFromServer() {
  const promise = fetch("https://paulghiran.com/messages/");

  promise
    .then((r) => r.json())
    .then(function (arrayDeMesaje) {
      printMessages(arrayDeMesaje);
    });
}

setInterval(fetchMessagesFromServer, 1000);

// Închide modalul dacă utilizatorul dă click în afara acestuia
window.addEventListener("click", (event) => {
  if (event.target == _modal) {
    _modal.style.display = "none";
  }
});
