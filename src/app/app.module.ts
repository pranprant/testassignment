import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './utils/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './users/registration/registration.component';
import { ThankyouComponent } from './users/thankyou/thankyou.component';
import { HeaderComponent } from './utils/header/header.component';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  entryComponents: [PopupComponent],
  declarations: [
    AppComponent,
    PopupComponent,
    RegistrationComponent,
    ThankyouComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbPaginationModule, NgbAlertModule, ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
