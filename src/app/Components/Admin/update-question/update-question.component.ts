import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/service/Question-service/questions.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
  
  updateQuestionForm:FormGroup =new FormGroup({
    "content": new FormControl(null,[Validators.required]),
    "option1": new FormControl(null,[Validators.required]),
    "option2": new FormControl(null,[Validators.required]),
    "option3": new FormControl(null,[Validators.required]),
    "option4": new FormControl(null,[Validators.required]),
    "answer": new FormControl(null,[Validators.required])
  });
 

  constructor(private questionservice:QuestionsService,private activatedRoute:ActivatedRoute, private router:Router){}

  questinId:any;
  quizTitle:any;
  getquestionData:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res);
        this.questinId=res.id;
        this.quizTitle=res.title;
      }
    );
    this.questionservice.getQuestionbyId(this.questinId).subscribe(
      (res:any)=>{console.log(res);
        this.getquestionData=res
      }
    )
  }
  updateQuestionsData(){
    console.log(this.updateQuestionForm.value); 

    let setUpdataData={
      "question_id":this.questinId,
      "content":  this.updateQuestionForm.value.content,
    "option1":  this.updateQuestionForm.value.option1,
    "option2":  this.updateQuestionForm.value.option2,
    "option3":  this.updateQuestionForm.value.option3,
    "option4":  this.updateQuestionForm.value.option4,
    "answer":  this.updateQuestionForm.value.answer,
    "quiz":{"quiz_id":this.getquestionData.quiz.quiz_id}
    }
    console.log(setUpdataData);
    this.questionservice.updateQuestinData(setUpdataData).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigate([`admin-dash/veiw-question/${this.getquestionData.quiz.quiz_id}/${this.quizTitle}`])
        
      }
    )
    
  }
}
