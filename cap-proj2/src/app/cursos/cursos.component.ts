import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

import { Curso } from './Curso';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  //atributos

  public vetorCursos:Curso[]=[];
  public curso:Curso;
  public id:number;


  constructor(private servico:CursosService) {
    this.id= -1;
  }

  ngOnInit() {
    this.id = -1;
    this.curso = new Curso();
    this.vetorCursos = this.servico.listar();
  }

  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new Curso();
  }

  excluir(id:number){
    this.servico.excluir(this.id);
    this.curso = new Curso();
    this.id = -1;
  }

  editar(id:number){
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }

  atualizar(){
    this.servico.alterar(this.id, this.curso);
    this.curso = new Curso();
    this.id = -1;
  };
}
