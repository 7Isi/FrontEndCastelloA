//Estudos de POO em JavaScript


//Diferença entre Procedural e POO

// Declaração de uma variavel em procedural

let produto1 = {
    nome: "Notebook",
    preco: 3200,
    marca: "Asus",
    desconto: function(){
        return this.preco * 0.2; //20% de desconto
    }
}//coleção


let produto2 = {
    nome: "Celular",
    preco: 2500,
    marca: "Motorola",
    desconto: function(){
        return this.preco * 0.2;
    }
}


//Usando classo para criar produtos (POO)
class Produto {
    constructor(nome, preco, marca) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }

    desconto(){
        return this.preco * 0.2;
    }
}

let p1 = new Produto ("Impressora", 650, "Epson");

let p2 = new Produto ("Tablet", 2600, "Samsung");

let p3 = new Produto ("Computador", 4500, "--");

console.log(`
    Produto: ${produto1.nome}, 
    Preço: ${produto1.preco}, 
    Marca: ${produto1.marca},
    Desconto: ${produto1.desconto()}
    `)

console.log(`
    Produto: ${p1.nome}, 
    Preço: ${p1.preco}, 
    Marca: ${p1.marca},
    Desconto: ${p1.desconto()}
    `)



//Estudo avançado de POO em JavaScript


//criação de uma classe

class Pessoa {
    //atributos (encapsulamento)
    #nome; //atributo privado (#)
    #idade; //atributo privado
    #cpf; //igualmente privado

    //construtor
    constructor (nome, idade, cpf) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }

    //métodos públicos
    //getters and setters (encapsulamento)

    get getNome () {
        return this.#nome;
    }


    get getIdade () {
        return this.#idade;
    }

    set setIdade (idade){
        this.#idade = idade;
    }


    get getCpf () {
        return this.#cpf;
    }


    //método de acesso

    exibirInfo () {
        console.log(`
            Nome: ${this.#nome}, 
            Idade: ${this.#idade}, 
            CPF: ${this.#cpf}
            `)
    }
}


//instanciar os objetos da classe 

let pessoa1 = new Pessoa ("Arthur", 30, "233.234.623-76");

let pessoa2 = new Pessoa ("João", 25, "234.556.746-57");

let pessoa3 = new Pessoa ("Dora", 37, "367.864.357-75");

let pessoa4 = new Pessoa ("Joana", 26, "345.356.835-95");


pessoa1.setIdade = 31;

pessoa1.exibirInfo();


pessoa2.exibirInfo();


pessoa3.exibirInfo();


pessoa4.exibirInfo();




//Herança em POO (extends)

class Funcionario extends Pessoa{
    //atributos
    #cargo;
    #salario;
    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf); // chama da classe superClass
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //métodos públicos
    //getters and setters
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set setSalario(salario){
        this.#salario = salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo;
    }
    //método de acesso
    exibirInfo(){
        super.exibirInfo();
        console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);
    }
}
//instanciar os objetos da Classe Fucnionário
let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo();
