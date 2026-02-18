import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';

import { MisReservasComponent } from './mis-reservas.component';

describe('MisReservas', () => {
  let component: MisReservasComponent;
  let fixture: ComponentFixture<MisReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisReservasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
