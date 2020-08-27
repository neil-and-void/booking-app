import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  time:{hrs:number, mins:number};
  duration:{hrs:number,mins:number};

  constructor(private bookingData:BookingService) {}

  ngOnInit(): void {
    
  }

}
