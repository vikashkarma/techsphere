import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Springboot } from './springboot';

describe('Springboot', () => {
  let component: Springboot;
  let fixture: ComponentFixture<Springboot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Springboot],
    }).compileComponents();

    fixture = TestBed.createComponent(Springboot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
