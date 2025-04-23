class Produto {

    constructor (nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoqueN = estoque;
    }


    venda (qtd) {
        if(this.estoqueN<qtd) {
            console.log("Estoque Insuficiente");
            return;
        }
        return this.estoqueN -= qtd;
    }

    repor (qtd) {
        return this.estoqueN += qtd;
    }


    ExibirInfo () {
        console.log (`
            Nome: ${this.nome}\n 
            Preço: ${this.preco}\n 
            Estoque: ${this.estoqueN}
            `)
    }
}

let produto0 = new Produto ("Bola de Vôlei", 250, 290);

let produto1 = new Produto ("HD Externo", 190, 280);

let produto2 = new Produto ("Kit Caneta Nanquin", 120, 150);

let produto3 = new Produto ("Kit Dados para RPG", 50, 200);

let produto4 = new Produto ("Camisa Corinthians", 95, 200);


produto0.ExibirInfo();
produto0.venda(23);
produto0.repor(12);
produto0.ExibirInfo();


produto1.ExibirInfo();
produto1.venda(54);
produto1.repor(13);
produto1.ExibirInfo();


produto2.ExibirInfo();
produto2.venda(43);
produto2.repor(32);
produto2.ExibirInfo();


produto3.ExibirInfo();
produto3.venda(34);
produto3.repor(30);
produto3.ExibirInfo();


produto4.ExibirInfo();
produto4.venda(80);
produto4.repor(5);
produto4.ExibirInfo();