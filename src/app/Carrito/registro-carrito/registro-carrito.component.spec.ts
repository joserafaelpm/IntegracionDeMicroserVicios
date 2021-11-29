import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCarritoComponent } from './registro-carrito.component';

describe('RegistroCarritoComponent', () => {
  let component: RegistroCarritoComponent;
  let fixture: ComponentFixture<RegistroCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
