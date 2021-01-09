import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamQuestionListComponent } from './create-exam-question-list.component';

describe('CreateExamQuestionListComponent', () => {
  let component: CreateExamQuestionListComponent;
  let fixture: ComponentFixture<CreateExamQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamQuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
