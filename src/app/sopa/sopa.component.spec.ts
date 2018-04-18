import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaComponent } from './sopa.component';

describe('SopaComponent', () => {
  let component: SopaComponent;
  let fixture: ComponentFixture<SopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
