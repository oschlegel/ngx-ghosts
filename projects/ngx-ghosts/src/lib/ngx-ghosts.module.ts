import { NgModule } from '@angular/core';
import { GhostTextLineDirective } from './ghost-text-line/ghost-text-line.directive';

@NgModule({
  declarations: [GhostTextLineDirective],
  exports: [GhostTextLineDirective]
})
export class NgxGhostsModule {}
