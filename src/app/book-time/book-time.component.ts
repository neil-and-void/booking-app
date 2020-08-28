import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
import { TimeListComponent } from '../time-list/time-list.component';


@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  bookingData:BookingData;
  rate:number;

  constructor(
    private bookingService: BookingService,
    private modalService: NgbModal
  ) {
    this.rate=1;  
  }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingDate => {
      this.rate = bookingDate.rate;
    }) 
  }

  open() {
    this.modalService.open(TimeListComponent, {windowClass:"time-modal", scrollable:true, centered:true}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
