import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMain0Component } from './cmp-main0.component';

describe('CmpMain0Component', () => {
  let component: CmpMain0Component;
  let fixture: ComponentFixture<CmpMain0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpMain0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMain0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
