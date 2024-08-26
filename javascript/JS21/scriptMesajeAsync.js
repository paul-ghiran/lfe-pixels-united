const _listaMesaje = document.querySelector("#lista-mesaje");
const _textarea = document.querySelector("#newMessage");
const _submit = document.querySelector("#post");
const _submitAuthenticated = document.querySelector("#post-authenticated");
const _submitLogin = document.querySelector("#submit-login");
const _userInput = document.querySelector("#user");
const _passwordInput = document.querySelector("#password");
const _imageURL = document.querySelector("#imageURL");
var userKeyGlobal;
var usernameGlobal;

function printMessages(array) {
    _listaMesaje.innerHTML = '';

    array.forEach(printMessage);
}

function printMessage(messageObject) {
    console.log(messageObject); 
    const _messageElement = document.createElement('div');
    const _authorElement = document.createElement('h5');
    const _messageTextElement = document.createElement('p');

    _messageElement.appendChild(_authorElement);
    _messageElement.appendChild(_messageTextElement);

    _authorElement.innerText = messageObject.author;
    _authorElement.innerHTML += `<span> @ ${messageObject.time}</span>`;

    _messageTextElement.innerText = messageObject.message;

    if (messageObject.image) {
        const _imageElement = document.createElement('img'); //adauga un img element
        _imageElement.src = messageObject.image; //seteaza sursa imaginii
        _imageElement.alt = 'Image'; //adauga un text alternativ pentru imagine
        _imageElement.style.maxWidth = '100%'; //nu lasa img sa fie foarte mare
        _messageElement.appendChild(_imageElement); // adauga imaginea la elementul mesaj
    }

    if (messageObject.authenticated != "0") {
        _authorElement.style.color = 'darkblue';
        _authorElement.style.fontSize = '1.1em';
    }

    _listaMesaje.appendChild(_messageElement);
}

const fetchMessagesFromServer = async () => {
    const raspunsRequest = await fetch('https://paulghiran.com/messages/');

    const arrayDeMesaje = await raspunsRequest.json();

    printMessages(arrayDeMesaje)
}

// Liniile 36-38 si linia 40 sunt interschimbabile.
// setInterval( () => {
//     fetchMessagesFromServer();
// }, 1000)

setInterval(fetchMessagesFromServer, 5000)

async function fetchPostMessage(mesaj, userKey,imageUrl = '') {
    let raspunsJSON;

    //Am creat un obiect cu msg si img
    const body = {
        message: mesaj,
        image: imageUrl,
        author: usernameGlobal
    };
    if (userKey) {
        const promise = await fetch('https://paulghiran.com/messages/authenticated_message.php', {
            headers: {
                'Content-Type': 'application/json',
                userKey: userKey
            },
            method: "POST",
            body: JSON.stringify(body) //Va trimite obiectul body cu ms si img
        });

        raspunsJSON = await promise.json();
    } else {

        body.author = 'necunoscut';//daca nu este autentificat va merge cu numele de necunoscut

        const promise = await fetch('https://paulghiran.com/messages/', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(body)//Va trimite obiectul body cu ms si img
        });

        raspunsJSON = await promise.json();
    }
}

_submit.addEventListener('click', () => {
    const textMesaj = _textarea.value;

    fetchPostMessage(textMesaj);

    _textarea.value = '';
});

_submitLogin.addEventListener('click', fetchLogin);

async function fetchLogin() {
    const user = _userInput.value;
    const password = _passwordInput.value;

    try {
        const raspunsServer = await fetch('https://paulghiran.com/messages/login.php', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                user: user,
                password: password
            })
        });

        const userGasit = await raspunsServer.json();
        const obiectUser = userGasit.user;

        if (obiectUser) {
            const { userKey } = obiectUser;
            userKeyGlobal = userKey;

            usernameGlobal = user;

            const _loginModal = document.querySelector('.login.modal');
            _loginModal.style.display = 'none';
        } else {
            alert("User sau parola gresit/a");
        }
    } catch (eroare) {
        console.log(eroare);
        alert("User sau parola gresit/a");
    }
}


_submitAuthenticated.addEventListener('click', () => {
    const textMesaj = _textarea.value;
    const imageUrl = _imageURL.value; //va luat url

    fetchPostMessage(textMesaj, userKeyGlobal,imageUrl);

    _textarea.value = '';
    _imageURL.value = '';//reseteaza capul cu url img
});


