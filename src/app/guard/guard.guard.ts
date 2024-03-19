import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class guardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {

    if (this.authService.isLoggedIn())  {
      return true;
    }else {
      // this.authService.Salir();
      //  this.router.navigate(['/inicio']);

      //  return false;
      return true;
    }
    
  }
}