import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GhostBoxDirective } from './ghost-box/ghost-box.directive';
import { GhostImageLoaderDirective } from './ghost-image-wrapper/ghost-image-loader.directive';
import { GhostImageWrapperComponent } from './ghost-image-wrapper/ghost-image-wrapper.component';
import { GhostImageDirective } from './ghost-image-wrapper/ghost-image.directive';
import { GhostTextBlockComponent } from './ghost-text-block/ghost-text-block.component';
import { GhostTextBlockDirective } from './ghost-text-block/ghost-text-block.directive';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { GhostComponent } from './ghost/ghost.component';
import {
  getConfigProvider,
  NgxGhostsConfiguration,
} from './ngx-ghosts-configuration';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GhostTextDirective,
    GhostComponent,
    GhostTextBlockDirective,
    GhostTextBlockComponent,
    GhostBoxDirective,
    GhostImageWrapperComponent,
    GhostImageDirective,
    GhostImageLoaderDirective,
  ],
  exports: [
    GhostTextDirective,
    GhostComponent,
    GhostTextBlockDirective,
    GhostBoxDirective,
    GhostImageWrapperComponent,
    GhostImageDirective,
    GhostImageLoaderDirective,
  ],
})
export class NgxGhostsModule {
  public static forRoot(
    config?: NgxGhostsConfiguration
  ): ModuleWithProviders<NgxGhostsModule> {
    return {
      ngModule: NgxGhostsModule,
      providers: [getConfigProvider(config)],
    };
  }
}
