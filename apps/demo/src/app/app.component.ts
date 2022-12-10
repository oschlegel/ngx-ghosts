import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GhostImageState, NgxGhostsModule } from 'ngx-ghosts';
import { Product } from './product';

@Component({
  selector: 'ngx-ghosts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NgxGhostsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ],
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

  onGhostImageStateChange(state: GhostImageState) {
    console.log('onGhostImageStateChange', state);
  }
}
