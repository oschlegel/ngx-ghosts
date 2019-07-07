import { NgModule } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { GhostTextGhostComponent } from './ghost-text-ghost/ghost-text-ghost.component';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [GhostTextDirective, GhostTextGhostComponent],
  exports: [GhostTextDirective],
  entryComponents: [GhostTextGhostComponent]
})
export class NgxGhostsModule {
  public static forRoot(config?: NgxGhostsConfiguration): ModuleWithProviders {
    const configProvider = !!config ? { provide: NgxGhostsConfiguration, useValue: config } : NgxGhostsConfiguration;
    return {
      ngModule: NgxGhostsModule,
      providers: [configProvider]
    };
  }
}
