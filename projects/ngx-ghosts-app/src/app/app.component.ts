import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  products: Product[] = [
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    },
    {
      name: 'Firetruck',
      description: 'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24
    }
  ];

  toggleLoading() {
    this.loading = !this.loading;
  }
}
