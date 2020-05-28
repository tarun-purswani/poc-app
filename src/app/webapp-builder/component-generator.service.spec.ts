import { TestBed, inject } from '@angular/core/testing';

import { ComponentGeneratorService } from './component-generator.service';

describe('ComponentGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentGeneratorService]
    });
  });

  it('should be created', inject([ComponentGeneratorService], (service: ComponentGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
