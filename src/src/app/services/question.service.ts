import { Injectable } from '@angular/core';
import { LoginService } from "../services/login.service";
/**
 * define the service
 */
@Injectable()
export class QuestionService {
    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  /**
   * first id
   */
    id=1;
    /**
 * dummyQuestion
 */
    questions=[
    {
      /**
       * username
       */
      user: 'Gabi',
       /**
       * question id
       */
      id: 1,
       /**
       * question title
       */
      title: 'Milyen messze vannak a csillagok ?',
       /**
       * question content
       */
      content: 'Szeretném tudni milyen messze vannak?',
       /**
       * question date(day)
       */
      day: new Date().getDate(),
       /**
       * question date(month)
       */
      month: this.monthNames[new Date().getMonth()],
      /**
       * question is private?
       */
      isPrivate: false
    }
  ]
    /**
     * @ignore
     */
  constructor(private loginService: LoginService) { }
/**
 * 
 * @param title title of the question
 * @param content content of the question
 * @param isPrivate is this question private?
 * make a bigger id than make a new question with the help of loginservice
 */
  newQuestion(title:string, content:string, isPrivate:boolean){
    this.id++;
    const question = 
    {
      user: this.loginService.getActualUser(),
      id: this.id,
      title: title,
      content: content,
      day: new Date().getDate(),
      month: this.monthNames[new Date().getMonth()],
      isPrivate: isPrivate
    };
    this.questions.push(question);
  }
  /**
   * 
   * @param questionId questionsId
   * get the question by the questionId
   */
  getQuestionById(questionId:number){
    for(let i = 0; i< this.questions.length; i++){
      if(this.questions[i].id==questionId){
        return this.questions[i];
      }
    }
  }
    /**
   * 
   * @param user user
   * @returns the user all questions
   * get all the questions from the user
   */
  getQuestionsByUser(user:string){
    let questions=[];
    for(let i = 0; i< this.questions.length; i++){
      if(this.questions[i].user==user){
         questions.push(this.questions[i]);
      }
    }
    return questions;
  }
  /**
   * get all the questions
   * @returns all questions
   */
  getQuestions(){
    return this.questions;
  }


}