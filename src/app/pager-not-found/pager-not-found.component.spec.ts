import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerNotFoundComponent } from './pager-not-found.component';

describe('PagerNotFoundComponent', () => {
  let component: PagerNotFoundComponent;
  let fixture: ComponentFixture<PagerNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
