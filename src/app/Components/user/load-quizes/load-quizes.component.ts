import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/Quiz-service/quiz.service';

@Component({
  selector: 'app-load-quizes',
  templateUrl: './load-quizes.component.html',
  styleUrls: ['./load-quizes.component.css']
})
export class LoadQuizesComponent implements OnInit{

  categoryId:any;
  quizzes:any;
  constructor(private quizservice:QuizService, private activatedrout:ActivatedRoute){}

  ngOnInit(): void {
   this.activatedrout.params.subscribe(
    (res:any)=>{console.log(res.category_id);
      this.categoryId=res.category_id;

if( this.categoryId == 0){
    this.quizservice.getactiveQuiz().subscribe(
      (res:any)=>{console.log(res);
        this.quizzes=res;
      }
    )
}
else{
this.quizservice.getActiveQuizbyCategoryId(this.categoryId).subscribe(
  (res:any)=>{console.log(res);
  this.quizzes=res;
  }

)
}
    }
   )
  }

}
