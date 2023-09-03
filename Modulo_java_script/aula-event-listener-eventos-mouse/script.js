let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

//Variaveis/Dados
let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01');
let quantidade_produto_01 = document.querySelector('#quantidade-produto-01');

let btnAdicionarProduto02 = document.querySelector('#btn-adicionar-produto-01');
let quantidade_produto_02 = document.querySelector('#quantidade-produto-01');



//Funções
function subtrairUm(){
  quantidade_produto_01.value = Number(quantidade_produto_01.value) - 1;
}

function adicionarUm(){
  quantidade_produto_02.value = Number(quantidade_produto_02.value) + 1;
}


//Eventos
btnSubtrairProduto01.addEventListener("click", subtrairUm)
btnAdicionarProduto02.addEventListener("click", adicionarUm)