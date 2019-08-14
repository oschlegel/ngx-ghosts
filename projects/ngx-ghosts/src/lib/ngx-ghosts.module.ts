import { NgModule } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { GhostComponent } from './ghost/ghost.component';

export function getConfigProvider(config?: NgxGhostsConfiguration) {
  return !!config ? { provide: NgxGhostsConfiguration, useValue: config } : NgxGhostsConfiguration;
}

@NgModule({
  imports: [CommonModule],
  declarations: [GhostTextDirective, GhostComponent],
  exports: [GhostTextDirective, GhostComponent],
  entryComponents: [GhostComponent]
})
export class NgxGhostsModule {
  public static forRoot(config?: NgxGhostsConfiguration): ModuleWithProviders {
    return {
      ngModule: NgxGhostsModule,
      providers: [getConfigProvider(config)]
    };
  }
}
