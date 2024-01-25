import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgxGhostsModule } from '../ngx-ghosts.module';
import { GhostImageWrapperComponent } from './ghost-image-wrapper.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `<ghost-image-wrapper>
    <img ghostImage [src]="'foo.jpg'" />
    <ghost ghostImageLoader [height]="256" [width]="256"></ghost>
  </ghost-image-wrapper>`
})
export class GhostImageTestComponent {}


describe('GhostImageWrapperComponent', () => {
  let component: GhostImageTestComponent;
  let fixture: ComponentFixture<GhostImageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostImageTestComponent ],
      imports: [NgxGhostsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const observe = jest.fn();
    const unobserve = jest.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }))
    fixture = TestBed.createComponent(GhostImageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    const ghostImage = fixture.debugElement.query(By.directive(GhostImageWrapperComponent));
    expect(ghostImage).toBeDefined();
  });
});
