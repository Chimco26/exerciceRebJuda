import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeQuestion2Component } from './welcome-question2.component';

describe('WelcomeQuestion2Component', () => {
  let component: WelcomeQuestion2Component;
  let fixture: ComponentFixture<WelcomeQuestion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeQuestion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeQuestion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
