import { Component, OnInit } from '@angular/core';
import { Nota } from './nota';
import { NotaService } from './nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  public vetorNotas:Nota[]=[];
  public nota!:Nota;
  public id:number;


  constructor(private servico:NotaService) {
    this.id = -1;
  }

  ngOnInit(){
    this.vetorNotas = this.servico.listar();
    this.id=-1;
  }

  excluir(id:number){
    this.servico.excluir(this.id)
    this.id=-1;
  }

  editar(id:number){
    this.nota = new Nota(
      this.vetorNotas[id].nomeAluno,
      this.vetorNotas[id].alunoNota1,
      this.vetorNotas[id].alunoNota2,
      this.vetorNotas[id].alunoMedia
    );
  }

}
