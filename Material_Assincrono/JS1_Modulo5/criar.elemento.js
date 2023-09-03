//Adicionar somente um elemento, primeiro devemos chamar o elemento e depois adicionar um texto e/ou formatação

let elementoJavaScript = document.createElement("li");
//console.log(elementoJavaScript);

elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"
console.log(elementoJavaScript)

//adicionar uma seção completa

let listadelinguagens = document.querySelector(".lista-linguagens");
listadelinguagens.appendChild(elementoJavaScript)

let postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML = 
`<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
    JavaScript é uma linguagem de programação
</p>`

let postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);
