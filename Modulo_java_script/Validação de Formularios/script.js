// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório USERNAME
usernameInput.addEventListener("focus", function(){
    usernameInput.classList.add("required-popup")
})

// Mostrar popup de campo obrigatório EMAIL
emailInput.addEventListener("focus", function(){
    emailInput.classList.add("required-popup")
})


// Ocultar popup de campo obrigatório USERNAME
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-poup")
})

// Ocultar popup de campo obrigatório EMAIL
emailInput.addEventListener("blur", function(){
    emailLabel.classList.remove("required-poup")
})

// Validar valor do input USERNAME
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);
    
    if(valor.length < 3){
        //Estilos dinamicos caso o valor nao seja válido
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres"
        usernameHelper.classList.add("visible");
    } else {
        //Estilos dinâmicos caso o valor seja válido
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
})

// Validar valor do input EMAIL
emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);
    
    if(valor.length < 3){
        //Estilos dinamicos caso o valor nao seja válido
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Seu username deve ter 3 ou mais caracteres"
        emailHelper.classList.add("visible");
    } else {
        //Estilos dinâmicos caso o valor seja válido
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    }
})