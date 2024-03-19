import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   listarHorario: any[] = [
    { 
        numeroExpediente: "001",
        nombre: "Juan",
        apellidoPaterno: "Gómez",
        apellidoMaterno: "López",
        nombreEmisor: "María Rodríguez",
        fecha: "2024-03-18"
    },
    { 
        numeroExpediente: "002",
        nombre: "Ana",
        apellidoPaterno: "Pérez",
        apellidoMaterno: "Martínez",
        nombreEmisor: "Carlos Sánchez",
        fecha: "2024-03-19"
    },
    { 
        numeroExpediente: "003",
        nombre: "Pedro",
        apellidoPaterno: "Díaz",
        apellidoMaterno: "García",
        nombreEmisor: "Laura Hernández",
        fecha: "2024-03-20"
    },
    { 
        numeroExpediente: "004",
        nombre: "María",
        apellidoPaterno: "López",
        apellidoMaterno: "Fernández",
        nombreEmisor: "José Martínez",
        fecha: "2024-03-21"
    },
    { 
        numeroExpediente: "005",
        nombre: "Luis",
        apellidoPaterno: "Sánchez",
        apellidoMaterno: "Pérez",
        nombreEmisor: "Elena González",
        fecha: "2024-03-22"
    },
    // Datos adicionales para completar 15 registros
    { 
        numeroExpediente: "006",
        nombre: "Elena",
        apellidoPaterno: "Martínez",
        apellidoMaterno: "García",
        nombreEmisor: "Andrés Rodríguez",
        fecha: "2024-03-23"
    },
    { 
        numeroExpediente: "007",
        nombre: "Miguel",
        apellidoPaterno: "González",
        apellidoMaterno: "Sánchez",
        nombreEmisor: "Carmen López",
        fecha: "2024-03-24"
    },
    { 
        numeroExpediente: "008",
        nombre: "Sofía",
        apellidoPaterno: "Hernández",
        apellidoMaterno: "López",
        nombreEmisor: "David Pérez",
        fecha: "2024-03-25"
    },
    { 
        numeroExpediente: "009",
        nombre: "Diego",
        apellidoPaterno: "Ramírez",
        apellidoMaterno: "Martínez",
        nombreEmisor: "Ana Gómez",
        fecha: "2024-03-26"
    },
    { 
        numeroExpediente: "010",
        nombre: "Laura",
        apellidoPaterno: "Fernández",
        apellidoMaterno: "Gómez",
        nombreEmisor: "Jorge Díaz",
        fecha: "2024-03-27"
    },
    { 
        numeroExpediente: "011",
        nombre: "Alejandro",
        apellidoPaterno: "Rodríguez",
        apellidoMaterno: "Pérez",
        nombreEmisor: "Sara Martínez",
        fecha: "2024-03-28"
    },
    { 
        numeroExpediente: "012",
        nombre: "Carmen",
        apellidoPaterno: "López",
        apellidoMaterno: "García",
        nombreEmisor: "Juan Ramírez",
        fecha: "2024-03-29"
    },
    { 
        numeroExpediente: "013",
        nombre: "Jorge",
        apellidoPaterno: "Martínez",
        apellidoMaterno: "Sánchez",
        nombreEmisor: "Laura González",
        fecha: "2024-03-30"
    },

];
campoOrden = '';//ordenar tabla
ordenAscendente = true;//ordenar tabla
constructor(){}

ngOnInit(){

}

ordenarTabla(campo:any){
  if (this.campoOrden === campo) {
    this.ordenAscendente = !this.ordenAscendente;
  } else {
    this.campoOrden = campo;
    this.ordenAscendente = true;  // Por defecto, ordenar en ascendente cuando cambias de campo
  }

  // Ordenar la lista según el campo y el orden seleccionados
  this.listarHorario.sort((a:any, b:any) => {
    const aValue = String(a[campo]);
    const bValue = String(b[campo]);
  
    return this.ordenAscendente
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
}

}
