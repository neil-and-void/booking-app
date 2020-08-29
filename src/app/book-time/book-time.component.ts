import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
import { TimeListComponent } from '../time-list/time-list.component';
import { BookingStep } from '../booking-step';


@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  bookingData:BookingData;
  bookingStep: BookingStep;
  rate:number;

  constructor(
    private bookingService: BookingService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingData => {
      this.bookingData = bookingData;
      this.rate = bookingData.rate;
    });

    this.bookingService.currentBookingStep.subscribe(bookingStep => {
      this.bookingStep = bookingStep;
    })
  }

  open() {
    this.modalService.open(TimeListComponent, {windowClass:"time-modal", scrollable:true, centered:true}).result.then((result) => {
      this.bookingData.time = result
      // send to service
      if(result !== undefined){
        this.validateCompleted();
      } else { 
        this.bookingService.changeBookingStep({highestStep:1, completed:false});  
      }

    }, (reason) => {
      console.log(reason);
    });
  }

  onHourChange(hourStr:string):void {
    let hour:number;
    if(hourStr.length > 0){
      hour = parseInt(hourStr);
    } else {
      hour = 0;
    }
    this.bookingData = {
      ...this.bookingData,
      duration_hrs:hour,
    }

    this.validateCompleted();

  }

  onMinuteChange(minuteStr:string):void {
    let minute;
    if(minuteStr.length > 0){
      minute = parseInt(minuteStr);
    } else { // empty string
      minute = 0;
    }
    this.bookingData = {
      ...this.bookingData,
      duration_mins:minute,
    }

    this.validateCompleted();

  }

  // validate constraints on time, hours and minutes
  private durationIsValid(): boolean{
    const mins = this.bookingData.duration_mins;
    const hours = this.bookingData.duration_hrs;
    const time = this.bookingData.time;

    return time !== undefined
      && hours !== undefined
      && mins !== undefined 
      && 0 <= mins 
      && mins <= 59
      && 0 <= hours 
      && hours <= 8
      && hours+(mins/60) <= 8
      && hours+(mins/60) >= 1;
  }

  private validateCompleted(): void{
    if(this.durationIsValid()){
      // enable buttons and mark as completed form 
      this.bookingStep = {highestStep:2, completed:true}
      this.bookingService.changeBookingData(this.bookingData);
    } else {
      this.bookingStep = {highestStep:1, completed:false}
    }
    this.bookingService.changeBookingStep(this.bookingStep);
  }

}
