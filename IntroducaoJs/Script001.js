//Laços de Repetição
//for (inicio; fim; encremento)
for (let i=0 ; i<=100 ; i++){
    console.log(i);
}


//While (Condicional)
var numeroEscolhido = 24;
var continuar = true;
var contador = 0;

while (continuar) {
    contador++;
    let numeroSorteado = Math.round(Math.random()*30); //vai sortear um numero entre 0 30

    if(numeroEscolhido == numeroSorteado){
        console.log("Tá certo");
        console.log("N° de tentativas: " +contador);
        continuar = false;
    }
}