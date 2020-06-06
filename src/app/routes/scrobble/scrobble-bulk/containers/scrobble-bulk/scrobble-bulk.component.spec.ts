import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrobbleBulkComponent } from './scrobble-bulk.component';

describe('ScrobbleBulkComponent', () => {
  let component: ScrobbleBulkComponent;
  let fixture: ComponentFixture<ScrobbleBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrobbleBulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrobbleBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
