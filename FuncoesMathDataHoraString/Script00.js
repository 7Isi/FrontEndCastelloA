// Estudo de Funções Mateméticas

//Funções Raiz e Potência
//raiz quadrada de 5

console.log (Math.sqrt (25)); //5

//potência
console.log (Math.pow (3, 2)); // 3² = 9

console.log (Math.pow (4, 3)); //4³ = 64

console.log (Math.pow(27, 1/3)); //27^(1/3) = 3


//Arredondamento
console.log (Math.round (4.4)); //4

console.log (Math.round (4.7)); //5

//arredonda para o valor mais alto (ceil)
console.log (Math.ceil (4.1)); //5

//arredonda para o valor mais baixo (floor)
console.log (Math.floor (4.9)); //4



//Aleatório (Random)
console.log (Math.random ()); //0 => 1

//0 => 100
console.log (Math.round (Math.random () *100));

//1 => 100 
console.log (Math.ceil (Math.random () *100));

//0 => 99
console.log (Math.floor (Math.random () *100));



//Max ,  Min ,  Absolute (Abs)
console.log (Math.max (1, 3, 6, 9, 2, 5)); //9

console.log (Math.min (1, 3, 6, 9, 2, 5)); //1

console.log (Math.abs (-10)); //10