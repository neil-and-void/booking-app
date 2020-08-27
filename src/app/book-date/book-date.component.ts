import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';

@Component({
  selector: 'app-book-date',
  templateUrl: './book-date.component.html',
  styleUrls: ['./book-date.component.css']
})
export class BookDateComponent implements OnInit {

  bookingData:BookingData = new BookingData();
  minDate:{year:number, month:number, day:number} = {year:0, month:0, day:0};

  constructor(private modalService: NgbModal) {
    const today = new Date();
    const tmr = new Date(today);
    tmr.setDate(tmr.getDate() + 1);
    this.minDate = {
      year:tmr.getFullYear(),
      month:tmr.getMonth()+1,
      day:tmr.getDate(),
    }
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  dateSelect(e){
    this.bookingData = {...this.bookingData, ...e};
    console.log(this.bookingData);
  }

}
