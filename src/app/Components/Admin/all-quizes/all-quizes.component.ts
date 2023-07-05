import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuizService } from 'src/app/service/Quiz-service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-quizes',
  templateUrl: './all-quizes.component.html',
  styleUrls: ['./all-quizes.component.css']
})
export class AllQuizesComponent implements OnInit {

  getAllQuizz: any
  constructor(private quizservice:QuizService, private raoute: Router) { }

  ngOnInit(): void {
  this.getallQuizeData()
  }

  getallQuizeData() {
    this.quizservice.getallQuizzData().subscribe(
      (res: any) => {
        console.log(res);
        this.getAllQuizz = res;
      }
    )
  }

  deletQuizeById(quiz_id:any) {
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
        ); 
        this.quizservice.deleteQuizeById(quiz_id).subscribe(
          (res:any)=>{console.log(res);
            this.getallQuizeData()
          }
        )
      }
    })

    
   }

}
