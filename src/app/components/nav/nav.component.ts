
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'bootstrap';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
// import { Firestore, addDoc,getDoc, doc,setDoc,collection,collectionData , getFirestore, FirestoreModule} from '@angular/fire/firestore';
// import { RolesnavService } from 'src/app/services/rolesnav.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  pantallaPequena: boolean = false;
  id: string | null | undefined;
  rolEstudiante: boolean = false;
  rolDocente: boolean = false;
  rolPrefecto: boolean = false;
  rolDirectivo: boolean = false;
  rolRectoria: boolean = false;
  activeItem: string = 'Asistencia';
  nombre: string = '';



  ROL: any = '';
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef, 
    private toastr: ToastrService,
    private authService: AuthService,
    ){}
    ngOnInit(){

      //this.nombre = this.authService.name2();
      this.authService.Nombre$.subscribe(name => {
        this.nombre = (name);
      }); 
      this.authService.usuario$.subscribe(check => {
        this.activeItem = 'Buscar';
        this.ROL = (check);
      }); 
      this.verificarPantallaPequena();
    }
  
    setActiveItem(item: string) {
      
      this.activeItem = item;
      if(this.activeItem === 'Buscar'){
        this.router.navigate(['Principal']);
      }
      if(this.activeItem === 'Lista'){
        this.router.navigate(['PrincipalAlumno/'+ this.id]);
      }
      if(this.activeItem === 'Contraseña'){
        this.router.navigate(['Menudirectivo/'+ this.id]);
      }
      if(this.activeItem === 'Pase'){
        this.router.navigate(['kuko/'+ this.id]);
      }
      if(this.activeItem === 'Carreras'){
        this.router.navigate(['PrincipalRectoria/'+ this.id]);
      }
    }
  
    salir(){
      this.showSuccess();
      this.nombre = '';
      // this.authService.logout();
        this.authService.Salir();

      this.router.navigate(['inicio'])
    }
    showSuccess(){
      const toastrOptions = {
        preventDuplicates: true,
        progressBar: true,
        timeOut: 4500,
      };
      this.toastr.success('Cierre de sesión correcto', 'Hasta luego', toastrOptions as any);
    }






    @HostListener('window:resize')
    onResize() {
      this.verificarPantallaPequena();
    }
  
    verificarPantallaPequena() {
      if (typeof window !== 'undefined') {
        // Solo ejecutar el código si estamos en un entorno de navegador
        // Aquí puedes agregar la lógica que necesites para determinar el tamaño de la pantalla
        return window.innerWidth < 900; // Por ejemplo, devuelve true si el ancho de la ventana es menor que 768px
      } else {
        // Si no estamos en un entorno de navegador, devuelve un valor por defecto
        return false;
      }
    }
}
