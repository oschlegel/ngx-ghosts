import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGhostsModule, NgxGhostsConfiguration } from 'ngx-ghosts';

export class StartAndEndAnimationConfig extends NgxGhostsConfiguration {
  constructor() {
    super();
    this.animationStrategy = 'EqualStartAndEnd';
  }
}

export class StartAndSpeedAnimationConfig extends NgxGhostsConfiguration {
  constructor() {
    super();
    this.animationStrategy = 'EqualStartAndSpeed';
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxGhostsModule],
  providers: [{ provide: NgxGhostsConfiguration, useClass: StartAndSpeedAnimationConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
