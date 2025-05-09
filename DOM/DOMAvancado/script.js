//Manipulação de HTML e CSS pelo JavaScript -> DOM Avançado

//criar um Header -> DOM
let header = document.createElement ("header");
header.style.backgroundColor = "blue";
header.style.color = "aliceblue";
header.style.textAlign = "center";
header.style.height = "8vh";
header.style.width = "100%";

document.body.appendChild (header); //adicionando o header dentro do body
document.body.style.margin = 0;

//adicionando navbar no header
let navBar = document.createElement ("div");
navBar.style.display = "flex";
navBar.style.justifyContent = "space-around";
navBar.style.alignItems = "center";
navBar.style.height = "96%";
navBar.style.width = "96%";
navBar.style.fontFamily = "Comic Sans MS";
navBar.style.fontSize = "4vh";

header.appendChild (navBar); //adicionar navbar dentro do header

//adicionar elementos a navbar
let menuItens = ["Home", "Sobre", "Produtos", "Suporte"];
menuItens.forEach(item => {
    let a = document.createElement ("a");
    a.innerText = item;
    navBar.appendChild (a);
})

//footer?
let footer = document.createElement ("footer");
footer.style.backgroundColor = "blue";
footer.style.color = "aliceblue"
footer.style.justifyContent = "space-around";
footer.style.textAlign = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
footer.style.height = "7vh";

document.body.appendChild (footer);

let navBarFooter = document.createElement ("div");
navBarFooter.style.display = "flex";
navBarFooter.style.justifyContent = "space-between";
navBarFooter.style.fontFamily = "Arial";
navBarFooter.style.fontSize = "2vh";
navBarFooter.style.width = "100%";
navBarFooter.style.height = "100%";

footer.appendChild (navBarFooter);


let bottomItens = ["CopyRight \u00A9 2025", "ENION Software", "Onde Judas Perdeu as Botas/Localização Longe da Sua"];
bottomItens.forEach(item => {
    let p = doccument.createElement ("p");
    p.innerText = item;
    bottomItens.appendChild (p);
});


// Clonagem de Elementos no DOM
let btnClonar = document.createElement ("button");
btnClonar.innerText = "Clonar";
document.body.appendChild (btnClonar);

//criar o card
let card = document.createElement ("div")
card.style.width = "125px";
card.style.height = "175px";
card.style.backgroundColor = "blueAccent";
card.style.color = "indigo";
card.style.margin = "10px";

//containerCards
let container = document.createElement ("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";
container.style.width = "88%";
container.style.margin = "auto";

document.body.appendChild (container);


//criar a função clonar do botão (cloneNode)
btnClonar.addEventListener ("click", () => {
    let cardClone = card.cloneNode(true);

    container.appendChild (cardClone);
});


//Modificação de classe com classelist
let checkDarkMode = document.createElement ("input");
checkDarkMode.type = "checkbox";
checkDarkMode.id = "darkMode";

let divDarkMode = document.createElement ("div");
divDarkMode.style.display = "flex";
divDarkMode.style.justifyContent = "center";
divDarkMode.style.top = "2px";
divDarkMode.style.right = "15px";
divDarkMode.style.position = "absolute";

let p = document.createElement ("p");
p.innerText = "Dark Mode";
p.style.color = "blueAccent";

divDarkMode.appendChild (p);

divDarkMode.appendChild (checkDarkMode);

document.body.appendChild(divDarkMode);


//funcionalidade do darkmode
checkDarkMode.addEventListener ("change", () => {
    document.body.classList.toggle("darkMode");
});


//Eventos Avançados
//eventos de teclado

document.addEventListener ("keydown", (event) => {
    console.log("Tecla Precionada: " +event.key);
});

//eventos com o teclado, input com sugestão de pesquisa
let input = document.createElement ("input");
input.type = "text";
input.placeholder = "Digite sua Pesquisa";
input.id = "inputPesquisa";

document.body.appendChild (input);

let lista = document.createElement ("ul");
lista.style.listStyle = "none";
lista.style.padding = "0";
lista.style.margin = "0";
lista.id = "listaPesquisa";

document.body.appendChild (lista);

let listaItem = ["JavaScript", "HTML", "CSS", "React", "Angular", "Vue", "Node"];


//método para susgestão de pesquisa
input.addEventListener ("keyup", () => {
    lista.innerHTML = "";
    listaItem.forEach (item => {
        let termo = input.value.toLowerCase(); //toLowerCase - transforma em letra minuscula
        if(item.toLowerCase ().includes (termo)){
            let li = document.createElement("li");
            li.innerText = item;
            lista.appendChild (li);

            //adicionar função de clicar na palavra
            li.style.cursor = "pointer";
            li.addEventListener ("click", () => {
                input.value = item;
                lista.innerHTML = "";
            })
        }
    })
});


//verificação de formulário
let form = document.createElement ("form");
form.id = "formCadastro";

let inputNome = document.createElement ("input");
inputNome = "text";
inputNome.placeholder = "Informe Seu Nome";

form.appendChild (inputNome);

let inputEmail = document.createElement ("input");
inputEmail.type = "email";
inputEmail.placeholder = "Informe Seu E-mail";

form.appendChild (inputEmail);

let inputSenha = document.createElement ("input");
inputSenha.type = "password";
inputSenha.placeholder = "Informe Sua Senha";

form.appendChild (inputSenha);

let btnEnviar = document.createElement ("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";

form.appendChild (btnEnviar);

document.body.appendChild (form);


//Validação do Formulário
let mensagem = document.createElement ("p");

document.body.appendChild (mensagem);

form.addEventListener ("submit", (event) => {
    event.preventDefault(); //não deixa o submit racarregar a tela
    
    let nome = inputNome.value;

    let email = inputEmail.value;

    let senha = inputSenha.value;

    if(nome === "" || email === "" || senha === ""){
        mensagem.innerText = "Por favor, Todos os Campos Devem Ser Preenchidos";
        mensagem.style.color = "violet";
    } 
    
    else{
        mensagem.innerText = "Cadastro Realizado Com Sucesso!!";
        mensagem.style.color = "blue";
        nome = "";
        email = "";
        senha = "";

        form.reset();
    }
});