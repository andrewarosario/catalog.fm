import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopAlbumsComponent } from './user-top-albums.component';

describe('UserTopAlbumsComponent', () => {
  let component: UserTopAlbumsComponent;
  let fixture: ComponentFixture<UserTopAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
