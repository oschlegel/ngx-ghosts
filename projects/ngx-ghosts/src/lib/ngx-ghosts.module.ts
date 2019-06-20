import { NgModule } from '@angular/core';
import { GhostTextLineDirective } from './ghost-text-line/ghost-text-line.directive';
import { GhostTextLineGhostComponent } from './ghost-text-line-ghost/ghost-text-line-ghost.component';

@NgModule({
  declarations: [GhostTextLineDirective, GhostTextLineGhostComponent],
  exports: [GhostTextLineDirective],
  entryComponents: [GhostTextLineGhostComponent]
})
export class NgxGhostsModule {}
