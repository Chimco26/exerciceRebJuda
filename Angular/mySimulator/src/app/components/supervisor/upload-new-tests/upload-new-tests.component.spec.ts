import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewTestsComponent } from './upload-new-tests.component';

describe('UploadNewTestsComponent', () => {
  let component: UploadNewTestsComponent;
  let fixture: ComponentFixture<UploadNewTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNewTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNewTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
