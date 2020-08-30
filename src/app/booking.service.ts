import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { BookingStep } from './booking-step'
import { BookingData } from './booking-data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingDataSource = new BehaviorSubject<BookingData>(new BookingData());
  currentBookingData = this.bookingDataSource.asObservable();
  private bookingStepSource = new BehaviorSubject<Array<BookingStep>>([]);
  currentBookingStep = this.bookingStepSource.asObservable(); 
  
  constructor() { 
    let bookingStep:Array<BookingStep> = [];
    for(let i = 0; i<3;i++){
      bookingStep.push(new BookingStep(0, false))
    }
    this.bookingStepSource = new BehaviorSubject<Array<BookingStep>>(bookingStep);
  }

  changeBookingData(bookingData: BookingData):void {
    this.bookingDataSource.next(bookingData);
  }

  changeBookingStep(bookingStep: Array<BookingStep>):void {
    this.bookingStepSource.next(bookingStep);
  }

}
