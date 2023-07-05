import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginservice/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
 isLoggedIn=true 
 user:any=null
  constructor(private loginService:LoginService,private route:Router){}

  ngOnInit(): void {
   this.isLoggedIn= this.loginService.isLoggedIn();
   this.user=this.loginService.getUser()

   this.loginService.loginStatusSubjec.asObservable().subscribe(
    (res)=>{this.isLoggedIn= this.loginService.isLoggedIn()
      this.user=this.loginService.getUser()
     }
   )
  }
  logout(){
    this.loginService.logout()
    this.loginService.loginStatusSubjec.next(false)
    this.route.navigate(['login'])
  }
}
