import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //ngIF

  exibirTexto = false;

  acaoNgIf(){
    this.exibirTexto = !this.exibirTexto;
  }

  //ngFor

  cursos=[" - HTML"," - CSS"," - javascript"," - Angular"]

  //ngSwitch

  curso_selecionado = " - Angular";

  //ngClass

  ligada:boolean = false;

  //data binding

  nome:string = "Paulo";
  imagem:string = "../assets/suporte-de-mesa-2.jpeg";
  valor1:number = 2;
  valor2:number = 3;

  //event binding

  mensagem(){
    alert("event biding!")
  }

  //two way data biding


}
