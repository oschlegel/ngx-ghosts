import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'ngx-ghosts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loading = true;
  products: Product[] = [
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
    {
      name: 'Firetruck',
      description:
        'Model made of high-quality metal with plastic parts. Scale 1:64. Length approx. 7 cm',
      prize: 24,
      image: 'assets/firetruck.png',
    },
  ];
  loaderProducts: Product[] = new Array(3).fill({});
  viewProducts: Product[] = this.loaderProducts;

  toggleLoading() {
    this.loading = !this.loading;
    this.viewProducts = this.loading ? this.loaderProducts : this.products;
  }
}
