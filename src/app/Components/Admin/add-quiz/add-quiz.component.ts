import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/Category-service/category.service';
import { QuizService } from 'src/app/service/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{

  addQuiz:FormGroup=new FormGroup({
    title:new FormControl(null,Validators.required),
    description:new FormControl(null,Validators.required),
    maxMarks:new FormControl(null,Validators.required),
    numberOfQuestions:new FormControl(null,Validators.required),
    active:new FormControl(null,Validators.required),
    category_id:new FormControl(null,Validators.required)
  })

  getCategoryData:any
  constructor(private quizeservice:QuizService, private categoryService:CategoryService, private route:Router){}

  ngOnInit(): void {
   this.categoryService.getAllcategory().subscribe(
    (res:any)=>{console.log(res);
      this.getCategoryData=res;
    }
   )
  }

  addQuizdata(){
    console.log(this.addQuiz.value);

    let addQuzzesData={
        title:this.addQuiz.value.title,
        description:this.addQuiz.value.description,  
        maxMarks:this.addQuiz.value.maxMarks,
        numberOfQuestions:this.addQuiz.value.numberOfQuestions,
        active:this.addQuiz.value.active,
        category:{"category_id":this.addQuiz.value.category_id}
    }; 

    console.log(addQuzzesData);
     
    this.quizeservice.addQuizzes(addQuzzesData).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'Quiz added',
          icon:'success'
        });
        this.route.navigate(['/admin-dash/all-quiz'])
      })
  }
}
