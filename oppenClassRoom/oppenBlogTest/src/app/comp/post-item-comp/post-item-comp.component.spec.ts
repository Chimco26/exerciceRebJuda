import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemCompComponent } from './post-item-comp.component';

describe('PostItemCompComponent', () => {
  let component: PostItemCompComponent;
  let fixture: ComponentFixture<PostItemCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
