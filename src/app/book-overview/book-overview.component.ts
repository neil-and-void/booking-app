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

  constructor(private bookingService:BookingService) {
  }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingDate => this.bookingData = bookingDate)
  }

}
