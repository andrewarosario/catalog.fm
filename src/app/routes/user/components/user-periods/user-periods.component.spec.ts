import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPeriodsComponent } from './user-periods.component';

describe('UserPeriodsComponent', () => {
  let component: UserPeriodsComponent;
  let fixture: ComponentFixture<UserPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
