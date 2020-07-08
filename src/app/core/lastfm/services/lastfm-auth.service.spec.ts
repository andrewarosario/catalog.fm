import { TestBed } from '@angular/core/testing';

import { LastfmAuthService } from './lastfm-auth.service';

describe('LastfmAuthService', () => {
  let service: LastfmAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastfmAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
