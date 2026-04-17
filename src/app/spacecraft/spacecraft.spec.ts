import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spacecraft } from './spacecraft';

describe('Spacecraft', () => {
  let component: Spacecraft;
  let fixture: ComponentFixture<Spacecraft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spacecraft],
    }).compileComponents();

    fixture = TestBed.createComponent(Spacecraft);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
