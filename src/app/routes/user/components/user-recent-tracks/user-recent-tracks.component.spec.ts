import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentTracksComponent } from './user-recent-tracks.component';

describe('UserRecentTracksComponent', () => {
  let component: UserRecentTracksComponent;
  let fixture: ComponentFixture<UserRecentTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
