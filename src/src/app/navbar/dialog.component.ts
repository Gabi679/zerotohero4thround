import { Component } from '@angular/core';
import { QuestionService } from "../services/question.service";
/**
 * define the component
 */
@Component({
  template: `
  <form>
  <h1 mat-dialog-title>{{'new'| translate}}</h1>
  <mat-dialog-content style="width:100%">
  <mat-grid-list cols="4" rowHeight="60px">
    <mat-grid-tile   [colspan]="4" [rowspan]="1">
      <mat-form-field>
        <input matInput placeholder="{{'short'| translate}}"  [(ngModel)]="questionTitle" name="questionTitle">
      </mat-form-field>
    </mat-grid-tile>
     <mat-grid-tile   [colspan]="4" [rowspan]="3">
      <mat-form-field>
         <textarea matInput placeholder="{{'long'| translate}}" rows='5'  [(ngModel)]="questionContent" name="questionContent"></textarea>
      </mat-form-field>
     </mat-grid-tile>
    <mat-grid-tile   [colspan]="4" [rowspan]="1">
      <mat-checkbox [(ngModel)]="isPrivate" name="private">{{'private'| translate}}</mat-checkbox>
    </mat-grid-tile>
  </mat-grid-list>
  </mat-dialog-content>
  <mat-dialog-actions fxLayout fxLayout="row"  fxLayoutGap="40%">
      <div fxFlex="30%">
      <button mat-raised-button color="primary"  type="submit" (click)="newQuestion()" style="width:100%" mat-dialog-close>{{'add'| translate}}</button>
      </div>
       <div fxFlex="30%">
      <button mat-raised-button color="primary"  type="button" style="width:100%" mat-dialog-close>{{'cancel'| translate}}</button>
      </div>
  </mat-dialog-actions>
</form>
  `
})
export class DialogComponent {
  /**
   * title of the question
   */
  questionTitle:string;
    /**
   * content of the question
   */
  questionContent:string;
    /**
   * is the question private?
   */
  isPrivate:boolean=false;
      /**
     * @ignore
     */
  constructor(private questionService: QuestionService) {
   }
   /**
    * add a new question
    */
  newQuestion(){
    console.log(this.isPrivate)
    this.questionService.newQuestion(this.questionTitle, this.questionContent, this.isPrivate);
  }
}