import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicAlbumComponent } from './mosaic-album.component';

describe('MosaicAlbumComponent', () => {
  let component: MosaicAlbumComponent;
  let fixture: ComponentFixture<MosaicAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
