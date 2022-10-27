import { TestBed } from '@angular/core/testing';

import { PersonabdService } from './personabd.service';

describe('PersonabdService', () => {
  let service: PersonabdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonabdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
