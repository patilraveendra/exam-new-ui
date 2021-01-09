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
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, PageHeaderModule } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { JoinExamComponent } from './student/join-exam/join-exam.component';
import { JoinExamPasswordComponent } from './student/join-exam-password/join-exam-password.component';
import { QuestionAnswerComponent } from './student/question-answer/question-answer.component';

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
        MatButtonModule,
        HttpClientModule,
        MatRadioModule,
        FormsModule,
    ],
    declarations: [AppComponent, JoinExamComponent, JoinExamPasswordComponent, QuestionAnswerComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
