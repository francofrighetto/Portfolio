import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIdeaCarouselComponent } from './project-idea-carousel.component';

describe('ProjectIdeaCarouselComponent', () => {
  let component: ProjectIdeaCarouselComponent;
  let fixture: ComponentFixture<ProjectIdeaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIdeaCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIdeaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
