const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

// Criando o elemento
const article = document.createElement('article');
const article2 = document.createElement('article');

// Populando o elemento
for ( i = 0; i < arrayPostagens.length; i++){
article.innerHTML = 
` <h3>${arrayPostagens[1].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
  <div class="data">${arrayPostagens[1].data}</div>
  <p>${arrayPostagens[1].texto}</p>`


article2.innerHTML = `
<h3>${arrayPostagens[1].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
  <div class="data">${arrayPostagens[1].data}</div>
  <p>${arrayPostagens[1].texto}</p>
  
`
}

// Adicionando na DOM
const main = document.querySelector('main')
main.appendChild(article)
main.appendChild(article2)

// adicionar o id "post-2" ao elemento criado.

article.setAttribute('id', 'post-2')
article.setAttribute('id', 'post-3')



