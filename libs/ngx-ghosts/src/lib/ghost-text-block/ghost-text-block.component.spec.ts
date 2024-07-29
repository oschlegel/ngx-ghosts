import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GhostTextBlockComponent } from './ghost-text-block.component';

describe('TextBlockComponent', () => {
  let component: GhostTextBlockComponent;
  let fixture: ComponentFixture<GhostTextBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GhostTextBlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
