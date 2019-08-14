import {
  Component,
  ViewEncapsulation,
  Input,
  Inject,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';
import { NgxGhostsConfiguration } from '../ngx-ghosts-configuration';
import { DOCUMENT } from '@angular/common';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostComponent {
  // tslint:disable-next-line: no-any
  constructor(private config: NgxGhostsConfiguration, private elementRef: ElementRef, @Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  get glowLeft() {
    switch (this.config.animationStrategy) {
      case 'EqualStartAndEnd':
      case 'EqualStartAndSpeed':
        return '0px';
      case 'OneAnimation':
        const left = this.elementRef.nativeElement.getBoundingClientRect().left;
        return `-${left}px`;
      default:
        return;
    }
  }

  get glowWidth() {
    switch (this.config.animationStrategy) {
      case 'EqualStartAndEnd':
        return '100%';
      case 'EqualStartAndSpeed':
      case 'OneAnimation':
        return `${this.document.body.clientWidth}px`;
      default:
        return;
    }
  }

  get glowHidden() {
    return this.config.animationStrategy === 'None';
  }

  @Input() fillHorizontal = false;
  @Input() ghostClass: string;

  private document: HTMLDocument;

  @HostListener('window:resize', [])
  onWindowResize() {}
}
