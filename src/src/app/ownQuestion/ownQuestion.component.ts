import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from "../services/login.service";
import { QuestionService } from "../services/question.service";
import { AnswerService } from "../services/answer.service";
/**
 * define the component
 */
@Component({
  selector: 'ownQuestion',
  templateUrl: './ownQuestion.component.html',
  styleUrls: ['./ownQuestion.component.css']
})
export class OwnQuestionComponent implements OnInit {
    /**
     * @ignore
     */
  constructor(private router: Router,private _route: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService, private loginService: LoginService ) { }
  /**
   * store your own questions
   */
  questions;
  /**
   * get your questions
   */
  ngOnInit() {
    this.questions=this.questionService.getQuestionsByUser(this.loginService.getActualUser());
    
  }
  /**
   * go back to all questions
   */
  back(){
    this.router.navigate(['/questions']);
  }
  /**
   * 
   * @param id get all answers by questionid
   */
  getAnswers(id:number){
    return this.answerService.getAnswersByQuestionId(id);
  }
  /**
   * 
   * @param Answerid set the answer correct
   * @param questionId for this question
   */
  setAnswerCorrect(Answerid:number, questionId:number){
      this.answerService.setAnswerCorrect(Answerid,questionId);
  }

}