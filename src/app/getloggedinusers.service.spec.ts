import { TestBed } from '@angular/core/testing';

import { GetloggedinusersService } from './getloggedinusers.service';

describe('GetloggedinusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetloggedinusersService = TestBed.get(GetloggedinusersService);
    expect(service).toBeTruthy();
  });
});
