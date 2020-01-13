import { TestBed } from '@angular/core/testing';

import { ThemerService } from './themer.service';

describe('ThemerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemerService = TestBed.get(ThemerService);
    expect(service).toBeTruthy();
  });
});
