import { TestBed } from '@angular/core/testing';

import { LojasQueMaisVendemService } from './lojas-que-mais-vendem.service';

describe('LojasQueMaisVendemService', () => {
  let service: LojasQueMaisVendemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LojasQueMaisVendemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
