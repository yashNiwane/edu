import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentactionGuard } from './authentaction.guard';

describe('authentactionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentactionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
