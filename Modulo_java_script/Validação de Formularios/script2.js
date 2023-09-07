// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameinput.classList.add("required-popup")
})


// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameinput.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);

    if(valor.length <3){
        username.usernameInput.classList.remove("correct");
        username.usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres";
        usernameHelper.classList.add("Visible");        
    } else {
        //Estilos dinâmicos caso o valor seja válido

        
    }

})