import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxGhostsModule } from '../ngx-ghosts.module';
import { GhostTextDirective } from './ghost-text.directive';

let fixture: ComponentFixture<TestComponent>;
@Component({
  standalone: true,
  template: `<p *ghostText="true">Some text to be ghosted</p>`,
  imports: [NgxGhostsModule],
})
class TestComponent {}

describe('GhostTextLineDirective', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [NgxGhostsModule, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(
      fixture.debugElement.queryAll(By.directive(GhostTextDirective))
    ).toBeDefined();
  });
});
