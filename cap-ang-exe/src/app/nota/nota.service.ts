import { Injectable } from '@angular/core';
import { Nota } from './nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor() { }

  private vetorNotas:Nota[] = [
    new Nota("Paulo", 8.0, 9.0, 0),
    new Nota("Ursula", 7.0, 7, 0)
  ];

  public listar(){
    return this.vetorNotas;
  }

  public excluir(id:number){
    this.vetorNotas.splice(id, 1);
  }

  public alterar(id:number, nota:Nota){
    this.vetorNotas[id]=nota;
  }
}
