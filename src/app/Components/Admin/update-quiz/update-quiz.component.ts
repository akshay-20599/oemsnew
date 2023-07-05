import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  
import { CategoryService } from 'src/app/service/Category-service/category.service';
import { QuizService } from 'src/app/service/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  updateQuiz: FormGroup = new FormGroup({
    "quiz_id": new FormControl(null, Validators.required),
    "title": new FormControl(null, Validators.required),
    "description": new FormControl(null, Validators.required),
    "maxMarks": new FormControl(null, Validators.required),
    "numberOfQuestions":new FormControl(null, Validators.required),
    "active": new FormControl(null, Validators.required),
    "category_id": new FormControl(null, Validators.required)
  })

  quizId:any;
  getQuiz:any;
  getAllCategory:any;

  constructor(private quizService: QuizService,private categorservice:CategoryService, 
    private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(
      (res:any)=>{console.log(res.id);  
        this.quizId=res.id;
      }
    );
    this.quizService.getQuizeDataById(this.quizId).subscribe(
      (res:any)=>{console.log(res);
        this.getQuiz=res;
      }
    );
this.categorservice.getAllcategory().subscribe(
  (res:any)=>{console.log(res);
    this.getAllCategory=res;
  }
)
  }

  updateFormData() {
    console.log(this.updateQuiz.value);

    let setUpdataData ={
    "quiz_id": this.quizId,
    "title": this.updateQuiz.value.title,
    "description":this.updateQuiz.value.description,
    "maxMarks": this.updateQuiz.value.maxMarks,
    "numberOfQuestions": this.updateQuiz.value.numberOfQuestions,
    "active": this.updateQuiz.value.active,
    "category": {"category_id":this.updateQuiz.value.category_id}
    }
    this.quizService.updateQuiz(setUpdataData).subscribe(
      (res:any)=>{
        console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'Quiz updated successfuly',
          icon:'success'
        })
        this.router.navigate(['admin-dash/all-quiz'])
      }
    )
  }
}
