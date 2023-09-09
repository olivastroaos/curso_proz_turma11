// Definir variáveis  / capturade elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Funções
// atualizar o  DOM
function atualizarDOM(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarDOM()

// capturar elementos para aumentar a quantidade 
let btnAdicionarUm = document.getElementById('btn-adicionar-produto-01');
let quantidadeProduto01 = document.getElementById('quantidade-produto-01');
let btnSubtrairUm = document.getElementById('btn-subtrair-produto-01');

let valorProduto01 = 11.66

// função 
function adicionarUm(){
  // incrementar a quantidade do produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;  
  // incrementar a quantidade do valor subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  // atualizar o valor do subtotal
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01
  // atualizar o DOM
  atualizarDOM()
}

function subtrairUm(){
  // subtrair a quantidade do produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;  
  // subtrair a quantidade do valor subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
  // atualizar o valor do subtotal
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01
  // atualizar o DOM
  atualizarDOM()
}

// Eventos
btnAdicionarUm.addEventListener("click", adicionarUm)
btnSubtrairUm.addEventListener("click", subtrairUm)


