import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; //solicitações http (get, post, put, delete)
import { Observable } from 'rxjs'; //classe que traduz a API <=> obj
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  //atributos - endereço da api
  private apiUrl = "http://localhost:3003/vagas"; //caminho para a api

  constructor(private http: HttpClient) {
    //ao instanciar o obj da classe, cria-se a conexão com o HttpClient
   }

    //métodos de conexão
    //GET --> obtem a lista de vagas a partir da API

   getVagas(): Observable<Vaga[]> { //biblioteca de rxjs -> traduzir os dados da API <=> obj
    return this.http.get<Vaga[]>(this.apiUrl);
  }


  //POST --> Cadastra uma vaga na API
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl,vaga);
  }


  //PUT --> Atualizar as vagas existentes na API
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`; //  http://localhost:3003/vagas/*ID
    return this.http.put<Vaga[]>(apiUrlFinal, vaga);
  }


  //DELETE --> Deletar uma vaga existente da API
  deleteVaga(id: any): Observable<Vaga[]> {
    // const apiUrlFinal = this.apiUrl+"/"+id;
    const apiUrlFinal = `${this.apiUrl}/${id}`; //  http://localhost:3003/vagas/*ID
    return this.http.delete<Vaga[]>(apiUrlFinal);
  }
}
