import { InjectionToken } from '@angular/core';
import { GhostAnimationStrategy } from './models';

export interface NgxGhostsConfiguration {
  animationStrategy?: GhostAnimationStrategy;
  imageLoader?: NgxGhostsImageLoaderConfiguration;
}

export interface NgxGhostsImageLoaderConfiguration {
  transitionDuration?: number;
}

export const defaultNgxGhostsConfiguration: NgxGhostsConfiguration = {
  animationStrategy: 'OneAnimation',
  imageLoader: {
    transitionDuration: 500,
  },
};

export const NGX_GHOSTS_CONFIGURATION =
  new InjectionToken<NgxGhostsConfiguration>('NGX_GHOSTS_CONFIGURATION', {
    providedIn: 'root',
    factory: () => defaultNgxGhostsConfiguration,
  });

export function getConfigProvider(config?: NgxGhostsConfiguration) {
  // eslint-disable-next-line no-extra-boolean-cast
  const configFinal = !!config
    ? Object.assign({}, defaultNgxGhostsConfiguration, config)
    : defaultNgxGhostsConfiguration;
  return { provide: NGX_GHOSTS_CONFIGURATION, useValue: configFinal };
}
