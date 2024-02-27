import { TestBed } from '@angular/core/testing';

import { CustoProServiceService } from './custo-pro-service.service';

describe('CustoProServiceService', () => {
  let service: CustoProServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoProServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
