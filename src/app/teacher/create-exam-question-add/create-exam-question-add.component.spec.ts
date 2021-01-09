import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamQuestionAddComponent } from './create-exam-question-add.component';

describe('CreateExamQuestionAddComponent', () => {
  let component: CreateExamQuestionAddComponent;
  let fixture: ComponentFixture<CreateExamQuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamQuestionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamQuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
