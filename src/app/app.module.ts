import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, PageHeaderModule } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { JoinExamComponent } from './student/join-exam/join-exam.component';
import { JoinExamPasswordComponent } from './student/join-exam-password/join-exam-password.component';
import { QuestionAnswerComponent } from './student/question-answer/question-answer.component';
import { CreateExamComponent } from './teacher/create-exam/create-exam.component';
import { CreateExamQuestionAddComponent } from './teacher/create-exam-question-add/create-exam-question-add.component';
import { CreateExamQuestionListComponent } from './teacher/create-exam-question-list/create-exam-question-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewAnswersComponent } from './student/review-answers/review-answers.component';
import { SeeResultComponent } from './student/see-result/see-result.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomNotificationComponent } from './admin/custom-notification/custom-notification.component';
import { ExamListComponent } from './teacher/exam-list/exam-list.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PageHeaderModule,
        LanguageTranslationModule,
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatButtonModule,
        HttpClientModule,
        MatRadioModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgbModule,
        MatSelectModule,
        MatTableModule,
    ],
    declarations: [AppComponent, JoinExamComponent, JoinExamPasswordComponent,
         QuestionAnswerComponent, CreateExamComponent, CreateExamQuestionAddComponent, 
         CreateExamQuestionListComponent, ReviewAnswersComponent, SeeResultComponent, CustomNotificationComponent, ExamListComponent
          ],
    providers: [AuthGuard, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
