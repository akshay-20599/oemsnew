import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/service/Question-service/questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{

 
  addQuestionForm:FormGroup =new FormGroup({
    "content": new FormControl(null,[Validators.required]),
    "option1": new FormControl(null,[Validators.required]),
    "option2": new FormControl(null,[Validators.required]),
    "option3": new FormControl(null,[Validators.required]),
    "option4": new FormControl(null,[Validators.required]),
    "answer": new FormControl(null,[Validators.required])
  });

  quizId:any;
  quiztitle:any;

  constructor(private qustionservice:QuestionsService , private activatedRoute:ActivatedRoute, private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res);
        this.quizId=res.id;
        this.quiztitle=res.title;
      }
    );
  }

  addQuestions={
    "content": this.addQuestionForm.value.content,
    "option1": this.addQuestionForm.value.option1,
    "option2": this.addQuestionForm.value.option2,
    "option3": this.addQuestionForm.value.option3,
    "option4": this.addQuestionForm.value.option4,
    "answer": this.addQuestionForm.value.answer
  }

  addQuestionsData(){
console.log(this.addQuestionForm.value);

let addQuestions={
  "content": this.addQuestionForm.value.content,
  "option1": this.addQuestionForm.value.option1,
  "option2": this.addQuestionForm.value.option2,
  "option3": this.addQuestionForm.value.option3,
  "option4": this.addQuestionForm.value.option4,
  "answer": this.addQuestionForm.value.answer,
  'quiz':{"quiz_id":this.quizId}
};

this.qustionservice.addQuestions(addQuestions).subscribe(
  (res:any)=>{console.log(res);
     this.route.navigate([`admin-dash/veiw-question/${this.quizId}/${this.quiztitle}`])
  }
)

  }

}
