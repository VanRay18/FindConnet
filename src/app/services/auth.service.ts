import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<any>('');
  usuario$ = this.user.asObservable();
  private name = new BehaviorSubject<any>('');
  Nombre$ = this.name.asObservable();

  constructor(private router: Router) { }
  nombre: any = '';
  private isAuthenticated = false;
  login (perfil:any, nombre:any): boolean{
    if(perfil.length  > 0 ){
      this.isAuthenticated = true
      this.auth(perfil, nombre);
      return true;
    }
    return false;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  auth(autenticacion: any, nombre:any) {
    this.user.next(autenticacion);
    this.name.next(nombre);
  } 
  Salir(){  
    this.isAuthenticated = false;
    this.user.next('');
    this.name.next('');
    return this.router.navigate(['/inicio']);
  }
}
