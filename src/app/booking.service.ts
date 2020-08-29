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
  private bookingStepSource = new BehaviorSubject<BookingStep>({highestStep:0, completed:false});
  currentBookingStep = this.bookingStepSource.asObservable(); 
  
  constructor() { }

  changeBookingData(bookingData: BookingData):void {
    this.bookingDataSource.next(bookingData);
  }

  changeBookingStep(bookingStep: BookingStep):void {
    this.bookingStepSource.next(bookingStep);
  }

}
