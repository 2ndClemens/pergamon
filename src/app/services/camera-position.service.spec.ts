import { TestBed } from '@angular/core/testing';

import { CameraPositionService } from './camera-position.service';

describe('CameraPositionService', () => {
  let service: CameraPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
