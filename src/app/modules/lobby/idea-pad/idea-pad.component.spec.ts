import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPadComponent } from './idea-pad.component';

describe('IdeaPadComponent', () => {
  let component: IdeaPadComponent;
  let fixture: ComponentFixture<IdeaPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaPadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
