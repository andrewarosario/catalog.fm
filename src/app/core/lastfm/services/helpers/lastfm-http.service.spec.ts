import { TestBed } from '@angular/core/testing';

import { LastfmHttpService } from './lastfm-http.service';

describe('LastfmHttpService', () => {
  let service: LastfmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastfmHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
