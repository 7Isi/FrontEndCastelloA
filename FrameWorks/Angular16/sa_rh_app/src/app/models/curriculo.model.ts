export class Curriculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _foto: string,
    private _descricao: string,
    private _especialidades: string
  ) {}

  // métodos publicos( get set)
  public get especialidades(): string {
    return this._especialidades;
  }

  public set especialidades(value: string) {
    this._especialidades = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get foto(): string {
    return this._foto;
  }

  public set foto(value: string) {
    this._foto = value;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }



  //conversão BD <=> obj
  toMap(): { [key: string]: any } {
    //obj -> bd
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      especialidades: this.especialidades,
    };
  }


  //fromMap : BD => obj
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.especialidades
    );
    
  }

}
