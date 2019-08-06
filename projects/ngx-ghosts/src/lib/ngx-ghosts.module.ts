import { NgModule } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { GhostTextGhostComponent } from './ghost-text-ghost/ghost-text-ghost.component';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';

export function getConfigProvider(config?: NgxGhostsConfiguration) {
  return !!config ? { provide: NgxGhostsConfiguration, useValue: config } : NgxGhostsConfiguration;
}

@NgModule({
  imports: [CommonModule],
  declarations: [GhostTextDirective, GhostTextGhostComponent],
  exports: [GhostTextDirective],
  entryComponents: [GhostTextGhostComponent]
})
export class NgxGhostsModule {
  public static forRoot(config?: NgxGhostsConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxGhostsModule,
      providers: [getConfigProvider(config)]
    };
  }
}
