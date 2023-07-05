import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

 public getallQuizzData(){
    return this.http.get(`${baseUrl}quiz/`)
  }

  public addQuizzes(data:any){
   return this.http.post(`${baseUrl}quiz/`,data)
  }

  public deleteQuizeById(quiz_id:any){
  return this.http.delete(`${baseUrl}quiz/`+ quiz_id)
  }

  public getQuizeDataById(quiz_id:any){
    return this.http.get(`${baseUrl}quiz/`+quiz_id);
  }
 
   public updateQuiz(data:any){
    return this.http.put(`${baseUrl}quiz/`,data)
   }

   public getactiveQuiz(){
    return this.http.get(`${baseUrl}quiz/active`);
  }
public getActiveQuizbyCategoryId(category_id:any){
  return this.http.get(`${baseUrl}quiz/category/active/`+category_id);
}
}
