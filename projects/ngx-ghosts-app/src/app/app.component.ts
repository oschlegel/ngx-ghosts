import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active = true;
  length = 15;

  updateLength(value: string) {
    if (isNaN(parseInt(value))) {
      return;
    }
    this.length = parseInt(value);
  }
}
