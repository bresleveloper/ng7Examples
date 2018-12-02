import { TestBed, inject } from '@angular/core/testing';

import { IncPrivateService } from './inc-private.service';

describe('IncPrivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncPrivateService]
    });
  });

  it('should be created', inject([IncPrivateService], (service: IncPrivateService) => {
    expect(service).toBeTruthy();
  }));
});
