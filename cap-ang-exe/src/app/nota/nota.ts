export class Nota{

  public nomeAluno:string;
  public alunoNota1:number;
  public alunoNota2:number;
  public alunoMedia:number;

  constructor(nome:string, nota1:number, nota2:number, alunoMedia:number){
    this.nomeAluno = nome;
    this.alunoNota1 = nota1;
    this.alunoNota2 = nota2;
    this.alunoMedia = (nota1 + nota2)/2;
  }
}
