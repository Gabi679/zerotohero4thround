import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { OwnQuestionComponent } from './ownQuestion/ownQuestion.component';
const routes: Routes =  [{
        path: '',
        redirectTo: 'questions',
        pathMatch: 'full'
      },
      {
        path: 'question/:id',
        component: QuestionComponent,
        pathMatch: 'full',
      },
      {
        path: 'questions',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'myquestions',
        component: OwnQuestionComponent,
        pathMatch: 'full',
      }
      ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
