import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilsCompComponent } from './appareils-comp.component';

describe('AppareilsCompComponent', () => {
  let component: AppareilsCompComponent;
  let fixture: ComponentFixture<AppareilsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
