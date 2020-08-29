import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

import { BookingService } from '../booking.service';
import { BookingStep } from '../booking-step';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-book-stepper',
  templateUrl: './book-stepper.component.html',
  styleUrls: ['./book-stepper.component.css'],
  providers:[{provide:CdkStepper, useExisting:BookStepperComponent}]
})
export class BookStepperComponent extends CdkStepper implements OnInit{

  bookingStep: BookingStep = new BookingStep(0, false);

  constructor(private bookingService: BookingService,
    dir: Directionality,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(dir, changeDetectorRef);
  }

  ngOnInit(): void {
    this.bookingService.currentBookingStep.subscribe(bookingStep => {
      this.bookingStep = bookingStep;
    })
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

}
