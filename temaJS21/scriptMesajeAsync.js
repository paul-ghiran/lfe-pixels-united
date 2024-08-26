const _listaMesaje = document.querySelector("#lista-mesaje");
const _textarea = document.querySelector("#newMessage");
const _submit = document.querySelector("#post");
const _submitAuthenticated = document.querySelector("#post-authenticated");
const _submitLogin = document.querySelector("#submit-login");
const _userInput = document.querySelector("#user");
const _passwordInput = document.querySelector("#password");

var userKeyGlobal;

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

    if(messageObject.image){
        const _imgElement=document.createElement('img')
        _messageElement.appendChild(_imgElement)
        _imgElement.src=messageObject.image


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

async function fetchPostMessage(mesaj, userKey,image) {
    let raspunsJSON;
    if (userKey) {
        const promise = await fetch('https://paulghiran.com/messages/authenticated_message.php', {
            headers: {
                'Content-Type': 'application/json',
                userKey: userKey
            },
            method: "POST",
            body: JSON.stringify({
                message: mesaj,
                image:image
            })
        });

        raspunsJSON = await promise.json();
        
        
    } else {
        const promise = await fetch('https://paulghiran.com/messages/', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                author: 'necunoscut',
                message: mesaj
            })
        });

        raspunsJSON = await promise.json();
     
    }
    console.log(raspunsJSON)
}

_submit.addEventListener('click', () => {
    const textMesaj = _textarea.value;
    
    let imgSrc = textMesaj.split(" ").find(word => word.startsWith("http"));
    const mesajDePrintat=textMesaj.replace(imgSrc,' ')

    fetchPostMessage(mesajDePrintat);

    _textarea.value = '';
});

_submitLogin.addEventListener('click', fetchLogin);

async function fetchLogin() {
    const user = _userInput.value;
    const password = _passwordInput.value;

    try {

        const raspunsServer = await fetch('https://paulghiran.com/messages/login.php',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({
                    user: user,
                    password: password
                })
            })

        const userGasit = await raspunsServer.json();
        const obiectUser = userGasit.user;
        
        const { userKey } = obiectUser;
        userKeyGlobal = userKey;
        console.log(userKeyGlobal)
        const _loginModal = document.querySelector('.login.modal');

        _loginModal.style.display = 'none'

    } catch (eroare) {
        console.log(eroare);
        alert("User sau parola gresit/a")
    }

}






_submitAuthenticated.addEventListener('click', () => {
    const textMesaj = _textarea.value;

    
   
    let imgSrc = textMesaj.split(" ").find(word => word.startsWith("http"));
    const mesajDePrintat=textMesaj.replace(imgSrc,' ')

    
    console.log(mesajDePrintat)
    
    fetchPostMessage(mesajDePrintat, userKeyGlobal,imgSrc);
   
    _textarea.value = '';
});


