import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkBookComponent } from './think-book.component';

describe('ThinkBookComponent', () => {
  let component: ThinkBookComponent;
  let fixture: ComponentFixture<ThinkBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
