import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkPadComponent } from './think-pad.component';

describe('ThinkPadComponent', () => {
  let component: ThinkPadComponent;
  let fixture: ComponentFixture<ThinkPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkPadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
