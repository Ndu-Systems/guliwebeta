/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayFastComponent } from './pay-fast.component';

describe('PayFastComponent', () => {
  let component: PayFastComponent;
  let fixture: ComponentFixture<PayFastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
