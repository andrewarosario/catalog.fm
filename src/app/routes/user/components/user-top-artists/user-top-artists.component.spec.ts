import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopArtistsComponent } from './user-top-artists.component';

describe('UserTopArtistsComponent', () => {
  let component: UserTopArtistsComponent;
  let fixture: ComponentFixture<UserTopArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
