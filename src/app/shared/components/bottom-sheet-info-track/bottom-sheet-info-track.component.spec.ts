import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetInfoTrackComponent } from './bottom-sheet-info-track.component';

describe('BottomSheetInfoTrackComponent', () => {
  let component: BottomSheetInfoTrackComponent;
  let fixture: ComponentFixture<BottomSheetInfoTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetInfoTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetInfoTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
