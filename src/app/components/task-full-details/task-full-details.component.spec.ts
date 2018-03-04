import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFullDetailsComponent } from './task-full-details.component';

describe('TaskFullDetailsComponent', () => {
  let component: TaskFullDetailsComponent;
  let fixture: ComponentFixture<TaskFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
