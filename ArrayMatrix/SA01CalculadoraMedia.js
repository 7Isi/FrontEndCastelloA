//Situação de Aprendizagem 01 - Array e Matrix
//Calculadora de Média
const prompt = require("prompt-sync");

var notas = []; //declaração de um valor


//função para adicionar nota --> média 

function adicionarNota() {
    let nota = Number(prompt ("Informe a nota, por favor: "));
    notas.push (nota);
    console.log ("Nota adicionada com sucesso!");
}


//função para calcular a média

function calcularMedia () {
    if (notas.length == 0) return;
    let soma = notas.reduce ((x,y) = x+y);
    let mediaFinal = (soma/notas.length);
    console.log (" A média é "+mediaFinal);
}


//menu opções
function menuOpcoes () {
    
    let continuar = true;

    while (continuar) {
    console.log ("==== CALCULADORA DE MÉDIA ====");
    console.log ("| -~                     ~- |");
    console.log ("| -1.    Adicionar Nota     |");
    console.log ("| -2.    Calcular Média     |");
    console.log ("| -3.         Sair          |");
    console.log ("| -~                     ~- |");
    console.log ("==============================");

    let operacao = prompt("Informe a opção desejada: ");

        switch(operacao) {
            case "1": adicionarNota() ; 
                break;

            case "2": calcularMedia(); 
                break;

            case "3": continuar = false; 
                break;

            default: console.log ("Opção invalida"); 
                break;
        }   
    }

    console.log("Saindo...");

}

menuOpcoes();