import { TestBed } from '@angular/core/testing';

import { ControlStateService } from './control-state.service';

describe('ControlStateService', () => {
  let service: ControlStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
