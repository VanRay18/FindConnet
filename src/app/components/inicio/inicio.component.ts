import { Component } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Firestore, addDoc,getDoc, doc,setDoc,collection,collectionData , getFirestore, FirestoreModule} from '@angular/fire/firestore';
// import { IndividualConfig, ToastrService } from 'ngx-toastr';
// import { DocenteService } from 'src/app/services/docente.service';
// import Swal from 'sweetalert2';
// import { AuthService } from 'src/app/services/auth.service';
// import { RolesnavService } from 'src/app/services/rolesnav.service';
// import { AlumnoService } from 'src/app/services/alumno.service';
// import { HorariosAsistenciasService } from 'src/app/services/horarios-asistencias.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  loading: boolean = false;
  form: FormGroup;
  perfil: string = "";
  psw: string = "";
  id: string | undefined;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private toastr: ToastrService,
    // private auth: AngularFireAuth,
    // private firebase: Firestore,
    // private authService: AuthService,
    // private pase: RolesnavService,
    ){  this.form = this.fb.group({
      numero: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', Validators.required],
    })
  }

  async  Entrar(){
    const psw = this.form.value.password;
  }

  // ngOnInit(){
  //   this.authService.logout();
  // }
  
  // error(){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Acceso denegado',
  //     text: 'Revise si todos los datos son correctos',
  //   })
  //  }
  //   async Entrar(){
  //   this.loading = true;
  //   const matricula= this.form.value.numero;
  //   this.id = matricula;
  //   const psw = this.form.value.password;
  //   const BDDocente = doc(this.firebase, 'docente/'+matricula);
  //   const DatosDocente = await getDoc(BDDocente);
  //   const BDAlumno = doc(this.firebase, 'alumno/'+matricula);
  //   const DatosAlumno = await getDoc(BDAlumno);
  //   const BDDirectivo = doc(this.firebase, 'directivo/'+matricula);
  //   const DatosDirectivo = await getDoc(BDDirectivo);
  //   const BDPrefecto = doc(this.firebase, 'prefecto/'+matricula);
  //   const DatosPrefecto = await getDoc(BDPrefecto);
  //   const BDRector = doc(this.firebase, 'rector/'+matricula);
  //   const DatosRector = await getDoc(BDRector);
  
  
  //   if (DatosDocente.exists()) {//Verificand si el docente existe
  //     const docente = DatosDocente.data();
  //     this.perfil = docente['perfil'];
  //     this.psw = docente['contraseña'];
  //       if(this.perfil === 'Docente' && this.psw === psw){
  //         if (this.authService.login(this.perfil, docente['id'])){
  //           this.horarios_asistencias.DatosHorarioDocente(this.id).then(()=>{
  //             this.showSuccess();
  //             this.router.navigate(['PrincipalDocente/'+ this.id]);
  //           })
  //         }
  //       }else{
  //         this.mostrarErrorInicioSesion();
  //       }
  //   }else if (DatosAlumno.exists()) {//Verificand si el Estudiante existe
  //     const alumno = DatosAlumno.data();
  //     this.perfil = alumno['perfil'];
  //     this.psw = alumno['contraseña'];
  //       if(this.perfil === 'Estudiante' && this.psw === psw){
  //         if (this.authService.login(this.perfil , alumno['id'])){
  //           this.horarios_asistencias.DatosAsistenciaAlumno(this.id).then(()=>{
  //             this.horarios_asistencias.DatosHorarioAlumno(this.id).then(()=>{
  //               this.showSuccess();
  //               this.router.navigate(['PrincipalAlumno/'+ this.id]);
  //             })
  //           })
  
  
  //         }
  //       }else{
  //         this.mostrarErrorInicioSesion();
  //       }
  //   }else if (DatosPrefecto.exists()) {//Verificand si el Estudiante existe
  //     const prefecto = DatosPrefecto.data();
  //     this.perfil = prefecto['perfil'];
  //     this.psw = prefecto['contraseña'];
  //       if(this.perfil === 'Prefecto' && this.psw === psw){
  //         if (this.authService.login(this.perfil , prefecto['id'])){
  //           this.showSuccess();
  //           this.router.navigate(['kuko/'+ this.id]);
  //         }
  //       }else{
  //         this.mostrarErrorInicioSesion();
  //       }
  //   }else if (DatosRector.exists()) {//Verificand si el Estudiante existe
  //     const rector = DatosRector.data();
  //     this.perfil = rector['perfil'];
  //     this.psw = rector['contraseña'];
  //       if(this.perfil === 'Rector' && this.psw === psw){
  //         if (this.authService.login(this.perfil , rector['id'])){
  //           this.showSuccess();
  //           this.router.navigate(['PrincipalRectoria/'+ this.id]);
  //         }
  //       }else{
  //         this.mostrarErrorInicioSesion();
  //       }
  //   }else if (DatosDirectivo.exists()) {//Verificand si el Estudiante existe
  //     const directivo = DatosDirectivo.data();
  //     this.perfil = directivo['perfil'];
  //     this.psw = directivo['contraseña'];
  //       if(this.perfil === 'Directivo' && this.psw === psw){
  //         if (this.authService.login(this.perfil, directivo['id'])){
  //           this.showSuccess();
  //           this.router.navigate(['PrincipalDirectivo/'+ this.id]);
  //         }
  //       }else{
  //         this.mostrarErrorInicioSesion();
  //       }
  //   }else{
  //     this.mostrarErrorInicioSesion();
  //   }
  //   this.loading = false;
  // }
   
  // mostrarErrorInicioSesion() {
  //   const toastrOptions = {
  //     preventDuplicates: true,
  //     progressBar: true,
  //     timeOut: 3000,
  //   };
  //   // this.toastr.error('Inicio de sesión incorrecto', 'Error', toastrOptions as any);
  // }
  
  
  // showSuccess(){
  //     const toastrOptions = {
  //       preventDuplicates: true,
  //       progressBar: true,
  //       timeOut: 2000,
  //     };
  //     // this.toastr.success('Inicio de sesión correcto', 'Bienvenido', toastrOptions as any);
  //   }
}
