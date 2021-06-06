import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWebcamComponent } from './welcome-webcam.component';

describe('WelcomeWebcamComponent', () => {
  let component: WelcomeWebcamComponent;
  let fixture: ComponentFixture<WelcomeWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
