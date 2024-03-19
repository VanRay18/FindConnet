import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    ){  this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20),]],
      psw: ['',  [Validators.required, Validators.minLength(5), Validators.maxLength(20),]],
    })
  }

  async  Entrar(){
    this.loading = true

    setTimeout(() => {
      this.router.navigate(['Principal']);
    }, 1000);
    console.log(this.form.value.usuario+this.form.value.psw)
  }

}
