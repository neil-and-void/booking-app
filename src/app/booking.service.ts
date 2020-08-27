import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


import { BookingData } from './booking-data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingDataSource = new BehaviorSubject<BookingData>(new BookingData());
  currentBookingData = this.bookingDataSource.asObservable();

  constructor() { }

  changeDate(bookingInfo: BookingData){
    this.bookingDataSource.next(bookingInfo);
  }

}
