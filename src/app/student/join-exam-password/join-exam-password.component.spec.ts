import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinExamPasswordComponent } from './join-exam-password.component';

describe('JoinExamPasswordComponent', () => {
  let component: JoinExamPasswordComponent;
  let fixture: ComponentFixture<JoinExamPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinExamPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinExamPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
