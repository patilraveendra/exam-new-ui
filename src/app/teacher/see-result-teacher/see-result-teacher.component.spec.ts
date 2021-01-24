import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeResultTeacherComponent } from './see-result-teacher.component';

describe('SeeResultTeacherComponent', () => {
  let component: SeeResultTeacherComponent;
  let fixture: ComponentFixture<SeeResultTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeResultTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeResultTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
