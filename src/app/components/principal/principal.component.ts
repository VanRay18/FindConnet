import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  pantallaPequena: boolean = false;
  verificarPantallaPequena() {
    // Ajusta el límite según sea necesario
    this.pantallaPequena = window.innerWidth <= 800; 
    return this.pantallaPequena
  }
}
