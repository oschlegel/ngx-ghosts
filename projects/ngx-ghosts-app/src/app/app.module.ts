import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGhostsModule, NgxGhostsConfiguration } from 'ngx-ghosts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatSlideToggleModule
} from '@angular/material';

const startAndEndAnimationConfig: NgxGhostsConfiguration = {
  animationStrategy: 'EqualStartAndEnd'
};

const startAndSpeedAnimationConfig: NgxGhostsConfiguration = {
  animationStrategy: 'EqualStartAndSpeed'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGhostsModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
