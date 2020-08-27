import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDateComponent } from './book-date.component';

describe('BookDateComponent', () => {
  let component: BookDateComponent;
  let fixture: ComponentFixture<BookDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
