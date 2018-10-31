import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCalculatorComponent } from './scientific-calculator.component';

describe('ScientificCalculatorComponent', () => {
  let component: ScientificCalculatorComponent;
  let fixture: ComponentFixture<ScientificCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
