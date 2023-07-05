
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../loginservice/login.service';

@Injectable({
  providedIn: 'root'
})
export class userguard implements CanActivate {

  constructor(private loginservice: LoginService, private route:Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.loginservice.isLoggedIn() && this.loginservice.getUserRole() == "NORMAL"){
    return true;  
  }
  this.route.navigate(['login'])
   return false;
  }
  }

