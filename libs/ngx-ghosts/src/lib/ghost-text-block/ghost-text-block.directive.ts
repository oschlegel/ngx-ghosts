import {
  Directive,
  Input,
  ComponentFactory,
  ComponentRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { GhostTextBlockComponent } from './ghost-text-block.component';
import { GhostTextLength } from '../models';

@Directive({
  selector: '[ghostTextBlock]'
})
export class GhostTextBlockDirective {
  @Input()
  set ghostTextBlock(value: boolean) {
    this.ghostActive = value;
    this.toggleGhost(value);
  }

  @Input()
  set ghostTextBlockGhostClass(value: string) {
    this.ghostClass = value;
    this.updateGhostClass(value);
  }

  @Input()
  set ghostTextBlockLines(value: number | GhostTextLength[]) {
    this.ghostLines = value;
    this.updateGhostLines(value);
  }

  private componentFactory: ComponentFactory<GhostTextBlockComponent>;
  private componentRef: ComponentRef<GhostTextBlockComponent>;
  private ghostActive = false;
  private ghostClass: string;
  private ghostLines: number | GhostTextLength[] = [];

  constructor(
    // tslint:disable-next-line:no-any
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(GhostTextBlockComponent);
  }

  private toggleGhost(active: boolean) {
    this.viewContainer.clear();
    if (active) {
      this.componentRef = this.viewContainer.createComponent(this.componentFactory);
      this.updateGhostClass(this.ghostClass);
      this.updateGhostLines(this.ghostLines);
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private updateGhostClass(ghostClass: string) {
    if (this.componentRef) {
      this.componentRef.instance.ghostClass = ghostClass;
    }
  }

  private updateGhostLines(ghostLines: number | GhostTextLength[]) {
    if (this.componentRef) {
      this.componentRef.instance.lines = Array.isArray(ghostLines) ? ghostLines : Array(ghostLines).fill('fill');
    }
  }
}
