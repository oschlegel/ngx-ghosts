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
import { GhostTextLength } from '../models';

@Directive({
  selector: '[ghostText]'
})
export class GhostTextDirective implements OnInit {
  @Input()
  set ghostText(value: boolean) {
    this.toggleGhost(value);
  }

  @Input()
  set ghostTextLength(value: GhostTextLength) {
    this.ghostLength = value;
    this.updateGhostLength(value);
  }

  @Input()
  set ghostTextGhostClass(value: string) {
    this.ghostClass = value;
    this.updateGhostClass(value);
  }

  private componentFactory: ComponentFactory<GhostTextGhostComponent>;
  private componentRef: ComponentRef<GhostTextGhostComponent>;
  private ghostLength: GhostTextLength = 'fill';
  private ghostClass: string;

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
      this.updateGhostLength(this.ghostLength);
      this.updateGhostClass(this.ghostClass);
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private updateGhostLength(length: GhostTextLength) {
    if (this.componentRef) {
      this.componentRef.instance.textLength = length;
    }
  }

  private updateGhostClass(ghostClass: string) {
    if (this.componentRef) {
      this.componentRef.instance.ghostClass = ghostClass;
    }
  }
}
