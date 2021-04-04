import { TestBed } from '@angular/core/testing';

import { UsaService } from './usa.service';

describe('UsaService', () => {
  let service: UsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
