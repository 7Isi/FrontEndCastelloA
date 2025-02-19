//calculadora simples em js

//funções - Operações (+  -  *  /)

const prompt = require("prompt-sync") ();
//soma
function soma (a, b) {
    return (a + b);
}

//subtração
function sub (a, b) {
    return (a - b);
}

//multiplicação
function mult (a, b) {
    return (a * b);
}

//divisão 
function div (a, b) {
    return (a / b);
}


//menu de operações
function menuOperacoes () {

    console.log ("=== Calculadora Simples ===");
    console.log ("| 1. Soma                  |");
    console.log ("| 2. Subtração             |");
    console.log ("| 3. Multiplicação         |");
    console.log ("| 4. Divisão               |");
    console.log ("============================");

    let operacao = prompt ("Escolha a ação desejada: ");

    //operação dos nº
    let numero1 = Number (prompt ("Digite nº 1: "));
    let numero2 = Number (prompt ("Digite nº 2: "));
    
    let resultado;

    switch (operacao) {
        case "1":
            resultado = soma (numero1, numero2);
            break;

        case "2":
            resultado = sub (numero1, numero2);
            break;

        case "3":
            resultado = mult (numero1, numero2);
            break;

        case "4":
            if (numero2 == 0){
                console.log("Pode não");
                resultado = null
            } 
            else {
                resultado = div (numero1, numero2);
            }
            break;
    
        default:
            console.log("Operação inválida")
            break;
    }

    console.log ("Resultado: " +resultado);

}

    //execução do programa
    var continuar = true;

    while (continuar) {
        menuOperacoes ();
        
        let sair = prompt ("|1. Continuar|  |2. Sair|");

        if (sair == "2") {
            continuar = false;
            console.log ("Saindo...")
        }
    }