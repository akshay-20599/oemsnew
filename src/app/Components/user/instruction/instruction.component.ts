import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{

  
  constructor(private quizeservice:QuizService, private activatedRoute:ActivatedRoute, private route:Router){}

  quizId:any;
  quizes:any;

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(
    (res:any)=>{console.log(res.quiz_id);
      this.quizId=res.quiz_id;
    }
   );
   this.quizeservice.getQuizeDataById(this.quizId).subscribe(
    (res:any)=>{console.log(res);
      this.quizes=res;
    }
   ) 
  }

  startExam(){
    Swal.fire({
      title: 'Start Exam',
      text: "Are You Sure To Want To Start Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
       this.route.navigate([`startExam/${this.quizId}`])
      }
    })
  }

}
