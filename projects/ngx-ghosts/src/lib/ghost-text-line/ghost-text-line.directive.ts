import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  ComponentFactory,
  ComponentRef
} from '@angular/core';
import { GhostTextLineGhostComponent } from '../ghost-text-line-ghost/ghost-text-line-ghost.component';

@Directive({
  selector: '[ghostTextLine]'
})
export class GhostTextLineDirective implements OnInit {
  @Input()
  set ghostTextLine(value: boolean) {
    this.toggleGhost(value);
  }

  @Input()
  set ghostTextLineLength(value: number) {
    this._length = value;
    this.updateGhostLength(value);
  }

  private componentFactory: ComponentFactory<GhostTextLineGhostComponent>;
  private componentRef: ComponentRef<GhostTextLineGhostComponent>;
  private _length = 10;

  constructor(
    // tslint:disable-next-line:no-any
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextLineGhostComponent);
  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextLineGhostComponent);
  }

  private toggleGhost(active: boolean) {
    this.viewContainer.clear();
    if (active) {
      this.componentRef = this.viewContainer.createComponent(this.componentFactory);
      this.updateGhostLength(this._length);
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private updateGhostLength(length: number) {
    if (this.componentRef) {
      this.componentRef.instance.textLength = length;
    }
  }
}
