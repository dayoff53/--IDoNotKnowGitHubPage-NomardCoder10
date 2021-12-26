const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function paintGreeting(username)
{
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit (event){
    event.preventDefault();
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}


//submit이 되었을 경우 onLoginSubmit을 실행하여 값을 가져온다.
loginFrom.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
{
    if(savedUsername === null){
        loginFrom.classList.remove(HIDDEN_CLASSNAME);
        loginFrom.addEventListener("submit", onLoginSubmit);
    }else{
        paintGreeting(savedUsername);
    }
}