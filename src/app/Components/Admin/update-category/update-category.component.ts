import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  updateCategory: FormGroup = new FormGroup({
    "category_id": new FormControl(),
    "title": new FormControl(null, [Validators.required]),
    "description": new FormControl(null, [Validators.required])
  })

  category_id: any;
  constructor(private categoryService: CategoryService, private activatedRoute:ActivatedRoute, private route: Router) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res.id);
        this.category_id = res.id;
      }
    );
    this.categoryService.getcategorydataById(this.category_id).subscribe(
      (res:any)=>{console.log(res);
        this.updateCategory.setValue(res);
      }
    )
  }

  updateCategoryData() {
    console.log(this.updateCategory.value);
 this.categoryService.updateCategory(this.updateCategory.value).subscribe(
  (res:any)=>{console.log(res);
  Swal.fire({
    title:`${res.title}`,
    text:'Category updated successfully!',
    icon:'success'
  })
    this.route.navigate(['/admin-dash/all-cate'])
  }
 )
 }


}





