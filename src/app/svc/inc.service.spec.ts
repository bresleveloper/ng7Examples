import { TestBed, inject } from '@angular/core/testing';

import { IncService } from './inc.service';

describe('IncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncService]
    });
  });

  it('should be created', inject([IncService], (service: IncService) => {
    expect(service).toBeTruthy();
  }));
});
