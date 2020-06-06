import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrobbleCacheComponent } from './scrobble-cache.component';

describe('ScrobbleCacheComponent', () => {
  let component: ScrobbleCacheComponent;
  let fixture: ComponentFixture<ScrobbleCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrobbleCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrobbleCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
