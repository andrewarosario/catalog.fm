import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopTracksComponent } from './user-top-tracks.component';

describe('UserTopTracksComponent', () => {
  let component: UserTopTracksComponent;
  let fixture: ComponentFixture<UserTopTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
