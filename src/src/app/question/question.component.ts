import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionService } from "../services/question.service";
import { AnswerService } from "../services/answer.service";
/**
 * define the component
 */

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  /**
   * title of the question
   */
  title
    /**
   *  question of the question
   */
  questionId
    /**
   * question it self
   */
  question;
    /**
   * all the answers
   */
  answers=[];
      /**
     * @ignore
     */
  constructor(private router: Router,private _route: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService ) { }

  /**
   * get the question id from the routerparams
   * get the question with this id
   * get all the answers for the a
   *question
   */
  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.questionId=params['params']['id'];
      this.question =this.questionService.getQuestionById(this.questionId);
    });
  this.answers=this.answerService.getAnswersByQuestionId(this.questionId);
  }
  /**
   * make a new answer through the service
   */
  newAnswer(){
    this.answerService.newAnswer(this.title, this.questionId);
    this.answers=this.answerService.getAnswersByQuestionId(this.questionId);
  }

}