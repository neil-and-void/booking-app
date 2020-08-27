import { Component, OnInit } from '@angular/core';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';


@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {

  bookingInfo:BookingData = new BookingData();

  constructor(private bookingData:BookingService) {}

  ngOnInit(): void {
    this.bookingData.currentBookingData.subscribe();
  }

}
