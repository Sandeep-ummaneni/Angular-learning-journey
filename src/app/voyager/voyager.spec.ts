import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voyager } from './voyager';

describe('Voyager', () => {
  let component: Voyager;
  let fixture: ComponentFixture<Voyager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voyager],
    }).compileComponents();

    fixture = TestBed.createComponent(Voyager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
