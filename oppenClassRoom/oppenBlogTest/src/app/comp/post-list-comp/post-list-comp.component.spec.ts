import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListCompComponent } from './post-list-comp.component';

describe('PostListCompComponent', () => {
  let component: PostListCompComponent;
  let fixture: ComponentFixture<PostListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
