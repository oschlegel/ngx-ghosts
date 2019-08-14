import { NgModule } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { GhostComponent } from './ghost/ghost.component';
import { GhostTextBlockDirective } from './ghost-text-block/ghost-text-block.directive';
import { GhostTextBlockComponent } from './ghost-text-block/ghost-text-block.component';

export function getConfigProvider(config?: NgxGhostsConfiguration) {
  return !!config ? { provide: NgxGhostsConfiguration, useValue: config } : NgxGhostsConfiguration;
}

@NgModule({
  imports: [CommonModule],
  declarations: [GhostTextDirective, GhostComponent, GhostTextBlockDirective, GhostTextBlockComponent],
  exports: [GhostTextDirective, GhostComponent, GhostTextBlockDirective],
  entryComponents: [GhostComponent, GhostTextBlockComponent]
})
export class NgxGhostsModule {
  public static forRoot(config?: NgxGhostsConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxGhostsModule,
      providers: [getConfigProvider(config)]
    };
  }
}
