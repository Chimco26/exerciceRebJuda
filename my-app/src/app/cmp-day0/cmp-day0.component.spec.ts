import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDay0Component } from './cmp-day0.component';

describe('CmpDay0Component', () => {
  let component: CmpDay0Component;
  let fixture: ComponentFixture<CmpDay0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDay0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDay0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
