import { TestBed } from '@angular/core/testing';

import { ScrobbleService } from './scrobble.service';

describe('ScrobbleService', () => {
  let service: ScrobbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrobbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
