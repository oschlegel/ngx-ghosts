import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgxGhostsModule } from '../ngx-ghosts.module';
import { GhostTextBlockDirective } from './ghost-text-block.directive';

let fixture: ComponentFixture<TestComponent>
@Component({
  standalone: true,
  template: `<p *ghostTextBlock="true">Some text block to be ghosted</p>`,
  imports: [NgxGhostsModule],
})
class TestComponent {}

describe('GhostTextBlockDirective', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [NgxGhostsModule, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture.debugElement.queryAll(By.directive(GhostTextBlockDirective))).toBeDefined();
  })
});

