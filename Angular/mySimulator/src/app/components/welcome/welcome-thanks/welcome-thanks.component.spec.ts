import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeThanksComponent } from './welcome-thanks.component';

describe('WelcomeThanksComponent', () => {
  let component: WelcomeThanksComponent;
  let fixture: ComponentFixture<WelcomeThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
