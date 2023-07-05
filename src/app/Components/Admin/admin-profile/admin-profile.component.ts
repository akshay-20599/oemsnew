import { Component ,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/loginservice/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

 userData:any
 
  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    this.userData= this.loginservice.getUser()
  }

}
