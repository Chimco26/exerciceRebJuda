import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDay1Component } from './cmp-day1.component';

describe('CmpDay1Component', () => {
  let component: CmpDay1Component;
  let fixture: ComponentFixture<CmpDay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
