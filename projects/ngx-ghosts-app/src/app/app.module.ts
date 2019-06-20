import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGhostsModule } from 'ngx-ghosts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxGhostsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
