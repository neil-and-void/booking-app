import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStepperComponent } from './book-stepper.component';

describe('BookStepperComponent', () => {
  let component: BookStepperComponent;
  let fixture: ComponentFixture<BookStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
