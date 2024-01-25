import {
  Directive,
  Input,
  ComponentFactory,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GhostComponent } from '../ghost/ghost.component';

@Directive({
  selector: '[ghostBox]'
})
export class GhostBoxDirective implements OnInit, OnChanges {
  @Input('ghostBox') active: boolean;
  @Input('ghostBoxGhostClass') ghostClass: string;
  @Input('ghostBoxHeight') height: number;
  @Input('ghostBoxWidth') width: number;

  private componentFactory: ComponentFactory<GhostComponent>;
  private componentRef: ComponentRef<GhostComponent>;

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostComponent);
  }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostComponent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.height || changes.width) {
      this.updateGhostSize();
    }
    if (changes.ghostClass) {
      this.updateGhostClass();
    }
    if (changes.active) {
      this.toggleGhost();
    }
  }

  private toggleGhost() {
    if (this.active) {
      this.reattachGhost();
      this.updateGhostSize();
      this.updateGhostClass();
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private reattachGhost() {
    this.viewContainer.clear();
    this.componentRef = this.viewContainer.createComponent(this.componentFactory);
  }

  private updateGhostClass() {
    if (this.componentRef) {
      this.componentRef.instance.ghostClass = this.ghostClass;
    }
  }

  private updateGhostSize() {
    if (!this.componentRef) {
      return;
    }
    if (typeof this.height === 'number' && typeof this.width === 'number') {
      this.componentRef.instance.fillHorizontal = false;
      this.componentRef.instance.fillVertical = false;
      this.componentRef.instance.height = this.height;
      this.componentRef.instance.width = this.width;
    } else {
      this.componentRef.instance.fillHorizontal = true;
      this.componentRef.instance.fillVertical = true;
      this.componentRef.instance.height = null;
      this.componentRef.instance.width = null;
    }
  }
}
