let inputEmail = document.getElementById("email");
let InputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");

inputEmail.addEventListener("focus", ()=>{
    inputEmail.style.backgroundColor = "lightgreen";
});

inputEmail.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = ""
});

InputIdade.addEventListener("change", ()=>{
    alert("Certeza que quer alterar seus dados?")
});

formulario.addEventListener("submit", ()=>{
    alert("Dados enviados com Sucesso!")
});