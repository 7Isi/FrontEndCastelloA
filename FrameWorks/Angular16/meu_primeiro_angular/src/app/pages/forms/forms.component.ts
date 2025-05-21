import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  nome: string = "";

  email: string = "";

  telefone: string = "";

  idade: number | null = null;

  profissao: string = "";


  limparDados() {
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.idade = null;
    this.profissao ="";
  }


  enviarDados() {
    const erros: string[] = [];

    //validações
    if (this.nome.trim().length<3) {
      erros.push("Nome Invalido, deve conter mais de três caracteres!!");
    }

    if (!this.email.trim().includes("@")) {
      erros.push("Insira um E-mail válido!!");
    }

    if (this.telefone.trim()) {
      erros.push("Telefone Inválido!!");
    }

    if (this.idade== null || this.idade<18) {
      erros.push("Idade inválida!!");
    }

    if (this.profissao.trim()) {
      erros.push("Profissão inválida");
    }


    if (erros.length>0) {
      alert(`Erros no Formulário:\n ${erros.join("\n")}`);
      return;
    } else {
      alert("Formulário enviado com sucesso!!");
      this.limparDados();
    }

  }
}
