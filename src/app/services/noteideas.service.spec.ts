import { TestBed } from '@angular/core/testing';

import { NoteideasService } from './noteideas.service';

describe('NoteideasService', () => {
  let service: NoteideasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteideasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
