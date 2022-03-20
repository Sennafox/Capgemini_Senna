import { Injectable } from '@angular/core';
import { Curso } from './Curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  public vetorCursos:Curso[] = [
    new Curso("Angular", 800,"Desenvolvimento"),
    new Curso("PHP", 590,"Desenvolvimento"),
    new Curso("Photoshop", 470,"Design")
  ];

  //Cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }

  //Seleção de cursos
  public listar(){
    return this.vetorCursos
  }

  //Alterar cursos
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }

  //exclusão de cursos
  public excluir(id:number){
    this.vetorCursos.splice(id, 1);
  }

}
