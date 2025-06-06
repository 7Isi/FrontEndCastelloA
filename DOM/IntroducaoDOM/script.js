// Introdução ao estudo de DOM

//Selecionar e modificar um elemento
//getElementById -> variavel do tipo simples

let titulo = document.getElementById ("titulo");  //pega o elemento pelo id
console.log (titulo);  //ver o elemento

titulo.innerText = "Outro Título";  //modiffica o texto


//getElementsByClassName -> vetor (array)

let descricao = document.getElementsByClassName ("descricao");
console.log (descricao [0]);

descricao[0].innerText = "Outra Descrição";
descricao[1].style.color = "blue";
descricao[1].style.fontWeight = "bold";


//getElementsByTagName -> Vetor (array)

let p = document.getElementsByTagName ("p");
console.log (p[1]);
p[1].style.color = "violet";
p[1].style.fontWeight = "bold";
p[1].style.fontSize = "20px";

console.log (p[2]);
p[2].style.color = "purple";
p[2].style.fontSize = "10px";


//querySelector -> variavel do tipo simples

let paragrafo = document.querySelector("p");
console.log (paragrafo);
paragrafo.style.fontSize = "40px";


//querySelectorAll -> vetor (array)

let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color = "purple");


// Lançamento de eventos (EventListener)

//1ª forma (chamando direto no botão)
function mudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "gold";
}


//2ª forma (adicionando um ouvinte)
document.querySelector (".btn").addEventListener (
    "click", outraCorFundo
);

function outraCorFundo() {
    document.body.style.backgroundColor = "orange";
}