import {TestBed} from '@angular/core/testing';

import {NewBottleService} from './new-bottle.service';

describe('NewBottleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewBottleService = TestBed.get(NewBottleService);
    expect(service).toBeTruthy();
  });
});
