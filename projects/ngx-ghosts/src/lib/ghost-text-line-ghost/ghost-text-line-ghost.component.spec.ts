import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTextLineGhostComponent } from './ghost-text-line-ghost.component';

describe('GhostTextLineGhostComponent', () => {
  let component: GhostTextLineGhostComponent;
  let fixture: ComponentFixture<GhostTextLineGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostTextLineGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTextLineGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
