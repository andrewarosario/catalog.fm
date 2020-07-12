import { TestBed } from '@angular/core/testing';

import { UserProfileItensService } from './user-profile-itens.service';

describe('UserProfileItensService', () => {
  let service: UserProfileItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
