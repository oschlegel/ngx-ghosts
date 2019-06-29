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
import { GhostTextGhostComponent } from '../ghost-text-ghost/ghost-text-ghost.component';

@Directive({
  selector: '[ghostText]'
})
export class GhostTextDirective implements OnInit {
  @Input()
  set ghostText(value: boolean) {
    this.toggleGhost(value);
  }

  @Input()
  set ghostTextLength(value: number) {
    this._length = value;
    this.updateGhostLength(value);
  }

  private componentFactory: ComponentFactory<GhostTextGhostComponent>;
  private componentRef: ComponentRef<GhostTextGhostComponent>;
  private _length = 10;

  constructor(
    // tslint:disable-next-line:no-any
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextGhostComponent);
  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextGhostComponent);
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
