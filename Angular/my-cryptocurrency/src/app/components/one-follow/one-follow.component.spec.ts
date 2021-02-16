import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFollowComponent } from './one-follow.component';

describe('OneFollowComponent', () => {
  let component: OneFollowComponent;
  let fixture: ComponentFixture<OneFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
