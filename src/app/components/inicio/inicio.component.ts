import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


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
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    ){  this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20),]],
      psw: ['',  [Validators.required, Validators.minLength(5), Validators.maxLength(20),]],
    })
  }

  ngOnInit(){

  }
  async  Entrar(){
    this.loading = true

    setTimeout(() => {
      if(this.auth.login('Admin', 'Marco Antonio Vazquez')){
        this.showSuccess();
        this.router.navigate(['Principal']);
      }
    }, 1000);
    console.log(this.form.value.usuario+this.form.value.psw)
  }
  showSuccess(){
    const toastrOptions = {
      preventDuplicates: true,
      progressBar: true,
      timeOut: 1500,
    };
    this.toastr.success('Inicio de sesión correcto', 'Bienvenido', toastrOptions as any);
  }
}
