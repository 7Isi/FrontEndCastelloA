//Funções de textos (String)

  let texto = "Aula de JavaScript";

  //contar os caracteres (length)
  console.log (texto.length);

 //MAIÚSCULAS e minúsculas
 console.log (texto.toUpperCase ()); //MAIÚSCULA

 console.log (texto.toLowerCase ()); //minúsculas


 //Partes do texto
 //substring
 console.log (texto.substring (0, 4));
 console.log (texto.substring (5, 7));
 console.log (texto.substring (8, 18));

 //slice(Quantidade)
 console.log (texto.slice(-10));

 //substituição de texto
 console.log (texto.replace ( "Java" ,  "Type"));

 //tesoura (trim)
 let texto1 = "  JavaScript  ";
 console.log (texto1);
 console.log (texto1.trim ());

 //separar texo (split)
 let linguagens = "JavaScript , Python , PHP , Java , C# , C++ , C";

 let vetorLinguagens = linguagens.split (" , ");
 console.log (linguagens);
 console.log (vetorLinguagens);