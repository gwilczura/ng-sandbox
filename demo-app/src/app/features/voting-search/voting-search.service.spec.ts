import { TestBed } from '@angular/core/testing';

import { VotingSearchService } from './voting-search.service';

describe('VotingSearchService', () => {
  let service: VotingSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
