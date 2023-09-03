//capturar o elemento h2 do DOM

//alterar a cor e o tamanho da fonte do elemento h2

//1. Insira um comentário para indicar uma primeira interação do usuário e capture o input do username do DOM


//2. Adicione a classe "error" ao input do usuário e mostre o resultado no navegador


//alterarem a estilização do botão usando JavaScript



//
let h2element = document.querySelector('h2');
let usuarioInput = document.querySelector('#login-usuario');
let senhaInput = document.querySelector('#login-senha');
let paragrafo = document.querySelector('p');
let loginButton = document.querySelector('button');

paragrafo[1].classList.add('visible');

usuarioInput.classList.add('correct');
usuarioInput.setAttribute('placeholder','Adriano')



