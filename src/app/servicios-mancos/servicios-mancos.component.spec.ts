import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosMancosComponent } from './servicios-mancos.component';

describe('ServiciosMancosComponent', () => {
  let component: ServiciosMancosComponent;
  let fixture: ComponentFixture<ServiciosMancosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosMancosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosMancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
