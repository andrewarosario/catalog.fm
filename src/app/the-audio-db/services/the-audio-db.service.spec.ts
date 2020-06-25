import { TestBed } from '@angular/core/testing';

import { TheAudioDbService } from './the-audio-db.service';

describe('TheAudioDbService', () => {
  let service: TheAudioDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheAudioDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
