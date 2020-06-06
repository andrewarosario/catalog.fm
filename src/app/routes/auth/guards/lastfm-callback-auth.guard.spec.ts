import { TestBed } from '@angular/core/testing';

import { LastfmCallbackAuthGuard } from './lastfm-callback-auth.guard';

describe('LastfmCallbackAuthGuard', () => {
  let guard: LastfmCallbackAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LastfmCallbackAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
