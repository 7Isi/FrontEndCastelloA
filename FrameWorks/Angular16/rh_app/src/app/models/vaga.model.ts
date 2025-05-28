export class Vaga {
  //atributos

  private id: number = 0;
  private nome: string;
  private foto: string;
  private descricao: string;
  private salario: number;

  constructor(
    id: number,
    nome: string,
    foto: string,
    descricao: string,
    salario: number
  ) {
    (this.id = id),
      (this.nome = nome),
      (this.foto = foto),
      (this.descricao = descricao),
      (this.salario = salario);
  }

  // metodo abreviado de criação de uma classe
  // constructor(
  //   private id: number,
  //   private nome: string,
  //   private foto: string,
  //   private descricao: string,
  //   private salario: number
  // ) {}


  //métodos publicos (getters and setters)
  public getid(): number {
    return this.id;
  }


  getNome(): string {
    return this.nome;
  }
  setNome(nome:string): void {
    this.nome = nome;
  }


  getFoto(): string {
    return this.foto;
  }
  setFoto(foto:string): void {
    this.foto = foto;
  }


  getDescricao(): string {
    return this.descricao;
  }
  setDescricao(descricao:string): void {
    this.descricao = descricao;
  }


  getSalario(): number {
    return this.salario;
  }
  setSalario(salario:number): void {
    this.salario = salario;
  }


  //conversão DB --> obj
  toMap(): {[key:string]: any }{ //obj --> db
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario,
    }
  }

  //fromMap : DB ==> obj
  static fromMap(map:any): Vaga {
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    );
  }
}
