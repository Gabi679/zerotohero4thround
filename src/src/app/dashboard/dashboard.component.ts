import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from "../services/login.service";
import { QuestionService } from "../services/question.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component'
/**
 * define the component
 */
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * Save the actual user
   */
  actualUser:string;
    /**
   * List's all the questions
   */
  questionList;
  /**
   * DialogRef
   */
  NameDialogRef: MatDialogRef<LoginComponent>;
  /**
   * 
   * @param router for routing
   * @param loginService inject service loginService
   * @param questionService inject service questionService
   * @param dialog inject login dialog
   */
      /**
     * @ignore
     */
  constructor(private router: Router,private loginService: LoginService,private questionService: QuestionService, private dialog:MatDialog) { }

/**
 * get the actual use from the loginservice
 * if the there isn't logged user, open the login dialog.
 * get all the questions from the questionservice
 */
  ngOnInit() {
    this.actualUser = this.loginService.getActualUser();
    if(!this.actualUser){
      setTimeout(()=>{
        this.openLoginDialog();
      });
    }
    this.questionList =   this.questionService.getQuestions();

  }
  

/**
 * Open's the login dialog 
 */
  openLoginDialog() {
    this.NameDialogRef = this.dialog.open(LoginComponent,{
      height: '85%',
      width: '85%',
      disableClose: true,
    });
  }
  /**
   * 
   * @param id navigate to the question which has this id
   *
   */
  goToQuestion(id: number){
    this.router.navigate(['/question', id]);
  }
  /**
   * navigate to myQuestions component
   */
  goToMyQuestions(){
      this.router.navigate(['/myquestions']);
  }

}