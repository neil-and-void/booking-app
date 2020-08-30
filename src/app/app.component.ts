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
  currentStep: number;
  title = 'booking-app';

  constructor(private bookingService:BookingService){

  }

  ngOnInit(): void {
    this.bookingService.currentBookingStep.subscribe(bookingStep => {
      this.bookingStep = bookingStep;
    })
  }

  selectionChange(event){
    // update current step we are viewing
    this.bookingService.changeBookingStep({
      ...this.bookingStep,
      currentStep:event.selectedIndex
      });
  }
}
