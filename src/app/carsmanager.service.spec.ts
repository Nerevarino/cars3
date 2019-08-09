import { TestBed } from '@angular/core/testing';

import { CarsmanagerService } from './carsmanager.service';

describe('CarsmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsmanagerService = TestBed.get(CarsmanagerService);
    expect(service).toBeTruthy();
  });
});
