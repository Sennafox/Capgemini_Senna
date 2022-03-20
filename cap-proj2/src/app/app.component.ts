import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //template
  p1:boolean = true;

  Alterar(){
    this.p1 = !this.p1;
  }

  //pipe

  nome:string ="Paulo";
}
