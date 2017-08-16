import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewerComponent } from './profile-viewer.component';

describe('ProfileViewerComponent', () => {
  let component: ProfileViewerComponent;
  let fixture: ComponentFixture<ProfileViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
