import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinExamPasswordComponent } from '../student/join-exam-password/join-exam-password.component';
import { JoinExamComponent } from '../student/join-exam/join-exam.component';
import { QuestionAnswerComponent } from '../student/question-answer/question-answer.component';
import { CreateExamQuestionAddComponent } from '../teacher/create-exam-question-add/create-exam-question-add.component';
import { CreateExamComponent } from '../teacher/create-exam/create-exam.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            { path: 'join-exam', component: JoinExamComponent },
            { path: 'join-exam-password', component: JoinExamPasswordComponent },
            { path: 'exam-question-answer', component: QuestionAnswerComponent },
            { path: 'create-exam', component: CreateExamComponent },
            { path: 'create-exam-question', component: CreateExamQuestionAddComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
