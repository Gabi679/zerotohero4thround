import { Injectable } from '@angular/core';
import { QuestionService } from "../services/question.service";
import { LoginService } from "../services/login.service";
/**
 * define the service
 */
@Injectable()
export class AnswerService {
  /**
   * all the month names
   */
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
/**
 * first id
 */
    id=1;
    /**
 * dummy answers
 */
    answers=[
    {
      id: 1,
      title: '1000km',
      questionId: 1,
      right: null,
      who: 'Józsi',
      day: new Date().getDay(),
      month: this.monthNames[new Date().getMonth()]
    },
    {
      id: 2,
      title: '9000km',
      questionId: 1,
      right: null,
      who: 'Pista',
      day: new Date().getDay(),
      month: this.monthNames[new Date().getMonth()]
    },
  ]
    /**
     * @ignore
     */
  constructor(private questionService: QuestionService, private loginService: LoginService) { }
  /**
   * 
   * @param title new answer's title
   * @param questionId the question's id
   * increment id then make a new answer with the help of loginservice
   */
    newAnswer(title:string, questionId:number){
      this.id++;
      const answer = 
      {
        id: this.id,
        title: title,
        questionId: questionId,
        right: null,
        who: this.loginService.getActualUser(),
        day: new Date().getDay(),
        month: this.monthNames[new Date().getMonth()]
      };
      this.answers.push(answer);
    }
/**
 * 
 * @param questionId get the answers by questionid
 * @return the answers for this questions
 */
    getAnswersByQuestionId(questionId:number){
      let answers=[];
      for(let i = 0; i< this.answers.length; i++){
        if(this.answers[i].questionId==questionId){
          answers.push(this.answers[i]);
        }
      }
      return answers;
    }
    /**
     * 
   * @param answerId set the answer correct
   * @param questionId for this question
     */
    setAnswerCorrect(answerId, questionId){
      for(let i=0; i< this.answers.length; i++){
        if(this.answers[i].questionId==questionId){
          if(this.answers[i].id==answerId){
            this.answers[i].right=true;
          }else{
            this.answers[i].right=false;
          }
        }
      }
    }


}