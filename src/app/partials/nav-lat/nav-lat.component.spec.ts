import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLatComponent } from './nav-lat.component';

describe('NavLatComponent', () => {
  let component: NavLatComponent;
  let fixture: ComponentFixture<NavLatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
