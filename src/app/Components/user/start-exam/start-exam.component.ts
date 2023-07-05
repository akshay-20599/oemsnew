import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/Question-service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit{
  quizId:any;
  question:any; 

marksGot:any;
correctAnswers:any;
attempted:any;

isSubmit:boolean=false;

  timer:any;
  constructor(private questionservice:QuestionsService,private activeteRoute:ActivatedRoute){}

 ngOnInit(): void {
this.activeteRoute.params.subscribe(
  (res:any)=>{console.log(res.quiz_id); //quiz_id form service ts we pass thier this parameter so 
    this.quizId=res.quiz_id;
  }
);

this.questionservice.getQuestionByquizId(this.quizId).subscribe(
  (res:any)=>{console.log(res);
    this.question=res;
    this.timer=this.question.length*0.30*100; 
    this.StartTimer()
  }
)
  }

  getFormateTime(){
    let mm=Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm}:${ss}`
  }

  StartTimer(){
    let t=window.setInterval(
      ()=>{
        if(this.timer<=0){
        clearInterval(t);
        }
        else{
          this.timer--
        }
      },1000
    )
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To End Exam",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'submit exam'
    }).then((result) => {
      if (result.isConfirmed) {
          this.directSubmit();
      }
    })
  }

  directSubmit(){
    this.questionservice.directSubmit(this.question).subscribe(
      (res:any)=>{console.log(res);
        this.isSubmit=true;
        this.correctAnswers=res.correctAnswers;
        this.attempted=res.attempted;
        this.marksGot=res.marksGot;
      }
    )
  }

  printResult(){
    window.print()
  }

}
