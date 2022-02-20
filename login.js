const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "userName"

const h1 = document.querySelector("#first-line");

let userName = localStorage.getItem(USERNAME);

if(userName != null){
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `Hello ${userName}`;
}
else{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(info){
    info.preventDefault();
    userName = loginInput.value;
    h1.innerText = `Hello ${userName}`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME, userName);
}

function onLogoutSubmit(info){
    info.preventDefault();
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME);    
}


loginForm.addEventListener("submit", onLoginSubmit); 
logoutForm.addEventListener("submit", onLogoutSubmit); 
