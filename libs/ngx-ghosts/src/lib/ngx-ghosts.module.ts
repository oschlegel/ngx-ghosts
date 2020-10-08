import { NgModule, ModuleWithProviders } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';
import { CommonModule } from '@angular/common';
import { GhostComponent } from './ghost/ghost.component';
import { GhostTextBlockDirective } from './ghost-text-block/ghost-text-block.directive';
import { GhostTextBlockComponent } from './ghost-text-block/ghost-text-block.component';
import { GhostBoxDirective } from './ghost-box/ghost-box.directive';

export function getConfigProvider(config?: NgxGhostsConfiguration) {
  return !!config ? { provide: NgxGhostsConfiguration, useValue: config } : NgxGhostsConfiguration;
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    GhostTextDirective,
    GhostComponent,
    GhostTextBlockDirective,
    GhostTextBlockComponent,
    GhostBoxDirective
  ],
  exports: [GhostTextDirective, GhostComponent, GhostTextBlockDirective, GhostBoxDirective],
  entryComponents: [GhostComponent, GhostTextBlockComponent]
})
export class NgxGhostsModule {
  public static forRoot(config?: NgxGhostsConfiguration): ModuleWithProviders<NgxGhostsModule> {
    return {
      ngModule: NgxGhostsModule,
      providers: [getConfigProvider(config)]
    };
  }
}
