// Galeria de Imagens Dinâmicas -> DOM

//elements com DOM
let inputUpload = document.getElementById ("upload");

let btnAddImagem = document.getElementById ("addImagem");

let divGaleria = document.getElementById ("galeria");

let divCarrossel = document.getElementById ("carrossel");


//vetor para receber as imagens 
let imagensUrl = [];


//ouvinte para o btnAddImagem
btnAddImagem.addEventListener ("click", () => {
    let imagemUrl = inputUpload.value.trim();
    
    if (imagemUrl === "") return;
    imagensUrl.push(imagemUrl);

    atualizarGaleria (); //função para atualizar as imagens da galeria 
    atualizarCarrossel (); //função para atualizar as imagens do carrossel

    inputUpload.value = "";
});


//atualizar Galeria
function atualizarGaleria () {
    divGaleria.innerHTML = "";
    imagensUrl.forEach((imagem, index) => {
        //card para colocar as imagens
        const divCard = document.createElement("div");
        divCard.classList.add ("card"); //adicionando a classe card ao div

        //imagem para receber a url
        const imgCard = document.createElement ("img");
        imgCard.src = imagem;

        //botão -> remover imagem
        const btnRemove = document.createElement ("button");
        
        btnRemove.innerText = "~X~";
        btnRemove.classList.add ("remove");
        btnRemove.addEventListener ("click", () => {  //remover a imagem da galeria
            imagensUrl.splicec (index, 1); //remover a imagem pelo index do vetor
            atualizarGaleria (); //recursão
            atualizarCarrossel ();
        });

        divCard.appendChild (imgCard);
        divCard.appendChild (btnRemove);
        divGaleria.appendChild (divCard);
    });
}


//função atualizar carrossel
function atualizarCarrossel () {
    divCarrossel.innerHTML = ""; //limpar o carrossel

    imagensUrl.forEach (imagem => {
        let img = document.createElement ("img"); //criando uma tag<HTML> img

        img.scr = imagem; //atribuindo o endereço da imagem -net/local
        img.style.width = "100%"; //garante o ajusto de 100% da imagem

        divCarrossel.appendChild (img); //img -> div
    });

    //ajuste do carrossel -> movimentação
    divCarrossel.style.width = `${imagensUrl.length * 100}%` //ajusta a largura do carrossel

    //iniciar carrossel
    iniciarCarrossel();
}

//função para iniciar o carrossel
function iniciarCarrossel () {
    let index = 0;

    setInterval (() => {
        index = (index+1)%imagensUrl.length;
        divCarrossel.style.transition = `transform ${(1+imagensUrl.length)/ imagensUrl.length}s ease-in-out`;
        divCarrossel.style.transform = `translateX (-${index*(100/imagensUrl.length)} %)`
    }, 3000)
}