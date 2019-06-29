import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ghost-text-ghost',
  templateUrl: './ghost-text-ghost.component.html',
  styleUrls: ['./ghost-text-ghost.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhostTextGhostComponent {
  @Input()
  set textLength(length: number) {
    this.textContent = Array(length)
      .fill('0')
      .join('');
  }

  textContent: string;
}
