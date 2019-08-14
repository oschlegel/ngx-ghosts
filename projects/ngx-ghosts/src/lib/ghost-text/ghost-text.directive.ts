import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  ComponentFactory,
  ComponentRef,
  Inject,
  Injector
} from '@angular/core';
import { GhostTextGhostComponent } from '../ghost-text-ghost/ghost-text-ghost.component';
import { GhostTextLength } from '../models';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[ghostText]'
})
export class GhostTextDirective implements OnInit {
  @Input()
  set ghostText(value: boolean) {
    this.ghostActive = value;
    this.toggleGhost(value);
  }

  @Input()
  set ghostTextLength(value: GhostTextLength) {
    this.ghostLength = value;
    if (this.ghostActive) {
      this.reattachGhost(value);
    }
    this.updateGhostFillHorizontal(value === 'fill');
  }

  @Input()
  set ghostTextGhostClass(value: string) {
    this.ghostClass = value;
    this.updateGhostClass(value);
  }

  private componentFactory: ComponentFactory<GhostTextGhostComponent>;
  private componentRef: ComponentRef<GhostTextGhostComponent>;
  private ghostActive = false;
  private ghostLength: GhostTextLength = 'fill';
  private ghostClass: string;
  private document: HTMLDocument;

  constructor(
    // tslint:disable-next-line:no-any
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    // tslint:disable-next-line: no-any
    @Inject(DOCUMENT) document: any
  ) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextGhostComponent);
    this.document = document;
  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextGhostComponent);
  }

  private toggleGhost(active: boolean) {
    if (active) {
      this.reattachGhost(this.ghostLength);
      this.updateGhostFillHorizontal(this.ghostLength === 'fill');
      this.updateGhostClass(this.ghostClass);
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private reattachGhost(length: GhostTextLength) {
    const text =
      length === 'fill'
        ? '0'
        : Array(length)
            .fill('0')
            .join('');
    const textNode = this.document.createTextNode(text);

    this.viewContainer.clear();
    this.componentRef = this.viewContainer.createComponent(this.componentFactory, 0, this.injector, [[textNode]]);
  }

  private updateGhostClass(ghostClass: string) {
    if (this.componentRef) {
      this.componentRef.instance.ghostClass = ghostClass;
    }
  }

  private updateGhostFillHorizontal(fillHorizontal: boolean) {
    if (this.componentRef) {
      this.componentRef.instance.fillHorizontal = fillHorizontal;
    }
  }
}
