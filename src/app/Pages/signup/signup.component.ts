import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginservice/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginservice:LoginService,private route:Router){}
  signup:FormGroup=new FormGroup({
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required), 
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required)
   
  })

  signupData(){
    console.log(this.signup.value);
    this.loginservice.saveUser(this.signup.value).subscribe(
      (res:any)=>{console.log(res);
        this.route.navigate(['login'])
      }
    )
  }

}
