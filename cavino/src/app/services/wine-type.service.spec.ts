import { TestBed } from '@angular/core/testing';

import { WineTypeService } from './wine-type.service';

describe('WineTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WineTypeService = TestBed.get(WineTypeService);
    expect(service).toBeTruthy();
  });
});
