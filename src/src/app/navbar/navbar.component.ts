import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from "../services/login.service";
import { QuestionService } from "../services/question.service";
import { TranslationService } from "../services/translation.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { DashboardComponent} from '../dashboard/dashboard.component'
/**
 * define the component
 */
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  /**
   * Get the html element sidenav
   */
  @ViewChild('sidenav') sidenav: any;
  NameDialogRef: MatDialogRef<DialogComponent>;
      /**
     * @ignore
     */
  constructor(private router: Router,private loginService: LoginService, private questionService: QuestionService, public dialog: MatDialog, private trans: TranslationService, private dash: DashboardComponent) {
   }
   
    /**
     * open the dialog with the position paramteres
     */
  openAddDialog() {
    setTimeout(() => {
      this.NameDialogRef = this.dialog.open(DialogComponent,{
      height: '70%',
      width: '65%',
    });
    })
  }


  ngOnInit() {

  }
  /**
   * set the actual user to null
   * close the sidenav
   * go to the homepage
   * open the dialog
   */
  logout(){
    this.loginService.changeUser(null);
    this.sidenav.close();
    this.goToHome();
    this.dash.openLoginDialog();
  }
  /**
   * go to the homepage
   */
  goToHome(){
    this.router.navigate(['/questions']);
  }
    /**
   * set the z-index to 5, to overlap the background
   */
  zIndexUp(){
    document.getElementById('container').style.zIndex='5';
  }
      /**
   * set the z-index to 1, to not overlap the background
   */
  close(){
    if(!(this.sidenav.opened)){
      setTimeout(()=>{ 
        document.getElementById('container').style.zIndex='1'
       }, 500);
    }
  
  }
  /**
   * change the actual language
   */
  translate(){
    if(this.trans.language=='hun'){
      this.trans.language='eng';
    }else{
      this.trans.language='hun';
    }
  }

}