import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTimeComponent } from './book-time/book-time.component';
import { BookStepperComponent } from './book-stepper/book-stepper.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { BookDateComponent } from './book-date/book-date.component';
import { TimeListComponent } from './time-list/time-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BookTimeComponent,
    BookStepperComponent,
    BookOverviewComponent,
    BookDateComponent,
    TimeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    NgbDatepickerModule,
  ],
  providers: [CdkStepperModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
