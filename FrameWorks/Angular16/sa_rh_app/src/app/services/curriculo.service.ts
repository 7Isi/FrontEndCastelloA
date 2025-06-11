import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //solicitações http (get, post, put, delete)
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  //atributos - endereço da api
  private apiUrl = 'http://localhost:3003/vagas'; //caminho para a api

  constructor(private http: HttpClient) {
    //ao instanciar o obj da classe, cria-se a conexão com o HttpClient
  }

  //métodos de conexão
  //GET --> obtem a lista de vagas a partir da API

  getCurriculo(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  //POST --> Cadastra uma vaga na API
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  //PUT --> Atualizar as vagas existentes na API
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(apiUrlFinal, curriculo);
  }

  //DELETE --> Deletar uma vaga existente da API
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(apiUrlFinal);
  }
}
