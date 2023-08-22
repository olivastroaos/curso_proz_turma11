document.addEventListener("DOMContentLoaded",function(){

const post02 = document.getElementById("post02")
const formulario = document.getElementById("formulario")
const posts = document.getElementById("posts")
const dataPost = document.getElementsByClassName("post-data")
const postTexto = document.getElementsByClassName("post-texto")
const listasRedes = document.getElementsByClassName("lista_redes")

console.log("post02");

const linkPrimeiroPost = document.querySelector("#post01 a")
const negritoSegundoPost = document.querySelector("#post02 strong")
const inputForm = document.querySelector("#formulario input")
const linkListaRedes = document.querySelector("lista_redes a")
const linksNav = document.querySelector("nav a");
const autor = document.querySelectorAll("article .post-autor")
const data = document.querySelectorAll("article .post-data")


console.log(
linkPrimeiroPost,
negritoSegundoPost,
inputForm,
linkListaRedes,
linksNav,
autor,
data
);

});