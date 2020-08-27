import { Component } from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';


@Component({
  selector: 'app-book-stepper',
  templateUrl: './book-stepper.component.html',
  styleUrls: ['./book-stepper.component.css'],
  providers:[{provide:CdkStepper, useExisting:BookStepperComponent}]
})
export class BookStepperComponent extends CdkStepper {

  maxCompletedStep:number = 0;

  onClick(index: number): void {
    this.selectedIndex = index;
    console.log(index);
  }

}
