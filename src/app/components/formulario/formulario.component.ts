import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  form: FormGroup;
constructor(     private fb: FormBuilder,   private router: Router,){
  this.form = this.fb.group({
    ApellidoM: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', Validators.required],
  })
}

ngOnInit(){}

Entrar(){
  this.router.navigate(['nuevo']);
}
}
