class Carro {

    constructor (marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ExibirInfo() {
        console.log(`
            Marca: ${this.marca}\n
            Modelo: ${this.modelo}\n
            Ano: ${this.ano}
            `)
    }
}


class Automovel extends Carro {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    ExibirInfo() {
        super.ExibirInfo();
        console.log (`Portas: ${this.portas}`);
    }
}


let carro1 = new Carro ("Fiat", "Cronnos", 2020, 4);

carro1.ExibirInfo();