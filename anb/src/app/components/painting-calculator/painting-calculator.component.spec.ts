import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingCalculatorComponent } from './painting-calculator.component';

describe('PaintingCalculatorComponent', () => {
  let component: PaintingCalculatorComponent;
  let fixture: ComponentFixture<PaintingCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
