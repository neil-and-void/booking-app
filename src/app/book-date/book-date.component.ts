import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDatepicker, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
import { BookingStep } from '../booking-step';

@Component({
  selector: 'app-book-date',
  templateUrl: './book-date.component.html',
  styleUrls: ['./book-date.component.css']
})
export class BookDateComponent implements OnInit {

  bookingData:BookingData = new BookingData();
  minDate:{year:number, month:number, day:number} = {year:0, month:0, day:0};
  selectedDateStr:string;
  datepicker:NgbDatepicker;
  disabled: boolean = true;
  modalReference: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private bookingService: BookingService
  ) {
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
    this.bookingService.currentBookingData.subscribe(bookingData => {
      console.log(bookingData);
      this.bookingData = bookingData;
    })
  }

  navigate(number: number) {
    const {state, calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
  }

  open(content) {

    this.modalService.open(content, {centered:true, windowClass:"date-modal", }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  dateSelect(e){
    const dateObj = new Date(e.year, e.month-1, e.day); 
    console.log(dateObj);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth()+1;
    const date = dateObj.getDate();    
    const day = dateObj.getDay();

    // update date string
    this.selectedDateStr = date + "/" + month + "/" + year

    let rate;
    if(day === 0 || day === 6){
      rate = 150;
    }
    else if (day > 0 && day < 6){
      rate = 100;
    }

    // update data
    this.bookingData = {
      // reset the time and duration here
      time:null,
      duration_hrs:null,
      duration_mins:null,
      year:year,
      month:month,
      date:date,
      day:day,
      rate:rate
    };

    // notify service
    this.bookingService.changeBookingData(this.bookingData);

    // enable button
    this.bookingService.changeBookingStep({
      highestStep:1,
      completed:true,
    });
  }

}
