import { NgModule } from '@angular/core';
import { GhostTextDirective } from './ghost-text/ghost-text.directive';
import { GhostTextGhostComponent } from './ghost-text-ghost/ghost-text-ghost.component';
import { NgxGhostsConfiguration } from './ngx-ghosts-configuration';

@NgModule({
  providers: [NgxGhostsConfiguration],
  declarations: [GhostTextDirective, GhostTextGhostComponent],
  exports: [GhostTextDirective],
  entryComponents: [GhostTextGhostComponent]
})
export class NgxGhostsModule {}
