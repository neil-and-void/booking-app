import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { BookingStep } from './booking-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  bookingStep: BookingStep;
  title = 'booking-app';

  constructor(private bookingService:BookingService){

  }

  ngOnInit(): void {
    this.bookingService.currentBookingStep.subscribe(bookingStep => {
      this.bookingStep = bookingStep;
    })
  }

  selectionChange(event){
    // const step = event.selectedIndex;
    // const bookingStep = this.bookingStep;
    console.log(event)
    // this.bookingService.changeBookingStep({completed:bookingStep.completed , highestStep:Math.max(bookingStep.highestStep, step)});
  }
}
