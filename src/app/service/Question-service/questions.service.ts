import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getAllquestionByQuizId(quize_id: any) {
    return this.http.get(`${baseUrl}question/quiz/all/` + quize_id)
  }

  public addQuestions(data: any) {
    return this.http.post(`${baseUrl}question/`, data)
  }

  public getQuestionbyId(question_id: any) {
    return this.http.get(`${baseUrl}question/` + question_id);
  }

  public updateQuestinData(data: any) {
    return this.http.put(`${baseUrl}question/`, data)
  }

  public deleteQuestionbyId(question_id: any) {
    return this.http.delete(`${baseUrl}question/` + question_id);
  }
  public getQuestionByquizId(quize_id: any) {
    return this.http.get(`${baseUrl}question/quiz/` + quize_id);
  }

  public directSubmit(question:any) {
    return this.http.post(`${baseUrl}question/direct-quiz/`, question)
  }
} 
