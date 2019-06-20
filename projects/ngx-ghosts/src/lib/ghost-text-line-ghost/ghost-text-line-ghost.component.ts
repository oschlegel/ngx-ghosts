import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ghost-ghost-text-line-ghost',
  templateUrl: './ghost-text-line-ghost.component.html',
  styleUrls: ['./ghost-text-line-ghost.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhostTextLineGhostComponent {
  @Input()
  set textLength(length: number) {
    this.textContent = Array(length)
      .fill('0')
      .join('');
  }

  textContent: string;
}
