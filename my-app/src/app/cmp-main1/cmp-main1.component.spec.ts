import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMain1Component } from './cmp-main1.component';

describe('CmpMain1Component', () => {
  let component: CmpMain1Component;
  let fixture: ComponentFixture<CmpMain1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpMain1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
