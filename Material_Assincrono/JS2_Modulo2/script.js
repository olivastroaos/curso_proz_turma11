let numero = document.querySelector("h1");
let botao = document.querySelector("button");
let contagem = 0;

/*function adiconarUm(){
    contagem = contagem + 1;
    numero.innerText = contagem;
}

adiconarUm()

botao.addEventListener("click", adiconarUm);*/

/*botao.addEventListener("click", function(){
    contagem = contagem + 1;
    numero.innerText = contagem;
})*/

botao.addEventListener("click", ()=>{
    contagem = contagem + 1;
    numero.innerText = contagem;
})

