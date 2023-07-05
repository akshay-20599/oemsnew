import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/Category-service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit{

constructor(private categoryservice:CategoryService){}

allcategory:any;
  ngOnInit(): void {
   this.categoryservice.getAllcategory().subscribe(
   (res:any)=>{console.log(res);
    this.allcategory=res;
   }
   )
  }
}
