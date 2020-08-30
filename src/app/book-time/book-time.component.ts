import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookingService } from '../booking.service';
import { BookingData } from '../booking-data';
import { TimeListComponent } from '../time-list/time-list.component';
import { BookingStep } from '../booking-step';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  bookingData:BookingData;
  bookingStep: BookingStep;
  rate:number;
  hoursErr:boolean = false;
  durationErr:boolean = false;
  minsErr:boolean = false;
  timeErr:boolean = false;


  constructor(
    private bookingService: BookingService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.bookingService.currentBookingData.subscribe(bookingData => {
      this.bookingData = bookingData;
      if(bookingData.day === 0 || bookingData.day === 6){
        this.bookingData.rate = 150;
      } else {
        this.bookingData.rate = 100; 
      }
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
        let bookingStep = {...this.bookingStep};
        bookingStep.completedSteps[1] = false;
        this.bookingService.changeBookingStep(bookingStep);  
      }

    }, (reason) => {
      console.log(reason);
    });
  }

  onHourChange(hourStr:string):void {
    const hour = parseInt(hourStr);
    this.bookingData = {
      ...this.bookingData,
      duration_hrs:hour,
    }

    this.validateCompleted();
  }

  onMinuteChange(minuteStr:string):void {
    const minute = parseInt(minuteStr);
    this.bookingData = {
      ...this.bookingData,
      duration_mins:minute,
    }

    this.validateCompleted();
  }

  // validate constraints on time, hours and minutes
  private inputsAreValid(): boolean{
    let mins:number = this.bookingData.duration_mins;
    let hours:number = this.bookingData.duration_hrs;
    const time:string = this.bookingData.time;

    this.timeErr = true;
    if(typeof time === 'string' && time.length > 0){
      this.timeErr = false;
    }

    // check hours are valid
    this.hoursErr = true;
    if(typeof hours === 'number' && 1 <= hours && hours <= 8){
      this.hoursErr = false;
    }

    // check mins are valid 
    this.minsErr = true;
    if(typeof mins === 'number' && 0 <= mins && mins <= 59){
      this.minsErr = false;
    }

    this.durationErr = true;
    if(isNaN(mins)){
      mins = 0;
    }
    if(typeof hours === 'number' && typeof mins === 'number' && 1 <=hours+((mins&60)/60) && hours+((mins%60)/60) <= 8 ){
      this.durationErr = false;
    }

    return !this.timeErr && !this.durationErr && !this.hoursErr && !this.minsErr;
  }

  private validateCompleted(): void{
    let newBookingStep = new BookingStep(0,1, [true,false, false]);
    if(this.inputsAreValid()){
      newBookingStep.highestCompletedStep = 1;
      newBookingStep.completedSteps = [true, true, false];

      this.bookingService.changeBookingData(this.bookingData);
    }
    this.bookingService.changeBookingStep(newBookingStep);
  }

}
