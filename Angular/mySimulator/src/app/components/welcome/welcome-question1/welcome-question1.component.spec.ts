import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeQuestion1Component } from './welcome-question1.component';

describe('WelcomeQuestion1Component', () => {
  let component: WelcomeQuestion1Component;
  let fixture: ComponentFixture<WelcomeQuestion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeQuestion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeQuestion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
