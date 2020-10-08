import { Injectable } from '@angular/core';
import { GhostAnimationStrategy } from './models';

@Injectable()
export class NgxGhostsConfiguration {
  animationStrategy: GhostAnimationStrategy = 'OneAnimation';
}
