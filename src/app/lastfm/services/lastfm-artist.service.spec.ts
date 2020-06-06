import { TestBed } from '@angular/core/testing';

import { LastfmArtistService } from './lastfm-artist.service';

describe('LastfmArtistService', () => {
  let service: LastfmArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastfmArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
