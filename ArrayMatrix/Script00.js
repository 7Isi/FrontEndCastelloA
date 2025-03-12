//Arrays e Matrix (vetores e matrizes)
//declar um array

let array = [];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let textoArray = ["Bola" ,  "Gato" ,  "SeiLá"];
let mixArray = [1, "Sessenta", true];


//como acessar os elementos?? (pelo indice = quant total de elementos -1)
console.log (textoArray [1]);  // "Gato"
console.log (numberArray [6]);  // 7


//como contar os elementos dum Array? (.length)
console.log (numberArray.length); //9
console.log (textoArray.length); //3


//pode se adiciaonar elementos num Array?
//pode se adicionar no começo (0) (unshift ())
textoArray.unshift ( "Peixe" );
console.log (textoArray);

//ou no final (push ())
textoArray.push ( "Ain" );
console.log (textoArray);


//pode se alterar o valor do Array?
//apenas chame o elemento
textoArray [0] = "Rapz";
console.log (textoArray);

//removendo um elemento do Array
//no começo (shift ())
textoArray.shift ();
console.log (textoArray);

//no meio ( splice (indice, quantidade))
textoArray.splice (2,1);
console.log (textoArray);

//e no finn (pop ())
textoArray.pop();
console.log (textoArray);


//percorrer um Array
//for
for(let i=0; i < numberArray.length; i++) {
    console.log ("Numero ["+i+"] =" +numberArray [i]);
}

//forEach
numberArray.forEach (element => {
    console.log (element);
});

//indexOf (retorna o indice do elemento)
console.log (mixArray.indexOf ("Sessenta"));

console.log (mixArray.indexOf (1000000));