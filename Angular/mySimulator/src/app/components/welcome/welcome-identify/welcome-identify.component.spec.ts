import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeIdentifyComponent } from './welcome-identify.component';

describe('WelcomeIdentifyComponent', () => {
  let component: WelcomeIdentifyComponent;
  let fixture: ComponentFixture<WelcomeIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeIdentifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
