import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NuevoExpedienteComponent } from './components/nuevo-expediente/nuevo-expediente.component';

const routes: Routes = [
  {path: 'nav/:id', component: NavComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'nuevo', component: NuevoExpedienteComponent},
  
  {path: 'Principal', component: PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
