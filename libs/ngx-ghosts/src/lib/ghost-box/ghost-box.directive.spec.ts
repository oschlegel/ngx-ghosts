import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GhostBoxDirective } from './ghost-box.directive';
import { By } from '@angular/platform-browser';
import { NgxGhostsModule } from '../ngx-ghosts.module';

let fixture: ComponentFixture<TestComponent>
@Component({
  standalone: true,
  template: `<p *ghostBox="true">some box to be ghosted</p>`,
  imports: [NgxGhostsModule],
})
class TestComponent {}

describe('GhostBoxDirective', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [NgxGhostsModule, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture.debugElement.queryAll(By.directive(GhostBoxDirective))).toBeDefined();
  })
});
