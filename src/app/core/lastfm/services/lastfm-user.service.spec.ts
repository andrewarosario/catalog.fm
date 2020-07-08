import { TestBed } from '@angular/core/testing';

import { LastfmUserService } from './lastfm-user.service';

describe('LastfmUserService', () => {
  let service: LastfmUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastfmUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
