import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit{

  categoryData:any
 constructor(private categoryService:CategoryService ,private router:Router){}
  ngOnInit(): void {
    this.getAllCategoryData()
   }

 getAllCategoryData(){
  this.categoryService.getAllcategory().subscribe(
    (res:any)=>{console.log(res);
      this.categoryData=res;
    }
  )
 }

 deleteCategoryData(category_id:any){

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

  this.categoryService.deletcategoryById(category_id).subscribe(
    (res:any)=>{console.log(res)
      this.getAllCategoryData()
    }
  )
 }
 
}
