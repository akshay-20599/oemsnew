import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginservice/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  hide = true;
  loginForm:FormGroup=new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })

  constructor(private loginService:LoginService,private route:Router){}

  submitLoginData(){
    console.log(this.loginForm.value);

    //generate token
    this.loginService.generateToken(this.loginForm.value).subscribe(
      (res:any)=>{console.log(res)
      //setToken is udsed to  set token in localstorage
      this.loginService.loginuser(res.token)
      //getCurrentUser will get the current login user data
      this.loginService.getCurrentUser().subscribe(
        (user:any)=>{console.log(user)
        //response will store in localStorage
      this.loginService.setUser(user) 
     console.log(this.loginService.getUserRole());
     
      if(this.loginService.getUserRole()=="ADMIN"){
        this.route.navigate(['admin-dash']);
        this.loginService.loginStatusSubjec.next(true)
      }
      else if(this.loginService.getUserRole()=="NORMAL"){
        this.route.navigate(['user-dash']);
        this.loginService.loginStatusSubjec.next(true)
      }
      else{
        this.loginService.logout();
      }

      }

      )

     },
     (err)=>{
      Swal.fire({
        title:'User Not Found',
        text:'Invalid user',
        icon:'error'
      
      })
     }

     )
    
  }

}
