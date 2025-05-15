import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { chienGuard } from './chien.guard';

describe('chienGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => chienGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
