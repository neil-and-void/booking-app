import { Component, OnInit } from '@angular/core';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';


@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {

  bookingData:BookingData = new BookingData();
  overrall:string;

  constructor(private bookingService:BookingService) {
  }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingData => {
      this.bookingData = bookingData;

      const hours = bookingData.duration_hrs;
      const minutes = bookingData.duration_mins;
      const rate = bookingData.rate;

      const total = this.caculateTotal(hours, minutes, rate);

      this.overrall = total.toFixed(2); // formatting for pricing
    })
  }

  private caculateTotal(hours, minutes, rate): number {
    const hourlyCost = hours*rate;
    const minutesCost = (minutes/60)*rate;
    return hourlyCost + minutesCost;
  }

}
