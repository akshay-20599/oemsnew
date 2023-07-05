import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/loginservice/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  constructor(private loginservice:LoginService){}

  userData:any
  ngOnInit(): void {
   this.userData = this.loginservice.getUser()
  }

}
