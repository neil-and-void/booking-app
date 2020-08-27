import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  bookingData:BookingData;
  rate:number;

  constructor(private bookingService: BookingService) {
    this.rate=1;  
  }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingDate => {
      
      // update rates
      const day = bookingDate.day;
      if(day === 0 || day === 6){
        this.rate = 150;
      }
      else if (day > 0 && day < 6){
        this.rate = 100;
      }
    }) 
  }

}
