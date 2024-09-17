import { TestBed } from '@angular/core/testing';

import { ViajesLugaresService } from './viajes-lugares.service';

describe('ViajesLugaresService', () => {
  let service: ViajesLugaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesLugaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
