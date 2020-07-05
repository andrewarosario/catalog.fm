import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfmPaginatorComponent } from './lastfm-paginator.component';

describe('LastfmPaginatorComponent', () => {
  let component: LastfmPaginatorComponent;
  let fixture: ComponentFixture<LastfmPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastfmPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastfmPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
