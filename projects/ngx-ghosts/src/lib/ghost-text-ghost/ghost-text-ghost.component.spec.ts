import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTextGhostComponent } from './ghost-text-ghost.component';

describe('GhostTextLineGhostComponent', () => {
  let component: GhostTextGhostComponent;
  let fixture: ComponentFixture<GhostTextGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GhostTextGhostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTextGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
