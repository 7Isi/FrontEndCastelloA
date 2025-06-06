//DOM -> Jogo Quiz Interativo

let perguntas = []; //vetor pra armazenamento das perguntas

let perguntaAtual = 0; //índice para identificação da pergunta atual


//DOM -> elementos

let perguntaElement = document.getElementById ("pergunta");

let opcoesElement = document.getElementById ("opcoes");

let proximaElement = document.getElementById ("proxima");

let respostaElement = document.getElementById ("resposta");


//fetch --> pegar as perguntas do arquivo Json
fetch ("perguntas.json")
    .then (response => response.json())
    .then (data => {
        perguntas = data;

        carregarPerguntas(); //função para carregar as penguntas no html
    })
    .catch (
        error => console.error("Erro ao Carregar as Perguntas: " +error)
    );


//DOM --> funções
function carregarPerguntas() {
    respostaElement.innerText = "";
    proximaElement.disabled = true;

    //perguntas foram carregadas?
    if (perguntaAtual >= perguntas.length) {
        if (perguntaAtual == 0) {
            perguntaElement.innerText = "Erro ao Carregar as Perguntas";
            return;
        }

        perguntaElement.innerText = "Quiz Finalizado";

        opcoesElement.innerHTML = "";

        proximaElement.style.display = "none";

        return;
    }
    
    //caso dê tudo certp -> perguntas carregadas
    //mostrar as perguntas na tela
    let p = perguntas[perguntaAtual];

    perguntaElement.innerText = p.pergunta; 
    opcoesElement.innerHTML = ""; //limpo as opções

    //preencher as opções
    p.opcoes.forEach (opcao => {
        let btnOpcao = document.createElement ("button");

        btnOpcao.innerText = opcao; //atribuir texto ao botão
        btnOpcao.classList.add ("opcao");
        btnOpcao.addEventListener ("click", () => verificarResposta(opcao, btnOpcao));

        opcoesElement.appendChild (btnOpcao);
    });
}


//função para verificar respostas
function verificarResposta (opcao, btnOpcao) {
    const respostaCorreta = perguntas[perguntaAtual].resposta;

    //verificar resposta
    if (opcao === respostaCorreta) {
        btnOpcao.classList.add ("correta"); //add classe correta ao btnOpcao
        respostaElement.innerText = "Acertou, prabéns!" 
    }
    else {
        btnOpcao.classList.add ("errada");
        respostaElement.innerText = "Errou! A resposta correta era: " +respostaCorreta;
    }

    //desabilitar os botões de respostas
    document.querySelectorAll (".opcao").forEach (btn => btn.disabled = true);

    proximaElement.disabled = false;
    proximaElement.addEventListener ("click", () => {
        perguntaAtual++;
        carregarPerguntas ();
    })
}