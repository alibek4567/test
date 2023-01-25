import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent},
      {path: 'third', component: ThirdComponent},
      {path: '', redirectTo: '/first', pathMatch: 'full'},
    ]),
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
