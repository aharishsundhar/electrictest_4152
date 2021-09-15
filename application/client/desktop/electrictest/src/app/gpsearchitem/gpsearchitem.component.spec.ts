import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsearchitemComponent } from './gpsearchitem.component';

describe('GpsearchitemComponent', () => {
  let component: GpsearchitemComponent;
  let fixture: ComponentFixture<GpsearchitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsearchitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsearchitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});