
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'bootstrap';
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
  constructor(
    // private rolService: RolesnavService,
    private router: Router,
    // private toastr: ToastrService,
    private cdr: ChangeDetectorRef, 
    // private firebase: Firestore,
    // private authService: AuthService,
    ){}
    ngOnInit(){
  
      window.addEventListener('resize', () => {
        this.verificarPantallaPequena();
        this.cdr.detectChanges(); 
      });
      this.verificarPantallaPequena();
      
      this.activeItem = '';
      this.nombre = '';
      // this.rolService.rolEstudiante$.subscribe(newRolValue => {
      //   this.activeItem = 'Lista';
      //   this.rolEstudiante = newRolValue;
      //   this.SacarIdEstudiante();
      // });   
      // this.rolService.rolPrefecto$.subscribe(newRolValue => {
      //   this.activeItem = 'Pase';
      //   this.rolPrefecto = newRolValue;
      //   this.SacarIdPrefecto();
      // });
      // this.rolService.rolDocente$.subscribe(newRolValue => {
      //   this.activeItem = 'Asistencia';
      //   this.rolDocente = newRolValue;
      //   this.SacarIdDocente();
      // });
      // this.rolService.rolDirectivo$.subscribe(newRolValue => {
      //   this.activeItem = 'Horario';
      //   this.rolDirectivo = newRolValue;
      //   this.SacarIdDirectivo();
      // });    
      // this.rolService.rolRector$.subscribe(newRolValue => {
      //   this.activeItem = 'Carreras';
      //   this.rolRectoria = newRolValue;
      //   this.SacarIdRector();
      // });
    }
    verificarPantallaPequena() {
      // Ajusta el límite según sea necesario
      this.pantallaPequena = window.innerWidth <= 800; 
      return this.pantallaPequena
    }
    // SacarIdEstudiante(){
    //   this.rolService.ids$.subscribe( async newRolValues => {
    //     this.id = newRolValues;
    //     if(this.id){
    //     const BDAlumno = doc(this.firebase, 'alumno/'+this.id);
    //     const DatosAlumno = await getDoc(BDAlumno);
    //     if (DatosAlumno.exists()) {
    //       const alumno = DatosAlumno.data();
    //     this.nombre = alumno['nombre'];
    //   }}
    //   });
    // }
    // SacarIdPrefecto(){
    //   this.nombre = '';
    //   this.rolService.ids$.subscribe( async newRolValues => {
    //     this.id = newRolValues;
    //     if(this.id){
    //     const BDAlumno = doc(this.firebase, 'prefecto/'+this.id);
    //     const DatosAlumno = await getDoc(BDAlumno);
    //     if (DatosAlumno.exists()) {
    //       const alumno = DatosAlumno.data();
    //     this.nombre = alumno['nombre'];
    //   }}
    //   });
    // } 
    // SacarIdRector(){
    //   this.nombre = '';
    //   this.rolService.ids$.subscribe( async newRolValues => {
    //     this.id = newRolValues;
    //     if(this.id){
    //     const BDAlumno = doc(this.firebase, 'rector/'+this.id);
    //     const DatosAlumno = await getDoc(BDAlumno);
    //     if (DatosAlumno.exists()) {
    //       const alumno = DatosAlumno.data();
    //     this.nombre = alumno['nombre'];
    //   }}
    //   });
    // }
    // SacarIdDocente(){
    //   this.nombre = '';
    //   this.rolService.ids$.subscribe( async newRolValues => {
    //     this.id = newRolValues;
    //     if(this.id){
    //     const BDdocente = doc(this.firebase, 'docente/'+this.id);
    //     const DatosDocente = await getDoc(BDdocente);
    //     if (DatosDocente.exists()) {
    //       const docente = DatosDocente.data();
    //     this.nombre = docente['nombre'];
    //   }}
    //   });
    // }
    // SacarIdDirectivo(){
    //   this.nombre = '';
    //   this.rolService.ids$.subscribe( async newRolValues => {
    //     this.id = newRolValues;
    //     if(this.id){
    //     const BDDirectivo = doc(this.firebase, 'directivo/'+this.id);
    //     const DatosDirectivo = await getDoc(BDDirectivo);
    //     if (DatosDirectivo.exists()) {
    //       const Directivo = DatosDirectivo.data();
    //     this.nombre = Directivo['nombre'];
    //   }}
    //   });
    // }
  
  
    setActiveItem(item: string) {
      
      this.activeItem = item;
      if(this.activeItem === 'Asistencia'){
        this.router.navigate(['PrincipalDocente/'+ this.id]);
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
      if(this.activeItem === 'Directivos'){
        this.router.navigate(['tablaDirectivo/'+ this.id]);
      }
      if(this.activeItem === 'Alumnos'){
        this.router.navigate(['tablaAlumno/'+ this.id]);
      }
      if(this.activeItem === 'Docentes'){
        this.router.navigate(['tablaDocente/'+ this.id]);
      }
      if(this.activeItem === 'Exel'){
        this.router.navigate(['Exel/'+ this.id]);
      }
      if(this.activeItem === 'Horario'){
        this.router.navigate(['PrincipalDirectivo/'+ this.id]); 
      }
    }
  
    salir(){
      this.nombre = '';
      // this.authService.logout();
  
      this.showSuccess();
      this.router.navigate(['inicio'])
    }
    showSuccess(){
      const toastrOptions = {
        preventDuplicates: true,
        progressBar: true,
        timeOut: 3000,
      };
      // this.toastr.success('Cierre se sesión correcta', 'Hasta luego', toastrOptions as any);
    }
}
