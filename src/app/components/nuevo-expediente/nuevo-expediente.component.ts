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
    if(this.cont >= 1 && this.cont <=8){
      this.cont = this.cont + 1;
    }

  }
  After(){
    if(this.cont >= 2 && this.cont <=8){
      this.cont = this.cont - 1;
    }

  }

}
