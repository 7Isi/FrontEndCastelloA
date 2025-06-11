import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
})
export class CurriculoComponent implements OnInit {
  //elementos do controller

  public curriculos: Curriculo[] = []; //vetor para armazenar as vagas do backend

  constructor(private _curriculoService: CurriculoService) {} //ao instanciar o obj --> conecta com o service de vaga

  //método para listar as vagas
  listarCurriculos() {
    this._curriculoService.getCurriculo().subscribe(
      //preencher um Map com as informações do backend
      (e) => {
        this.curriculos = e.map((atributo) => {
          return new Curriculo(
            atributo.id,
            atributo.nome,
            atributo.foto,
            atributo.descricao,
            atributo.especialidades
          );
        });
      }
    );
  }

  ngOnInit(): void {
    this.listarCurriculos();
  }
}
