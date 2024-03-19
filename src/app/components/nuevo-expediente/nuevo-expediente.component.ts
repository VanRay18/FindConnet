import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-expediente',
  templateUrl: './nuevo-expediente.component.html',
  styleUrls: ['./nuevo-expediente.component.css']
})
export class NuevoExpedienteComponent {

  cont: any = 1;

  constructor(){}

  ngOnInit(){

  }

  Next(){
    this.cont = this.cont + 1;
  }


}
