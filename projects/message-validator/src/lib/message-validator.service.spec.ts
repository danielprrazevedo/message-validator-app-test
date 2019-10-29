import { TestBed } from '@angular/core/testing';

import { MessageValidatorService } from './message-validator.service';

describe('MessageValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageValidatorService = TestBed.get(MessageValidatorService);
    expect(service).toBeTruthy();
  });
});
