import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit{
  //elementos do controller

  public vagas: Vaga[] = []; //vetor para armazenar as vagas do backend


  constructor( private _vagaService: VagaService ) {} //ao instanciar o obj --> conecta com o service de vaga

  //método para listar as vagas
  listarVagas() {
    this._vagaService.getVagas().subscribe( //preencher um Map com as informações do backend
      (e) => {
        this.vagas = e.map(
          (atributo) => {
            return new Vaga (
              atributo.id,
              atributo.nome,
              atributo.foto,
              atributo.descricao,
              atributo.salario
            )
          }
        );
      }
    );
  }

  ngOnInit(): void {
    this.listarVagas();
  }

}
