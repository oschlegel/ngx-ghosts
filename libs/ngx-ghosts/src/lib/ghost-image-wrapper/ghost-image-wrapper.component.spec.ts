import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostImageWrapperComponent } from './ghost-image-wrapper.component';

describe('GhostImageWrapperComponent', () => {
  let component: GhostImageWrapperComponent;
  let fixture: ComponentFixture<GhostImageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostImageWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostImageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
