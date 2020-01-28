import { TestBed } from '@angular/core/testing';

import { UnTestService } from './un-test.service';

describe('UnTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnTestService = TestBed.get(UnTestService);
    expect(service).toBeTruthy();
  });
});
