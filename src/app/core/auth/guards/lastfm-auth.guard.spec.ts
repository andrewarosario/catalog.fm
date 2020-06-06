import { TestBed } from '@angular/core/testing';

import { LastfmAuthGuard } from './lastfm-auth.guard';

describe('LastfmAuthGuard', () => {
  let guard: LastfmAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LastfmAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
