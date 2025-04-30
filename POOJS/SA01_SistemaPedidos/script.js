//sistema de pedidos

//models - classe cliente, classe produto e a classe pedido
//view - html
//controller - sistemapedidos

//model

class Cliente {
    //atributos privados (encapsulamento)
    #id
    #nome
    #cpf


    //construtor
    constructor(id, nome, cpf) {
        this.#id = id,
        this.#nome = nome,
        this.#cpf = cpf
    }


    //métodos publicos (getters and setters)
    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    getCpf() {
        return this.#cpf;
    }
}



class Produto {
    //atributos privados (encapsulamento)
    #id;
    #nome;
    #preco;


    //construtor
    constructor(id, nome, preco) {
        this.#id = id,
        this.#nome = nome,
        this.#preco = preco
    }


    //métodos publicos (getters and setters)
    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }
}



class Pedido {
    //atributos
    #id;
    #cliente;
    #itens;
    #desconto;
    #valorTotal;


    //construtor
    constructor (id, cliente, itens, desconto) {
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#valorTotal = this.calcularValorTotal();
    }


    //método valor total
    calcularValorTotal() {
        let total = this.#itens.reduce((acc, item) => 
            acc + item.produto.getPreco() * item.quantidade);
        return total - (total * (this.#desconto/100));
    }

    //getters and setters
    getId () {
        return this.#id;
    }

    getCliente () {
        return this.#cliente;
    }

    getItens () {
        return this.#itens;
    }

    getDesconto () {
        return this.#desconto;
    }

    getValorTotal () {
        return this.#valorTotal;
    }
}



//controller

class SistemaPedidos {
    //construtor
    constructor() {
        this.clientes = []; //vetor para armazenar os clientes
        this.produtos = []; //vetor para armazenar os produtos
        this.pedidos = []; //vetor para armazenar os pedidos
    }


    //métodos de integração
    cadastrarCliente() {
        const nome = document.getElementById("clienteNome"); //DOM - inputs (html)
        const cpf = document.getElementById("clienteCpf");
        
        if(!nome.value.trim() || !cpf.value.trim())
            return alert("Todos os campos devem ser preenchidos corretamente");

        //cadastrar o cliente - instanciando um objeto da classe cliente
        const cliente = new Cliente(
            this.clientes.length +1, //id
            nome.value.trim(), //nome
            cpf.value.trim() //cpf
        )

        //adiciono no vetor
        this.clientes.push(cliente);
        nome.value = "";
        cpf.value = "";

        this.atualizarCliente();
    }


    atualizarCliente() {
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        const select = document.getElementById("selectClientes");
        select.innerHTML = "<option value= ''> Selecione um Cliente </option>";

        //preencher a lista e o select com os clientes cadastrados
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();

            lista.appendChild(li);

            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();

            select.appendChild(option);
        });
    }


    cadastrarProduto() {
        const nome = document.getElementById("produtoNome"); //DOM HTML
        const preco = document.getElementById("produtoPreco"); //DOM HTML

        if(!nome.value.trim() || preco<=0)
            return alert ("Informe os dados do produto corretamente, por favor")


        //instanciar um obj
        const produto = new Produto ( //MODEL
            this.produtos.length +1, //id do produto = quant do produtos + 1
            nome.value.trim(),
            preco.value,
        )


        //adiciono o produto no vetor
        this.produtos.push(produto);
        nome.value = "";
        preco.value = "";

        this.atualizarProduto();
    }


    atualizarProduto () {
        const lista = document.getElementById("listaProdutos");
        lista.innerHTML = "";

        const divProdutos = document.getElementById("produtosDisponiveis");
        divProdutos.innerHTML = "";

        //percorrer a lista de produtos
        this.produtos.forEach(produto => {
            //lista produtos
            const li = document.createElement("li");
            li.textContent = `${produto.getNome()} - R$ ${produto.getPreco()}`;

            lista.appendChild(li);


            //produtos disponiveis
            const checkBox = document.createElement("input");
            checkBox.type = "checkBox";
            checkBox.value = produto.getId();

            const label = document.createElement("label");
            label.textContent = `${produto.getNome()} - R$ ${produto.getPreco()}`;

            const quantidade = document.createElement("input");
            quantidade.type = "number";
            quantidade.value = 1;
            quantidade.min = 1;

            divProdutos.appendChild(checkBox);
            divProdutos.appendChild(label);
            divProdutos.appendChild(quantidade);
            divProdutos.appendChild(document.createElement("br"));
        });
    }

    
    //criar gerenciamento de pedidos
    gerarPedido() {
        const clienteId = parseInt(document.getElementById("selectClientes").value);

        const cliente = this.clientes.find(c => c.getId() === clienteId); //selecionando na lista clientes o cliente pelo id

        if(!clienteId) 
            return alert ("Selecione um Cliente");

        const desconto = parseFloat(document.getElementById("desconto").value || 0);

        let itens =  [];
        const produtosDisponiveis = document.querySelectorAll("#produtosDisponiveis input[type= 'checkBox']");

        const quantidadeSelecionadas = document.querySelectorAll("#produtosDisponiveis input[type= 'number']");

        produtosDisponiveis.forEach((checkBox,index) => {
            if(checkBox.checked){
                const produtoId = parseInt(checkBox.value);
                const produto = this.produtos.find(p => p.Id() === produtoId);

                const quantidade = parseInt(quantidadeSelecionadas[index].value);

                itens.push({produto,quantidade});
            }
        });


        if(itens.length === 0) return alert ("Selecione algum produto para continuar!!");

        //instanciar o pedido
        const pedido = new Pedido(
            this.pedidos.length +1,
            cliente,
            itens,
            desconto,
            quantidade
        );

        this.pedidos.push(pedido);

        //limpar os campos
        document.getElementById("selectClientes").value = "";
        document.getElementById("desconto").value = "";
        produtosDisponiveis.forEach(checkBox => checkBox.checked = false);
        quantidadeSelecionadas.forEach(qtd => qtd.value = 1);

        this.atualizarPedido();
    }

    atualizarPedido() {
        const lista = document.getElementById("listaPedidos");
        lista.innerHTML = "";

        //percorrer a lista de pedidos
        this.pedidos.forEach(pedidos => {
            const li = document.createElement("li");
            li.textContent = `Pedido ${pedido.getId()} - Cliente: ${pedido.getCliente().getNome()} - Total: R$ ${pedido.getValorTotal()}`;
            lista.appendChild(li);
        })
    }
}



//instanciar um obj da classe sistemaPedidos

const sistema = new SistemaPedidos;

