import { TestBed } from '@angular/core/testing';

import { EFAGuard } from './efa.guard';

describe('EFAGuard', () => {
  let guard: EFAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EFAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
