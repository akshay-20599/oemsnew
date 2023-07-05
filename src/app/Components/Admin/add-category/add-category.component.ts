import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  addcategoryform:FormGroup=new FormGroup({
    title:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
  })

  constructor(private categoryService:CategoryService, private route:Router){}

  addCategoryData(){
    console.log(this.addcategoryform.value)
    this.categoryService.addCategory(this.addcategoryform.value).subscribe
    ((res:any)=>{console.log(res);
      Swal.fire({
         title:`${res.title}`,
         text:'Category Added Successfully',
        icon:'success'
      })
      this.route.navigate(['admin-dash/all-cate'])
    })
  }
  
}
