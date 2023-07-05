import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginservice/login.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
 
  constructor(private loginservice:LoginService, private route:Router){}

  logout(){
    this.loginservice.logout();
    this.route.navigate(['login'])
  }
}
