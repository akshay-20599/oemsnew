import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/Question-service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quistions',
  templateUrl: './view-quistions.component.html',
  styleUrls: ['./view-quistions.component.css']
})
export class ViewQuistionsComponent  implements OnInit{
   
  quizId:any;
  quizTitle:any;
  quizallQuestion:any;

  constructor( private qustionservice:QuestionsService ,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(
    (res:any)=>{console.log(res);
      this.quizId=res.id;
      this.quizTitle=res.title;
      this.getAllquestionData()
    }
   )
  }
  getAllquestionData(){
    this.qustionservice.getAllquestionByQuizId(this.quizId).subscribe(
      (res:any)=>{console.log(res);
        this.quizallQuestion=res;
      }
    )
  }

  deleteQuestionbyId(question_id:any){
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
        this.qustionservice.deleteQuestionbyId(question_id).subscribe(
          (res:any)=>{
            console.log(res);
            this.getAllquestionData()
          }
        )
      }
    })
  
  }

}
