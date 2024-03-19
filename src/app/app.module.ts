import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ExpedientesComponent } from './components/expedientes/expedientes.component';
import { NavComponent } from './components/nav/nav.component';
import { NuevoExpedienteComponent } from './components/nuevo-expediente/nuevo-expediente.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    FormularioComponent,
    ExpedientesComponent,
    NavComponent,
    NuevoExpedienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
