//Métodos avançados de Array's

let numeros = [10 ,  20 ,  30 ,  40 ,  50];
console.log (numeros);


//map - percorre o array e realiza operações

let numerosDobro = numeros.map ( x => x*2 );
console.log (numerosDobro);


//filter - percorre e filtra o array

let numerosFiltro = numeros.filter (x => x>25);
console.log (numerosFiltro);

numerosFiltro = numerosDobro.filter (x => x>50);
console.log (numerosFiltro);


//combinar filter e map

let numFiltroDobro = numeros.filter (x => x<35).map (x => x/10);
console.log (numFiltroDobro);

numFiltroDobro = numerosDobro.filter (x => x<65).map (x => x/10);
console.log (numFiltroDobro);


//reduce --> array --> simples
//soma dos valores de um array

let Soma = numeros.reduce ((x,y) => (x+y));
console.log (Soma);