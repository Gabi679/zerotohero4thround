import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { QuestionComponent } from './question/question.component';
import { OwnQuestionComponent } from './ownQuestion/ownQuestion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnswerService } from "./services/answer.service";
import { QuestionService } from "./services/question.service";
import { LoginService } from "./services/login.service";
import { TranslationService } from "./services/translation.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule, MatSelectModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './navbar/dialog.component';
import {MatCheckboxModule} from '@angular/material';
import { TranslatePipe } from './pipes/translate.pipe';


@NgModule({
  imports:      [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,    
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatListModule ,
    MatDialogModule,],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, QuestionComponent,NavbarComponent, OwnQuestionComponent, DialogComponent,TranslatePipe ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService, AnswerService,QuestionService,TranslationService, LoginComponent,DashboardComponent ],
  entryComponents: [DialogComponent, LoginComponent]
})
export class AppModule { }
