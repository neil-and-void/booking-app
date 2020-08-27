import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTimeComponent } from './book-time.component';

describe('BookTimeComponent', () => {
  let component: BookTimeComponent;
  let fixture: ComponentFixture<BookTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
