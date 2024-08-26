const _listaMesaje = document.querySelector("#lista-mesaje");
const _textarea = document.querySelector("#newMessage");
const _submit = document.querySelector("#post");

function printMessages(array) {
    _listaMesaje.innerHTML = '';

    array.forEach(printMessage);
}

function printMessage(messageObject) {
    const _messageElement = document.createElement('div');
    const _authorElement = document.createElement('h5');
    const _messageTextElement = document.createElement('p');

    _messageElement.appendChild(_authorElement);
    _messageElement.appendChild(_messageTextElement);

    _authorElement.innerText = messageObject.author;
    _authorElement.innerHTML += `<span> @ ${messageObject.time}</span>`;

    _messageTextElement.innerText = messageObject.message;

    _listaMesaje.appendChild(_messageElement);
}

function fetchMessagesFromServer() {
    const promise = fetch('https://paulghiran.com/messages/');

    promise.then(r => r.json()).then(function (arrayDeMesaje) {
        printMessages(arrayDeMesaje)
    })
}

// Liniile 36-38 si linia 40 sunt interschimbabile.
// setInterval( () => {
//     fetchMessagesFromServer();
// }, 1000)

setInterval(fetchMessagesFromServer, 1000)

function fetchPostMessage(mesaj) {
   //Am adaugat linia de cod pentru a obtine numele autorului din localStorage
    const selectedAuthor = localStorage.getItem('selectedAuthor') || 'necunoscut';

    const promise = fetch('https://paulghiran.com/messages/', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            //Am schimbat 'necunocut' cu const adaugat mai sus pentru a imi afisa numele de autor daca exista sau necunoscut daca nu exsita 
            author: selectedAuthor,
            message: mesaj
        })
    });

    promise.then(response => response.json()).then(console.log)
}

_submit.addEventListener('click', () => {
    const textMesaj = _textarea.value;

    fetchPostMessage(textMesaj);

    _textarea.value = '';
})


//Maria 
//Am creat un eventlisener. Atunci cand butonul de submit este apasat modalul meu sa treaca din display:none in display :block si asa se afiseaza
_submit.addEventListener('click', () => {
    document.getElementById('authorModal').style.display = 'block';
});

//
document.getElementById('saveAuthorButton').addEventListener('click', function () {
    const authorName = document.getElementById('authorInput').value;
    localStorage.setItem('selectedAuthor', authorName);

    document.getElementById('authorModal').style.display = 'none';

    const textMesaj = _textarea.value;
    fetchPostMessage(textMesaj);

    _textarea.value = '';
});