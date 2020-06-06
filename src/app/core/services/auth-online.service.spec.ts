import { TestBed } from '@angular/core/testing';

import { AuthOnlineService } from './auth-online.service';

describe('AuthOnlineService', () => {
  let service: AuthOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
