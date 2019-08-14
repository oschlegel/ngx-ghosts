import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { GhostTextLength } from '../models';

@Component({
  selector: 'ghost-text-block',
  templateUrl: './ghost-text-block.component.html',
  styleUrls: ['./ghost-text-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostTextBlockComponent {
  @Input() lines: GhostTextLength[];
  @Input() ghostClass: string;

  fillHorizontal(length: GhostTextLength) {
    return length === 'fill';
  }

  ghostContent(length: GhostTextLength) {
    return length === 'fill'
      ? '0'
      : Array(length)
          .fill('0')
          .join('');
  }
}
