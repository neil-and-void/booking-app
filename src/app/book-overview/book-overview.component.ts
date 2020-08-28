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
  overrall:number;

  constructor(private bookingService:BookingService) {
  }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingDate => {
      this.bookingData = bookingDate;
      // const hours = bookingDate.duration_hrs;
      // const minutes = bookingDate.duration_mins;
      const hours = 6;
      const minutes = 30;
      const rate = bookingDate.rate;



      const hourlyCost = hours*rate;
      const minutesCost = (minutes/60)*rate;
      this.overrall = hourlyCost+minutesCost


    })
  }

}
