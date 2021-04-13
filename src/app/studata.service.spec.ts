import { TestBed } from '@angular/core/testing';

import { StudataService } from './studata.service';

describe('StudataService', () => {
  let service: StudataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
