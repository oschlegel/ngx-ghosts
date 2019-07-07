import { Component, ViewEncapsulation, Input, Inject, ElementRef, HostListener } from '@angular/core';
import { GhostTextLength } from '../models';
import { NgxGhostsConfiguration } from '../ngx-ghosts-configuration';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ghost-text-ghost',
  templateUrl: './ghost-text-ghost.component.html',
  styleUrls: ['./ghost-text-ghost.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhostTextGhostComponent {
  @HostListener('window:resize', [])
  onWindowResize() {}

  @Input()
  set textLength(length: GhostTextLength) {
    if (length === 'fill') {
      this.textContent = '0';
      this.fill = true;
    } else {
      this.textContent = Array(length)
        .fill('0')
        .join('');
      this.fill = false;
    }
  }

  textContent: string;
  fill = false;
  document: HTMLDocument;

  constructor(private config: NgxGhostsConfiguration, private elementRef: ElementRef, @Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  get glowLeft() {
    switch (this.config.animationStrategy) {
      case 'EqualStartAndEnd':
      case 'EqualStartAndSpeed':
        return '0px';
      case 'OneGhost':
        const left = this.elementRef.nativeElement.getBoundingClientRect().x;
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
      case 'OneGhost':
        return `${this.document.body.clientWidth}px`;
      default:
        return;
    }
  }
}
