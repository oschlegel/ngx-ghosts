import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGhostsModule, NgxGhostsConfiguration } from 'ngx-ghosts';

const startAndEndAnimationConfig: NgxGhostsConfiguration = {
  animationStrategy: 'EqualStartAndEnd'
};

const startAndSpeedAnimationConfig: NgxGhostsConfiguration = {
  animationStrategy: 'EqualStartAndSpeed'
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxGhostsModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
